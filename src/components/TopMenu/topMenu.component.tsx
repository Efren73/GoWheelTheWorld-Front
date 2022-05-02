import * as React from "react"
import { useState } from "react"
import {useNavigate} from 'react-router-dom'

import {
    ChakraProvider,
    Box,
    HStack,
    Spacer,
    Heading,
    theme,
    Text,
  } from "@chakra-ui/react"
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

import { Image } from '@chakra-ui/react'
import { ITopMenu } from "./topMenu.types"

function TopMenu(props: ITopMenu): JSX.Element {

    let navigate = useNavigate()

    function Change() {
        navigate (`Settings`)
    }

    return (
        <ChakraProvider theme={theme}>
            <Box bg="black" w='100%' height="15%" color="white">
                <HStack paddingLeft={'10%'} paddingRight={'10%'} h="100%" w="100%" >
                    <Image height="100%"  src='https://pbs.twimg.com/profile_images/1027686473871577090/ti69qWgM_400x400.jpg' />
                    <Spacer />
                    <Text onClick={Change} fontSize={{ base: '20px', md: '25px', lg: '30px' }}>
                        Welcome, Carlos! 
                    </Text>
                    <Avatar onClick={Change} name='Ryan Florence' src='https://bit.ly/ryan-florence'  />
                </HStack>
            </Box>
        </ChakraProvider>
    )
}

export default TopMenu;