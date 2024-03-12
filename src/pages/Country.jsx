import { useTheme } from '../hooks/themeUtils';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API_URL_ID } from '../config.js';
import style from './Country.module.scss';
import Preloader from '../components/preloader/Preloader';
import IconArrowLeft from '../assets/images/arrow-left-svgrepo-com.svg?react';
import { BorderCountry } from '../components/BorderCountry';
import { CountryInfo } from '../components/CountryInfo';

function Country() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const { theme = 'dark' } = useTheme();
  const themeIconArrow = <IconArrowLeft stroke={theme === 'light' ? 'white' : 'black'} />;
  const CountryStyle = `${style.card} ${theme === 'dark' ? ` ${style.light}` : ''}`;
  const CountryStyleBtn = `${style.btn} ${theme === 'dark' ? ` ${style.light}` : ''}`;
  const CountryStyleBtnBlock = `${style.buttonBlock} ${theme === 'dark' ? ` ${style.light}` : ''}`;

  const goBack = () => navigate(-1);

  useEffect(() => {
    fetch(API_URL_ID + id)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data[0]);
        setLoading(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <div className={CountryStyle}>
      <button className={CountryStyleBtn} onClick={goBack}>
        {themeIconArrow}Back
      </button>
      {isLoading ? (
        country ? (
          <>
            <img className={style.cardImg} src={country.flags.svg} />
            <CountryInfo key={country.cca2} {...country} />
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
          </>
        ) : (
          <div>Error loading country data</div>
        )
      ) : (
        <Preloader />
      )}
    </div>
  );
}

export { Country };
