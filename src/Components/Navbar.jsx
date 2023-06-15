import { HamburgerIcon, PhoneIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import {IoIosArrowForward} from '@chakra-ui/icons'
import { BsDiscord, BsTwitter } from "react-icons/bs";
import React from "react";
import { Link } from "react-router-dom";
import { NavComp } from "./Navcomponent";
import logo from "../assets/pokedex.png";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Center
        width={"100%"}
        position={"fixed"}
        top={"0"}
        p={"1rem"}
        bg={"#182848"}
        zIndex={10}
        display={["none", "none", "none", "block"]}
      >
        <Flex
          // position={"fixed"}
          width={"80%"}
          m={"auto"}
          justify={"space-between"}
          zIndex={10}
          alignItems={"center"}
          bg={"transparent"}
          style={{ transition: "all 300ms ease " }}
        >
          <Box>
            <Image width={"50%"} src={logo} />
          </Box>
          <Stack
            bg={"transparent"}
            direction={"row"}
            spacing="24px"
            alignItems={"center"}
            _hover={{ ".nav_text": { opacity: 1 } }}
          >
            <Link to={"/"}>
              <NavComp child={"Home"} />
            </Link>
            <Link to={"/bookmarks"}>
              <NavComp child={"Books"} />
            </Link>
            <Link to={"/search"}>
              <NavComp child={"Search"} />
            </Link>
          </Stack>
          <Stack direction={"row"} spacing="24px">
            <NavComp child={<BsTwitter />} />

            <NavComp child={<BsDiscord />} />
          </Stack>
        </Flex>
      </Center>
    </>
  );
};
