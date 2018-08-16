import React, { Component } from "react";
import "./App.css";
import Helmet from "react-helmet";
import ImageGrid from "./components/ImageGrid/ImageGrid";

const images = require("./imageRefs.json");

const getImages = selected => {
  return images.imageRefs.filter(({ content_type }) => {
    const reg = new RegExp(selected, "i");
    return reg.test(content_type);
  });
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "jpeg"
    };
  }

  handleClick(selected) {
    this.setState(() => ({ selected }));
  }

  render() {
    const images = getImages(this.state.selected);
    return (
      <div className="App">
        <Helmet title="Woordmaatje Image galery" />
        <header className="App-header">
          <h1 className="App-title">WoordMaatje images</h1>
        </header>
        <nav>
          <button name="jpeg" onClick={() => this.handleClick("jpeg")}>
            JPEG
          </button>
          <button name="png" onClick={() => this.handleClick("png")}>
            PNG
          </button>
          <button name="swiffy" onClick={() => this.handleClick("swiffy")}>
            swiffy
          </button>
        </nav>
        <ImageGrid images={images} />
      </div>
    );
  }
}

export default App;
