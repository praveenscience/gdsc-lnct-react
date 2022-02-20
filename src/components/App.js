import React, { Component } from "react";
import Header from "./Bootstrap/Header";
import Data from "../constants/Data.json";

class App extends Component {
  componentDidMount() {
    document.title = `${Data.Name.FName} ${Data.Name.LName}'s Portfolio`;
  }
  render() {
    return (
      <div className="App">
        <Header dark={true} className="justify-content-center">
          {`${Data.Name.FName} ${Data.Name.LName}'s Portfolio`}
        </Header>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <figure className="text-center">
                <img
                  src="https://i.imgur.com/DQFI0Slh.png"
                  alt={`${Data.Name.FName} ${Data.Name.LName}`}
                  className="img-thumbnail rounded-circle w-75 my-3"
                />
                <figcaption>
                  <h2>{`${Data.Name.FName} ${Data.Name.LName}`}</h2>
                  <h3>{Data.Title}</h3>
                </figcaption>
              </figure>
            </div>
            <div className="col-12 col-md-6">
              <div className="my-3">
                <h2>Welcome to {Data.Name.FName}'s Portfolio</h2>
                <p className="lead">{Data.Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
