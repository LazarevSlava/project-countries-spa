import style from "./Header.module.scss";
import IconMoonNight from "../assets/images/half-moon-shape-svgrepo-com.svg?react";
import IconMoon from "../assets/images/crescent-moon-phase-svgrepo-com.svg?react";
import { useContext } from "react";
import { ThemContext } from "./contexts/Context";

function Header() {
  const { isTheme = "dark", toggleTheme } = useContext(ThemContext);
  return (
    <>
      {isTheme === "dark" ? (
        <div className={style.head_block}>
          <h1>Where in the world?</h1>
          <h2 onClick={toggleTheme}>
            <IconMoonNight className={style.icon} fill="red" />
            Dark Mode
          </h2>
        </div>
      ) : (
        <div className={`${style.head_block} ${style.light}`}>
          <h1>Where in the world?</h1>
          <h2 onClick={toggleTheme}>
            <IconMoon className={style.icon} fill="red" />
            Light Mode
          </h2>
        </div>
      )}
    </>
  );
}
export { Header };
