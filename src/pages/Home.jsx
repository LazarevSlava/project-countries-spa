import style from './Home.module.scss';
import { useTheme } from '../hooks/themeUtils';
import { Search } from '../components/Search';
import { CountrySelector } from '../components/CountrySelector';
import { useEffect, useState, useMemo } from 'react';
import Preloader from '../components/preloader/Preloader';
import { CountriesList } from '../components/CountriesList';
import { useCountryData } from '../hooks/useCountriesContext';

function Home() {
  const { countries = [], fetchDate, render } = useCountryData();
  const [isLoading, setLoading] = useState(false);
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
    if (countries.length) setLoading(true);
    if (render.current === 0) {
      fetchDate(render);
      render.current++;
    }
  }, [countries]);

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
