import {
  Button,
  Collapse,
  Heading,
  Switch,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { CheckIcon, MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
import {
  IconWrapper,
  Menu,
  ResultsLabel,
  SearchButtons,
  ThemeSwitch,
  Wrapper,
} from "./styled";

import { Fade as Icon } from "hamburger-react";
import React from "react";
import { btnConfig } from "../../constans/mapObjectsConfig";
import { menuVariants } from "../../theme/animationsVariants";
import { motion } from "framer-motion";

export const HamburgerMenu = ({
  isMenuOpen,
  setIsMenuOpen,
  setSearchObject,
  isDarkTheme,
  setIsDarkTheme,
  apiItems,
  searchObject,
}) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Wrapper>
      <IconWrapper>
        <Icon
          color={isDarkTheme ? "#FFF" : "#000"}
          toggled={isMenuOpen}
          toggle={setIsMenuOpen}
          direction="left"
        />
      </IconWrapper>
      <motion.div
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <Menu>
          <ResultsLabel>
            <Text>results</Text>
            <Heading>{apiItems.length}</Heading>
          </ResultsLabel>

          <ThemeSwitch>
            <MoonIcon />
            <Switch onChange={() => setIsDarkTheme(!isDarkTheme)} size="md" />
            <SunIcon />
          </ThemeSwitch>
          <SearchButtons>
            <Button
              rightIcon={<SearchIcon />}
              colorScheme="blue"
              color="black"
              onClick={onToggle}
            >
              Search
            </Button>
            <Collapse in={isOpen} animateOpacity>
              <ul>
                {btnConfig.map((btn) => (
                  <li key={btn.name}>
                    <Button onClick={() => setSearchObject(btn.endpoint)}>
                      {btn.name}
                      {searchObject === btn.endpoint && <CheckIcon />}
                    </Button>
                  </li>
                ))}
              </ul>
            </Collapse>
          </SearchButtons>
        </Menu>
      </motion.div>
    </Wrapper>
  );
};
