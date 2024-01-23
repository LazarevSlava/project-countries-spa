import { Header } from './components/Header';
import './App.css';
import { ToggleThemeContext } from './helpers/ToggleThemeContext';
import { Search } from './components/Search';
import { CountrySelector } from './components/CountrySelector';

function App() {
    const handleSearch = (str) => {
        console.log(str);
    };

    const handleSelect = (region) => {
        console.log(region);
    };

    return (
        <>
            <ToggleThemeContext>
                <Header />
                <Search onSearch={handleSearch} />
                <CountrySelector onSelect={handleSelect} />
            </ToggleThemeContext>
        </>
    );
}
export default App;
