import { createContext, useState, useMemo, useCallback } from 'react';
import { API_URL } from '../config';

export const CountriesContext = createContext();

export function CountriesDataContext(props) {
  const [countries, setCountries] = useState([]);

  const fetchDate = useCallback(() => {
    return fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch(() => {
        const errorMessage = 'An error occurred while fetching the data. Please try again later.'; // Store error message
        alert(errorMessage);
      });
  }, []);

  const value = useMemo(() => {
    return { countries, fetchDate };
  }, [countries, fetchDate]);

  return <CountriesContext.Provider value={value}>{props.children}</CountriesContext.Provider>;
}
