import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center py-5">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Chargement en cour...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;