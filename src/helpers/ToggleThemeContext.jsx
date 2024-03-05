import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

export function ToggleThemeContext(props) {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const value = {
    theme,
    toggleTheme,
  };
  return <ThemeContext.Provider value={value}>{props.children}</ThemeContext.Provider>;
}

ToggleThemeContext.propTypes = {
  children: PropTypes.node.isRequired,
};
