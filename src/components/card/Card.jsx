import React, { Component } from "react";
import { Box, Image, Container } from "@chakra-ui/react";

class Card extends Component {
  render() {
    let { id, name, email } = this.props;
    return (
      <Box
        boxShadow="2xl"
        rounded="md"
        border="1px"
        borderColor="gray.200"
        width="auto"
        height="auto"
      >
        <Container>
          <Image
            src={`https://robohash.org/${id}?set=set1&size=180x180`}
            alt="Image"
            width="fit-content"
            height="350px"
            alignItems="center"
            margin="auto"
          />
          <Box p="6" textAlign="center" fontFamily="Inter">
            <Box
              mt="1"
              fontWeight="semibold"
              fontSize="3xl"
              lineHeight="tight"
              isTruncated
            >
              {name}
            </Box>
            <Box>{email}</Box>
            <br />
          </Box>
        </Container>
      </Box>
    );
  }
}

export default Card;
