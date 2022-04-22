import React from 'react';
import {
  Text,
  VStack,
  Flex,
  Button,
  ChakraProvider,
  Image,
  HStack,
  Box,
  Slider,
  SliderFilledTrack,
  SliderTrack,
  Link,
} from "@chakra-ui/react";
import logo from '../../pages/login/images/logo.png'
import { IQuestion } from './question.types';
import Summary from '../../components/summary/summary.component';
import { 
    LateralMenu,
    Cart,
    Multiple,
    GroupPrivate,
    Price,
    Description,
    UploadPhotos,
    Meeting,
    Stops,
    Languages,
    Restrictions,
    ChildPolicy,
    Assistance,
    Transportation,
    Restrooms,
    Places, 
    Equipment,
    Faqs
 } from '../../components';
import { Routes, useNavigate, Outlet } from 'react-router-dom';


function Question(props: IQuestion): JSX.Element {
      const navigate = useNavigate();

      function change(){
        
        navigate('/tour-operator/1/tour-completed/1')
      }
	return (
	<ChakraProvider>
        <Flex h="100vh">
            <HStack w="full" h="full" >
                <LateralMenu />
                <VStack h="100%" w="100%">
                    <Box w="100%" h="16%">
                        <HStack justifyContent="space-between" w="full" h="full" paddingRight={55}>
                            <Image src={logo} w="16%" h="80%"/>
                            <VStack alignItems="flex-start" spacing="-2">
                                <Text fontSize="30px" color="#3F6FE4"> Fernanda, let's start! </Text>
                                <Link fontSize="25px"> Save and exit </Link>
                            </VStack>
                        </HStack>
                    </Box>
                    <Box h="68%" w="100%" >
                        <HStack justifyContent="center" h="full" w="full" spacing={51}>
                            <Outlet />
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
                            <Button size='lg'
                                    fontSize="20px"
                                    borderRadius={10}
                                    bg="white"
                                    border='1px'
                                    borderColor="#3F6FE4" > Back </Button>
                            <Text fontSize="20px" color="#9B9B9B"> 1 of 19 items sent </Text>
                            <Button size='lg'
                                    fontSize="20px"
                                    borderRadius={10}
                                    bg="#3F6FE4"
                                    color="white"
                                    onClick={change}> Next </Button>
                        </HStack>
                    </Box>
                </VStack>
            </HStack>
        </Flex>
	</ChakraProvider>
	);
}

export default Question;