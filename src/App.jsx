import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CocktailRecipePage from './pages/CocktailRecipeCategoriesPage';
import CocktailPage from './pages/CocktailPage';
import RecipeCategoriesPage from './pages/FoodRecipeCategoriesPage';
import RecipePage from './pages/FoodRecipePage';
import RecipeShowPage from './pages/FoodRecipeShowPage';
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
            <Route path="/cocktail-recipes" element={<CocktailRecipePage />} />
            <Route path="/cocktail-recipes/:category" element={<CocktailRecipePage />} />
            <Route path="/categories" element={<RecipeCategoriesPage />} />
            <Route path="/recipes" element={<RecipePage />} />
            <Route path="/recipes/:id" element={<RecipeShowPage />} />
            <Route path="/search/:query" element={<SearchPage />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;