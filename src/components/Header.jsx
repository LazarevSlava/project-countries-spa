import icon from "../assets/images/night.png";
import style from "./Header.module.scss";
import iconMoon from "../assets/images/moon.png";
import { useContext } from "react";
import { CustomContext } from "../helpers/Context";

function Header() {
  const { isTheme = true, toggleTheme } = useContext(CustomContext);
  return (
    <>
      {isTheme ? (
        <div className={style.head_block}>
          <h1>Where in the world?</h1>
          <h3 onClick={toggleTheme}>
            <img src={icon} alt="moon"></img>
            Dark Mode
          </h3>
        </div>
      ) : (
        <div className={`${style.head_block} ${style.light}`}>
          <h1>Where in the world?</h1>
          <h3 onClick={toggleTheme}>
            <img src={iconMoon} alt="iconMoon"></img>
            Light Mode
          </h3>
        </div>
      )}
    </>
  );
}
export { Header };
