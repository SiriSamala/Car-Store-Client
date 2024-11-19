import React, { useEffect, useState } from 'react'
import BenzCarsCards from '../components/BMWCarsCards'
import { Loader2, TriangleAlert } from 'lucide-react'
import { getBenzCar } from '../api/api'
import { getRole, getUID, isLoginValid } from '../service/auth'

const BenzCars = () => {
  const [benzcars, setBenzCars] = useState()
  const [loading, setLoading] = useState(true)
  const [auth, setAuth] = useState(false)
  const [uid, setUID] = useState('')
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
      const res = await getBenzCar()
      if (res.status === 200) {
        setBenzCars(res.data)
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
  // if (!benzcars || benzcars.length === 0) {
  //   return (
  //     <>
  //       <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
  //         <TriangleAlert className='text-orange-400 h-12 w-12' />
  //         <p>
  //           No Benz Cars Available !
  //         </p>
  //       </div>
  //     </>
  //   )
  // }


  return (
    <>
      
      <div className='w-screen h-full flex justify-start items-start flex-col flex-wrap mt-14 mb-12 gap-y-20 gap-x-2'>
        {benzcars.map((benzcar, index) => (
          <BenzCarsCards img={benzcar.img} name={benzcar.name} price={benzcar.price} key={benzcar._id} description={benzcar.description} pid={benzcar._id} auth={auth} uid={uid}/>
        ))
        }
      </div>
    </>
  )
}

export default BenzCars