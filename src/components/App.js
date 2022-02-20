import React, { Component } from "react";

class App extends Component {
  state = {
    Name: "Dinki Yaduwanshi"
  };
  handleChange = e => {
    this.setState({
      Name: e.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <h1>
          {this.state.Name.trim().length > 0 ? this.state.Name : "Everyone"} is
          awesome! :)
        </h1>
        <input
          type="text"
          value={this.state.Name}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={this.state.Name}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
