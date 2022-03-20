import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, flags, population, region} = props.country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h4>{name.common}</h4>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;