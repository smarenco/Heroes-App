import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';
import queryString from 'query-string';
export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = ''} = queryString.parse(location.search);

  const [ { searchText }, handleInputChange] = useForm({searchText: q});

  const heoresFileted = useMemo(() => getHeroesByName( q ), [ q ]) 

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  }

  return (
    <>
        <h1>Búsquedas</h1>
        <hr />
        <div className="row">
          <div className="col-5">
            <h4>Buscar</h4>
            <hr />

            <form onSubmit={(e) => handleSubmit(e)}>
              <input type="text" className="form-control" placeholder="Busacar un héroe" name="searchText" autoComplete='off' onChange={handleInputChange} value={searchText} />
              <button type="submit" className="btn btn-primary mt-1">Buscar</button>
            </form>
          </div>
          <div className="col-7">
            {q === '' ? <div className="alert alert-info animate__animated animate__fadeIn">Buscar un hèroe</div> : heoresFileted.length === 0 && <div className="alert alert-danger animate__animated animate__fadeIn">No hay resultados: { q }</div>}
            { heoresFileted.map( hero => 
              <HeroCard key={hero.id} {...hero} publisher />
            )}
          </div>
        </div>
    </>
  )
}