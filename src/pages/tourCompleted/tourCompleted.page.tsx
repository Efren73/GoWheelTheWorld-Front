import React from 'react';
import {
  Text,
  VStack,
  Heading,
  Flex,
  Button,
  ChakraProvider,
  Container,
  HStack,
  Link,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  Box,
} from "@chakra-ui/react";
import { CheckCircleIcon, ChevronRightIcon } from '@chakra-ui/icons';
import fondoMS from '../mainScreenTO/FondoMS.png';
import { ITourCompleted } from './tourCompleted.types';

function TourCompleted(props: ITourCompleted): JSX.Element {
	return (
    <ChakraProvider>
      <Container maxWidth="full">
        <Flex h="100vh">
            <VStack w="full" h="full">
                <Box w="full" h="15%" bgColor="black"> Menú principal </Box>
                <Box  w="full" h="85%">
                <VStack spacing={20} justifyContent="center" h="84%">
                    <Heading fontSize="48px" color="blue.500"> NEW TOUR REGISTERED </Heading>
                    <CheckCircleIcon w="40" h="40" color='green.500'/>
                    <Text fontSize="34px"> YOUR TOUR HAS BEEN REGISTERED! </Text>
                </VStack>
                <VStack spacing={5} h="16%">
                    <Slider defaultValue={100} isReadOnly={true} size="lg" w="full">
                        <SliderTrack w="full">
                            <SliderFilledTrack w="full"/>
                        </SliderTrack>
                    </Slider>
                    <HStack justifyContent="space-between" w="full">
                        <Link color="blue.500" fontSize="20px"> Register another tour </Link>
                        <Button size='lg' fontSize="25px" rightIcon={<ChevronRightIcon />} borderRadius={10}> Finish </Button>
                    </HStack>
                </VStack>
                </Box>
            </VStack>
        </Flex>
      </Container>
		</ChakraProvider>
	);
}

export default TourCompleted;