// import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewCars from './pages/NewCars'
import UsedCars from './pages/UsedCars'
import Home from './pages/Home'
import WebLayout from './layout/WebLayout'
import AdminLayout from './layout/AdminLayout'
import AdminUsedCars from './pages/Admin/AdminUsedCars'
import AdminSettings from './pages/Admin/AdminSettings'
// import AdminNewCars from './pages/Admin/AdminNewCars'
import AdminOrders from './pages/Admin/AdminOrders'
import AdminUsers from './pages/Admin/AdminUsers'
import AdminDashboard from './pages/Admin/AdminDashboard'
import NotFound from './pages/NotFound'
import BenzCars from './pages/BenzCars'
import BMWCars from './pages/BMWCars'
import VolkswagenCars from './pages/VolkswagenCars'
import ToyotaCars from './pages/ToyotaCars'
import HondaCars from './pages/HondaCars'
import AdminBenzCars from './pages/Admin/AdminBenzCars'
import AdminBMWCars from './pages/Admin/AdminBMWCars'
import AdminHondaCars from './pages/Admin/AdminHondaCars'
import AdminToyotaCars from './pages/Admin/AdminToyotaCars'
import AdminVolkswagenCars from './pages/Admin/AdminVolkswagenCars'

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route element={<WebLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/newcars' element={<NewCars />} />
              <Route path='/usedcars' element={<UsedCars />} />
              <Route path='/BenzCars' element={<BenzCars />} />
              <Route path='/BMWCars' element={<BMWCars />} />
              <Route path='/VolkswagenCars' element={<VolkswagenCars />} />
              <Route path='/ToyotaCars' element={<ToyotaCars />} />
              <Route path='/HondaCars' element={<HondaCars />} />
            </Route>


            <Route element={<AdminLayout />}>
              <Route path='/admin/usedcars' element={<AdminUsedCars />} />
              {/* <Route path='/admin/newcars' element={<AdminNewCars />} /> */}
              <Route path='/admin/settings' element={<AdminSettings />} />
              <Route path='/admin/orders' element={<AdminOrders />} />
              <Route path='/admin/users' element={<AdminUsers />} />
              <Route path='/admin/dashboard' element={<AdminDashboard />} />
              <Route path='/admin/benzcars' element={<AdminBenzCars />} />
              <Route path='/admin/bmwcars' element={<AdminBMWCars />} />
              <Route path='/admin/hondacars' element={<AdminHondaCars />} />
              <Route path='/admin/toyotacars' element={<AdminToyotaCars />} />
              <Route path='/admin/volkswagencars' element={<AdminVolkswagenCars />} />

            </Route>
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
