import React from 'react';
import {
  Text,
  VStack,
  Heading,
  Flex,
  Button,
  ChakraProvider,
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
import TopMenu from '../../components/TopMenu/topMenu.component';
import {useNavigate} from 'react-router-dom'

function TourCompleted(props: ITourCompleted): JSX.Element {
    const navigate = useNavigate()
    function change(){
        navigate('/tour-operator/KQt7tDgPInW9txuxDXXl')
    }
	return (
        <React.Fragment>
            <Flex h="100vh">
                <VStack w="full" h="full">
                    <TopMenu />
                    <Box  w="full" h="85%">
                        <VStack spacing={20} justifyContent="center" h="84%">
                            <Heading fontSize="48px" color="#2F6FE4"> NEW TOUR REGISTERED </Heading>
                            <CheckCircleIcon w="40" h="40" color='#00A524'/>
                            <Text fontSize="34px"> YOUR TOUR HAS BEEN REGISTERED! </Text>
                        </VStack>
                        <VStack spacing={5} h="16%">
                            <Slider defaultValue={100} isReadOnly={true} size="lg" w="full">
                                <SliderTrack w="full">
                                    <SliderFilledTrack w="full"/>
                                </SliderTrack>
                            </Slider>
                            <HStack justifyContent="space-between" w="full" paddingLeft={5} paddingRight={5}>
                                <Link color="#2F6FE4" fontSize="20px"> Register another tour </Link>
                                <Button size='lg' 
                                        fontSize="18px" 
                                        rightIcon={<ChevronRightIcon />} 
                                        borderRadius={10}
                                        bg="#2F6FE4"
                                        color="white"
                                        onClick={change}> Finish </Button>
                            </HStack>
                        </VStack>
                    </Box>
                </VStack>
            </Flex>
        </React.Fragment>
	);
}

export default TourCompleted;