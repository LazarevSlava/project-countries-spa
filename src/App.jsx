import { Header } from './components/Header';
import './App.css';
import { Context } from './components/contexts/Context';

function App() {
    return (
        <Context>
            <Header />
        </Context>
    );
}

export default App;
