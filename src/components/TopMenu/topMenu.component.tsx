import * as React from "react"
import {
    ChakraProvider,
    Box,
    HStack,
    Spacer,
    theme,
    Text,
  } from "@chakra-ui/react"
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

import { Image } from '@chakra-ui/react'
import { ITopMenu } from "./topMenu.types"

function TopMenu(props: ITopMenu): JSX.Element {
    return (
        <ChakraProvider theme={theme}>
            <Box bg="black" w='100%' height="15%" color="white">
                <HStack justifyContent="space-between" paddingLeft={3} paddingRight={5} h="100%">
                    <Image height="100%" w="140" src='https://pbs.twimg.com/profile_images/1027686473871577090/ti69qWgM_400x400.jpg' />
                    <Spacer />
                    <Text fontSize="25px">
                        Welcome, Carlos! 
                    </Text>
                    <Avatar src='https://bit.ly/broken-link' />
                </HStack>
            </Box>
        </ChakraProvider>
    )
}

export default TopMenu;