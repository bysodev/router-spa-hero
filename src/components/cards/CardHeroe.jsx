import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const CardHeroe = (props) => {
    const navigate = useNavigate();

    const { id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters, wid = ''  } = props;

  return (
    // <div className={`flex p-2 border border-l-violet-200 m-2 rounded md:w-2/4 lg:w-1/4`}>
    <div className={`flex p-2 border border-l-violet-200 m-2 rounded md:w-4/4 md:h-80`}>
        <div className=''>
              <img src={`../../../public/assets/heroes/${id}.jpg`} className='w-full h-full object-cover' alt="ffsd" />
          </div>
      <div className='pl-2 ml-4'>
        <h2 className='font-mono' >Nombre: {superhero}</h2>
        <br />
        <h4 className='font-mono' >Editor: {publisher}</h4>
        <br />
        <h4 className='font-mono' >Aparición: {first_appearance}</h4>
        <br />
        <hr />
        <button onClick={ () => navigate(`/heroe/${id}`) } className='p-1 border hover:bg-indigo-700 hover:text-white rounded mt-2' >Details</button>
      </div>
    </div>
  )
}
