import { useState } from 'react';
import style from '../components/Search.module.scss';

function Search({ onSearch = Function.prototype }) {
    const [value, setValue] = useState('');

    const debouncedSendRequest = debounce(onSearch, 500);

    const onChange = (e) => {
        const updatedValue = e.target.value;
        setValue(updatedValue);
        debouncedSendRequest();
    };

    // useEffect(() => {
    //     // Skip the initial invocation on mount
    //     if (isMounted.current) {
    //         timeoutIdRef.current = setTimeout(() => {
    //             onSearch(value);
    //         }, 350);

    //         return () => {
    //             clearTimeout(timeoutIdRef.current);
    //         };
    //     } else {
    //         // Set isMounted to true after the initial render
    //         isMounted.current = true;
    //     }
    // }, [value, onSearch]);

    return (
        <div className={style.input_field}>
            <input
                type="search"
                id={style.search}
                placeholder="Search for a country..."
                onKeyDown={handleKey}
                onChange={onChange}
                value={value}
            />
        </div>
    );
}

export { Search };
