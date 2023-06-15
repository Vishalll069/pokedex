import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useDebounce } from "use-debounce";
import { useDispatch, useSelector } from "react-redux";
import { searchAction } from "../redux/action";
import { PokemonCard } from "./PokemonCard";
import { Loader } from "./Loader";

const SearchPage = () => {
  const dispatch = useDispatch();
  const [searchIn, setSearchIn] = useState("");
  const [debouncedText] = useDebounce(searchIn, 1000);

  const { searchedPoke, searchError, searchLoad } = useSelector(
    (state) => state
  );

  useEffect(() => {
    dispatch(searchAction(debouncedText));
  }, [debouncedText]);

  const handleSerchIn = (e) => {
    setSearchIn(e.target.value);
  };

  // console.log(debouncedText, "text");
  // console.log(searchedPoke, "pokeSea");
  return (
    <>
      <Box mt={"15rem"} position={"relative"} pt={"30"}>
        <InputGroup
          bg="#242832"
          color="#dbd9ce"
          p={6}
          borderRadius={15}
          width="80%"
          m="auto"
        >
          <Search2Icon bg="transparent" boxSize={8} m={2} />
          <Input
            onChange={handleSerchIn}
            ml={10}
            variant="unstyled"
            fontWeight={600}
            size="lg"
            fontSize={20}
            type="text"
            placeholder="Which Pokemon is Your Fav?"
          />
        </InputGroup>
      </Box>
      {/* <SearchBody debounced={debouncedText}/> */}
      <Box>
        {
            (searchError)? <Box>No such Pokemon Found....</Box> :(
                searchLoad ? (
                    <Center m={"auto"} width={"30%"}>
                        <Loader />
                    </Center>
                ) : (
                  <Box width={"40%"} m={"10rem auto"}>
                    {searchedPoke?.map((pokemon) => (
                      <PokemonCard pokemon={pokemon} key={pokemon.id} />
                    ))}
                  </Box>
                )

            )
        }
      </Box>
    </>
  );
};

export default SearchPage;
