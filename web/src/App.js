import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const whiskeySourRecipe = {
  "name": "Whiskey Sour",
  "ingredients": [
    {
      "name": "Whiskey",
      "amount": "50ml"
    }, {
      "name": "Lemon juice",
      "amount": "25ml"
    }
  ]
}

function IngredientDetail(props) {
  const ingredient = props.ingredient
  return <div>{ingredient.name}, {ingredient.amount}</div>
}

function RecipeSummary(props) {
  const recipe = props.recipe;
  const ingredientsList = recipe
    .ingredients
    .map((ingredient) => <li><IngredientDetail ingredient={ingredient}/></li>);
  return (
    <div className="RecipeSummary">
      <div className="RecipeSummaryName">
        {recipe.name}
      </div>
      <ul>
        {ingredientsList}
      </ul>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to Alcobot</h2>
        </div>
        <RecipeSummary recipe={whiskeySourRecipe}/>
      </div>
    );
  }
}

export default App;
