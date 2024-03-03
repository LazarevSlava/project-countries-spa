import style from "./Main.module.scss";
import { useTheme } from "../hooks/themeUtils";

import { Search } from "./Search";
import { CountrySelector } from "./CountrySelector";
import { API_URL } from "../config.js";
import { useEffect, useState } from "react";
import Preloader from "./preloader/Preloader";
import { CountriesList } from "./CountriesList";

function Main() {
  const [isLoading, setLoading] = useState(false);
  const [countryName, setCountryName] = useState("");
  const [regionName, setRegionName] = useState("");
  const [countries, setCountries] = useState([]);
  const [countriesCatalog, setCountriesCatalog] = useState([]);
  const { theme = "dark" } = useTheme();

  const containerClassnames = `${style.main} ${theme === "dark" ? style.light : ""}`;

  const handleSelect = (region) => {
    setRegionName(region);
    if (countryName === "") {
      setCountriesCatalog(
        countries.filter((item) =>
          item.region.toLowerCase().includes(region.toLowerCase()),
        ),
      );
    } else {
      let countrySelect = [];

      countrySelect = countries.filter((item) =>
        item.region.toLowerCase().includes(region.toLowerCase()),
      );

      setCountriesCatalog(
        countrySelect.filter((item) =>
          item.name.common.toLowerCase().includes(countryName.toLowerCase()),
        ),
      );
    }
  };

  const handleEmptySelect = () => {
    setCountriesCatalog(
      countries.filter((item) =>
        item.name.common.toLowerCase().includes(countryName.toLowerCase()),
      ),
    );
  };
  console.log(countriesCatalog);

  const handleSearch = (str) => {
    setCountryName(str);
    if (regionName === "") {
      setCountriesCatalog(
        countries.filter((item) =>
          item.name.common.toLowerCase().includes(str.toLowerCase()),
        ),
      );
    } else {
      let regionSelect = [];

      regionSelect = countries.filter((item) =>
        item.region.toLowerCase().includes(regionName.toLowerCase()),
      );

      setCountriesCatalog(
        regionSelect.filter((item) =>
          item.name.common.toLowerCase().includes(str.toLowerCase()),
        ),
      );
    }
  };

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setCountriesCatalog(data);
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
      <CountrySelector
        onSelect={handleSelect}
        handleEmptySelect={handleEmptySelect}
      />
      <div className={style.cardContainer}>
        {isLoading ? (
          <CountriesList countries={countriesCatalog} />
        ) : (
          <Preloader />
        )}
      </div>
    </div>
  );
}

export { Main };
