import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

const RecipeCategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        setCategories(response.data.categories || []);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Nos plats par categories</h1>
      <div className="row">
        {categories.map((category) => (
          <div key={category.idCategory} className="col-md-4 mb-4">
            <div className="card h-100">
              <img 
                src={category.strCategoryThumb} 
                className="card-img-top" 
                alt={category.strCategory}
              />
              <div className="card-body">
                <h5 className="card-title">{category.strCategory}</h5>
                <p className="card-text">{category.strCategoryDescription}</p>
                <Link 
                  to={`/recipes?category=${category.strCategory}`} 
                  className="btn btn-primary"
                >
                  Voir la recette
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeCategoriesPage;