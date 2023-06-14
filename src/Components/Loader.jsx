import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";

export const Loader = () => {
  return (
    <Center>
      <Heading>...Loading....</Heading>
      <Box>
        <img src="https://i.gifer.com/VgI.gif" alt="loading-gif"></img>
      </Box>
    </Center>
  );
};
