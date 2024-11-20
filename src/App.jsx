import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CocktailPage from './pages/CocktailPage';
import RecipeCategoriesPage from './pages/RecipeCategoriesPage';
import RecipePage from './pages/RecipePage';
import RecipeShowPage from './pages/RecipeShowPage';
import SearchPage from './pages/SearchPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cocktails" element={<CocktailPage />} />
            <Route path="/categories" element={<RecipeCategoriesPage />} />
            <Route path="/recipes" element={<RecipePage />} />
            <Route path="/recipes/:id" element={<RecipeShowPage />} />
            <Route path="/ingredients/:ingredient" element={<RecipeShowPage />} />
            <Route path="/search/:query" element={<SearchPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;