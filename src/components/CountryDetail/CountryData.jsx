const CountryData = ({ ...props }) => {
    //   const { country, handleVisitedCountry, handleVisitedFlag } = props;

  return (
    <div>
      <p>
        <small>Country Name: {props.country.name.common}</small>
      </p>
    </div>
  );
};

export default CountryData;
