import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; 

const SearchPage = () => {
  const { query } = useParams(); 
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await response.json();
      setRecipes(data.meals || []);
    };

    fetchRecipe();
  }, [query]);

  return (
    <div className='container py-5'>
      <br></br>
      <h2>Résultat pour : {query}</h2>
      <div className="row">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.idMeal} className="col-md-4">
              <div className="card">
                <img src={recipe.strMealThumb} className="card-img-top" alt={recipe.strMeal} />
                <div className="card-body">
                  <h5 className="card-title">{recipe.strMeal}</h5>
                  <br></br>
                  <Link to={`/recipe/${recipe.idMeal}`} className="btn btn-primary">
                Voir la recette
                  </Link>
                </div>
              </div>
            </div>
          ))



        ) : (

          <p>Aucun résultat trouvé</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;