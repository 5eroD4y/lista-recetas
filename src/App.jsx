import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';
import recipesData from './components/recipes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';

const App = () => {
  const [recipes, setRecipes] = useState(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('recipes'));
    return savedRecipes || recipesData;
  });

  const [search, setSearch] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFavourite = (id) => {
    const updatedRecipes = recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, favorito: !recipe.favorito } : recipe
    );
    setRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
  };

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const filteredRecipes = recipes.filter((recipe) => {
    const nameMatch = recipe.nombre.toLowerCase().includes(search.toLowerCase());
    const ingredientMatch = recipe.ingredientes.some((ingrediente) =>
      ingrediente.toLowerCase().includes(search.toLowerCase())
    );
    return nameMatch || ingredientMatch;
  }).filter((recipe) => !showFavorites || recipe.favorito);

  const handleFavoritesClick = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <div className="container">
      <SearchBar onSearchChange={handleSearchChange} showFavorites={showFavorites} onFavoritesClick={handleFavoritesClick} />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {filteredRecipes.map((recipe) => (
          <div className="col" key={recipe.id}>
            <RecipeCard key={recipe.id} recipe={recipe} onFavourite={handleFavourite} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;