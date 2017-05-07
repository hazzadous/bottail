import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

function RecipeSummary(props) {
  const name = props.name;
  return (
    <div className="RecipeSummary">
      <div className="RecipeSummaryName">
        {name}
      </div>
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
        <RecipeSummary name="Whiskey Sour"/>
      </div>
    );
  }
}

export default App;
