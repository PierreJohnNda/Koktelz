import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import LoadingSpinner from '../components/LoadingSpinner';

const RecipePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const url = category
          ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
          : 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
        const response = await axios.get(url);
        setRecipes(response.data.meals || []);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [category]);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">
        {category ? `${category} Recipes` : 'All Recipes'}
      </h1>
      <div className="row">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            id={recipe.idMeal}
            title={recipe.strMeal}
            image={recipe.strMealThumb}
            category={recipe.strCategory}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipePage;