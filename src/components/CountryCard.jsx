import PropTypes from 'prop-types';
import style from './CountryCard.module.scss';
import { useTheme } from '../hooks/themeUtils';

function CountryCard(props) {
  const { capital, population, region, nameCountry, flags } = props;

  const formattedWithOptions = population.toLocaleString('en-US');

  const { theme = 'dark' } = useTheme();
  const CountryCardStyle = `${style.card} ${theme === 'dark' ? ` ${style.light}` : `''`}`;

  return (
    <div className={CountryCardStyle}>
      <img className={style.cardImg} src={flags.svg} />
      <div className={style.cardInfo}>
        <h2 className={style.h2}>{nameCountry}</h2>
        <p className={style.p}>
          <b>Population:</b> {formattedWithOptions}
        </p>
        <p className={style.p}>
          <b>Region: </b>
          {region}
        </p>
        <p className={style.p}>
          <b>Capital:</b> {capital}
        </p>
      </div>
    </div>
  );
}
CountryCard.propTypes = {
  capital: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.array.isRequired]),
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  nameCountry: PropTypes.string.isRequired,
  flags: PropTypes.shape({
    svg: PropTypes.string.isRequired,
  }).isRequired,
};

export { CountryCard };
