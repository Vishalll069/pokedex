import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAllPokes } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

import { PokemonCard } from "./PokemonCard";
import { Box, SimpleGrid } from "@chakra-ui/react";
// import {} from ""

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
      axios.get(`https://pokeapi.co/api/v2/pokemon?&limit=151`).then((res) => {
        dispatch(getAllPokes(res.data.results));
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLimitPokes();
  }, [dispatch]);

  console.log(allPokemons, "All");
  return (
    <Box mt={'5rem'}>
      <h2>Pokémon Listing Page</h2>
      {isLoading ? (
        <h1>...Home Load</h1>
      ) : (
        <SimpleGrid  columns={6} spacingX='3rem' spacingY='2rem'>
          {
            allPokemons?.map((pokemon) => (
                <PokemonCard pokemon={pokemon} />
            ))

          }
        </SimpleGrid>
      )}
      ;
    </Box>
  );
};

export default ListingPage;
