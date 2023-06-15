import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAllPokes } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { PokemonCard } from "./PokemonCard";
import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import { Loader } from "./Loader";
// import {} from ""

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.35,
      delayChildren: 0.75,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const items = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -150 },
};



const ListingPage = () => {
  const { allPokemons, isLoading } = useSelector((state) => state);
  const dispatch = useDispatch();

  // const loadMorePokemon = async () => {
  //   setIsLoading(true);
  //   setError("");

  //   try {
  //     const response = await axios.get("https://pokeapi.co/api/v2/pokemon", {
  //       params: {
  //         limit: 10,
  //         offset: (page - 1) * 10,
  //         ...filters,
  //       },
  //     });

  //     setPokemonList((prevList) => [...prevList, ...response.data.results]);
  //     setPage((prevPage) => prevPage + 1);
  //   } catch (error) {
  //     setError("Error loading Pokémon. Please try again.");
  //   }

  //   setIsLoading(false);
  // };

  // const handleScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop ===
  //       document.documentElement.offsetHeight &&
  //     !isLoading
  //   ) {
  //     loadMorePokemon();
  //   }
  // };

  // const handleFilterChange = (e) => {
  //   const { name, value } = e.target;
  //   setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  //   setPokemonList([]); // Reset the Pokémon list when filters change
  //   setPage(1); // Reset the page to 1 when filters change
  // };

  const getLimitPokes = () => {
    try {
      axios.get(`https://pokeapi.co/api/v2/pokemon?&limit=151&offset=0`).then((res) => {
        dispatch(getAllPokes(res.data.results));
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLimitPokes();
  }, [dispatch, getAllPokes]);

  console.log(allPokemons, "All");
  return (
    <Box width={"90%"} margin={"auto"} position={"relative"} mt={"15rem"}>
      {isLoading ? (
        <Loader/>
      ) : (
        <motion.ul style={{
          display: "flex",
          flexWrap: "wrap",
          listStyleType: "none",
          paddingInlineStart: "0px",
          marginBlockStart: "0px",
          marginBlockEnd: "0px",
          alignItems: "center",
          justifyContent: "center",
        }}
        initial="hidden"
        animate="visible"
        variants={list}>
        <SimpleGrid columns={6} spacingX="3rem" spacingY="2rem">
          {allPokemons?.map((pokemon) => (
            <motion.li variants={items} key={pokemon.id} >
              <PokemonCard pokemon={pokemon} />
            </motion.li>
          ))}
        </SimpleGrid>

        </motion.ul>
      )}
    </Box>
  );
};

export default ListingPage;
