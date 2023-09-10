import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    console.log("add this to your visited country");
    // console.log(country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlag = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  return (
    <div>
      <h3>Country: {countries.length}</h3>
      {/* visited countries list */}
      <div>
        <h5>Visited Countries: {visitedCountries.length}</h5>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>

      {/* display visited countries flags */}
      <div className="flag-container">
        {visitedFlags.map((flag, idx) => (
          <img key={idx} src={flag.flags.png} alt="" />
        ))}
      </div>

      {/* display countries */}
      <div className="country-container">
        {countries.map((country) => (
          <Country handleVisitedFlag={handleVisitedFlag} handleVisitedCountry={handleVisitedCountry} key={country.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
