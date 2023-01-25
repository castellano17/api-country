import React from "react";

const CardCountry = ({ country }) => {
  return (
    <article className="cardCountry">
      <div>
        <img className="cardCountry__img" src={country.flags.svg} alt="" />
      </div>
      <ul className="cardCountry__list">
        <li>
          <b>Población: </b>
          {country.population}
        </li>
        <li>
          <b>Capital: </b>
          {country.capital[0]}
        </li>
        <li>
          <b>Región: </b>
          {country.region}
        </li>
      </ul>
    </article>
  );
};

export default CardCountry;
