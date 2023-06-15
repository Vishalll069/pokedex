import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PokemonCard } from "./PokemonCard";

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

export const BookmarkPage = () => {
  const [bookmarkedPokemons, setBookmarkedPokemons] = useState([]);

  useEffect(() => {
    const savedBookmarks =
      JSON.parse(localStorage.getItem("bookmarkedPokemons")) || [];
    setBookmarkedPokemons(savedBookmarks);
  }, []);

  const removeBookmark = (pokemonName) => {
    const updatedBookmarks = bookmarkedPokemons.filter(
      (name) => name !== pokemonName
    );
    localStorage.setItem(
      "bookmarkedPokemons",
      JSON.stringify(updatedBookmarks)
    );
    setBookmarkedPokemons(updatedBookmarks);
  };

  return (
    <Box width={"90%"} margin={"auto"} position={"relative"} mb={'10rem'} mt={"15rem"}>
      <Box mb={"3rem"}>
        <Heading>Your Favourite Pokemons</Heading>
      </Box>
      <motion.ul
        style={{
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
        variants={list}
      >
        <SimpleGrid columns={6} spacingX="3rem" spacingY="2rem">
          {bookmarkedPokemons?.map((pokemon) => (
            <motion.li variants={items} key={pokemon.id}>
              <PokemonCard pokemon={pokemon} />
            </motion.li>
          ))}
        </SimpleGrid>
      </motion.ul>
    </Box>
  );
};
