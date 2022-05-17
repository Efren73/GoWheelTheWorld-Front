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
  Image,
  HStack,
  Box,
  InputRightElement,
  InputGroup,
  useMediaQuery
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import logo from './logo.png';
import ImagenPrincipal from '../login/images/ImagenPrincipal.png';
import { ISignup } from './signup.types';

function Signup(props: ISignup): JSX.Element {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  /* RESPONSIVE ------------------------------------*/
  const fontSizeResponsive = { base:'20px', sm:'15px'};
  const [isLargerThan1280] = useMediaQuery('(min-width: 800px)')
  const tamano = { base: "62%", sm: "90%" };

	return (
    <React.Fragment>
      <Flex h="100vh">
        {isLargerThan1280 ?
          <Flex w="100%" h="full">
            <Box bgImage={`url(${ImagenPrincipal})`} w="50%" h="full" bgSize={"cover"}>
              <VStack h="full"
                      w="full"
                      paddingLeft={10}
                      paddingTop={85}
                      paddingRight={5}
                      alignItems="flex-start">
                <Heading fontSize="50px"> HELLO! </Heading>
                <Text fontSize="25px"> Empower people with disabilities to travel the world without limits </Text>
              </VStack>
            </Box>
            <Box w="50%">
              <HStack justifyContent="flex-end" w="full" h="13%" >
                  <Image src={logo} w="22%" h="full"/>
              </HStack>
              <VStack w="full" spacing={14}>
                <Heading> Become a partner! </Heading>
                <VStack w="full" spacing={4}>
                  <FormControl w="62%">
                    <VStack alignItems="flex-start" spacing="-2.5">
                      <FormLabel fontSize={fontSizeResponsive}> Full name </FormLabel>
                      <Input  placeholder="What's your full name?" 
                              borderRadius={10} 
                              fontSize={fontSizeResponsive}
                              size='lg'
                              border='1px'
                              borderColor='#2F6FE4'/>
                    </VStack>
                  </FormControl>
                  <FormControl w="62%">
                    <VStack alignItems="flex-start" spacing="-2.5">
                      <FormLabel fontSize={fontSizeResponsive}> Company name </FormLabel>
                      <Input  placeholder="What's your company name?" 
                              borderRadius={10} 
                              fontSize={fontSizeResponsive} 
                              size='lg'
                              border='1px'
                              borderColor='#2F6FE4'/>
                    </VStack>
                  </FormControl>
                  <FormControl w="62%">
                    <VStack alignItems="flex-start" spacing="-2.5">
                      <FormLabel fontSize={fontSizeResponsive}> Phone number </FormLabel>
                      <Input  placeholder="What's your phone number?" 
                              borderRadius={10} 
                              fontSize={fontSizeResponsive}
                              size='lg' 
                              type='tel'
                              border='1px'
                              borderColor='#2F6FE4'/>
                    </VStack>
                  </FormControl>
                  <FormControl w="62%">
                    <VStack alignItems="flex-start" spacing="-2.5">
                      <FormLabel fontSize={fontSizeResponsive}> Email address </FormLabel>
                      <Input  placeholder="What's your email address?" 
                              borderRadius={10} 
                              fontSize={fontSizeResponsive}
                              size='lg' 
                              type='email'
                              border='1px'
                              borderColor='#2F6FE4'/>
                    </VStack>
                  </FormControl>
                  <FormControl w="62%">
                    <VStack alignItems="flex-start" spacing="-2.5">
                      <FormLabel fontSize={fontSizeResponsive}> Password </FormLabel>
                      <InputGroup size='md'>
                        <Input
                          type={show ? 'text' : 'password'}
                          placeholder="What's your password?"
                          borderRadius={10}
                          fontSize={fontSizeResponsive}
                          size='lg'
                          border='1px'
                          borderColor='#2F6FE4'
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
                        fontSize={fontSizeResponsive}
                        bg="#2F6FE4"
                        color="white"
                        borderRadius={10}> Create Account </Button>
              </VStack>
            </Box>
          </Flex>
          : 
          <Flex w="100%" h="full" justifyContent="center">
            <Box w="90%" h="full">
              <HStack justifyContent="flex-end" w="full" h="13%" >
                  <Image src={logo} w={[ "22%", "25%", "28%"]} h={[ "40%", "80%", "80%", "100%" ]}/>
              </HStack>
              <VStack w="full" spacing={10}>
                <Heading> Become a partner! </Heading>
                <VStack w="full" spacing={4}>
                  <FormControl w="62%">
                    <VStack alignItems="flex-start" spacing="-2.5">
                      <FormLabel fontSize={fontSizeResponsive}> Full name </FormLabel>
                      <Input  placeholder="What's your full name?" 
                              borderRadius={10} 
                              fontSize={fontSizeResponsive} 
                              size='lg'
                              border='1px'
                              borderColor='#2F6FE4'/>
                    </VStack>
                  </FormControl>
                  <FormControl w="62%">
                    <VStack alignItems="flex-start" spacing="-2.5">
                      <FormLabel fontSize={fontSizeResponsive}> Company name </FormLabel>
                      <Input  placeholder="What's your company name?" 
                              borderRadius={10} 
                              fontSize={fontSizeResponsive}
                              size='lg'
                              border='1px'
                              borderColor='#2F6FE4'/>
                    </VStack>
                  </FormControl>
                  <FormControl w="62%">
                    <VStack alignItems="flex-start" spacing="-2.5">
                      <FormLabel fontSize={fontSizeResponsive}> Phone number </FormLabel>
                      <Input  placeholder="What's your phone number?" 
                              borderRadius={10} 
                              fontSize={fontSizeResponsive} 
                              size='lg' 
                              type='tel'
                              border='1px'
                              borderColor='#2F6FE4'/>
                    </VStack>
                  </FormControl>
                  <FormControl w="62%">
                    <VStack alignItems="flex-start" spacing="-2.5">
                      <FormLabel fontSize={fontSizeResponsive}> Email address </FormLabel>
                      <Input  placeholder="What's your email address?" 
                              borderRadius={10} 
                              fontSize={fontSizeResponsive}
                              size='lg' 
                              type='email'
                              border='1px'
                              borderColor='#2F6FE4'/>
                    </VStack>
                  </FormControl>
                  <FormControl w="62%">
                    <VStack alignItems="flex-start" spacing="-2.5">
                      <FormLabel fontSize={fontSizeResponsive}> Password </FormLabel>
                      <InputGroup size='md'>
                        <Input
                          type={show ? 'text' : 'password'}
                          placeholder="What's your password?"
                          borderRadius={10}
                          fontSize={fontSizeResponsive}
                          size='lg'
                          border='1px'
                          borderColor='#2F6FE4'
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
                        fontSize={fontSizeResponsive}
                        bg="#2F6FE4"
                        color="white"
                        borderRadius={10}> Create Account </Button>
              </VStack>
            </Box>
          </Flex> }
      </Flex>
    </React.Fragment>
	);
}

export default Signup;