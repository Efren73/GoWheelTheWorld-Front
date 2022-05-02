import * as React from "react"
import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import { Heading, useDisclosure } from "@chakra-ui/react"
import {
    ChakraProvider,
    Button,
    Box,
    Text,
    VStack,
    HStack,
    Image,
    Divider,
    Input,
    FormControl,
    FormLabel,
    GridItem,
    Grid,
    Flex,
    Editable,
    EditableInput,
    ButtonGroup,
    EditablePreview,

  } from "@chakra-ui/react"
  import TopMenu from "../../components/TopMenu/topMenu.component"
  import { Icon } from '@chakra-ui/react'
  import { CloseIcon , EditIcon } from '@chakra-ui/icons'
  import { MdHome } from 'react-icons/md'
  import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'


  export const UserSettings  = () => {
    
    function MyEditable(data: any, label:string) {
        return(
        <Editable
            textAlign='left'
            value= {data}
            fontSize='md'
            isPreviewFocusable={true}
            >
            <FormLabel>{label}</FormLabel>
            <Input as={EditableInput} borderRadius="4px" />
            <EditablePreview />
        </Editable>
        )
    }

    let [check1, setCheck1] = useState(false)
    const Responsive = { lg: '40%', md: '60%', sm: '80%' };
    const colSpan = { base: 2, md: 1 };


    return(
        <ChakraProvider>
        <Flex h="100vh">
            <VStack w="full" h="full">
                <TopMenu/>

                <HStack w="80%" justifyContent='flex-start'>

                <Button leftIcon={<MdHome />} colorScheme='gray' variant='solid'>
                    Home
                </Button>

                </HStack>
                
                <Box  w={Responsive} >
                    <Heading as='h2'>
                        Profile Settings
                    </Heading>
                    <Text color='gray.400'>
                        Edit your profile
                    </Text>
                </Box>

                <VStack  boxShadow='md' p='6' rounded='md' bg='white' w={Responsive} >


                        <Grid  column={2} columnGap={3} rowGap={6} w="full">

                            <GridItem colSpan={2}>
                                {MyEditable("Carlos Manuel Gonzalez Vallejo", "First Name")}
                            </GridItem>

                            <GridItem colSpan={colSpan}>
                                {MyEditable("Los MexiTours, Cancun", "Company name")}                         
                            </GridItem>

                            <GridItem colSpan={colSpan}>
                                {MyEditable("775 771 6931", "Phone number")}
                            </GridItem>

                            <GridItem colSpan={colSpan}>
                                {MyEditable("A01276000@tec.mx", "Email Address")}                           
                            </GridItem>

                            <GridItem colSpan={colSpan}>
                                {MyEditable("***********", "Password")}
                            </GridItem>
                        </Grid>

                    <Box w='90%' paddingTop={10} >
                        <ButtonGroup variant='solid' spacing='6' size='md'>
                            <Button colorScheme='blue'>Save</Button>
                            <Button>Cancel</Button>
                        </ButtonGroup>
                    </Box>

               </VStack>
            </VStack>
        </Flex>
        </ChakraProvider>
    )} 

    export default UserSettings;
        