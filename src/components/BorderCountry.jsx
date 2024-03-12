import { useState, useEffect } from 'react';
import { useTheme } from '../hooks/themeUtils';
import style from './BorderCountry.module.scss';
import { API_URL_ID } from '../config';

function BorderCountry({ countryCode }) {
  const { theme = 'dark' } = useTheme();
  const CountryStyleBtn = `${style.btn} ${theme === 'dark' ? ` ${style.light}` : `''`}`;
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(API_URL_ID + countryCode)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [countryCode]);

  return <button className={CountryStyleBtn}>{country ? country.name.common : ''}</button>;
}

export { BorderCountry };
