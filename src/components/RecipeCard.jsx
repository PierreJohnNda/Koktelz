import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ id, title, image, category }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img 
          src={image} 
          className="card-img-top" 
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {category && <p className="card-text text-muted">{category}</p>}
          <br></br>
          <Link to={`/recipes/${id}`} className="btn btn-primary">
            Voir la recette
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;