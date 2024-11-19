import React, { useEffect, useState } from 'react'
import UsedCarsCarousel from '../components/UsedCarsCarousel'
import UsedCarsCards from '../components/UsedCarsCards'
import { Loader2 } from 'lucide-react'
import { getUsedCar } from '../api/api'
import { getRole, getUID, isLoginValid } from '../service/auth'


const UsedCars = () => {
  const [usedcars, setUsedCars] = useState()
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
      const res = await getUsedCar()
      if (res.status === 200) {
        setUsedCars(res.data)
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
  if (!usedcars || usedcars.length === 0) {
    return (
      <>
        <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
          <TriangleAlert className='text-orange-400 h-12 w-12' />
          <p>
            No Products Available !
          </p>
        </div>
      </>
    )
  }


  return (
    <>
      <div className="flex flex-col justify-start items-start gap-8 w-screen h-full">
      {usedcars.map((usedcar, index) => (
        <UsedCarsCarousel pid={usedcar._id} auth={auth} uid={uid} />
      ))}
        </div>
      
      <div className='w-screen h-full flex justify-start items-start flex-col flex-wrap mt-14 mb-12 gap-y-20 gap-x-2'>
        {usedcars.map((usedcar, index) => (
          <UsedCarsCards img={usedcar.img} name={usedcar.name} price={usedcar.price} yearsUsed={usedcar.yearsUsed}  key={usedcar._id} description={usedcar.description} pid={usedcar._id} auth={auth} uid={uid} />
        ))
        }
      </div>
    </>
  )
}

export default UsedCars