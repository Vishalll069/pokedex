import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { colorTypeGradients } from "../utils/utils";

export const PokemonCard = ({ pokemon }) => {
  let finalBgColor;

  if (pokemon.types.length == 2) {
    finalBgColor = colorTypeGradients(
      pokemon.types[0].type.name,
      pokemon.types[1].type.name,
      pokemon.types.length
    );
  } else {
    finalBgColor = colorTypeGradients(
      pokemon.types[0].type.name,
      pokemon.types[0].type.name,
      pokemon.types.length
    );
  }

  return (
    <Box
      borderRadius={20}
      bgGradient={`linear(to-t, ${finalBgColor[0]}, ${finalBgColor[1]})`}
    >
      <Box
        height={250}
        borderRadius={20}
        //   zIndex={100}

        bgImage={`url(${
          pokemon.sprites.other.dream_world.front_default
            ? pokemon.sprites.other.dream_world.front_default
            : pokemon.sprites.other["official-artwork"].front_default
        })`}
        bgSize={"contain"}
        bgPosition="center"
        bgRepeat="no-repeat"
        position="relative"
        cursor="pointer"
        minW={"11%"}
        style={{ transition: "all 200ms ease " }}
        _hover={{
          transform: "scale(1.1)",
          backgroundImage: "none",
          zIndex: "1000",
        }}
      >
        <Flex
          direction={"column"}
          objectFit={"fill"}
          justifyContent={"space-between"}
          bg={"black"}
          width={"100%"}
          height={"100%"}
          opacity={0}
          borderRadius={20}
          style={{ transition: "all 800ms ease " }}
          _hover={{ opacity: "1" }}
        >
          <Image
          width={'100%'}
            height={"70%"}
            bgGradient={`linear(to-t, ${finalBgColor[0]}, #182848)`}
            objectFit={"cover"}
            borderRadius={"10px 10px 0 0"}
            src={
              pokemon.sprites.other.dream_world.front_default
                ? pokemon.sprites.other.dream_world.front_default
                : pokemon.sprites.other["official-artwork"].front_default
            }
            alt=""
          />

          <Box top={0}>
            <Button
              borderTopRadius={"none"}
              bgColor={finalBgColor[0]}
              width={"100%"}
            >
              {pokemon.name}
            </Button>
          </Box>
          <Box borderRadius={10} p={2} bg={"black"}>
            <br />
            <Flex justifyContent={"space-evenly"}>
              {pokemon.types.map((type) => (
                <Badge p={"0.3rem 0.8rem"} borderRadius={'1rem'} bgColor={finalBgColor[0]}>
                  <Text>{type.type.name}</Text>
                </Badge>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
