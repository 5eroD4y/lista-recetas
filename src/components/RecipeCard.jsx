import React, { useState } from 'react';

const RecipeCard = ({ recipe, onFavourite }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Maneja el click en el botón de expandir
  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  // Maneja el click en el botón de favorito
  const handleFavouriteClick = () => {
    onFavourite(recipe.id);
  };
  

  return (
    <div className={`recipe-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="recipe-card-image-container">
        <img src={recipe.imagen} alt={recipe.nombre} />
        <i
          className={`bi bi-star-fill star ${recipe.favorito ? 'text-warning' : 'text'}`}
          style={{ fontSize: '24px', cursor: 'pointer', position: 'absolute', top: '0', right: '0', marginRight: "10px", marginTop: "10px", color: "white"}}
          onClick={handleFavouriteClick}
        ></i>
      </div>
      <h5 className="card-title">{recipe.nombre}</h5>
      <div>
        <h6 className="card-subtitle mb-2 text-muted">Ingredientes:</h6>
        <ul>
          {isExpanded
            ? recipe.ingredientes.map((ingrediente, index) => (
              <li key={index}>{ingrediente}</li>
            ))
            /* Filtro para solo mostrar maximo 3 ingredientes en las cards pequenas */
            : recipe.ingredientes.slice(0, 3).map((ingrediente, index) => (
              <li key={index}>{ingrediente}</li>
            ))}
          {!isExpanded && recipe.ingredientes.length > 3 && <li>...</li>}
        </ul>
      </div>
      {/* Cards expandidas */}
      {isExpanded && (
        <div className="card-body" style={{maxHeight: 'calc(100% - 150px)'}}>
          <h6>Detalles:</h6>
          <p>Tiempo de preparación: {recipe.tiempoPreparacion}</p>
          <p>Porciones: {recipe.porciones}</p>
          <p>Dificultad: {recipe.dificultad}</p>
          <h6>Pasos:</h6>
          <ol>
            {recipe.pasos.map((paso, index) => (
              <li key={index}>{paso}</li>
            ))}
          </ol>
        </div>
      )}
      <div className="card-footer">
        <button className="btn btn-secondary" onClick={handleExpandClick}>
          {isExpanded ? 'Menos información' : 'Más información'}
        </button>
      </div>
    </div>
  );
};


export default RecipeCard;