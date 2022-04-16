import React from 'react';
import {
  Text,
  VStack,
  Flex,
  Button,
  ChakraProvider,
  Container,
  Image,
  HStack,
  Box,
  Slider,
  SliderFilledTrack,
  SliderTrack,
  Link,
} from "@chakra-ui/react";
import logo from '../../pages/login/logo.png'
import { IQuestion } from './question.types';
import Cart from '../../components/Cart/cart.component';
import Summary from '../../components/summary/summary.component';
import { LateralMenu } from '../../components';

function Question(props: IQuestion): JSX.Element {
	return (
	<ChakraProvider>
      <Container maxWidth="full">
        <Flex h="100vh">
            <HStack w="full" h="full" >
                <LateralMenu />
                <VStack h="100%" w="100%">
                    <Box w="100%" h="16%">
                        <HStack justifyContent="space-between" w="full" h="full" paddingRight={55}>
                            <Image src={logo} w="16%" h="80%"/>
                            <VStack alignItems="flex-start" spacing="-2">
                                <Text fontSize="30px" color="blue.500"> Fernanda, let's start! </Text>
                                <Link fontSize="25px"> Save and exit </Link>
                            </VStack>
                        </HStack>
                    </Box>
                    <Box h="68%" w="100%" >
                        <HStack justifyContent="center" h="full" w="full" spacing={51}>
                            <Cart />
                            <Summary />
                        </HStack>
                    </Box>
                    <Box h="16%" w="100%" >
                        <Slider defaultValue={10} isReadOnly={true} size="lg" w="full">
                            <SliderTrack w="full" bg="#C9C9C9">
                                <SliderFilledTrack w="full"/>
                            </SliderTrack>
                        </Slider>
                        <HStack justifyContent="space-between" w="full" paddingRight={55} paddingLeft={55} paddingTop="3">
                            <Button size='lg' fontSize="20px" borderRadius={10}> Back </Button>
                            <Text fontSize="20px" color="#9B9B9B"> 1 of 20 items sent </Text>
                            <Button size='lg' fontSize="20px" borderRadius={10}> Next </Button>
                        </HStack>
                    </Box>
                </VStack>
            </HStack>
        </Flex>
      </Container>
	</ChakraProvider>
	);
}

export default Question;