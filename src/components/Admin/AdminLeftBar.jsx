import { Car, CarFront, LayoutDashboard, Settings, ShoppingBag, Users } from 'lucide-react'
import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const AdminLeftBar = () => {
  const Navigate = useNavigate()
  const Linksdata = [
    {
      title: 'Dashboard',
      path: '/admin/dashboard'
    },
    {
      title: 'UsedCars',
      path: '/admin/usedcars'
    },
    {
      title: 'BenzCars',
      path: '/admin/benzcars'
    },
    {
      title: 'BMWCars',
      path: '/admin/bmwcars'
    },
    {
      title: 'HondaCars',
      path: '/admin/hondacars'
    },
    {
      title: 'ToyotaCars',
      path: '/admin/toyotacars'
    },
    {
      title: 'VolkswagenCars',
      path: '/admin/volkswagencars'
    },
    {
      title: 'Users',
      path: '/admin/users'
    },
    {
      title: 'Orders',
      path: '/admin/orders'
    },
    {
      title: 'Settings',
      path: '/admin/settings'
    }
  ]
  const handleLogout = () => {
    localStorage.removeItem('token')
    Navigate('/')
  }
  return (
    <div className='w-full h-screen shadow-cyan-400 shadow-md flex justify-center items-center'>
      <div className='h-full w-full flex flex-col'>
        <div className='h-[10%] w-full text-cyan-500 flex justify-center font-bold text-2xl items-center'>
          MotoMart
        </div>
        <div className='h-[75%] w-full flex flex-col gap-4 items-center '>
          {Linksdata.map((link, index) => (
            <NavLink to={link.path} key={index} className='h-[10%] w-full px-8 hover:bg-cyan-500/50 hover:text-white flex justify-start items-center rounded-sm shadow-md'>
              {link.title}
            </NavLink>
          ))
          }
          {/* <div className='h-[40%] w-full flex flex-col items-center ' >
            <Link to='/admin/dashboard'>
              <LayoutDashboard />
            </Link>
          </div>
          <div className='h-[40%] w-full flex flex-col items-center ' >
            <Link to='/admin/newcars'>
              <Car />
            </Link>
          </div>
          <div className='h-[40%] w-full flex flex-col items-center ' >
            <Link to='/admin/usedcars'>
              <CarFront />
            </Link>
          </div>
          <div className='h-[40%] w-full flex flex-col items-center ' >
            <Link to='/admin/users'>
              <Users />
            </Link>
          </div>
          <div className='h-[40%] w-full flex flex-col items-center ' >
            <Link to='/admin/orders'>
              <ShoppingBag />
            </Link>
          </div>
          <div className='h-[40%] w-full flex flex-col items-center ' >
            <Link to='/admin/settings'>
              <Settings />
            </Link>
          </div> */}
        </div>
        <div className='h-[10%]  w-full flex items-end'>
          <div className=' px-8 w-full h-2/3 text-black text-lg flex justify-center font-bold items-center cursor-pointer' onClick={handleLogout}>
            Logout
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLeftBar