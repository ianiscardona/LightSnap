import React, { createContext, useState } from 'react'

export const AuthContext = createContext(false)  
export const AuthProvider = ({children}) => {
    const[ isLoggedIn, setIsLoggedIn] = useState(false)
    
  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}} > {children} </AuthContext.Provider>
  )
}
