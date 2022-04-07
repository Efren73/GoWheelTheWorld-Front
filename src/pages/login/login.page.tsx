import React from 'react';
import {
  Text,
  VStack,
  Grid,
  GridItem,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  ChakraProvider,
  Container,
  AspectRatio,
  Image,
  HStack,
  Link,
} from "@chakra-ui/react";
import logo from './logo.png';
import ImagenPrincipal from './ImagenPrincipal.png';
import { ILogin } from './login.types';

function Login(props: ILogin): JSX.Element {
	return (
		<ChakraProvider>
      <Container maxWidth="full" >
        <Flex h="100vh">
          <VStack h="full"
                  w="50%"
                  p={90}
                  spacing={1}
                  alignItems="flex-start"
                  background= "blue.100">
            <Heading size="2xl"> HELLO! </Heading>
              <Text> Empower people with disabilities to travel the world without limits </Text>
          </VStack>
          <VStack h="full"
                  w="50%">
            <HStack justifyContent="flex-end" w="full">
              <AspectRatio ratio={1.5} w={32}>
                <Image src={logo} alt="logo" />
              </AspectRatio>
            </HStack>
            <VStack 
              spacing={10}
              alignItems="center"
              justifyContent="center">
              <Heading p={35}> Welcome back! </Heading>
              <Grid rowGap={6}>
                <GridItem colSpan={2}>
                  <FormControl>
                    <FormLabel> Email address </FormLabel>
                    <Input placeholder="What's your email address?" h="50px" w="450px"/>
                  </FormControl>
                </GridItem>

                <GridItem colSpan={2}>
                  <FormControl>
                    <FormLabel> Password </FormLabel>
                    <Input placeholder="What's your password?" h="50px" w="450px"/>
                  </FormControl>
                </GridItem>

                <GridItem colSpan={2}>
                  <Button h="50px" w="450px" >Login</Button>
                </GridItem>
              </Grid>
              <GridItem colSpan={2} p={35}>
                  <Text> Don't have an account yet? </Text>
                  <Link> Click here to become a partner. </Link>
                </GridItem>
            </VStack>
          </VStack>
        </Flex>
      </Container>
		</ChakraProvider>
	);
}

export default Login;