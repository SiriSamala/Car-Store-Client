import React, { useEffect, useState } from 'react'
import AdminPageHeader from '../../components/Admin/AdminPageHeader'
import { Loader, Trash, TriangleAlert } from 'lucide-react'
import { deleteOrder, getOrders } from '../../api/api'
import { toast } from 'sonner'


const AdminOrders = () => {
  const [orders, setOrders] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const res = await getOrders()
      if (res.status === 200) {
        setOrders(res.data)
      }

    } catch (error) {
      console.error(error)
    }
    finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await deleteOrder(id)
      if (response.status === 200) {
        // console.log("Product Deleted !")

        toast.success('Order Deleted')
        fetchData()
      }
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return (
      <>
        <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
          <Loader className='text-purple-500 h-14 w-14 animate-spin' />
        </div>
      </>
    )
  }
  if (!orders || orders.length === 0) {
    return (
      <>
        <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
          <TriangleAlert className='text-orange-400 h-12 w-12' />
          <p>
            No Orders Available !
          </p>
        </div>
      </>
    )
  }

  return (
    // <div>AdminOrders</div>
    <div className='w-full flex flex-col justify-start items-start'>
      <div className='w-full flex flex-row justify-between items-center my-4 shadow-md rounded-md p-1 border'>
        <AdminPageHeader title='Orders' />
      </div>
      <table className='w-full h-full border-collapse border shadow-lg rounded-md'>
        <thead className='shadow-md font-bold text-cyan-500 text-left rounded-md'>
          <tr>
            <th className='p-6 border-collapse border'>UID</th>
            <th className='p-6 border-collapse border'>PID</th>
            <th className='p-6 border-collapse border'>Phone</th>
            <th className='p-6 border-collapse border'>Total</th>
            <th className='p-6 border-collapse border'>Actions</th>
          </tr>
        </thead>
        <tbody>

          {
            orders.map((order, index) => (
              <tr key={index}>
                <td className='p-4 border-collapse border'>{order.uid}</td>
                <td className='p-4 border-collapse border'>{order.pid}</td>
                <td className='p-4 border-collapse border'>{order.phone} </td>
                <td className='p-4 border-collapse border'>{order.total}</td>
                <td className='p-4 border-collapse border flex h-full w-full flex-row justify-start items-center gap-4'>
                  {/* <button className='h-15 w-15 border-blue-500 border-2 p-1 rounded-md text-blue-500 shadow-md
               hover:bg-blue-500 hover:text-white hover:shadow-blue-500'>
                                        <Pencil />
                                    </button> */}
                  <button className='h-15 w-15 border-red-500 border-2 p-1 rounded-md text-red-500 shadow-md
               hover:bg-red-500 hover:text-white hover:shadow-red-500'
                    onClick={() => { handleDelete(order._id) }}>
                    <Trash />
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default AdminOrders