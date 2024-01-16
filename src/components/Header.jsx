import style from "./Header.module.scss";
import iconMoonNight from "../assets/images/half-moon-shape-svgrepo-com.svg";
import { useContext } from "react";
import { ThemContext } from "./contexts/Context";
import iconMoon from "../assets/images/crescent-moon-phase-svgrepo-com.svg";

function Header() {
  const { isTheme = "dark", toggleTheme } = useContext(ThemContext);
  return (
    <>
      {isTheme === "dark" ? (
        <div className={style.head_block}>
          <h1>Where in the world?</h1>
          <h2 onClick={toggleTheme}>
            <img src={iconMoonNight} alt="moon" />
            Dark Mode
          </h2>
        </div>
      ) : (
        <div className={`${style.head_block} ${style.light}`}>
          <h1>Where in the world?</h1>
          <h2 onClick={toggleTheme}>
            <img src={iconMoon} alt="iconMoon" />
            Light Mode
          </h2>
        </div>
      )}
    </>
  );
}
export { Header };
