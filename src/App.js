import React, { Component } from "react";
import "./App.css";
import Helmet from "react-helmet";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet title="Woordmaatje Image galery" />
        <header className="App-header">
          <h1 className="App-title">WoordMaatje images</h1>
        </header>
      </div>
    );
  }
}

export default App;
