import './App.css';
import { Search } from './components/Search';

function App() {
    const handleSearch = (str) => {
        console.log(str);
    };

    return (
        <>
            <Search onSearch={handleSearch} />
        </>
    );
}

export default App;
