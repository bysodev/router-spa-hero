import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DcScreem } from '../components/dc/DcScreem'
import { HeroePrincipal } from '../components/heroes/HeroePrincipal'
import { HeroeScreem } from '../components/heroes/HeroeScreem'
import { HeroesScreem } from '../components/ignorar/HeroesScreem'
import { MarvelScreem } from '../components/marvel/MarvelScreem'
import Navbar from '../components/navs/Navbar'
import { Login } from '../components/pages/Login'
import { LoginPrueba } from '../components/pages/LoginPrueba'
import { Layaut } from './Layaut'
  
const AppRouter = () => {

  
    
  return (
    <Routes>
        <Route exact path='/' element={<Layaut />} >
            <Route path='login' element={<LoginPrueba />} />
            <Route path='marvel' element={<MarvelScreem />} /> 
            {/* LA PRIMERA FORMA DE ENRUTAR CON PARAMETROS */}
            <Route path='/heroe/:heroId' element={<HeroePrincipal />} />
            {/* SEGUNDA FORMA DE ENRUTAR PARAMETROS */}
            {/* <Route path='/heroe' >
                <Route index element={<HeroesScreem />} />
                <Route path=':marvel' element={<HeroesScreem />} />
            </Route> */}
              {/* TERCERA FORMA DE ENRUTAR PARAMETROS */}
            <Route path='heroe/*' element={<HeroeScreem />} ></Route>

            <Route path='dc' element={<DcScreem />} />
            <Route path='*' element={ <Navigate to='/heroe' /> } />
        </Route>
        <Route exact path='/login-principol' >
            <Route index element={<Login />} />
        </Route>

    </Routes>
  )
}

export default AppRouter