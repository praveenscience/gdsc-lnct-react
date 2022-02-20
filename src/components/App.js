import React, { Component } from "react";
import Header from "./Bootstrap/Header";

class App extends Component {
  componentDidMount() {
    document.title = "Dinki's Portfolio";
  }
  render() {
    return (
      <div className="App">
        <Header dark={true} className="justify-content-center">
          Dinki's Portfolio
        </Header>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <figure className="text-center">
                <img
                  src="https://i.imgur.com/DQFI0Slh.png"
                  alt="Dinki"
                  className="img-thumbnail rounded-circle w-75 my-3"
                />
                <figcaption>
                  <h2>Dinki Yaduwanshi</h2>
                  <h3>Front End Developer</h3>
                </figcaption>
              </figure>
            </div>
            <div className="col-12 col-md-6">
              <div className="my-3">
                <h2>Welcome to Dinki's Portfolio</h2>
                <p className="lead">
                  Thanks for coming and watching my portfolio! Your presence is
                  great!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
