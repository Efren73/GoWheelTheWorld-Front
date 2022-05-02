import * as React from "react"

import {
    Text,
    VStack,
    Box,
    HStack,
    Link,
    Image,
  } from "@chakra-ui/react"
  
  import logo from '../../login/images/logo.png'

  const Header = () => (
    <HStack w='full' h="16%" spacing={'70%'}>
        <Box alignItems={'flex-start'} w="10%">
            <Image src={logo} />
        </Box>
        <Box alignItems={'flex-end'}>
            <VStack alignItems="flex-start" spacing="-2">
                <Text fontSize="30px" color="#3F6FE4"> Fernanda, let's start! </Text>
                <Link fontSize="25px"> Save and exit </Link>
            </VStack>
        </Box>
    </HStack>
  )
  export default Header;