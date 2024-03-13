import style from './Home.module.scss';
import { useTheme } from '../hooks/themeUtils';
import { Search } from '../components/Search';
import { CountrySelector } from '../components/CountrySelector';
import { API_URL } from '../config.js';
import { useEffect, useState, useMemo } from 'react';
import Preloader from '../components/preloader/Preloader';
import { CountriesList } from '../components/CountriesList';

function Home() {
  const [isLoading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const { theme = 'dark' } = useTheme();

  const containerClassnames = `${style.Home} ${theme === 'dark' ? style.light : ''}`;

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
      <div className={style.searchSelect}>
        <Search onSearch={handleSearch} />
        <CountrySelector onSelect={handleSelect} handleEmptySelect={handleEmptySelect} />
      </div>
      <div className={style.cardContainer}>
        {isLoading ? <CountriesList countries={filteredCountries} /> : <Preloader />}
      </div>
    </div>
  );
}

export { Home };
