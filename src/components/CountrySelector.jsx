import PropTypes from "prop-types";
import { useState } from "react";
import style from "./CountrySelector.module.scss";
import { useTheme } from "../hooks/themeUtils";
import IconArrowDown from "../assets/images/arrow-down-svgrepo-com.svg?react";
import IconClose from "../assets/images/close_FILL0_wght400_GRAD0_opsz24.svg?react";

const options = ["Africa", "America", "Asia", "Europe", "Oceania"];

function CountrySelector({ onSelect = Function.prototype }) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("");
  const { theme = "dark" } = useTheme();
  const selectClass = theme === "dark" ? style.light : "";

  const themeIconArrow = (
    <IconArrowDown
      className={style.icon}
      fill={theme === "light" ? "white" : "black"}
    />
  );
  
  const themeIconClose = (
    <IconClose
      className={style.icon}
      onClick={(event) => {
        event.stopPropagation();
        setSelected("");
      }}
      fill={theme === "light" ? "white" : "black"}
    />
  );

  return (
    <div className={style.dropdown}>
      <button
        className={`${selectClass} ${style.dropdown_btn}`}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        {!selected ? "Filter by Region" : selected}
        {!selected ? themeIconArrow : themeIconClose}
      </button>
      {isActive && (
        <div className={`${selectClass} ${style.dropdown_content}`}>
          {options.map((option) => (
            <button
              key={option}
              className={`${selectClass} ${style.dropdown_item}`}
              onClick={() => {
                onSelect(option);
                setIsActive(false);
                setSelected(option);
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
