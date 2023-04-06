import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate, useRoutes } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Login = (props) => {

  const {user, dispatch} = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if( user.logged && user.name ){
      navigate('/', {replace: true});
    }
  }, [user])

  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload: user
    })
    navigate('/', {replace: true});
  }
  return (
    <>
      <div className='w-screen h-screen flex flex-col justify-center items-center'>
          <input type="button" className='p-2 bg-slate-500 rounded text-white cursor-pointer hover:text-black hover:bg-transparent' value="Login" onClick={handleLogin} />
      </div>
    </>
  )
}
