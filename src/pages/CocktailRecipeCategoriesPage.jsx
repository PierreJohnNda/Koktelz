import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import LoadingSpinner from '../components/LoadingSpinner';

const CocktailRecipePage = () => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const url = category
          ? `www.thecocktaildb.com/api/json/v1/1/filter.php?i=${category}`
          : 'www.thecocktaildb.com/api/json/v1/1/search.php?i';
        const response = await axios.get(url);
        setCocktails(response.data.drink || []);
      } catch (error) {
        console.error('Error fetching cocktails:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCocktails();
  }, [category]);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Nos cocktails à base de {category}</h1>
      <div className="row">
        {cocktails.map((cocktail) => (
          <RecipeCard
            key={recipe.idDrinks}
            id={recipe.idDrinks}
            title={recipe.strDrink}
            image={recipe.strDrinkThumb}
            category={recipe.strCategory}
          />
        ))}
      </div>
    </div>
  );
};

export default CocktailRecipePage;