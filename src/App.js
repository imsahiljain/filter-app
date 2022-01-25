import React, { Component } from "react";
import { Heading } from "@chakra-ui/react";
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

        <CardArea />
      </>
    );
  }
}

export default App;
