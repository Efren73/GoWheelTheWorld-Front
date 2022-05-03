import * as React from "react"
import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import {
    ChakraProvider,
    Button,
    Box,
    Checkbox, 
    Text,
    VStack,
    HStack,
    theme,
    Progress,
    Divider,
    Stack,
    Switch,
    FormControl,
    FormLabel,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    Menu,
    Radio, 
    RadioGroup, 
    Grid,
    GridItem,
    MenuButton,
    Wrap,
    MenuList,
    Spacer,
    AccordionPanel,
    MenuItem,
    Heading,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    WrapItem,
    Flex,
  } from "@chakra-ui/react"


  import { ArrowDownIcon, HamburgerIcon } from '@chakra-ui/icons'
  import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
  import { Image } from '@chakra-ui/react'

  import TopMenu from "../../components/TopMenu/topMenu.component"

  function Feature({ Category, Info,  ...rest }:any) {
    return (
            <AccordionItem p={4}>
            <h2>
            <AccordionButton>
                <Box flex='1' textAlign='left'>
                {Category}
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            {Info}
            </AccordionPanel>
            </AccordionItem>
    )
}


  export const AdminSummary = () => {

    let navigate = useNavigate()  
    function Change():void {
        navigate (`/admin`)
    }
      return (
    <ChakraProvider theme={theme}>
         <Flex h="100vh">
            <VStack w="full" h="full">
                <TopMenu />

                <HStack direction={['column', 'row']} justifyContent="space-between" w="80%" >

                    <Box justifyContent="flex-start" paddingBottom={3} >
                        <Heading as='h2' >
                            Tour Summary
                        </Heading>
                        <Text fontSize='2xl'>Summary of the tour divided by categories</Text>

                        <Text p={1} fontSize='md' color='gray.500'>Sky-diving; Rivera Maya, Mapped by: Jhon Wayne on 10/10/21  </Text>
                    </Box>

                    <Box w='15%'>
                        <Image w="50%" src='https://icon-library.com/images/completed-icon/completed-icon-6.jpg' />    
                    </Box>
                </HStack>

                <Accordion defaultIndex={[0]} allowMultiple w="80%" >

                <Feature w={"full"} 
                    Category='Basic information'
                    Info='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.'
                    />
                    
                <Feature w={"full"} 
                    Category='Intenerary'
                    Info='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.'
                    />

                    
                <Feature w={"full"} 
                    Category='Children Policy'
                    Info='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.'
                    />

                    
                <Feature w={"full"} 
                    Category='Accesibility'
                    Info='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.'
                    />
                    
                <Feature w={"full"} 
                    Category='FAQs'
                    Info='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.'
                    />

                </Accordion>



                <HStack w={"full"} h={"full"} justifyContent="space-around" paddingBottom={5}>

                    <Button size='lg'
                                            fontSize="20px"
                                            borderRadius={10}
                                            bg="#3F6FE4"
                                            color="white"
                                            onClick={Change}> Back </Button>
                    
                    <Button size='lg'
                                            fontSize="20px"
                                            borderRadius={10}
                                            bg='gray.500' 
                                            variant='solid'
                                            color="white"
                                            rightIcon={<ArrowDownIcon />}
                                            /*onClick={change}*/> Download </Button>

                </HStack>

            </VStack>
        </Flex>

    
    </ChakraProvider>
  )}
  export default AdminSummary
  
