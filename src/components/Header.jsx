import style from './Header.module.scss';
import IconMoonNight from '../assets/images/half-moon-shape-svgrepo-com.svg?react';
import IconMoon from '../assets/images/crescent-moon-phase-svgrepo-com.svg?react';
import { useTheme } from '../hooks/themeUtils';

function Header() {
  const { theme = 'dark', toggleTheme } = useTheme();
  const containerClassnames = `${style.header} ${theme === 'dark' ? ` ${style.light}` : `''`}`;
  const themeText = theme === 'dark' ? 'Light theme' : 'Dark theme';
  const ThemeIcon =
    theme === 'dark' ? (
      <IconMoonNight className={style.icon} />
    ) : (
      <IconMoon className={style.icon} fill="white" />
    );

  return (
    <div className={containerClassnames}>
      <h1>Where in the world?</h1>
      <p onClick={toggleTheme}>
        {ThemeIcon}
        {themeText}
      </p>
    </div>
  );
}
export { Header };
