import style from './CountrySelector.module.scss';
import { useTheme } from '../hooks/themeUtils';
import PropTypes from 'prop-types';
import { useState } from 'react';

function CountrySelector({ onSelect = Function.prototype }) {
    const [isActive, setIsActive] = useState(false);
    const options = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
    const { theme = 'dark' } = useTheme();
    const selectClass = `${style.select} ${theme === 'dark' ? ` ${style.light}` : `''`}`;

    // const handleRegionChange = (event) => {
    //     const selectedRegion = event.target.value;

    //     onSelect(selectedRegion);
    // };

    return (
        // <div className={style.select_field}>
        //     <select onChange={handleRegionChange} className={selectClass}>
        //         <option value="" disabled selected>
        //             Filter by Region
        //         </option>
        //         <option value="1">Africa</option>
        //         <option value="2">America</option>
        //         <option value="3">Asia</option>
        //         <option value="4">Europe</option>
        //         <option value="5">Oceania</option>
        //     </select>
        // </div>
        <div className={style.dropdown}>
            <div
                className={style.dropdown_btn}
                onClick={(e) => {
                    setIsActive(!isActive);
                }}
            >
                Filter by Region
                <span className={`${style.fas} ${style.fa_caret_down}`}></span>
            </div>
            {isActive && (
                <div className={style.dropdown_content}>
                    {options.map((option) => (
                        <div
                            className={style.dropdown_item}
                            onClick={(e) => {
                                onSelect(e.target.textContent);
                                setIsActive(false);
                            }}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

CountrySelector.propTypes = {
    onSelect: PropTypes.func.isRequired,
};

export { CountrySelector };
