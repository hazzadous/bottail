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
  const ingredientsItems = recipe
    .ingredients
    .map((ingredient) => <li><IngredientDetail ingredient={ingredient}/></li>);
  return (
    <div className="RecipeSummary">
      <div className="RecipeSummaryName">
        {recipe.name}
      </div>
      <ul>
        {ingredientsItems}
      </ul>
    </div>
  )
}

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    this
      .props
      .handleSubmit(this.state.value);
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Search!</button>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredCocktails: [whiskeySourRecipe]
    }
  }

  handleSearch = (value) => {
    alert('Searching for ' + value);
  }

  render() {
    const filteredCocktails = this.state.filteredCocktails;
    const recipeSummaryItems = filteredCocktails.map((cocktail) => <li><RecipeSummary recipe={cocktail}/></li>);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to Alcobot</h2>
        </div>
        <SearchBox value="Whiskey" handleSubmit={this.handleSearch}/>
        <ul>
          {recipeSummaryItems}
        </ul>
      </div>
    );
  }
}

export default App;
