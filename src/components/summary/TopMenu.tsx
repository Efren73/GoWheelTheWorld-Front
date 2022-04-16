import * as React from "react"

import {
    ChakraProvider,
    Box,
    HStack,
    Spacer,
    theme,
  } from "@chakra-ui/react"

  import { ChevronDownIcon, ArrowDownIcon, WarningIcon } from '@chakra-ui/icons'
  import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
  import { Image } from '@chakra-ui/react'

  export const TopMenu = () => (
    <ChakraProvider theme={theme}>
        <Box bg="black" w='100%' height="150" color="white">
            <HStack  justifyContent="space-between" paddingLeft={5} paddingRight={5} fontSize="25">
                <Image height="140" w="140" src='https://pbs.twimg.com/profile_images/1027686473871577090/ti69qWgM_400x400.jpg' />
                <Spacer />
                <text>
                    Welcome, Carlos! 
                </text>
                <Avatar src='https://bit.ly/broken-link' />
            </HStack>
        </Box>
    </ChakraProvider>

  )