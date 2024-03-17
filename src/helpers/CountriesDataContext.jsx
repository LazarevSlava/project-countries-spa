import { createContext, useState, useRef } from 'react';
import { API_URL } from '../config';

export const CountriesContext = createContext();

export function CountriesDataContext(props) {
  const [countries, setCountries] = useState([]);
  const render = useRef(0);

  const fetchDate = async () => {
    console.log(render);
    if (render.current < 1) {
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          setCountries(data);
        })
        .catch(() => {
          const errorMessage = 'An error occurred while fetching the data. Please try again later.'; // Store error message
          alert(errorMessage);
        });
    }
  };

  const value = {
    countries,
    fetchDate,
    render,
  };

  return <CountriesContext.Provider value={value}>{props.children}</CountriesContext.Provider>;
}
