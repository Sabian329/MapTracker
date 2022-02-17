import {
  Button,
  Collapse,
  Heading,
  Spinner,
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
import React, { useEffect, useState } from "react";

import { Fade as Icon } from "hamburger-react";
import { ResutList } from "../ResultsList";
import { SwitchTheme } from "../SwitchTheme";
import { btnConfig } from "../../constans/mapObjectsConfig";
import { menuVariants } from "../../theme/animationsVariants";
import { motion } from "framer-motion";
import { selectEndpoit, selectTheme } from "../../Redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { switchEndpoint } from "../../Redux/slices/searchEndpoint";

export const HamburgerMenu = ({
  isMenuOpen,
  setIsMenuOpen,
  apiItems,
  onSelectCity,
  setActiveId,
  activeId,
}) => {
  const { isOpen, onToggle } = useDisclosure();
  const [isLoading, setIsLoading] = useState(true);
  const themeStore = useSelector(selectTheme);
  const endpointStore = useSelector(selectEndpoit);
  const dispath = useDispatch();

  const setEndpointResetId = (btn) => {
    endpointStore.searching !== btn.endpoint && setIsLoading(true);
    dispath(switchEndpoint(btn.endpoint));
    setActiveId("");
  };
  useEffect(() => {
    setIsLoading(false);
  }, [apiItems]);

  return (
    <Wrapper>
      <IconWrapper>
        <Icon
          color={themeStore.isDarkTheme ? "#fff" : "#575757"}
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
          <SwitchTheme colorTheme={false} />
          <SwitchTheme colorTheme={true} />
          {/* results counter of api data*/}
          <ResultsLabel>
            <Text>results</Text>
            {isLoading ? <Spinner /> : <Heading>{apiItems.length}</Heading>}
          </ResultsLabel>
          <hr />
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
                    <Button
                      // disabled={searchObject === btn.endpoint && true}
                      onClick={() => setEndpointResetId(btn)}
                    >
                      {btn.name}

                      {endpointStore.searching === btn.endpoint && (
                        <CheckIcon color="green.500" />
                      )}
                    </Button>
                  </li>
                ))}
              </ul>
            </Collapse>
          </SearchButtons>
          {/*list of api results*/}
          <ResutList
            isLoading={isLoading}
            activeId={activeId}
            setActiveId={setActiveId}
            onSelectCity={onSelectCity}
            apiItems={apiItems}
          />
        </Menu>
      </motion.div>
    </Wrapper>
  );
};
