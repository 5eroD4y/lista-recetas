import React from 'react';

// Componente para la barra de búsqueda
const SearchBar = ({ onSearchChange, showFavorites, onFavoritesClick }) => {
  return (
    <div className="search-bar d-flex align-items-center" style={{ marginTop: '20px', marginBottom: '20px' }}>
      <button className="btn btn-secondary mr-3" onClick={onFavoritesClick} style={{marginRight: "5px"}}>
        {showFavorites ? 'Mostrar todos' : 'Mostrar solo favoritos'}
      </button>
      <input 
        type="text" 
        className="form-control" 
        placeholder="Buscar recetas por nombre o ingrediente" 
        aria-label="Buscar recetas" 
        aria-describedby="button-addon2"
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBar;