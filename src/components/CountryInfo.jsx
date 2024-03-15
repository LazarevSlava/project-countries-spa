import { useTheme } from '../hooks/themeUtils';
import style from './CountryInfo.module.scss';

function CountryInfo(props) {
  const { theme = 'dark' } = useTheme();
  const CountryStyleCardInfo = `${style.cardInfo} ${theme === 'dark' ? ` ${style.light}` : ''}`;

  const currencies = Object.values(props.currencies)
    .filter((currency) => Boolean(currency.name))
    .map((cur) => cur.name)
    .join(', ');

  const languages = Object.values(props.languages).join(', ');
  const formattedWithOptions = props.population.toLocaleString('en-US');

  const nativeName = Object.values(props.name.nativeName)
    .filter((name) => Boolean(name.official))
    .map((natName) => natName.official)
    .join(', ');

  return (
    <div className={CountryStyleCardInfo}>
      <div className={style.infSection}>
        <h2 className={style.h2}>{props.name.common}</h2>
        <p className={style.p}>
          <b>Native Name: </b>
          {nativeName}
        </p>
        <p className={style.p}>
          <b>Population: </b>
          {formattedWithOptions}
        </p>
        <p className={style.p}>
          <b>Region: </b>
          {props.region}
        </p>
        <p className={style.p}>
          <b>Sub Region: </b>
          {props.subregion}
        </p>
        <p className={style.p}>
          <b>Capital: </b>
          {props.capital}
        </p>
      </div>
      <div className={style.infSection}>
        <p className={style.p}>
          <b>Top Level DoHome: </b>
          {props.tld[0]}
        </p>
        <p className={style.p}>
          <b>Currencies: </b>

          {currencies}
        </p>
        <p className={style.p}>
          <b>Languages: </b>
          {languages}
        </p>
      </div>
    </div>
  );
}

export { CountryInfo };
