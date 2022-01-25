import React, { Component } from "react";
import { Container, Heading, Input } from "@chakra-ui/react";
import "./App.css";
import CardArea from "./components/card-area/CardArea";

class App extends Component {
  render() {
    return (
      <>
        <Heading
          className="heading"
          size="3xl"
          textAlign="center"
          mt="20"
          color="white"
        >
          Filter App
        </Heading>
        <Container>
          <Input
            placeholder="Search here"
            color="white"
            size="lg"
            isInvalid
            errorBorderColor="gray.600"
            mt="20"
            fontFamily="Inter"
          />
        </Container>
        <CardArea />
      </>
    );
  }
}

export default App;
