import React from 'react'
import { useParams } from 'react-router-dom'

export const DetailHeroeScreem = () => {

  // Todo parametros enviado en ruta peude ser recibido 
  let {heroeId, otro} = useParams();

  return (
    <>
      <div>DetailHeroeScreem</div>
      <small>El codigo a mostrar es este: {heroeId} y tenemos la intervención de otro parametros {otro}</small>
    </>
  )
}
