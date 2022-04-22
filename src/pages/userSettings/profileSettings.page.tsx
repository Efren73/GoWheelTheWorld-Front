import * as React from "react"
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
    MenuButton,
    Wrap,
    MenuList,
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

  import { ChevronDownIcon, ArrowDownIcon, WarningIcon } from '@chakra-ui/icons'
  import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
  import { Image } from '@chakra-ui/react'

  import TopMenu from "../../components/TopMenu/topMenu.component"

  function Feature({ Category, Info,  ...rest }:any) {
    return (
            <AccordionItem>
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

  export const profileSettings = () => (
    <ChakraProvider theme={theme}>
         <Flex h="100vh">
            <VStack w="full" h="full">
                <TopMenu />
                
                <Box justifyContent="flex-start" w="80%">
                    <Heading as='h2' >
                        Tour Summary
                    </Heading>
                    <Text fontSize='2xl'>Summary of the tour divided by categories</Text>

                </Box>

                <Accordion defaultIndex={[0]} allowMultiple w="80%">

                <Feature w={"full"} 
                    Category='Basic information'
                    />

                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            Section 1 title
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </VStack>
        </Flex>

    
    </ChakraProvider>
  )
  export default profileSettings
  
