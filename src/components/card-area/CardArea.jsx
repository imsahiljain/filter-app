import React, { Component } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Card from "../card/Card";

class CardArea extends Component {
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
      <SimpleGrid columns={3} spacing={10} m="150">
        {this.state.people.map((peopleList) => {
          return (
            <Card
              id={peopleList.id}
              name={peopleList.name}
              email={peopleList.email}
            />
          );
        })}
      </SimpleGrid>
    );
  }
}

export default CardArea;
