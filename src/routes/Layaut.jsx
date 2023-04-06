import React, { useContext } from 'react'
import Navbar from '../components/navs/Navbar'
import {Navigate, Outlet} from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'

export const Layaut = () => {

  const {user} = useContext( AuthContext )
  return (
<>
    { (user.logged) ? 
          <div>
          <Navbar />
          <Outlet />
      </div> :
      <Navigate to='login-principol' />
    }
   
</>
  )
}
