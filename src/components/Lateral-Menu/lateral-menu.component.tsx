import * as React from "react"
import {
  ChakraProvider,
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
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

import { BrowserRouter, Link, Route} from "react-router-dom"
import Cart from '../Cart/cart.component'


const LateralMenu = (props: any) => {
  const {isOpen,onOpen,onClose}= useDisclosure()
  const btnRef= React.useRef()

  console.log(props)
  return (
    <Box h="full">
      <Box h="full" alignItems="flex-start" background='#000' paddingTop={2}>
        <Button colorScheme='blackAlpha' onClick={onOpen} >
          <HamburgerIcon w={7} h={7} />
        </Button>
      </Box>
      <Drawer 
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      >
        <DrawerOverlay/>
        <DrawerContent bg="#000" color='#fff'>
          <DrawerCloseButton/>
          <DrawerHeader color='#fff'>Tour/Activity Information</DrawerHeader>
          <DrawerBody>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                    <AccordionIcon />
                      <Box flex='1' textAlign='left' >
                        Basic Information
                      </Box>
                      
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={5}>
                    <Link to="name-of-tour">
                      <Button colorScheme='white' variant='ghost' height='30px' width='250px' justifyContent="flex-start">Name</Button>
                    </Link>

                    <Link to="type-of-tour">
                      <Button colorScheme='white' variant='ghost' height='30px' width='250px' justifyContent="flex-start">Type</Button>
                    </Link>

                    <Link to="group-private">
                      <Button colorScheme='white' variant='ghost' height='30px' width='250px' justifyContent="flex-start">Travelers</Button>
                    </Link>

                    <Link to="price">
                      <Button colorScheme='white' variant='ghost' height='30px' width='250px' justifyContent="flex-start">Price</Button>
                    </Link>

                    <Link to="description">
                      <Button colorScheme='white' variant='ghost' height='30px' width='250px' justifyContent="flex-start">Description</Button>
                    </Link>

                    <Link to="upload-photos">
                      <Button colorScheme='white' variant='ghost' height='30px' width='250px' justifyContent="flex-start">Upload Photos</Button>
                    </Link>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                    <AccordionIcon />
                      <Box flex='1' textAlign='left'>
                        Itinerary
                      </Box>
                      
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={5}>
                    <Link to="meeting-point">
                      <Button colorScheme='white' variant='ghost' height='30px' width='250px' justifyContent="flex-start">Meet Point</Button>
                    </Link>
                    
                    <Link to="end-point">
                      <Button colorScheme='white' variant='ghost' height='30px' width='250px' justifyContent="flex-start">End Point</Button>
                    </Link>

                    <Link to="stops">
                      <Button colorScheme='white' variant='ghost' height='30px' width='250px' justifyContent="flex-start">Stops</Button>
                    </Link>
                    
                    <Link to="languages">
                      <Button colorScheme='white' variant='ghost'height='30px' width='250px' justifyContent="flex-start">Spoken Languages</Button>
                    </Link>

                    <Link to="restrictions">
                      <Button colorScheme='white' variant='ghost' height='30px' width='250px' justifyContent="flex-start">Restriction</Button>
                    </Link>

                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    
                    <Link to="children-policy">
                      <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        Children Policy
                        </Box>
                      </AccordionButton>
                    </Link>

                  </h2>
                </AccordionItem>

                <AccordionItem >
                  <h2>

                    <Link to="whats-included">
                      <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        What's Included
                        </Box>
                      </AccordionButton>
                    </Link>

                  </h2>
                </AccordionItem>

                <AccordionItem >
                  <h2>
                    <AccordionButton>
                    <AccordionIcon />
                      <Box flex='1' textAlign='left'>
                        Accessibility
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={5}>

                    <Link to="assistance">
                      <Button colorScheme='white' variant='ghost' height='30px' width='250px' justifyContent="flex-start">Assistance</Button>
                    </Link>

                    <Link to="transportation">
                      <Button colorScheme='white' variant='ghost' height='30px' width='250px' justifyContent="flex-start">Transportation</Button>
                    </Link>

                    <Link to="restrooms">
                      <Button colorScheme='white' variant='ghost' height='30px' width='250px' justifyContent="flex-start">Restrooms</Button>
                    </Link>

                    <Link to="places">
                      <Button colorScheme='white' variant='ghost'height='30px' width='250px' justifyContent="flex-start">Places</Button>
                    </Link>

                    <Link to="equipment">
                      <Button colorScheme='white' variant='ghost' height='30px' width='250px' justifyContent="flex-start">Equipment</Button>
                    </Link>

                  </AccordionPanel>
                </AccordionItem>
                
                <AccordionItem >
                  <h2>

                    <Link to="faqs">
                      <AccordionButton>
                        <Box flex='1' textAlign='left'>
                          FAQ
                        </Box>
                      </AccordionButton>
                    </Link>

                  </h2>
                </AccordionItem>

                <AccordionItem >
                  <h2>

                    <Link to="cancelation-policy">
                      <AccordionButton>
                        <Box flex='1' textAlign='left'>
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
  )
}

export default LateralMenu;
