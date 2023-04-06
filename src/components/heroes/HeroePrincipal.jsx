import React, { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroePrincipal = () => {

    const {heroId} = useParams();
    const navigate = useNavigate();
    console.log(heroId)

    const heroe = useMemo(() => getHeroesById(heroId), [heroId]);

  return (
    <div className='flex justify-center '>
        <div className='flex p-2 border border-l-violet-200 m-2 rounded'>
            <div className='md:w-1/4'>
                <img src={`../../../public/assets/heroes/${heroId}.jpg`} className="w-full" alt="ffsd" />
            </div>
            <div className='pl-3'>
                <h1>Nombre: {heroe.superhero}</h1>
                <br />
                <h1>Editor: {heroe.publisher}</h1>
                <br />
                <h4>Personaje: {heroe.alter_ego}</h4>
                <br />
                <h4>Aparación: {heroe.alter_ego}</h4>
                <br />
                { (heroe.characters.length > heroe.alter_ego.length) && <h4>Personajes: {heroe.characters}</h4>}
                <button onClick={ () => navigate(-1) } className='p-1 border hover:bg-indigo-700 hover:text-white rounded mt-2'>Regresar</button>

            </div>
        </div>
    </div>
   
  )
}