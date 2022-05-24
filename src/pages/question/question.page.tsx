import React from 'react';
import { Routes, useNavigate, Outlet } from 'react-router-dom';

import {
  VStack,
  Flex,
  ChakraProvider,
  useBreakpointValue,
  HStack,
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
                  <Summary/>
                  )
      }

      function change(){
        
        navigate('/tour-operator/1/tour-completed/1')
    }
    
	return (
	<React.Fragment>
        <Flex overflowX='hidden' h="100%">
            <HStack w="full" h="full" >
                <Box  h='full' position='absolute'>
                    <LateralMenu />
                </Box>
                
                <VStack h="100%" w="100%" alignItems="flex-end">
                    <Box w='92%' h="16%" marginLeft='2%'>
                        <Header/>
                    </Box>
                    <Box h="68%" w="100%">
                        <HStack justifyContent="center" 
                                w="full" 
                                spacing={51} 
                                alignItems='flex-start' 
                                marginLeft={'2%'} 
                                height='calc(100vh - 190px)'
                                overflowY='scroll'>
                            <Outlet />
                            {CheckSize(screenSize)}
                        </HStack>
                    </Box>

                    <Box w={[ "90%", "90%", "92%", "94%", "96%", "96.8%"]} marginLeft={'6%'} justifyContent="flex-end">
                        <Footer/>
                    </Box>
                </VStack>
            </HStack>
        </Flex>
    </React.Fragment>
	);
}

export default Question;