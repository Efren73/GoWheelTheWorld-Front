import React from 'react';
import { Routes, useNavigate, Outlet } from 'react-router-dom';

import {
  VStack,
  Flex,
  ChakraProvider,
  useBreakpointValue,
  HStack,
  Container,
  Box,
} from "@chakra-ui/react";

import { IQuestion } from './question.types';
import Summary from '../../components/summary/summary.component';

import { 
    LateralMenu,
 } from '../../components';

 
import Header from './Header';
import Footer from './Footer';


function Question(props: IQuestion): JSX.Element {
      const navigate = useNavigate();

      const screenSize = useBreakpointValue({ base: 'true', md: 'false', lg:'false' })
      console.log(screenSize)

      function CheckSize(screenSize:any){
          if (screenSize=='false')
              return (
                      <Summary />
                  )
      }

      function change(){
        
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
                    <Box w="90%">
                        <HStack justifyContent="center" h="full" w="full" spacing={50} alignItems='flex-start' marginLeft={'2%'} marginRight={'2%'}>
                            <Outlet />
                            {CheckSize(screenSize)}
                        </HStack>
                    </Box>

                    <Box w='90%'marginLeft={'5%'} alignSelf='center'>
                        <Footer/>
                    </Box>
                    
                </VStack>
            </HStack>
        </Flex>
    </ChakraProvider>
	);
}

export default Question;
