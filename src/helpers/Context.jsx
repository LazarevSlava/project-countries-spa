import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CustomContext = createContext();

export const Context = (props) => {
  const [isTheme, setIsTheme] = useState(true);

  const toggleTheme = () => {
    setIsTheme(!isTheme);
  };

  const value = {
    isTheme,
    toggleTheme,
  };
  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};

Context.propTypes = {
  children: PropTypes.node.isRequired,
};
