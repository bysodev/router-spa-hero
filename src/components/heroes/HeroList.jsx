import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { CardHeroe } from '../cards/CardHeroe';

export const HeroeList = ({publiser}) => {
    const heroes = getHeroesByPublisher(publiser);
  return (
    <>
        <ul className='flex justify-center flex-wrap w-full'>
            {
                heroes.map(heroe => (
                    <CardHeroe key={heroe.id} {...heroe} wid='1/3' />
                ))
            }    
        </ul>    
    </>
  )
}
