import React,{useState,useEffect} from 'react'
import './App.css'
import Recipe from './Recipe'


function App() {

  const APP_ID='102c5f99';
  const APP_KEY='957c5b43262f34af6864b1fbef5c6827'

  const[recipes,setRecipes]=useState([]);
  const[search,setSearch]=useState('');
  const[query,setQuery]=useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits)
    //console.log(data.hits)
  }

  const updateSearch = e =>{
    setSearch(e.target.value)
  }


  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }
  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" onChange={updateSearch} value={search}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipe-list">
      {recipes.map(recipe=>(
        <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} img={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>
      ))}
      </div>
      
    </div>
  );
}

export default App;
