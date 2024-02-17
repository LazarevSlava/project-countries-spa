import { Header } from './components/Header';
import './App.css';
import { ToggleThemeContext } from './helpers/ToggleThemeContext';
import { Main } from './components/Main';

function App() {
    return (
        <>
            <ToggleThemeContext>
                <Header />
                <Main />
            </ToggleThemeContext>
        </>
    );
}
export default App;
