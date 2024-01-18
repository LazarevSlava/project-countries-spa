import style from "./Header.module.scss";
import IconMoonNight from "../assets/images/half-moon-shape-svgrepo-com.svg?react";
import IconMoon from "../assets/images/crescent-moon-phase-svgrepo-com.svg?react";
import { useContext } from "react";
import { ThemContext } from "./contexts/Context";

function Header() {
  const { isTheme = "dark", toggleTheme } = useContext(ThemContext);
  const containerClassnames = `${style.head_block} ${isTheme === "dark" ? ` ${style.light}` : `''`}`;
  const themeText = isTheme === "dark" ? "Light theme" : "Dark theme";
  const ThemeIcon =
    isTheme === "dark" ? (
      <IconMoonNight className={style.icon} />
    ) : (
      <IconMoon className={style.icon} fill="white" />
    );

  return (
    <div className={containerClassnames}>
      <h1>Where in the world?</h1>
      <h2 onClick={toggleTheme}>
        {ThemeIcon}
        {themeText}
      </h2>
    </div>
  );
}
export { Header };
