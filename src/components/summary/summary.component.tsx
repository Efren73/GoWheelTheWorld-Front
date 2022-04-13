import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
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
  Image,
} from "@chakra-ui/react"

 
function MenuDes() {
  const {isOpen,onOpen,onClose}= useDisclosure()
  const btnRef= React.useRef()
  return (
    <ChakraProvider>
      <Box p={4}>
      <Button colorScheme='blackAlpha' onClick={onOpen}>
     <Text fontSize='4xl'>≡</Text>
      </Button>
        <Drawer 
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        >
          <DrawerOverlay/>
          <DrawerContent bg="gray.50" >
            <DrawerCloseButton/>
            <DrawerHeader> Send your tour/activity</DrawerHeader>
            <DrawerBody>
                <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                      <AccordionIcon />
                        <Box flex='1' textAlign='left'>
                          Basic Information
                        </Box>
                       
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <Button colorScheme='white' variant='ghost' height='30px' width='250px'>Name</Button>
                    <br/><Button colorScheme='white' variant='ghost' height='30px' width='250px'>Type</Button>
                    <br/><Button colorScheme='white' variant='ghost' height='30px' width='250px'>Travelers</Button>
                    <br/><Button colorScheme='white' variant='ghost' height='30px' width='250px'>Price</Button>
                    <br/><Button colorScheme='white' variant='ghost' height='30px' width='250px'>Description</Button>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                      <AccordionIcon />
                        <Box flex='1' textAlign='left'>
                          Intinerary
                        </Box>
                        
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Button colorScheme='white' variant='ghost' height='30px' width='250px'>Meet/End Point</Button>
                    <br/><Button colorScheme='white' variant='ghost' height='30px' width='250px'>Stops</Button>
                    <br/><Button colorScheme='white' variant='ghost'height='30px' width='250px'>Spoken Languages</Button>
                    <br/><Button colorScheme='white' variant='ghost' height='30px' width='250px'>Restriction</Button>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                      <AccordionIcon />
                        <Box flex='1' textAlign='left'>
                          Childern Policy
                        </Box>
                        
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                      <AccordionIcon />
                        <Box flex='1' textAlign='left'>
                          What's Included
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                      <AccordionIcon />
                        <Box flex='1' textAlign='left'>
                          Accessibility
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={5}>
                    <Button colorScheme='white' variant='ghost' height='30px' width='250px'>Assistance‏‏</Button>
                    <br/><Button colorScheme='white' variant='ghost' height='30px' width='250px'>Transportation‏‏‏‏‎‎</Button>
                    <br/><Button colorScheme='white' variant='ghost' height='30px' width='250px'>Restrooms</Button>
                    <br/><Button colorScheme='white' variant='ghost'height='30px' width='250px'>Places</Button>
                    <br/><Button colorScheme='white' variant='ghost' height='30px' width='250px'>Equipment</Button>
                    </AccordionPanel>
                  </AccordionItem>
                  
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                      <AccordionIcon />
                        <Box flex='1' textAlign='left'>
                          FAQ
                        </Box>
                        
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                     
                    </AccordionPanel>
                  </AccordionItem>

                </Accordion>

            </DrawerBody>

            
          </DrawerContent>
        </Drawer>


      </Box>
    </ChakraProvider>
 
      
  )
}

export default MenuDes;
