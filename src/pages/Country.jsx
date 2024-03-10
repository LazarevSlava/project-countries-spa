import { useTheme } from '../hooks/themeUtils';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API_URL2 } from '../config.js';
import style from './Country.module.scss';
import Preloader from '../components/preloader/Preloader';
import IconArrowLeft from '../assets/images/arrow-left-svgrepo-com.svg?react';
import { BorderCountry } from '../components/BorderCountry';

function Country() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const { theme = 'dark' } = useTheme();
  const themeIconArrow = <IconArrowLeft stroke={theme === 'light' ? 'white' : 'black'} />;
  const CountryStyle = `${style.card} ${theme === 'dark' ? ` ${style.light}` : `''`}`;
  const CountryStyleBtn = `${style.btn} ${theme === 'dark' ? ` ${style.light}` : `''`}`;
  const CountryStyleCardInfo = `${style.cardInfo} ${theme === 'dark' ? ` ${style.light}` : `''`}`;
  const CountryStyleBtnBlock = `${style.buttonBlock} ${theme === 'dark' ? ` ${style.light}` : `''`}`;

  const goBack = () => navigate(-1);
  const currencies = country
    ? Object.values(country.currencies)
        .filter((currency) => Boolean(currency.name))
        .map((cur) => cur.name)
        .join(', ')
    : '';
  const languages = country ? Object.values(country.languages).join(', ') : '';

  const nativeName = country
    ? Object.values(country.name.nativeName)
        .filter((name) => Boolean(name.official))
        .map((natName) => natName.official)
        .join(', ')
    : '';

  useEffect(() => {
    fetch(API_URL2 + id)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data[0]);
        setLoading(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  console.log(country);

  return (
    <div className={CountryStyle}>
      <button className={CountryStyleBtn} onClick={goBack}>
        {themeIconArrow}Back
      </button>
      {!isLoading ? (
        <Preloader />
      ) : country ? (
        <>
          <img className={style.cardImg} src={country.flags.svg} />
          <div className={CountryStyleCardInfo}>
            <h2 className={style.h2}>{country.name.common}</h2>
            <p className={style.p}>
              <b>Native Name: </b>
              {nativeName}
            </p>
            <p className={style.p}>
              <b>Population: </b>
              {country.population}
            </p>
            <p className={style.p}>
              <b>Region: </b>
              {country.region}
            </p>
            <p className={style.p}>
              <b>Sub Region: </b>
              {country.subregion}
            </p>
            <p className={style.p}>
              <b>Capital: </b>
              {country.capital}
            </p>
          </div>
          <div className={CountryStyleCardInfo}>
            <p className={style.p}>
              <b>Top Level Domain: </b>
              {country.tld[0]}
            </p>
            <p className={style.p}>
              <b>Currencies: </b>

              {currencies}
            </p>
            <p className={style.p}>
              <b>Languages: </b>
              {languages}
            </p>

            <h3 className={style.h3}>
              <b>Border Countries: </b>
            </h3>

            <div className={CountryStyleBtnBlock}>
              {country.borders
                ? Object.values(country.borders).map((border) => (
                    <Link className={style.link} to={`/${border}`} key={border}>
                      <BorderCountry key={border} countryCode={border} />
                    </Link>
                  ))
                : `Don't exist`}
            </div>
          </div>
        </>
      ) : (
        <div>Error loading country data</div>
      )}
    </div>
  );
}

export { Country };
