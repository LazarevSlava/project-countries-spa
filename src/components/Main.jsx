import style from './Main.module.scss';
import { useTheme } from '../hooks/themeUtils';
import { CountryCard } from './CountryCard';
import { Search } from './Search';
import { CountrySelector } from './CountrySelector';
import { API_URL } from '../config.js';
import { useEffect, useState } from 'react';
import Preloader from './preloader/Preloader';

function Main() {
    const [isLoading, setLoading] = useState(false);

    const [countries, setCountries] = useState([]);
    const { theme = 'dark', toggleTheme } = useTheme();
    const containerClassnames = `${style.main} ${theme === 'dark' ? ` ${style.light}` : `''`}`;

    const handleSearch = (str) => {
        console.log(str);
    };

    const handleSelect = (region) => {
        console.log(region);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch(API_URL);
                const jsonCountries = await data.json();
                setCountries(jsonCountries);
                console.log(jsonCountries);
            } catch (error) {
                console.log('error', error);
            }
            setLoading(true);
        };

        fetchData();
    }, []);

    return (
        <div className={containerClassnames}>
            <Search onSearch={handleSearch} />
            <CountrySelector onSelect={handleSelect} />
            <div className={style.cardContainer}>
                {isLoading ? (
                    countries.map((item) => (
                        <CountryCard
                            key={item.cca2}
                            nameCountry={item.name.common}
                            {...item}
                        />
                    ))
                ) : (
                    <Preloader />
                )}
            </div>
        </div>
    );
}
export { Main };
