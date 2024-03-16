import { createContext, useState } from 'react';
import { API_URL } from '../config';

export const CountriesContext = createContext();

export function CountriesDataContext(props) {
  const [countries, setCountries] = useState([]);

  const fetchDate = async () => {
    if (countries.length === 0) {
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          setCountries(data);
          console.log(data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const value = {
    countries,
    fetchDate,
  };
  return <CountriesContext.Provider value={value}>{props.children}</CountriesContext.Provider>;
}
