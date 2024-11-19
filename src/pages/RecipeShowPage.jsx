import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';

const RecipeShowPage = () => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        setRecipe(response.data.meals?.[0] || null);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (!recipe) return <div className="container py-5">Recette non trouvée</div>;

  const ingredients = Array.from({ length: 20 }, (_, i) => i + 1)
    .map(i => ({
      ingredient: recipe[`strIngredient${i}`],
      measure: recipe[`strMeasure${i}`]
    }))
    .filter(({ ingredient }) => ingredient);

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <img 
            src={recipe.strMealThumb} 
            alt={recipe.strMeal} 
            className="img-fluid rounded shadow-lg mb-4"
          />
        </div>
        <div className="col-md-6">
          <h1 className="mb-4">{recipe.strMeal}</h1>
          <p className="text-muted">
            Category: {recipe.strCategory} | Area: {recipe.strArea}
          </p>
          
          <h3 className="mb-3">Les ingrédients</h3>
          <ul className="list-group mb-4">
            {ingredients.map(({ ingredient, measure }, index) => (
              <li key={index} className="list-group-item">
                {measure} {ingredient}
              </li>
            ))}
          </ul>

          <h3 className="mb-3">Les instructions</h3>
          <div className="card">
            <div className="card-body">
              {recipe.strInstructions.split('\n').map((step, index) => (
                <p key={index}>{step}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeShowPage;