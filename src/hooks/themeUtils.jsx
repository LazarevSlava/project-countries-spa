import { useContext } from "react";
import { ThemeContext } from "../helpers/ToggleThemeContext";

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(`useTheme doesn't used right`);
  }
  return context;
}
