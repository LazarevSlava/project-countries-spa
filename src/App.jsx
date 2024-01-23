import { Header } from "./components/Header";
import "./App.css";
import { ToggleThemeContext } from "./helpers/ToggleThemeContext";

function App() {
  return (
    <ToggleThemeContext>
      <Header />
    </ToggleThemeContext>
  );
}

export default App;
