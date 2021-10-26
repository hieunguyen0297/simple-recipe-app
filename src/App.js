import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Recipe from './Recipe.js'
import uuid from 'react-uuid'

function App() {

  const [query, setQuery] = useState('');
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState('');


  useEffect(() => {
      getRecipe();
      
  },[query])

  const APP_ID = YOUR_API_ID;
  const APP_KEY = YOUR_API_KEY;

  const reqURL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`

  //get recipe
  const getRecipe = async () => {
    const response = await axios.get(reqURL);
    // console.log(response)
    const data = response.data.hits;
    setRecipe(data);
    console.log(data);
  };

  const getSearch = (e) =>{
    setSearch(e.target.value);
    console.log(search);
  }


  //after the the form is submited, the getRecipe runs, if not submit, the getRecipe not run
  const formSubmit = (e) =>{
    e.preventDefault();
    setQuery(search);
    console.log(query);
    console.log('recipe',recipe)
  }

  return (
    <div className='container'>
      
      <h1 className='recipeapp'>Recipe App</h1>
      <form className='search-form' onSubmit={formSubmit}>
        <input className='search-bar' type='text' value={search} onChange={getSearch}></input>
        <button className='search-btn' type='submit'>Search</button>
      </form>
      {recipe != '' ? (
        <div className='second-div'>
        {recipe.map(item => (
          <Recipe key={uuid()} title={item.recipe.label} calories={item.recipe.calories} image={item.recipe.image} url={item.recipe.url} ingredients={item.recipe.ingredients}/>
        ))}
       
        </div>
      ) : (
        <div className='message'>
          <h1>This recipe is not available</h1>
        </div>
      )}
      
    </div>
    
  );
}

export default App;
