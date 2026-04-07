import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home';
import DetailsPage from './Pages/Details';
import SearchPage from './Pages/Search';
import CategoriesPage from './Pages/Categories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/categories/:id/:genre" element={<CategoriesPage />} />
        <Route path="/search">
          <Route index element={<SearchPage />} />
          <Route path=":query" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter> 
  )
}

export default App;
