import {
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  Progress,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokeDesc, getPokemonDets } from "../redux/action";
import { colorTypeGradients } from "../utils/utils";
import axios from "axios";

export const DetailsPage = () => {
  const [pokemon, setPokemon] = useState({});
  const [desc, setDesc] = useState({});
  const [genre, setGenre] = useState({});
  const [pokeDesc, setPokeDesc] = useState({});
  const { name } = useParams();
  const dispatch = useDispatch();
  const { selectedPoke } = useSelector((state) => state);

  let finalBgColor;
  if (selectedPoke[0]?.types.length == 2) {
    finalBgColor = colorTypeGradients(
      selectedPoke[0]?.types[0].type.name,
      selectedPoke[0]?.types[1].type.name,
      selectedPoke[0]?.types.length
    );
  } else {
    finalBgColor = colorTypeGradients(
      selectedPoke[0]?.types[0].type.name,
      selectedPoke[0]?.types[0].type.name,
      selectedPoke[0]?.types.length
    );
  }

  const getPokeDesc1 = (name) => {
    try {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
        .then((res) => {
          setPokeDesc(res.data);
          setDesc(
            res.data.flavor_text_entries.find(
              (someD) => someD.language.name === "en"
            )
          );
          setGenre(res.data.genera.find((ge) => ge.language.name === "en"));
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getPokemonDets(name));
    setPokemon(selectedPoke[0]);
    getPokeDesc1(name);
    // pokemon = { ...selectedPoke };

    // console.log(pokemon, "pokemon");
  }, [dispatch, pokemon, name]);

  // console.log(genre, "genre");
  console.log(selectedPoke, "Selected");
  console.log(pokeDesc, "Desc");
  // console.log(finalBgColor, "color");

  return (
    <Box m={"15rem auto"} width={"100%"} position={"relative"}>
      <Box width={"90%"} m={"auto"}>
        {selectedPoke &&
          selectedPoke.map((poke) => (
            <Flex
              bgGradient={`linear(to-t, ${finalBgColor[0]}, ${finalBgColor[1]})`}
              p={3}
              
              width={"100%"}
              gap={"5rem"}
              m={"auto"}
              border={"1px solid"}
              borderRadius={"1rem"}
            >
              <Box
                borderRadius={"1rem"}
                p={4}
                ml={'4rem'}
                bg="rgba(255, 255, 255, 0.5)"
                backdropFilter="blur(8px)"
                width={"35%"}
                // border={"1px solid blue"}
                // Left Box
              >
                <Box color={"black"} textAlign={"center"}>
                  <Heading fontSize={"3rem"} p={4}>
                    {poke.name.toUpperCase()}
                  </Heading>
                  <Badge
                    mb={2}
                    p={2}
                    fontSize={"1rem"}
                    bgColor={finalBgColor[0]}
                  >
                    {genre.genus}
                  </Badge>
                  <Flex gap={"1rem"} justifyContent={"center"}>
                    {poke.types.map((type) => (
                      <Badge
                        fontSize={"1rem"}
                        p={"0.3rem 0.8rem"}
                        borderRadius={"1rem"}
                        bgColor={finalBgColor[0]}
                      >
                        <Text>{type.type.name}</Text>
                      </Badge>
                    ))}
                  </Flex>
                  <Flex justifyContent={'center'} >
                  <Image
                    mt={"1rem"}
                    src={
                      poke.sprites.other.dream_world.front_default
                        ? poke.sprites.other.dream_world.front_default
                        : poke.sprites.other["official-artwork"].front_default
                    }
                  />

                  </Flex>
                  <Text
                    fontWeight={"500"}
                    fontSize={"1.3rem"}
                    p={2}
                    mt={"2rem"}
                    borderRadius={"1rem"}
                    bg={finalBgColor[1]}
                  >
                    {desc.flavor_text}{" "}
                  </Text>
                  <Box mt={"2rem"} textAlign={"left"}>
                    <Flex fontSize={"1.2rem"} justifyContent={"space-around"}>
                      <Text fontWeight={"700"}>Height </Text>
                      <Text fontWeight={"500"}>{`${
                        poke.height / 10
                      } m/${`${Math.floor(
                        (poke.height / 10) * 3.28
                      )}'${Math.round(
                        (((poke.height / 10) * 3.28) % 1) * 12
                      )}"`} `}</Text>
                    </Flex>
                    <Flex fontSize={"1.2rem"} justifyContent={"space-around"}>
                      <Text fontWeight={"700"}>Weight </Text>
                      <Text fontWeight={"500"}>{` ${(poke.weight / 10).toFixed(
                        1
                      )} kg/${(poke.weight * 0.2205).toFixed(1)} lbs`}</Text>
                    </Flex>
                  </Box>
                </Box>
              </Box>
              <Box color={"black"}
               p={4} 
               m={'auto'}
              //  Right Box
               >
                <Box p={"1rem"} >
                  <Heading fontSize={"1.5rem"}>Abilities :</Heading>
                  <Box
                    borderRadius={"1rem"}
                    fontSize={"1.2rem"}
                    p={"2rem"}
                    mt={"1rem"}
                    bg="rgba(255, 255, 255, 0.5)"
                    backdropFilter="blur(8px)"
                  >
                    <Flex gap={"10rem"}>
                      {poke.abilities.map((abi) => (
                        <Text fontSize={"1.3rem"} fontWeight={"700"}>
                          {abi.ability.name}
                        </Text>
                      ))}
                    </Flex>
                  </Box>
                </Box>
                <Box mt={"2rem"} p={"1rem"}>
                  <Heading fontSize={"1.5rem"}>Base Stats :</Heading>
                  <Box
                    borderRadius={"1rem"}
                    fontSize={"1.2rem"}
                    p={"2rem"}
                    mt={"1rem"}
                    bg="rgba(255, 255, 255, 0.5)"
                    backdropFilter="blur(8px)"
                  >
                    <Flex flexDirection={"column"} gap={"2rem"}>
                      {poke.stats.map((stat) => (
                        <Text fontSize={"1.3rem"} fontWeight={"700"}>
                          {stat.stat.name.toUpperCase()}
                          {" :  "}
                          {stat.base_stat}
                          <Progress colorScheme={stat.base_stat>50 ?"green":"red"} size={"xs"} value={stat.base_stat} />{" "}
                        </Text>
                      ))}
                    </Flex>
                  </Box>
                </Box>
              </Box>
            </Flex>
          ))}
      </Box>
    </Box>
  );
};
