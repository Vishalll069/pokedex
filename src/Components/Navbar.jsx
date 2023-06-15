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
import { BsDiscord, BsTwitter, BsBookmark, BsGithub } from "react-icons/bs";
import { MdCatchingPokemon } from "react-icons/md";
import { FaSearchengin } from "react-icons/fa";
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
        display={["block", "block", "block", "none"]}
      >
        <Flex>
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
              <NavComp icon={<MdCatchingPokemon />} />
            </Link>
            <Link to={"/bookmarks"}>
              <NavComp icon={<BsBookmark />} />
            </Link>
            <Link to={"/search"}>
              <NavComp icon={<FaSearchengin />} />
            </Link>
          </Stack>

        </Flex>
      </Center>
      {/* Phone Nav */}


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
              <NavComp child={"Home"} icon={<MdCatchingPokemon />} />
            </Link>
            <Link to={"/bookmarks"}>
              <NavComp child={`Books`} icon={<BsBookmark />} />
            </Link>
            <Link to={"/search"}>
              <NavComp child={"Search"} icon={<FaSearchengin />} />
            </Link>
          </Stack>
          <Stack direction={"row"} spacing="24px">
            <NavComp
              child={<BsTwitter />}
              to={"https://twitter.com/fullstuckVishal"}
            />

            <NavComp child={<BsDiscord />} to={"https://discord.com/"} />
            <NavComp
              child={<BsGithub />}
              to={"https://github.com/Vishalll069"}
            />
          </Stack>
        </Flex>
      </Center>
    </>
  );
};
