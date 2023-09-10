import CountryData from "./CountryData";

const CountryDetail = (props) => {
//   const { country, handleVisitedCountry, handleVisitedFlag } = props;
  return (
    <div>
      <h4>Country Details</h4>
      <hr />
      {/* <CountryData handleVisitedFlag={handleVisitedFlag} handleVisitedCountry={handleVisitedCountry} key={country.cca3} country={country}></CountryData> */}
      <CountryData {...props}></CountryData>
    </div>
  );
};

export default CountryDetail;
