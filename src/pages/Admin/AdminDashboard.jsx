import React, { useEffect, useState } from 'react'
import AdminDashboardHomeCards from '../../components/Admin/AdminDashboardHomeCards'
import { Loader2 } from 'lucide-react'
import { getBenzCarsCount, getBMWCarsCount, getHondaCarsCount, getOrdersCount, getToyotaCarsCount, getUsedCarsCount, getUsersCount, getVolkswagenCarsCount } from '../../api/api'
import { toast } from 'sonner'

const AdminDashboard = (req,res) => {
  const [users, setUsers] = useState(0)
  // const [newcars, setNewCars] = useState(0)
  const [usedcars, setUsedCars] = useState(0)
  const [orders, setOrders] = useState(0)
  const [benz, setBenzCars] = useState(0)
  const [bmw, setBMWCars] = useState(0)
  const [honda, setHondaCars] = useState(0)
  const [toyota, setToyotaCars] = useState(0)
  const [volkswagen, setVolkswagenCars] = useState(0)
  const [loading, setLoading] = useState(true)
  const fetchData = async () => {
    try {
      const userresponse = await getUsersCount()
      if (userresponse.status === 200) {
        setUsers(userresponse.data.count)
      }
      // const newcarsresponse = await getNewCarsCount()
      // if (newcarsresponse.status === 200) {
      //   setNewCars(productresponse.data.count)
      // }
      const usedcarsresponse = await getUsedCarsCount()
      if (usedcarsresponse.status === 200) {
        setUsedCars(usedcarsresponse.data.count)
      }
      const benzcarsresponse = await getBenzCarsCount()
      if (benzcarsresponse.status === 200) {
        setBenzCars(benzcarsresponse.data.count)
      }
      const bmwcarsresponse = await getBMWCarsCount()
      if (bmwcarsresponse.status === 200) {
        setBMWCars(bmwcarsresponse.data.count)
      }
      const hondacarsresponse = await getHondaCarsCount()
      if (hondacarsresponse.status === 200) {
        setHondaCars(hondacarsresponse.data.count)
      }
      const toyotacarsresponse = await getToyotaCarsCount()
      if (toyotacarsresponse.status === 200) {
        setToyotaCars(toyotacarsresponse.data.count)
      }
      const volkswagencarsresponse = await getVolkswagenCarsCount()
      if (volkswagencarsresponse.status === 200) {
        setVolkswagenCars(volkswagencarsresponse.data.count)
      }
      const orderresponse = await getOrdersCount()
      if (orderresponse.status === 200) {
        setOrders(orderresponse.data.count)
      }
    } catch (error) {
      toast.error(error)
      // return res.status(500).json({ message: error.message })
       toast.error(error)
      //return res.status(500).json({ message: error.message })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  if (loading) {
    return (
      <>
        <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
          <Loader2 className='text-cyan-500 h-14 w-14 animate-spin' />
        </div>
      </>
    )
  }
  return (
    // <div>AdminDashboard</div>
    <div className='w-full min-h-[80vh] flex justify-start items-start'>
      <AdminDashboardHomeCards usedcars={usedcars} users={users} orders={orders} 
      benz={benz} bmw={bmw} honda={honda} toyota={toyota} volkswagen={volkswagen} />
    </div>
  )
}

export default AdminDashboard