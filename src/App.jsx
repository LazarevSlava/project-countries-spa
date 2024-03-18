import { Layout } from './components/Layout';
import './App.css';
import { CountriesDataContext } from './helpers/CountriesDataContext';
import { ToggleThemeContext } from './helpers/ToggleThemeContext';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFoundPage';
import { Country } from './pages/Country';

function App() {
  return (
    <ToggleThemeContext>
      <CountriesDataContext>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/:id" element={<Country />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </CountriesDataContext>
    </ToggleThemeContext>
  );
}

export default App;
