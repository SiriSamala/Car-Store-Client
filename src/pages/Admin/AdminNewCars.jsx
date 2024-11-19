// import React, { useEffect, useRef, useState } from 'react'
// import AdminPageHeader from '../../components/Admin/AdminPageHeader'
// import { Loader2, Pencil, Plus, Trash, TriangleAlert, X } from 'lucide-react'
// import { addNewCar, deleteNewCar, editNewCar, getNewCar } from '../../api/api'
// import { toast } from 'sonner'

// const AdminNewCars = () => {
//   const [newcars, setNewCars] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [currentNewCar, setCurrentNewCar] = useState(null)
//   const [showAdd, setShowAdd] = useState(false)
//   const [showEdit, setShowEdit] = useState(false)
//   const nameRef = useRef('')
//   const imgRef = useRef('')
//   const priceRef = useRef(0)

//   const fetchData = async () => {
//     try {
//       const res = await getNewCar()
//       if (res.status === 200) {
//         // console.log(res.data)
//         setNewCars(res.data)
//       }
//     } catch (error) {
//       console.error(error)
//     }
//     finally {
//       setLoading(false)
//     }
//   }

//   const handleAdd = async (e) => {
//     e.preventDefault()
//     const newcar = {
//       name: nameRef.current.value,
//       img: imgRef.current.value,
//       price: priceRef.current.value
//     }
//     try {
//       const response = await addNewCar(newcar)
//       if (response.status === 200) {
//         // console.log("Product Added")
//         toast.success('Product Added')
//         setShowAdd(false)
//         fetchData()
//       }

//     } catch (error) {
//       toast.error("Error while Adding")
//       console.error(error)
//     }

//   }

//   const editHelper = (newcar) => {
//     console.log(newcar)
//     setCurrentNewCar(newcar)
//     setShowEdit(true)


//   }
//   const handleEdit = async (e) => {
//     e.preventDefault()
//     const newcar = {
//       name: nameRef.current.value,
//       img: imgRef.current.value,
//       price: priceRef.current.value
//     }
//     try {
//       const response = await editNewCar(newcar, currentNewCar._id)
//       if (response.status === 200) {
//         setShowEdit(!showEdit)
//         fetchData()
//         toast.info("Product Updated !")
//       }
//     } catch (error) {
//       toast.error("Error while Updating")
//     }
//   }

//   const handleDelete = async (id) => {
//     try {
//       const response = await deleteNewCar(id)
//       if (response.status === 200) {
//         // console.log("Product Deleted !")

//         toast.success('Product Deleted')
//         fetchData()
//       }
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])

//   if (loading) {
//     return (
//       <>
//         <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
//           <Loader2 className='text-cyan-500 h-14 w-14 animate-spin' />
//         </div>
//       </>
//     )
//   }
//   if (!newcars || newcars.length === 0) {
//     return (
//       <>
//         <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
//           <TriangleAlert className='text-orange-400 h-12 w-12' />
//           <p>
//             No Products Available !
//           </p>
//         </div>
//       </>
//     )
//   }

//   return (
//     <div className='w-full flex flex-col justify-start items-start'>
//       <div className='w-full flex flex-row justify-between items-center my-4 shadow-md rounded-md p-1 border'>
//         <AdminPageHeader title='NewCars' />
//         <button className='w-10 h-10 font-bold flex justify-center items-center border-2 border-sky-500 rounded-md
//          text-sky-500 shadow-md hover:text-white hover:bg-sky-500 hover:shadow-md
//           hover:shadow-sky-400'
//           onClick={() => setShowAdd(!showAdd)} >
//           <Plus className='w-8 h-8' />
//         </button>
//       </div>
//       <table className='w-full h-full border-collapse border shadow-lg rounded-md'>
//         <thead className='shadow-md font-bold text-cyan-500 text-left rounded-md'>
//           <tr>
//             <th className='p-6'>PID</th>
//             <th className='p-6'>Image</th>
//             <th className='p-6'>Name</th>
//             <th className='p-6'>Price</th>
//             <th className='p-6'>Actions</th>
//           </tr>
//         </thead>
//         <tbody>

//           {
//             newcars.map((newcar, index) => (
//               <tr key={index}>
//                 <td className='p-4'>{newcar._id} </td>
//                 <td className='flex justify-start px-4 items-center'><img src={newcar.img} alt={newcar.name} className='h-12 w-12 object-cover rounded-full shadow-md bg-cyan-500' /></td>
//                 <td className='p-4'>{newcar.name} </td>
//                 <td className='p-4'>{newcar.price}</td>
//                 <td className='p-4 flex h-full w-full flex-row justify-start items-center gap-4'>
//                   <button className='h-15 w-15 border-blue-500 border-2 p-1 rounded-md text-blue-500 shadow-md
//                hover:bg-blue-500 hover:text-white hover:shadow-blue-500'
//                     onClick={() => { editHelper(newcar) }}>
//                     <Pencil />
//                   </button>
//                   <button className='h-15 w-15 border-red-500 border-2 p-1 rounded-md text-red-500 shadow-md
//                hover:bg-red-500 hover:text-white hover:shadow-red-500'
//                     onClick={() => { handleDelete(newcar._id) }}>
//                     <Trash />
//                   </button>
//                 </td>
//               </tr>
//             ))
//           }
//         </tbody>
//       </table>

//       {showAdd && (
//         <>
//           <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
//             <div className='h-85%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
//               <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
//                 <div className="h-[10%] w-[80%] flex flex-row justify-center items-center">
//                   <h1 className='w-1/2 text-left text-xl my-6 font-bold text-sky-500'>Add Product</h1>
//                   <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowAdd(!showAdd) }}>
//                     <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
//                   </div>
//                 </div>
//                 <form className='h-[80%] w-[80%] flex flex-col justify-center items-center gap-8' onSubmit={handleAdd}>
//                   <input ref={nameRef} type="text" name="" id="name" placeholder='Name' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-sky-400 rounded-sm' required autoFocus />
//                   <input ref={imgRef} type="text" name="" id="img" placeholder='Image URL' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-sky-400 rounded-sm' required />
//                   <input ref={priceRef} type="number" name="" id="price" placeholder='Price' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-sky-400 rounded-sm' required />
//                   <button type="submit" className="w-full h-[3rem]  shadow-lg shadow-gray-400 hover:shadow-sky-400 bg-sky-500 text-white rounded-sm outline-none">Add</button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//       {showEdit && (
//         <>
//           <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
//             <div className='h-[65%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
//               <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
//                 <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
//                   <h1 className='w-1/2 text-left text-xl my-6 font-bold text-blue-500'>Edit Product</h1>
//                   <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowEdit(!showEdit) }}>
//                     <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
//                   </div>
//                 </div>
//                 <form className='h-[70%] w-[80%] flex flex-col justify-center items-center gap-8' onSubmit={handleEdit}>
//                   <input ref={nameRef} type="text" name="" id="name" placeholder='Name' defaultValue={currentNewCar.name} className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-blue-400 rounded-sm' required autoFocus />
//                   <input ref={imgRef} type="text" name="" id="img" placeholder='Image URL' defaultValue={currentNewCar.img} className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-blue-400 rounded-sm' required />
//                   <input ref={priceRef} type="number" name="" id="price" placeholder='Price' defaultValue={currentNewCar.price} className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-blue-400 rounded-sm' required />
//                   <button type="submit" className="w-full h-[3rem]  shadow-lg shadow-gray-400 hover:shadow-blue-400 bg-blue-500 text-white rounded-sm outline-none">Save</button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   )
// }

// export default AdminNewCars