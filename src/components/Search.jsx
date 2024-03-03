import { useState } from 'react';
import style from '../components/Search.module.scss';
import { useDebounce } from '../hooks/useDebounce';
import PropTypes from 'prop-types';
import { useTheme } from '../hooks/themeUtils';

function Search({ onSearch = Function.prototype }) {
  const [value, setValue] = useState('');
  const { theme = 'dark' } = useTheme();
  const searchStyle = `${style.search} ${theme === 'dark' ? ` ${style.light}` : `''`}`;

  const handleSearch = useDebounce((value) => {
    onSearch(value);
  }, 350);

  const onChange = (e) => {
    const updatedValue = e.target.value;
    setValue(updatedValue);
    handleSearch(updatedValue);
  };

  return (
    <div className={style.input_field}>
      <input
        className={searchStyle}
        type="search"
        placeholder="Search for a country..."
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export { Search };
