import PropTypes from 'prop-types';
import { CountryCard } from './CountryCard';
import style from './CountriesList.module.scss';

function CountriesList({ countries = [] }) {
  return (
    <div>
      {countries.length === 0 ? (
        <div className={style.message}>Country is not founded</div>
      ) : (
        countries.map((item) => (
          <CountryCard key={item.cca2} nameCountry={item.name.common} {...item} />
        ))
      )}
    </div>
  );
}

CountriesList.propTypes = {
  countries: PropTypes.array.isRequired,
};

export { CountriesList };
