import React from 'react'
import { Link } from 'react-router-dom';

const heroImages = require.context("../../assets", true); //EL TRUE ES PARA QUE BUSQUE EN SUB DIRECTORIOS

export const HeroCard = ({ id, superhero, alter_ego, first_appearance, characters  }) => {

    const imagePath = `/assets/${id}.jpg`;
  return (
    <div className='col animate__animated animate__fadeIn'>
        <div className='card'>
            <div className='row no-gutters'>
                <div className='col-4'>
                    <img src={heroImages(`./${id}.jpg`)} className='card-img' alt={superhero} />
                </div>

                <div className='col-8'>
                    <div className='card-body'>
                        <h5 className='card-title'>{ superhero }</h5>
                        <div className='card-text'>{ alter_ego }</div>
                        {
                            ( alter_ego !== characters) && <div className='text-muted'>{ characters }</div>
                        }

                        <p className='card-text'>
                            <small className='text-muted'>{ first_appearance}</small>
                        </p>

                        <Link to={`/hero/${id}`}>
                            Más...
                        </Link>
                        
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
