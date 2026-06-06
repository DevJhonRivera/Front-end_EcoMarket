import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Home from './../Pages/Home';
import Catalog from './../Pages/Catalog';
import Seller from './../Pages/Seller';
import Profile from './../Auth/Profile';




function AppRoutes() {
  return (
<BrowserRouter>
<Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/catalog' element={<Catalog/>}/>
    <Route path='/seller' element={<Seller/>}/>
    <Route path='/profile' element={<Profile/>}/>

</Routes>
</BrowserRouter>
  )
}

export default AppRoutes
