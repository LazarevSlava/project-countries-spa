import { Layout } from './components/Layout';
import './App.css';
import { ToggleThemeContext } from './helpers/ToggleThemeContext';
import { Main } from './components/Main';
import { Routes, Route } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFoundPage';
import { Country } from './pages/Country';

function App() {
  return (
    <ToggleThemeContext>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Main />}></Route>
          <Route path="/:id" element={<Country />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </ToggleThemeContext>
  );
}

export default App;
