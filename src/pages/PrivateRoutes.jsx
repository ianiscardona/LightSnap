import React, { useContext, useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


export const PrivateRoutes = () => {
    const {isLoggedIn} = useContext( AuthContext )

  return isLoggedIn? <Outlet/> : <Navigate to="/eventcodeerror"/>
  
}
