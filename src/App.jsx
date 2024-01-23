import { Header } from "./components/Header";
import "./App.css";
import { ToggleThemeContext } from "./helpers/ToggleThemeContext";
import { Search } from "./components/Search";

function App() {
  const handleSearch = (str) => {
    console.log(str);
  };

  return (
    <>
      <ToggleThemeContext>
        <Header />
        <Search onSearch={handleSearch} />
      </ToggleThemeContext>
    </>
  );
}
export default App;
