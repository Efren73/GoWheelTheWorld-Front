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
  Stack,
} from "@chakra-ui/react";

import logo from '../../pages/login/images/logo.png';
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
import Header from './Header';
import Footer from './Footer';


function Question(props: IQuestion): JSX.Element {
    const navigate = useNavigate();
    function change() {
        navigate('/tour-operator/1/tour-completed/1')
    }
    
	return (
	<ChakraProvider>
        <Flex>
            <HStack w="full" h="full" >
                <Box  h='full' position='absolute'>
                    <LateralMenu />
                </Box>
                
                <VStack h="100%" w="100%">
                    <Box w='92%' h="16%" marginLeft='2%'>
                        <Header/>
                    </Box>
                    <Box h="68%" w="97%">
                        <HStack justifyContent="center" h="full" w="full" spacing={51} alignItems='flex-start' marginLeft={'2%'}>
                            <Outlet />
                            <Summary />
                        </HStack>
                    </Box>

                    <Box w='96%'marginLeft={'5%'} alignSelf='end'>
                        <Footer/>
                    </Box>
                    
                </VStack>
            </HStack>
        </Flex>
    </ChakraProvider>
	);
}

export default Question;