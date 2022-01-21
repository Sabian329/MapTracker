import {
  Button,
  Collapse,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { CheckIcon, SearchIcon } from "@chakra-ui/icons";
import {
  IconWrapper,
  Menu,
  ResultsLabel,
  SearchButtons,
  Wrapper,
} from "./styled";

import { Fade as Icon } from "hamburger-react";
import React from "react";
import { ResutList } from "../ResultsList";
import { btnConfig } from "../../constans/mapObjectsConfig";
import { menuVariants } from "../../theme/animationsVariants";
import { motion } from "framer-motion";

export const HamburgerMenu = ({
  isMenuOpen,
  setIsMenuOpen,
  setSearchObject,
  apiItems,
  searchObject,
  onSelectCity,
  setBoxId,
  boxId,
}) => {
  const { isOpen, onToggle } = useDisclosure();
  const setEndpointResetId = (btn) => {
    setSearchObject(btn.endpoint);
    setBoxId("");
  };

  return (
    <Wrapper>
      <IconWrapper>
        <Icon toggled={isMenuOpen} toggle={setIsMenuOpen} direction="left" />
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
                    <Button onClick={() => setEndpointResetId(btn)}>
                      {btn.name}
                      {searchObject === btn.endpoint && <CheckIcon />}
                    </Button>
                  </li>
                ))}
              </ul>
            </Collapse>
          </SearchButtons>
          <ResutList
            boxId={boxId}
            searchObject={searchObject}
            setBoxId={setBoxId}
            onSelectCity={onSelectCity}
            apiItems={apiItems}
          />
        </Menu>
      </motion.div>
    </Wrapper>
  );
};
