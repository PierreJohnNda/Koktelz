import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';
import LoadingSpinner from '../components/LoadingSpinner';

const CocktailPage = () => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
        setCocktails(response.data.drinks || []);
      } catch (error) {
        console.error('Error fetching cocktails:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCocktails();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="container py-5">
      <h3 className="text-center mb-5">Nos cocktails signatures</h3>
      <div className="row">
        {cocktails.map((cocktail) => (
          <RecipeCard
            key={cocktail.idDrink}
            id={cocktail.idDrink}
            title={cocktail.strDrink}
            image={cocktail.strDrinkThumb}
          />
        ))}
      </div>
    </div>
  );
};

export default CocktailPage;