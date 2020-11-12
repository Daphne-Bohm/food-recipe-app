import React, { useEffect, useState } from 'react';
import 'dotenv/config';
import Recipe from './Recipe';
import './App.css';

function App() {

  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_ID = process.env.REACT_APP_API_ID;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('banana');

  useEffect(() =>{
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const searchRecipe = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  const getInput = e => { 
    setSearch(e.target.value);
  }

  return (
    <div className="app">
      <h1 className="title">Recipe finder</h1>
        <form onSubmit={searchRecipe}> 
          <input className="search-bar" type="text" value={search} onChange={getInput} />
          <button type="submit" className="search-button">Search</button>
        </form>
        <div className="recipes">
          {recipes.map( recipe => (
            <Recipe 
              key={recipe.recipe.label} 
              title={recipe.recipe.label} 
              calories={Math.round(recipe.recipe.calories)} 
              image={recipe.recipe.image}
              time={recipe.recipe.totalTime}
              carbs={Math.round(recipe.recipe.digest[1].daily)}
              protein={Math.round(recipe.recipe.digest[2].daily)}
              fat={Math.round(recipe.recipe.digest[0].daily)}
              ingredients={recipe.recipe.ingredients}
              url={recipe.recipe.url}
            />
              
          ))}
        </div>
    </div>
  );
}

export default App;
