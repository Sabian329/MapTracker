import { Box, Button, Collapse, Switch, useDisclosure } from "@chakra-ui/react";
import { IconWrapper, Menu, Results, ThemeSwitch, Wrapper } from "./styled";

import { Fade as Icon } from "hamburger-react";
import React from "react";
import { menuVariants } from "../../theme/animationsVariants";
import { motion } from "framer-motion";

export const HamburgerMenu = ({
  isMenuOpen,
  setIsMenuOpen,
  setSearchObject,
  isDarkTheme,
  setIsDarkTheme,
  apiItems,
}) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Wrapper>
        <IconWrapper>
          <Icon toggled={isMenuOpen} toggle={setIsMenuOpen} direction="left" />
        </IconWrapper>
        <motion.div
          animate={isMenuOpen ? "open" : "closed"}
          variants={menuVariants}
        >
          <Menu>
            <ThemeSwitch>
              <p>{isDarkTheme ? "Light" : "Dark"}</p>
              <Switch onChange={() => setIsDarkTheme(!isDarkTheme)} size="lg" />
            </ThemeSwitch>
            <Button color="black" onClick={onToggle}>
              Search
            </Button>
            <Collapse in={isOpen} animateOpacity>
              <Box
                p="40px"
                color="black"
                mt="4"
                bg="teal.500"
                rounded="md"
                shadow="md"
              >
                <ul>
                  <li>
                    <Button onClick={() => setSearchObject("VEHICLE")}>
                      Cars
                    </Button>
                  </li>
                  <li>
                    <Button onClick={() => setSearchObject("PARKING")}>
                      Parkings
                    </Button>
                  </li>
                  <li>
                    <Button onClick={() => setSearchObject("POI")}>Poi</Button>
                  </li>
                </ul>
              </Box>
            </Collapse>
            <Results>
              {apiItems?.map((item) => (
                <p>{item.name}</p>
              ))}
            </Results>
          </Menu>
        </motion.div>
      </Wrapper>
    </>
  );
};
