import { useState } from "react";
import "./Country.css";
import CountryDetail from "../CountryDetail/CountryDetail";

const Country = ({ country, handleVisitedCountry, handleVisitedFlag }) => {
  const { name, flags, population, area, cca3 } = country;
  //   console.log(country);
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };

  // console.log(handleVisitedCountry);
  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: visited ? "purple" : "white" }}>Name: {name?.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
      <br />
      <button onClick={() => handleVisitedFlag(country)}>Add Flag</button>

      <br />
      <button onClick={handleVisited}>Visited</button>
      {visited ? "I have visited this country" : "I want to visit"}
      <hr />
      <CountryDetail country={country} handleVisitedCountry={handleVisitedCountry} handleVisitedFlag={handleVisitedFlag}></CountryDetail>
    </div>
  );
};

export default Country;
