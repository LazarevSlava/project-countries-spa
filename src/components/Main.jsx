import style from './Main.module.scss';
import { useTheme } from '../hooks/themeUtils';
import { Search } from './Search';
import { CountrySelector } from './CountrySelector';
import { API_URL } from '../config.js';
import { useEffect, useState, useMemo } from 'react';
import Preloader from './preloader/Preloader';
import { CountriesList } from './CountriesList';

function Main() {
  const [isLoading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const { theme = 'dark' } = useTheme();

  const containerClassnames = `${style.main} ${theme === 'dark' ? style.light : ''}`;

  const handleSelect = (region) => {
    setSelectedRegion(region);
  };

  const handleEmptySelect = () => {
    setSelectedRegion('');
  };

  const handleSearch = (str) => {
    setSearchInput(str);
  };

  const filteredCountries = useMemo(() => {
    if (searchInput === '' && selectedRegion === '') {
      return countries;
    }

    let filtered = countries;

    if (selectedRegion !== '') {
      filtered = filtered.filter((item) =>
        item.region.toLowerCase().includes(selectedRegion.toLowerCase()),
      );
    }

    if (searchInput !== '') {
      filtered = filtered.filter((item) =>
        item.name.common.toLowerCase().includes(searchInput.toLowerCase()),
      );
    }

    return filtered;
  }, [countries, searchInput, selectedRegion]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .then(setLoading(true))
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className={containerClassnames}>
      <Search onSearch={handleSearch} />
      <CountrySelector onSelect={handleSelect} handleEmptySelect={handleEmptySelect} />
      <div className={style.cardContainer}>
        {isLoading ? <CountriesList countries={filteredCountries} /> : <Preloader />}
      </div>
    </div>
  );
}

export { Main };
