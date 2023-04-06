import React from 'react'
import { Routes, Route, useParams  } from 'react-router-dom'
import { DetailHeroeScreem } from './DetailHeroeScreem'

export const HeroesScreem = () => {
  return (
    <>
      <Routes>
          {/* Para implementar lso parametors en las rutas */}
          {/* <Route path=':heroeId' element={<DetailHeroeScreem />} /> */}
          {/* Escenario en el que se quiera ago como: /heroe/heroeId/otro, donde cada parametros es recibido */}
          <Route path=':heroeId' >
              <Route path=':otro' element={<DetailHeroeScreem/>} />
          </Route>
      </Routes>


    
        <div>heroesScreem</div>    
        {/* <HeroeList publiser={'DC Comics'} /> */}
        
       
    </>
  )
}