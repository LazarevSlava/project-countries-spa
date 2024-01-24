import style from "./CountrySelector.module.scss";
import { useTheme } from "../hooks/themeUtils";
import PropTypes from "prop-types";
import { useState } from "react";

function CountrySelector({ onSelect = Function.prototype }) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Filter by Region");
  const options = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const { theme = "dark" } = useTheme();
  const lightThemeClass = theme === "dark" ? style.light : "";
  const selectClass = ` ${lightThemeClass}`;

  return (
    <div className={style.dropdown}>
      <button
        className={`${selectClass} ${style.dropdown_btn}`}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        {selected}
      </button>
      {isActive && (
        <div className={`${selectClass} ${style.dropdown_content}`}>
          {options.map((option) => (
            <button
              key={option}
              className={`${selectClass} ${style.dropdown_item}`}
              onClick={(e) => {
                onSelect(e.target.textContent);
                setIsActive(false);
                setSelected(e.target.textContent);
              }}
            >
              {option}
            </button>
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
