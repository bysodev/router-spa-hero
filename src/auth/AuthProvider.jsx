import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer';

const init = () => {
    return JSON.parse( localStorage.getItem('user') ) || { 
        name: 'bysodev',
        email: 'thebryan0210@gmail.com',
        logged: false
    };
}

const AuthProvider = ({children}) => {
    const [user, dispatch] = useReducer(authReducer, {}, init);
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
      }, [user])

  return (    
    <AuthContext.Provider value={{user, dispatch}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider