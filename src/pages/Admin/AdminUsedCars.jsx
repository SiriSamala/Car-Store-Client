import React, { useEffect, useRef, useState } from 'react'
import AdminPageHeader from '../../components/Admin/AdminPageHeader'
import { Loader2, Pencil, Plus, Trash, TriangleAlert, X } from 'lucide-react'
import { addUsedCar, deleteUsedCar, editUsedCar, getUsedCar } from '../../api/api'
import { toast } from 'sonner'

const AdminUsedCars = () => {
  const [usedcars, setUsedCars] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentUsedCar, setCurrentUsedCar] = useState(null)
  const [showAdd, setShowAdd] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const nameRef = useRef('')
  const imgRef = useRef('')
  const priceRef = useRef(0)
  const yearsUsedRef = useRef(0)
  const descriptionRef=useRef('')


  const fetchData = async () => {
    try {
      const res = await getUsedCar()
      if (res.status === 200) {
        // console.log(res.data)
        setUsedCars(res.data)
      }
    } catch (error) {
      console.error(error)
    }
    finally {
      setLoading(false)
    }
  }

  const handleAdd = async (e) => {
    e.preventDefault()
    const usedcar = {
      name: nameRef.current.value,
      img: imgRef.current.value,
      price: priceRef.current.value,
      yearsUsed: yearsUsedRef.current.value,
      description:descriptionRef.current.value
    }
    try {
      const response = await addUsedCar(usedcar)
      if (response.status === 200) {
        // console.log("Product Added")
        toast.success('UsedCar Added')
        setShowAdd(false)
        fetchData()
      }

    } catch (error) {
      toast.error("Error while Adding")
      console.error(error)
    }

  }

  const editHelper = (usedcar) => {
    console.log(usedcar)
    setCurrentUsedCar(usedcar)
    setShowEdit(true)


  }
  const handleEdit = async (e) => {
    e.preventDefault()
    const usedcar = {
      name: nameRef.current.value,
      img: imgRef.current.value,
      price: priceRef.current.value,
      yearsUsed: yearsUsedRef.current.value,
      description:descriptionRef.current.value
    }
    try {
      const response = await editUsedCar(usedcar, currentUsedCar._id)
      if (response.status === 200) {
        setShowEdit(!showEdit)
        fetchData()
        toast.info("Product Updated !")
      }
    } catch (error) {
      toast.error("Error while Updating")
      console.error(error.message)
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await deleteUsedCar(id)
      if (response.status === 200) {
        // console.log("Product Deleted !")

        toast.success('Product Deleted')
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
          <Loader2 className='text-cyan-500 h-14 w-14 animate-spin' />
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
            No UsedCars Available !
          </p>
        </div>
      </>
    )
  }

  return (
    <div className='w-full h-full flex flex-col justify-start items-start'>
      <div className='w-full flex flex-row justify-between items-center my-4 shadow-md rounded-md p-1 border'>
        <AdminPageHeader title='UsedCars' />
        <button className='w-10 h-10 font-bold flex justify-center items-center border-2 border-sky-500 rounded-md
         text-sky-500 shadow-md hover:text-white hover:bg-sky-500 hover:shadow-md
          hover:shadow-sky-400'
          onClick={() => setShowAdd(!showAdd)} >
          <Plus className='w-8 h-8' />
        </button>
      </div>
      <table className='w-full h-full border-collapse border shadow-lg rounded-md'>
        <thead className='shadow-md font-bold text-cyan-500 text-left rounded-md'>
          <tr>
            <th className='p-6 border-collapse border'>PID</th>
            <th className='p-6 border-collapse border '>Image</th>
            <th className='p-6 border-collapse border'>Name</th>
            <th className='p-6 border-collapse border'>Price</th>
            <th className='p-6 border-collapse border'>Years Used</th>
            <th className='p-6 border-collapse border'>Description</th>
            <th className='p-6 border-collapse border'>Actions</th>
          </tr>
        </thead>
        <tbody>

          {
            usedcars.map((usedcar, index) => (
              <tr key={index}>
                <td className='p-4 border-collapse border'>{usedcar._id} </td>
                <td className='flex justify-start px-4 items-center'><img src={usedcar.img} alt={usedcar.name} className='h-12 w-12 object-cover rounded-full shadow-md bg-cyan-500' /></td>
                <td className='p-4 border-collapse border'>{usedcar.name} </td>
                <td className='p-4 border-collapse border'>{usedcar.price}</td>
                <td className='p-4 border-collapse border'>{usedcar.yearsUsed}</td>
                <td className='p-4 border-collapse border'>{usedcar.description}</td>
                <td className='p-4 border-collapse border flex h-full w-full flex-row justify-start items-center gap-4'>
                  <button className='h-15 w-15 border-blue-500 border-2 p-1 rounded-md text-blue-500 shadow-md
               hover:bg-blue-500 hover:text-white hover:shadow-blue-500'
                    onClick={() => { editHelper(usedcar) }}>
                    <Pencil />
                  </button>
                  <button className='h-15 w-15 border-red-500 border-2 p-1 rounded-md text-red-500 shadow-md
               hover:bg-red-500 hover:text-white hover:shadow-red-500'
                    onClick={() => { handleDelete(usedcar._id) }}>
                    <Trash />
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

      {showAdd && (
        <>
          <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
            <div className='h-[80%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
              <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
                <div className="h-[10%] w-[80%] flex flex-row justify-center items-center">
                  <h1 className='w-1/2 text-left text-2xl font-bold text-cyan-600'>Add UsedCar</h1>
                  <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowAdd(!showAdd) }}>
                    <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                  </div>
                </div>
                <form className='h-[80%] w-[80%] flex flex-col justify-center items-center gap-6' onSubmit={handleAdd}>
                  <input ref={nameRef} type="text" name="" id="name" placeholder='Name' className='w-full h-12 shadow-sm text-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2  rounded-sm' required autoFocus />
                  <input ref={imgRef} type="text" name="" id="img" placeholder='Image URL' className='w-full h-12 shadow-sm text-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2  rounded-sm' required />
                  <input ref={priceRef} type=" " name="" id="price" placeholder='Price' className='w-full h-12 shadow-sm text-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2  rounded-sm' required />
                  <input ref={yearsUsedRef} type="number" name="" id="yearsUsed" placeholder='Years used' className='w-full h-12 shadow-sm text-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2  rounded-sm' required />
                  <input ref={descriptionRef} type="text" name="" id="" placeholder='Description about Car' className='w-full h-12 shadow-sm text-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 rounded-sm' required />
                  <button type="submit" className="w-full h-[3rem] hover:bg-sky-700 bg-cyan-600 text-white rounded-sm outline-none">Add</button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
      {showEdit && (
        <>
          <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
            <div className='h-[80%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
              <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
                <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
                  <h1 className='w-1/2 text-left text-xl font-bold text-cyan-600'>Edit UsedCar</h1>
                  <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowEdit(!showEdit) }}>
                    <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                  </div>
                </div>
                <form className='h-[70%] w-[80%] flex flex-col justify-center items-center gap-6' onSubmit={handleEdit}>
                  <input ref={nameRef} type="text" name="" id="name" placeholder='Name' defaultValue={currentUsedCar.name} className='w-full h-12 shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 rounded-sm' required autoFocus />
                  <input ref={imgRef} type="text" name="" id="img" placeholder='Image URL' defaultValue={currentUsedCar.img} className='w-full h-12 shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2  rounded-sm' required />
                  <input ref={priceRef} type="" name="" id="price" placeholder='Price' defaultValue={currentUsedCar.price} className='w-full h-12 shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 rounded-sm' required />
                  <input ref={yearsUsedRef} type="number" name="" id="yearsUsed" placeholder='Years Used' defaultValue={currentUsedCar.yearsUsed} className='w-full h-12 shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2  rounded-sm' required />
                  <input ref={descriptionRef} type="text" name="" id="" placeholder='Description' defaultValue={currentUsedCar.description} className='w-full h-12 shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2  rounded-sm' required />
                  <button type="submit" className="w-full h-[3rem]  hover:bg-sky-700 bg-cyan-600 text-white rounded-sm outline-none">Save</button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default AdminUsedCars