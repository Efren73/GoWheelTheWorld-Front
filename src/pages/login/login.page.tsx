import React from 'react';
import {
  Text,
  VStack,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  ChakraProvider,
  Container,
  Image,
  HStack,
  Link,
  Box,
  InputGroup,
  InputRightElement,

} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import logo from './logo.png'
import ImagenPrincipal from './ImagenPrincipal.png';
import { ILogin } from './login.types';

function Login(props: ILogin): JSX.Element {
  
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

	return (
		<ChakraProvider>
      <Container maxWidth="full">
        <Flex h="100vh">
          <Box bgImage={`url(${ImagenPrincipal})`} w="50%" h="full" bgSize={"cover"}>
            <VStack h="full"
                    w="full"
                    paddingLeft={10}
                    paddingTop={85}
                    paddingRight={5}
                    alignItems="flex-start">
              <Heading fontSize="50px"> HELLO! </Heading>
              <Text fontSize="30px"> Empower people with disabilities to travel the world without limits </Text>
            </VStack>
          </Box>
          <Box w="50%">
            <HStack justifyContent="flex-end" w="full" h="13%" >
                <Image src={logo} w="22%" h="full"/>
            </HStack>
            <VStack w="full" spacing={20} p={10}>
              <Heading> Welcome back! </Heading>
              <VStack w="full" spacing={10}>
                <FormControl w="62%">
                  <FormLabel fontSize="25px"> Email address </FormLabel>
                  <Input placeholder="What's your email address?" borderRadius={10} fontSize="20px"/>
                </FormControl>
                <FormControl w="62%">
                  <FormLabel fontSize="20px"> Password </FormLabel>
                  <InputGroup size='md'>
                    <Input
                      type={show ? 'text' : 'password'}
                      placeholder="What's your password?"
                      borderRadius={10}
                      fontSize="20px"
                      size='lg'
                    />
                    <InputRightElement width='18%' h="100%">
                      <Button h='80%' size='lg' onClick={handleClick} fontSize="15px"> 
                        {show ? <ViewOffIcon w="6" h="6"/> : <ViewIcon w="6" h="6"/>} 
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </VStack>
              <Button size='lg'
                      width='62%'
                      fontSize='30px'> Login </Button>
              <VStack>
                <Text>Don't have an account yet? </Text>
                <Link color="blue.500"> Click here to become a partner. </Link>
              </VStack>
            </VStack>
          </Box>
        </Flex>
      </Container>
		</ChakraProvider>
	);
}

export default Login;