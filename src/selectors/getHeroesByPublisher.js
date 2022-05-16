import { heroes } from "../data/heroes"

export const getHeroesByPublisher = (publisher) => {
    console.log(1);
    const validPublishers = ['DC Comics', 'Marvel Comics']
    if(!validPublishers.includes(publisher)){
        throw new Error(`${publisher} no es un  publisher valido`);
    }

  return heroes.filter(( heroe ) => heroe.publisher === publisher )
}
