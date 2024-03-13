import PropTypes from 'prop-types';
import { CountryCard } from './CountryCard';
import style from './CountriesList.module.scss';
import { Link } from 'react-router-dom';

function CountriesList({ countries = [] }) {
  return (
    <div className={style.list}>
      {countries.length === 0 ? (
        <div className={style.message}>Country is not founded</div>
      ) : (
        countries.map((item) => (
          <Link className={style.link} to={`${item.cca2}`} key={item.cca2}>
            <CountryCard
              key={item.cca2}
              nameCountry={item.name.common}
              capital={item.capital || 'Unknown'}
              {...item}
            />
          </Link>
        ))
      )}
    </div>
  );
}

CountriesList.propTypes = {
  countries: PropTypes.array.isRequired,
};

export { CountriesList };
