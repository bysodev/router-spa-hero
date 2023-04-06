import React, { useContext, useState } from 'react'
import { Link, NavLink, Router } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

const Navbar = () => {

    const [menu, setmenu] = useState(false);

    const {user, dispatch} = useContext(AuthContext);

    const handleClickLogout = () => {
        setmenu(false)
        dispatch({type: types.logout, payload: user})
    }

    return (
        <nav className="overflow-visible" >
            <div className="sm:flex items-center justify-between p-5 shadow">
                <div className='flex justify-between'>
                    <Link className='text-left hover:text-purple-900 transition-colors cursor-pointer' to='/' >My Hero</Link>
                  
                    <button className="block sm:hidden" type="button" onClick={() => setmenu(!menu)}>
                        <span className="material-symbols-outlined">
                            { menu ? 'close' : 'menu' }
                        </span>
                    </button>
                </div>

                {/* hidden sm:block */}
                <div className={`absolute sm:static sm:top-auto w-full sm:w-auto ${menu ? '' : 'top-[-490px]'} `} id=""> 
                    <ul className="flex flex-col sm:flex-row items-center text-center gap-5  ">
                        <NavLink
                            className={ ({ isActive }) => `w-full sm:w-auto rounded p-2 hover:bg-green-400  sm:hover:bg-transparent ${ isActive ? '	text-purple-900' : '' }`}
                            to='/heroe'
                            onClick={() => setmenu(false)}>
                            Heroes
                        </NavLink>
                        <NavLink
                            className={ ({ isActive }) => `w-full sm:w-auto rounded p-2 hover:bg-green-400  sm:hover:bg-transparent ${ isActive ? '	text-purple-900' : '' }`}
                            to='/marvel'
                            onClick={() => setmenu(false)}>
                            Marvel
                        </NavLink>
                        <NavLink
                            className={ ({ isActive }) => `w-full sm:w-auto rounded p-2 hover:bg-green-400 sm:hover:bg-transparent  ${ isActive ? '	text-purple-900' : '' }`}
                            to='/dc'
                            onClick={() => setmenu(false)}>
                            DC
                        </NavLink>
                        {
                            user.logged ?  
                                <NavLink
                                    className={ ({ isActive }) => `w-full sm:w-auto rounded p-2 hover:bg-green-400 sm:hover:bg-transparent  ${ isActive ? '	text-purple-900' : '' }`}
                                    to='/login-principol'
                                    onClick={ handleClickLogout }>
                                    Logout
                                </NavLink> :  
                                <NavLink
                                    className={ ({ isActive }) => `w-full sm:w-auto rounded p-2 hover:bg-green-400 sm:hover:bg-transparent  ${ isActive ? '	text-purple-900' : '' }`}
                                    to='/login-principol'
                                    onClick={() => setmenu(false)}>
                                    Login
                                </NavLink>
                        }
                       
                        {
                            user.logged &&
                            <NavLink
                                className={ ({ isActive }) => `w-full sm:w-auto rounded p-2 hover:bg-green-400 sm:hover:bg-transparent  ${ isActive ? '	text-purple-900' : '' }`}
                                to='/login'
                                onClick={() => setmenu(false)}>
                                {user.name}
                            </NavLink>
                        }
                       
                       
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar