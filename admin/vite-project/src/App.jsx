import React from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/navBar/navBar'
import SideBar from './components/sidebar/sidebar'
import Add from './pages/Add/Add'
import Orders from './pages/Orders/Orders'
import List from './pages/List/List'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  const url = 'http://localhost:4000'

  return (
    <div>
      <ToastContainer/>
      <NavBar/>
      <hr/>
      <div className="app-content">
        <SideBar />
        <Routes>
          <Route path='/add' element={<Add url={url}/>}/>
          <Route path='/list' element={<List url={url}/>}/>
          <Route path='/orders' element={<Orders url={url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App