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
  Box,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import logo from './logo.png';
import ImagenPrincipal from '../login/images/ImagenPrincipal.png';
import { ISignup } from './signup.types';

function Signup(props: ISignup): JSX.Element {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

	return (
		<ChakraProvider>
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
          <VStack w="full" spacing={6}>
            <Heading> Become a partner! </Heading>
            <VStack w="full" spacing={4}>
              <FormControl w="62%">
                <VStack alignItems="flex-start" spacing="-2.5">
                  <FormLabel fontSize="20px"> Full name </FormLabel>
                  <Input placeholder="What's your full name?" borderRadius={10} fontSize="20px" size='lg'/>
                </VStack>
              </FormControl>
              <FormControl w="62%">
                <VStack alignItems="flex-start" spacing="-2.5">
                  <FormLabel fontSize="20px"> Company name </FormLabel>
                  <Input placeholder="What's your company name?" borderRadius={10} fontSize="20px" size='lg'/>
                </VStack>
              </FormControl>
              <FormControl w="62%">
                <VStack alignItems="flex-start" spacing="-2.5">
                  <FormLabel fontSize="20px"> Phone number </FormLabel>
                  <Input placeholder="What's your phone number?" borderRadius={10} fontSize="20px" size='lg' type='tel'/>
                </VStack>
              </FormControl>
              <FormControl w="62%">
                <VStack alignItems="flex-start" spacing="-2.5">
                  <FormLabel fontSize="20px"> Email address </FormLabel>
                  <Input placeholder="What's your email address?" borderRadius={10} fontSize="20px" size='lg' type='email' />
                </VStack>
              </FormControl>
              <FormControl w="62%">
                <VStack alignItems="flex-start" spacing="-2.5">
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
                </VStack>
              </FormControl>
            </VStack>
            <Button size='lg'
                    width='62%'
                    fontSize='20px'
                    bg="#2F6FE4"
                    color="white"> Create Account </Button>
          </VStack>
        </Box>
      </Flex>
		</ChakraProvider>
	);
}

export default Signup;