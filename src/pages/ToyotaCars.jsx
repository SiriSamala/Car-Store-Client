import React, { useEffect, useState } from 'react'
import ToyotaCarsCards from '../components/ToyotaCarsCards'
import { Loader2, TriangleAlert } from 'lucide-react'
import { getToyotaCar } from '../api/api'
// import { getUsedCar } from '../api/api'
import { getRole, getUID, isLoginValid } from '../service/auth'


const ToyotaCars = () => {
  const [toyotacars, setToyotaCars] = useState()
  const [loading, setLoading] = useState(true)
  const [auth, setAuth] = useState(false)
  const [uid, setUID] = useState('')
  // const [query, setQuery] = useState('')
  // const [fitlerProduct, setFilterProduct] = useState([])
  const role = getRole()
  const checkAuth = () => {
      if (isLoginValid && role == "USER") {
          const userid = getUID()
          setAuth(true)
          setUID(userid)
      }
      else {
          setAuth(false)
      }
  }

  async function fetchData() {
    try {
      const res = await getToyotaCar()
      if (res.status === 200) {
        setToyotaCars(res.data)
      }

    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    checkAuth()
  }, [])

  if (loading) {
    return (
      <>
        <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
          <Loader2 className='text-black h-14 w-14 animate-spin' />
        </div>
      </>
    )
  }
  // if (!toyotacars || toyotacars.length === 0) {
  //   return (
  //     <>
  //       <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
  //         <TriangleAlert className='text-orange-400 h-12 w-12' />
  //         <p>
  //           No Toyota Cars Available !
  //         </p>
  //       </div>
  //     </>
  //   )
  // }


  return (
    <>
      
      <div className='w-screen h-full flex justify-start items-start flex-col flex-wrap mt-14 mb-12 gap-y-20 gap-x-2'>
        {toyotacars.map((toyotacar, index) => (
          <ToyotaCarsCards img={toyotacar.img} name={toyotacar.name} price={toyotacar.price}  key={toyotacar._id} description={toyotacar.description} pid={toyotacar._id} auth={auth} uid={uid} />
        ))
        }
      </div>
    </>
  )
}

export default ToyotaCars