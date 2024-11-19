import React, { useEffect, useRef, useState } from 'react'
import AdminPageHeader from '../../components/Admin/AdminPageHeader'
import { Key, Loader2, Pencil, Plus, Trash, TriangleAlert, X } from 'lucide-react'
import { addUsers, deleteUsers, editUsers, getUsers } from '../../api/api'
import { toast } from 'sonner'

const AdminUsers = () => {
  const [users, setUsers] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showAdd, setShowAdd] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const nameRef = useRef('')
  const emailRef = useRef('')
  const phoneRef = useRef(0)
  const passwordRef = useRef('')
  const descriptionRef=useRef('')
  const roleRef = useRef('')

  const fetchData = async () => {
    try {
      const res = await getUsers()
      if (res.status === 200) {
        setUsers(res.data)
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
    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      password: passwordRef.current.value,
      description:descriptionRef.current.value,
      role: roleRef.current.value
    }
    try {
      const response = await addUsers(user)
      if (response.status === 200) {
        // console.log("User Added")
        toast.success('User Added')
        setShowAdd(false)
        fetchData()
      }

    } catch (error) {
      toast.error("Error while Adding")
      console.error(error)
    }

  }

  const editHelper = (user) => {
    console.log(user)
    setCurrentUser(user)
    setShowEdit(true)
  }

  const handleEdit = async (e) => {
    e.preventDefault()
    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      role: roleRef.current.value,
      description:descriptionRef.current.value
    }
    try {
      const response = await editUsers(user, currentUser._id)
      if (response.status === 200) {
        setShowEdit(!showEdit)
        fetchData()
        toast.info("User Updated !")
      }
    } catch (error) {
      toast.error("Error while Updating")
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await deleteUsers(id)
      if (response.status === 200) {
        // console.log("User Deleted !")

        toast.success('User Deleted')
        fetchData()
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handlePassword = async (e) => {
    e.preventDefault()
    const user = {
      password: passwordRef.current.value
    }
    try {
      const response = await editUsers(user, currentUser._id)
      if (response.status === 200) {
        setShowPassword(!showPassword)
        // setShowPassword(true)
        // setShowEdit(false)
        fetchData()
        toast.info("Password Updated !")
      }
    } catch (error) {
      toast.error("Error while Updating")
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
  if (!users || users.length === 0) {
    return (
      <>
        <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
          <TriangleAlert className='text-orange-400 h-12 w-12' />
          <p>
            No User Available !
          </p>
        </div>
      </>
    )
  }

  const resetHelper = (user) => {
    setCurrentUser(user)
    setShowEdit(false)
    setShowPassword(true)
  }

  return (
    <div className='w-full h-full flex flex-col justify-start items-start'>
      <div className='w-full flex flex-row justify-between items-center my-4 shadow-md rounded-md p-1 border'>
        <AdminPageHeader title='Users' />
        <button className='w-10 h-10 font-bold flex justify-center items-center border-2 border-sky-500 rounded-md
         text-sky-500 shadow-md hover:text-white hover:bg-sky-500 hover:shadow-md
          hover:shadow-sky-400'
          onClick={() => setShowAdd(!showAdd)} >
          <Plus className='w-8 h-8' />
        </button>
      </div>
      <table className='w-full h-full border-collapse border shadow-lg rounded-md'>
        <thead className='shadow-sm font-bold text-cyan-500 text-left'>
          <tr>
            <th className='p-6 border-collapse border'>UID</th>
            <th className='p-6 border-collapse border'>Name</th>
            <th className='p-6 border-collapse border'>Email</th>
            <th className='p-6 border-collapse border'>Phone</th>
            <th className='p-6 border-collapse border'>Description</th>
            <th className='p-6 border-collapse border'>Role</th>
            <th className='p-6 border-collapse border'>Action</th>

          </tr>
        </thead>
        
        <tbody>
          {
            users.map((user, index) => (
              <tr key={index}>
                <td className='p-4 border-collapse border'>{user._id} </td>
                <td className='p-4 border-collapse border'>{user.name} </td>
                <td className='p-4 border-collapse border'>{user.email}</td>
                <td className='p-4 border-collapse border'>{user.phone}</td>
                <td className='p-4 border-collapse border'>{user.description}</td>
                <td className='p-4 border-collapse border'>{user.role}</td>
                <td className='p-4 border-collapse border flex h-full w-full flex-row justify-start items-center gap-4'>
                  <button className='h-15 w-15 border-blue-500 border-2 p-1 rounded-md text-blue-500 shadow-md
             hover:bg-blue-500 hover:text-white hover:shadow-blue-500' onClick={() => { editHelper(user) }}>
                    <Pencil />
                  </button>
                  <button className='h-15 w-15 border-orange-500 border-2 p-1 rounded-md text-orange-500 shadow-md
             hover:bg-orange-500 hover:text-white hover:shadow-orange-400' onClick={() => { resetHelper(user) }}>
                    <Key />
                  </button>
                  <button className='h-15 w-15 border-red-500 border-2 p-1 rounded-md text-red-500 shadow-md
             hover:bg-red-500 hover:text-white hover:shadow-red-500' onClick={() => { handleDelete(user._id) }}>
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
                  <h1 className='w-1/2 text-left text-2xl  font-bold text-cyan-600'>Add User</h1>
                  <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowAdd(!showAdd) }}>
                    <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                  </div>
                </div>
                <form className='h-[80%] w-[80%] flex flex-col justify-center items-center gap-6' onSubmit={handleAdd}>
                  <input ref={nameRef} type="text" name="" id="name" placeholder='Name' className='w-full h-12 shadow-sm text-md outline-none bg-[#f5f5f7] hover:outline-cyan-700 p-4 focus:shadow-lg focus:border-b-2  rounded-sm' required autoFocus />
                  <input ref={emailRef} type="text" name="" id="email" placeholder='Email' className='w-full h-12 shadow-sm text-md outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 hover:outline-cyan-700 focus:shadow-lg focus:border-b-2 rounded-sm' required />
                  <input ref={phoneRef} type="" name="" id="phone" placeholder='Phone' className='w-full h-12 text-md shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 hover:outline-cyan-700 focus:shadow-lg focus:border-b-2 rounded-sm' required />
                  <input ref={passwordRef} type="text" name="" id="password" placeholder='Password' className='w-full h-12 text-md shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 hover:outline-cyan-700 focus:shadow-lg focus:border-b-2 rounded-sm' required />
                  <input ref={descriptionRef} type="text" name="" id="" placeholder='Description' className='w-full h-12 text-md shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 hover:outline-cyan-700 focus:shadow-lg focus:border-b-2 rounded-sm' required />
                  {/* <input ref={roleRef} type="text" name="" id="role" placeholder='Role' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-green-400 rounded-sm' required /> */}
                  <div className="select">
                    <select name="format" id="format" defaultValue='ADMIN' ref={roleRef}>
                      <option value="ADMIN">Admin</option>
                      <option value="USER">User</option>
                    </select>
                  </div>
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
            <div className='h-[75%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
              <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold gap-3'>
                <div className="h-[10%] w-[80%] flex flex-row justify-center items-center">
                  <h1 className='w-1/2 text-left text-xl font-bold text-cyan-600'>Edit User</h1>
                  <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowEdit(!showEdit) }}>
                    <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                  </div>
                </div>
                <form className='h-[70%] w-[80%] flex flex-col justify-center items-center gap-8' onSubmit={handleEdit}>
                  <input ref={nameRef} type="text" name="" id="name" placeholder='Name' defaultValue={currentUser.name} className='w-full h-12 shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 rounded-sm' required autoFocus />
                  <input ref={emailRef} type="text" name="" id="email" placeholder='Email' defaultValue={currentUser.email} className='w-full h-12 shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2  rounded-sm' required />
                  <input ref={phoneRef} type="number" name="" id="phone" placeholder='Phone number' defaultValue={currentUser.phone} className='w-full h-12 shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 rounded-sm' required />
                  <input ref={roleRef} type="text" name="" id="role" placeholder='Role' defaultValue={currentUser.role} className='w-full h-12 shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 rounded-sm' required />
                  <button type="submit" className="w-full h-[3rem]  shadow-lg shadow-gray-400 hover:bg-sky-700 bg-cyan-600 text-white rounded-sm outline-none">Save</button>
                </form>
                {/* <div className="h-[10%] w-[80%] flex justify-center items-start ">
                  <p className="cursor-pointer text-blue-500 hover:text-blue-600" onClick={resetHelper} >change password </p>
                </div> */}
              </div>
            </div>
          </div>
        </>
      )}

      {showPassword && (
        <>
          <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
            <div className='h-[45%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
              <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold gap-3'>
                <div className="h-[10%] w-[80%] flex flex-row justify-center items-center">
                  <h1 className='w-1/2 text-left text-xl my-6 font-bold text-orange-500'>Reset Password</h1>
                  <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowPassword(!showPassword) }}>
                    <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                  </div>
                </div>
                <form className='h-[80%] w-[80%] flex flex-col justify-center items-center gap-8' onSubmit={handlePassword}>
                  <input ref={passwordRef} type="text" name="" id="password" placeholder='New password' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-blue-400 rounded-sm' required autoFocus />
                  <button type="submit" className="w-full h-[3rem]  shadow-lg shadow-gray-400 hover:shadow-orange-400 bg-orange-500 text-white rounded-sm outline-none">Reset</button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}

    </div>
  )
}

export default AdminUsers