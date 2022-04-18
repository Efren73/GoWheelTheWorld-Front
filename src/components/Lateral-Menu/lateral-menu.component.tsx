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

 
const LateralMenu = () => {
  const {isOpen,onOpen,onClose}= useDisclosure()
  const btnRef= React.useRef()
  return (
    <ChakraProvider>
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
                    <AccordionPanel pb={4}>
                    <Button colorScheme='white' variant='ghost' height='30px' width='250px' justifyContent="flex-start">Name</Button>
                    <br/><Button colorScheme='white' variant='ghost' height='30px' width='250px' justifyContent="flex-start">Type</Button>
                    <br/><Button colorScheme='white' variant='ghost' height='30px' width='250px' justifyContent="flex-start">Travelers</Button>
                    <br/><Button colorScheme='white' variant='ghost' height='30px' width='250px' justifyContent="flex-start">Price</Button>
                    <br/><Button colorScheme='white' variant='ghost' height='30px' width='250px' justifyContent="flex-start">Description</Button>
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
                    <AccordionPanel pb={4}>
                      <Button colorScheme='white' variant='ghost' height='30px' width='250px' justifyContent="flex-start">Meet/End Point</Button>
                      <br/><Button colorScheme='white' variant='ghost' height='30px' width='250px' justifyContent="flex-start">Stops</Button>
                      <br/><Button colorScheme='white' variant='ghost'height='30px' width='250px' justifyContent="flex-start">Spoken Languages</Button>
                      <br/><Button colorScheme='white' variant='ghost' height='30px' width='250px' justifyContent="flex-start">Restriction</Button>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex='1' textAlign='left'>
                          Children Policy
                        </Box>
                        
                      </AccordionButton>
                    </h2>
                  </AccordionItem>

                  <AccordionItem >
                    <h2>
                      <AccordionButton>
                        <Box flex='1' textAlign='left'>
                          What's Included
                        </Box>
                      </AccordionButton>
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
                    <Button colorScheme='white' variant='ghost' height='30px' width='250px' justifyContent="flex-start">Assisstance</Button>
                    <br/><Button colorScheme='white' variant='ghost' height='30px' width='250px' justifyContent="flex-start">Transportation</Button>
                    <br/><Button colorScheme='white' variant='ghost' height='30px' width='250px' justifyContent="flex-start">Restrooms</Button>
                    <br/><Button colorScheme='white' variant='ghost'height='30px' width='250px' justifyContent="flex-start">Places</Button>
                    <br/><Button colorScheme='white' variant='ghost' height='30px' width='250px' justifyContent="flex-start">Equipment</Button>
                    </AccordionPanel>
                  </AccordionItem>
                  
                  <AccordionItem >
                    <h2>
                      <AccordionButton>
                        <Box flex='1' textAlign='left'>
                          FAQ
                        </Box>
                      </AccordionButton>
                    </h2>
                  </AccordionItem>

                </Accordion>

            </DrawerBody>

          </DrawerContent>
        </Drawer>
      </Box>
    </ChakraProvider>
 
      
  )
}

export default LateralMenu;
