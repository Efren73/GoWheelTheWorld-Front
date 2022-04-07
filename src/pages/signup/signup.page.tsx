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
import { ISignup } from './signup.types';

function Signup(props: ISignup): JSX.Element {
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
              spacing={5}
              alignItems="center"
              justifyContent="center">
              <Heading> Become a partner! </Heading>
              <Grid rowGap={3}>
                <GridItem colSpan={2}>
                  <FormControl>
                    <FormLabel> Full name </FormLabel>
                    <Input placeholder="What's your full name?" h="50px" w="450px"/>
                  </FormControl>
                </GridItem>

                <GridItem colSpan={2}>
                  <FormControl>
                    <FormLabel> Company name </FormLabel>
                    <Input placeholder="What's your phone number?" h="50px" w="450px"/>
                  </FormControl>
                </GridItem>

                <GridItem colSpan={2}>
                  <FormControl>
                    <FormLabel> Phone number </FormLabel>
                    <Input placeholder="What's your password?" h="50px" w="450px"/>
                  </FormControl>
                </GridItem>

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
                  <Button h="50px" w="450px">Create Accoun</Button>
                </GridItem>
              </Grid>
            </VStack>
          </VStack>
        </Flex>
      </Container>
		</ChakraProvider>
	);
}

export default Signup;