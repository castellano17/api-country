import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const CardCountry = ({ nameCountry }) => {
  const [country, setCountry] = useState();

  const getInfoCountry = () => {
    const URL = `https://restcountries.com/v3.1/name/${nameCountry}`;

    axios
      .get(URL)
      .then((res) => setCountry(res.data[0]))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getInfoCountry();
  }, []);

  return (
    <article className="cardCountry">
      <div>
        <img className="cardCountry__img" src={country?.flags.svg} alt="" />
      </div>
      <h3 className="cardCountry__title">
        <b>{country?.name.common}</b>
      </h3>
      <ul className="cardCountry__list">
        <li>
          <b>Población: </b>
          {country?.population}
        </li>
        <li>
          <b>Capital: </b>
          {country?.capital[0]}
        </li>
        <li>
          <b>Región: </b>
          {country?.region}
        </li>
      </ul>
    </article>
  );
};

export default CardCountry;
