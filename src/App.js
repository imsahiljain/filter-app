import React, { Component } from "react";
import { Heading } from "@chakra-ui/react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ people: data });
      });
  }
  render() {
    return (
      <div>
        <Heading className="heading">Filter App</Heading>
        {this.state.people.map((peopleList) => {
          return (
            <Heading className="heading" size="md" key="{peopleList.id}">
              {peopleList.name}
            </Heading>
          );
        })}
      </div>
    );
  }
}

export default App;
