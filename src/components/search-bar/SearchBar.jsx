import React from "react";
import { Container, Input } from "@chakra-ui/react";

export default function SearchBar({ handleChange }) {
  return (
    <Container>
      <Input
        onChange={handleChange}
        placeholder="Search here"
        color="white"
        size="lg"
        isInvalid
        errorBorderColor="gray.700"
        mt="20"
        fontFamily="Inter"
      />
    </Container>
  );
}
