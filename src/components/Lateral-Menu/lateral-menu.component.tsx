import * as React from "react";
import { useState } from "react";

import {
  useBreakpointValue,
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "react-router-dom";
const LateralMenu = (props: any) => {
  const location = useLocation();
  const link: string[] = location.pathname.split("/");
  const category: string = link[link.length - 1];
  const screenSize = useBreakpointValue({ base: "md", sm: "full", lg: "sm" });

  const basicInformationS = [
    "name-of-tour",
    "type-of-tour",
    "group-private",
    "price",
    "description",
    "upload-photos",
  ];
  const intineraryS = [
    "meeting-point",
    "end-point",
    "stops",
    "languages",
    "restrictions",
  ];
  const whatsIncludedS = [
    "whats-included-general",
    "whats-included-food",
    "whats-included-transport",
    "whats-included-accessibility",
  ];
  const accesibilityS = [
    "assistance",
    "transportation",
    "restrooms",
    "places",
    "equipment",
  ];
  
  const [number,setNumber] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  function CheckLateral(category:string) {
      if (basicInformationS.includes(category) == true) {
          return 0;
        } else if (intineraryS.includes(category) == true) {
          return 1;
        } else if (whatsIncludedS.includes(category) == true) {
          return 2;
        } else if (accesibilityS.includes(category) == true) {
          return 3;
        } else 
        return 4
  }

  return (
    <React.Fragment>
      <Box h="full">
        <Box
          h="full"
          alignItems="flex-start"
          background="#1e272e"
          paddingTop={2}
        >
          <Button colorScheme="blackAlpha" onClick={onOpen} bg="#1e272e">
            <HamburgerIcon w={7} h={7} />
          </Button>
        </Box>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          size={screenSize}
        >
          <DrawerOverlay />
          <DrawerContent bg="#1e272e" color="#fff">
            <DrawerCloseButton />
            <DrawerHeader color="#fff">Tour/Activity Information</DrawerHeader>
            <DrawerBody>
              <Accordion defaultIndex={CheckLateral(category)} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <AccordionIcon />
                      <Box flex="1" textAlign="left">
                        Basic Information
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={5} onClick={onClose}>
                    <Link to="name-of-tour">
                      <Button
                        colorScheme="white"
                        variant="ghost"
                        bg={category == "name-of-tour" ? "#636e72" : "#1e272e"}
                        height="30px"
                        width="250px"
                        justifyContent="flex-start"
                      >
                        Name
                      </Button>
                    </Link>

                    <Link to="type-of-tour">
                      <Button
                        colorScheme="white"
                        variant="ghost"
                        bg={category == "type-of-tour" ? "#636e72" : "#1e272e"}
                        height="30px"
                        width="250px"
                        justifyContent="flex-start"
                      >
                        Type
                      </Button>
                    </Link>

                    <Link to="group-private">
                      <Button
                        colorScheme="white"
                        variant="ghost"
                        bg={category == "group-private" ? "#636e72" : "#1e272e"}
                        height="30px"
                        width="250px"
                        justifyContent="flex-start"
                      >
                        Travelers
                      </Button>
                    </Link>

                    <Link to="price">
                      <Button
                        colorScheme="white"
                        variant="ghost"
                        bg={category == "price" ? "#636e72" : "#1e272e"}
                        height="30px"
                        width="250px"
                        justifyContent="flex-start"
                      >
                        Price
                      </Button>
                    </Link>

                    <Link to="description">
                      <Button
                        colorScheme="white"
                        variant="ghost"
                        bg={category == "description" ? "#636e72" : "#1e272e"}
                        height="30px"
                        width="250px"
                        justifyContent="flex-start"
                      >
                        Description
                      </Button>
                    </Link>

                    <Link to="upload-photos">
                      <Button
                        colorScheme="white"
                        variant="ghost"
                        bg={category == "upload-photos" ? "#636e72" : "#1e272e"}
                        height="30px"
                        width="250px"
                        justifyContent="flex-start"
                      >
                        Upload Photos
                      </Button>
                    </Link>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <AccordionIcon />
                      <Box flex="1" textAlign="left">
                        Itinerary
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={5} onClick={onClose}>
                    <Link to="meeting-point">
                      <Button
                        colorScheme="white"
                        bg={category == "meeting-point" ? "#636e72" : "#1e272e"}
                        variant="ghost"
                        height="30px"
                        width="250px"
                        justifyContent="flex-start"
                      >
                        Meet Point
                      </Button>
                    </Link>

                    <Link to="end-point">
                      <Button
                        colorScheme="white"
                        bg={category == "end-point" ? "#636e72" : "#1e272e"}
                        variant="ghost"
                        height="30px"
                        width="250px"
                        justifyContent="flex-start"
                      >
                        End Point
                      </Button>
                    </Link>

                    <Link to="stops">
                      <Button
                        colorScheme="white"
                        bg={category == "stops" ? "#636e72" : "#1e272e"}
                        variant="ghost"
                        height="30px"
                        width="250px"
                        justifyContent="flex-start"
                      >
                        Stops
                      </Button>
                    </Link>

                    <Link to="languages">
                      <Button
                        colorScheme="white"
                        bg={category == "languages" ? "#636e72" : "#1e272e"}
                        variant="ghost"
                        height="30px"
                        width="250px"
                        justifyContent="flex-start"
                      >
                        Spoken Languages
                      </Button>
                    </Link>

                    <Link to="restrictions">
                      <Button
                        colorScheme="white"
                        bg={category == "restrictions" ? "#636e72" : "#1e272e"}
                        variant="ghost"
                        height="30px"
                        width="250px"
                        justifyContent="flex-start"
                      >
                        Restriction
                      </Button>
                    </Link>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <AccordionIcon />
                      <Box flex="1" textAlign="left">
                        Whats included
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} onClick={onClose}>
                    <Link to="whats-included-general">
                      <Button
                        colorScheme="white"
                        bg={
                          category == "whats-included-general"
                            ? "#636e72"
                            : "#1e272e"
                        }
                        variant="ghost"
                        height="30px"
                        width="250px"
                        justifyContent="flex-start"
                      >
                        General
                      </Button>
                    </Link>

                    <Link to="whats-included-food">
                      <Button
                        colorScheme="white"
                        bg={
                          category == "whats-included-food"
                            ? "#636e72"
                            : "#1e272e"
                        }
                        variant="ghost"
                        height="30px"
                        width="250px"
                        justifyContent="flex-start"
                      >
                        Food
                      </Button>
                    </Link>

                    <Link to="whats-included-transport">
                      <Button
                        colorScheme="white"
                        bg={
                          category == "whats-included-transport"
                            ? "#636e72"
                            : "#1e272e"
                        }
                        variant="ghost"
                        height="30px"
                        width="250px"
                        justifyContent="flex-start"
                      >
                        Transport
                      </Button>
                    </Link>

                    <Link to="whats-included-accessibility">
                      <Button
                        colorScheme="white"
                        bg={
                          category == "whats-included-accessibility"
                            ? "#636e72"
                            : "#1e272e"
                        }
                        variant="ghost"
                        height="30px"
                        width="250px"
                        justifyContent="flex-start"
                      >
                        Accessibility
                      </Button>
                    </Link>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <AccordionIcon />
                      <Box flex="1" textAlign="left">
                        Accessibility
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={5} onClick={onClose}>
                    <Link to="assistance">
                      <Button
                        colorScheme="white"
                        bg={category == "assistance" ? "#636e72" : "#1e272e"}
                        variant="ghost"
                        height="30px"
                        width="250px"
                        justifyContent="flex-start"
                      >
                        Assistance
                      </Button>
                    </Link>

                    <Link to="transportation">
                      <Button
                        colorScheme="white"
                        bg={
                          category == "transportation" ? "#636e72" : "#1e272e"
                        }
                        variant="ghost"
                        height="30px"
                        width="250px"
                        justifyContent="flex-start"
                      >
                        Transportation
                      </Button>
                    </Link>

                    <Link to="restrooms">
                      <Button
                        colorScheme="white"
                        bg={category == "restrooms" ? "#636e72" : "#1e272e"}
                        variant="ghost"
                        height="30px"
                        width="250px"
                        justifyContent="flex-start"
                      >
                        Restrooms
                      </Button>
                    </Link>

                    <Link to="places">
                      <Button
                        colorScheme="white"
                        bg={category == "places" ? "#636e72" : "#1e272e"}
                        variant="ghost"
                        height="30px"
                        width="250px"
                        justifyContent="flex-start"
                      >
                        Places
                      </Button>
                    </Link>

                    <Link to="equipment">
                      <Button
                        colorScheme="white"
                        bg={category == "equipment" ? "#636e72" : "#1e272e"}
                        variant="ghost"
                        height="30px"
                        width="250px"
                        justifyContent="flex-start"
                      >
                        Equipment
                      </Button>
                    </Link>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem bg={category == "children-policy" ? "#636e72" : "#1e272e"} onClick={onClose}>
                  <h2>
                    <Link to="children-policy">
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Children Policy
                        </Box>
                      </AccordionButton>
                    </Link>
                  </h2>
                </AccordionItem>

                <AccordionItem bg={category == "faqs" ? "#636e72" : "#1e272e"} onClick={onClose}
>
                  <h2>
                    <Link to="faqs">
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          FAQs
                        </Box>
                      </AccordionButton>
                    </Link>
                  </h2>
                </AccordionItem>

                <AccordionItem bg={category == "cancelation-policy" ? "#636e72" : "#1e272e"} onClick={onClose}>
                  <h2>
                    <Link to="cancelation-policy">
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Cancelation Policy
                        </Box>
                      </AccordionButton>
                    </Link>
                  </h2>
                </AccordionItem>
              </Accordion>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </React.Fragment>
  );
};

export default LateralMenu;
