import React, { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getHeroesByName } from '../../selectors/getHeroesByName'
import { CardHeroe } from '../cards/CardHeroe'
import { UseForm } from '../hooks/UseForm'

export const HeroeScreem = () => {
  const {search, etiqueta, handleChange} = UseForm({search: '', etiqueta: ''})
  const [searchParams, setSearchParams] = useSearchParams();
  const caracter = searchParams.get('hero') || '';
  const etiq = searchParams.get('etiqueta') || '';

  let heroes = useMemo(() => getHeroesByName(caracter, etiq), [caracter, etiq]);

  return (
    <>
      <div className='flex flex-col justify-center md:flex-row'>
        <div className='md:w-1/2'>
          <Search search={search} etiqueta={etiqueta} handleChange={handleChange} />
        </div>

        { ( heroes.length === 0 ) && 
          <div className=" flex justify-center content-center m-2 p-2 bg-red-300 rounded text-red-700 font-medium text-center w-4/5"
              role="alert">
            <span className='text-xl'> El heroe {search} no se logro encontrar { etiqueta !== '' && `,cambiar el filtrado ${etiqueta}` } </span>
          </div>
        }

        { (heroes.length > 0) && 
          <ul className='md:w-1/2'>
            {
              heroes.map(heroe => <CardHeroe key={heroe.id} {...heroe}/>)
            }    
          </ul>  
        }
      </div>
    </>
  )
}

export const Search = ({search='', etiqueta='', handleChange}) => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [actionSearch, setactionSearch] = useState(false);

  useEffect(() => {
    setactionSearch(true)
  }, [etiqueta, search])

  const handleSubmit = (event) => {
      event.preventDefault();
      setactionSearch(false)
      setSearchParams({hero: search, etiqueta: etiqueta})
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full mt-3">
        <div className="flex justify-center mb-3">
            <input type='button' onClick={handleChange} name='etiqueta' className="border hover:bg-zinc-400 hover:text-white focus:bg-zinc-400  cursor-pointer transition duration-700 ease-in-out rounded p-1 mr-2" value="Nombre" /> 
            <input type='button' onClick={handleChange} name='etiqueta' className="border hover:bg-zinc-400 hover:text-white focus:bg-zinc-400  cursor-pointer transition duration-700 ease-in-out rounded p-1 mr-2" value='Editor' />
            <input type='button' onClick={handleChange} name='etiqueta' className="border hover:bg-zinc-400 hover:text-white focus:bg-zinc-400  cursor-pointer transition duration-700 ease-in-out rounded p-1 mr-2" value='Aparicion' />
            <input type='button' onClick={handleChange} name='etiqueta' className="border hover:bg-zinc-400 hover:text-white focus:bg-zinc-400  cursor-pointer transition duration-700 ease-in-out rounded p-1 " value='Caracteristicas' />
        </div>
        <div className='flex justify-center'>
          <input type="text" name="search" id="search" placeholder='Escribe ...' value={search} onChange={handleChange} className="border-teal-600 rounded focus:outline-neutral-400 mr-2 w-3/4" />
          <button className={`p-1 border ring-state-600 hover:bg-slate-600 hover:text-zinc-50 rounded ${ actionSearch && 'shadow-md' }`}>Buscar</button>
        </div>
    </form>
  )
}
