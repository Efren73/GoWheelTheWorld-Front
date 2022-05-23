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
  Link,
  Box,
  InputGroup,
  InputRightElement,
  useMediaQuery,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import logo from './images/logo.png';
import ImagenPrincipal from './images/ImagenPrincipal.png';
import { ILogin } from './login.types';
import {useNavigate} from 'react-router-dom'

function Login(props: ILogin): JSX.Element {
  
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const navigate = useNavigate();
  const [password, setPassword] = React.useState('')

  function change(){
    if(password === "tour")
      navigate('/tour-operator/1')
    else if(password==="admin")
      navigate('/admin')
  }

  function change2(){
    navigate('/signup')
  }

  function handleChange(e: any){
    setPassword(e.target.value);
  }

  /* RESPONSIVE ------------------------------------*/
  const fontSizeResponsive = { base:'20px', sm:'15px'};
  const [isLargerThan1280] = useMediaQuery('(min-width: 800px)')
  const tamano = { base: "62%", sm: "70%" };

	return (
		<React.Fragment>
      <Flex h="100vh" w="100%">
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
              <VStack w="100%" spacing={59} p={10}>
                <Heading> Welcome back! </Heading>
                <VStack w="full" spacing={10}>
                  <FormControl w={tamano}>
                    <VStack alignItems="flex-start" spacing="-2">
                      <FormLabel fontSize={fontSizeResponsive}> Email address </FormLabel>
                      <Input  placeholder="What's your email address?" 
                              borderRadius={10} 
                              fontSize={fontSizeResponsive}
                              size="lg"
                              border='1px'
                              borderColor='#2F6FE4'
                              isRequired={true}
                              type="email" />
                    </VStack>
                  </FormControl>
                  <FormControl w={tamano}>
                    <VStack alignItems="flex-start" spacing="-2">
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
                          isRequired={true}
                          value={password}
                          onChange={handleChange}
                        />
                        <InputRightElement width='19%' h="100%">
                          <Button h='80%' size='lg' onClick={handleClick} fontSize="15px"> 
                            {show ? <ViewOffIcon w="6" h="6"/> : <ViewIcon w="6" h="6"/>} 
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </VStack>
                  </FormControl>
                </VStack>
                <Button size='lg'
                        w={tamano}
                        fontSize={fontSizeResponsive}
                        bg="#2F6FE4"
                        color="white"
                        borderRadius={10}
                        onClick={change}> Login </Button>
                <VStack spacing="-2">
                  <Text fontSize={fontSizeResponsive}>Don't have an account yet? </Text>
                  <Link fontSize={fontSizeResponsive} color="#2F6FE4" onClick={change2}> Click here to become a partner. </Link>
                </VStack>
              </VStack>
            </Box>
          </Flex>
          : 
          <Flex w="100%" h="full" justifyContent="center">
            <Box w="90%" h="full">
              <HStack justifyContent="flex-end" w="full" h="13%" >
                  <Image src={logo} w={[ "22%", "25%", "28%"]} h={[ "40%", "80%", "80%", "100%" ]}/>
              </HStack>
              <VStack w="full" spacing={59} p={10}>
                <Heading> Welcome back! </Heading>
                <VStack w="full" spacing={10}>
                  <FormControl>
                    <VStack alignItems="flex-start" spacing="-2">
                      <FormLabel fontSize={fontSizeResponsive}> Email address </FormLabel>
                      <Input  placeholder="What's your email address?" 
                              borderRadius={10} 
                              fontSize={fontSizeResponsive}
                              size="lg"
                              border='1px'
                              borderColor='#2F6FE4'
                              isRequired={true}
                              type="email" />
                    </VStack>
                  </FormControl>
                  <FormControl>
                    <VStack alignItems="flex-start" spacing="-2">
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
                          isRequired={true}
                          value={password}
                          onChange={handleChange}
                        />
                        <InputRightElement width='19%' h="100%">
                          <Button h='80%' size='lg' onClick={handleClick} fontSize="15px"> 
                            {show ? <ViewOffIcon w="6" h="6"/> : <ViewIcon w="6" h="6"/>} 
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </VStack>
                  </FormControl>
                </VStack>
                <Button size='lg'
                        width="100%"
                        fontSize={fontSizeResponsive}
                        bg="#2F6FE4"
                        color="white"
                        borderRadius={10}
                        onClick={change}> Login </Button>
                <VStack spacing="-2">
                  <Text fontSize={fontSizeResponsive}>Don't have an account yet? </Text>
                  <Link fontSize={fontSizeResponsive} color="#2F6FE4" onClick={change2}> Click here to become a partner. </Link>
                </VStack>
              </VStack>
            </Box>
          </Flex> }
      </Flex>
		</React.Fragment>
	);
}

export default Login;