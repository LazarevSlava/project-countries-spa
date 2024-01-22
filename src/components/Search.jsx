import { useState } from 'react';
import style from '../components/Search.module.scss';
import { useDebounce } from '../hooks/useDebounce';

function Search({ onSearch = Function.prototype }) {
    const [value, setValue] = useState('');

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
                type="search"
                id={style.search}
                placeholder="Search for a country..."
                onChange={onChange}
                value={value}
            />
        </div>
    );
}

export { Search };
