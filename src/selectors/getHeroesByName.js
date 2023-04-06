import {heroes} from '../data/heroes'

export const getHeroesByName = (caracteres = '', etiqueta = '') => {
    caracteres = caracteres.toLocaleLowerCase();
    etiqueta = etiqueta.toLocaleLowerCase();

    if( etiqueta === 'nombre' || etiqueta === '' ){
        return heroes.filter( heroe => heroe.superhero.toLocaleLowerCase().includes(caracteres))
    }
    if( etiqueta === 'aparicion'){
        return heroes.filter( heroe => heroe.first_appearance.toLocaleLowerCase().includes(caracteres))
    }
    if( etiqueta === 'caracteristicas'){
        return heroes.filter( heroe => heroe.characters.toLocaleLowerCase().includes(caracteres))
    }
    if( etiqueta === 'editor'){
        return heroes.filter( heroe => heroe.publisher.toLocaleLowerCase().includes(caracteres.toLocaleLowerCase()))
    }
    
    return heroes;

}