import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ThemContext = createContext();

export const Context = (props) => {
    const [isTheme, setIsTheme] = useState('dark');

    const toggleTheme = () => {
        setIsTheme(isTheme === 'dark' ? 'light' : 'dark');
    };

    const value = {
        isTheme,
        toggleTheme,
    };
    return (
        <ThemContext.Provider value={value}>
            {props.children}
        </ThemContext.Provider>
    );
};

Context.propTypes = {
    children: PropTypes.node.isRequired,
};
