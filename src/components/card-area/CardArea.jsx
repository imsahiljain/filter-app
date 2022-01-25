import React, { Component } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Card from "../card/Card";
import SearchBar from "../search-bar/SearchBar";

class CardArea extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      searchValue: "",
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
    const { people, searchValue } = this.state;
    const filteredPeople = people.filter((p) => {
      return p.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    return (
      <>
        <SearchBar
          handleChange={(e) => {
            this.setState({ searchValue: e.target.value });
          }}
        />
        <SimpleGrid columns={3} spacing={10} m="150">
          {filteredPeople.map((peopleList) => {
            return (
              <Card
                key={peopleList.id}
                id={peopleList.id}
                name={peopleList.name}
                email={peopleList.email}
              />
            );
          })}
        </SimpleGrid>
      </>
    );
  }
}

export default CardArea;
