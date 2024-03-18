import { useContext } from 'react';
import { CountriesContext } from '../helpers/CountriesDataContext';

export function useCountryData() {
  const context = useContext(CountriesContext);
  if (context === undefined) {
    throw new Error(`useCountryData doesn't used right`);
  }
  return context;
}
