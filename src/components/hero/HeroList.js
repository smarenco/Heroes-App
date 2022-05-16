import { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heores = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ]);
  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__backInLeft'>
        { heores.map( hero => 
            <HeroCard key={hero.id} {...hero} publisher />
        )}
    </div>
        
  )
    
}
