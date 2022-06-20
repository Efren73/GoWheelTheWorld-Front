import React from 'react';
import { Outlet, useLocation, useNavigate} from 'react-router-dom';

import {
  VStack,
  Flex,
  useBreakpointValue,
  HStack,
  Box,
} from "@chakra-ui/react";
import Summary from '../../components/summary/summary.component';
import { LateralMenu } from '../../components';
import Header from './Header';
import Footer from './Footer';
import { links } from '../../reducers/appSlice'
import {useAuthState} from "react-firebase-hooks/auth"
import {auth} from "../../firebase/firebase-auth"
import {useEffect} from 'react'
import axios from 'axios';

function Question(props: any): JSX.Element {

    const screenSize = useBreakpointValue({ base: 'true',sm: 'true', md: 'false', lg:'false' })
    function CheckSize(screenSize:any){
        if (screenSize ==='false')
            return (
                    <Summary />
                )
    }

    const location = useLocation();
    const link: string[] = location.pathname.split('/')
    const idTourOperator: string = link[link.length - 4]
    const idTour: string = link[link.length-2]
    const section: string = link[link.length-1]
    let navigate = useNavigate()  

    const [user, loading, error] = useAuthState(auth)

    useEffect(() => {
        if(user && !loading){
          axios.get(`https://api-things-to-do.herokuapp.com/tour-operator/info/${user.uid}`)
          .then(result =>{
          })
          .catch(error => {
            if(error.response.data.document === "No document"){
              axios.get(`https://api-things-to-do.herokuapp.com/admin/info/${user.uid}`)
              .then(result => {
                navigate(`/admin/${user.uid}`)
              })
              .catch(error => {
                console.log(error)
              })
            }
          })
        }
        else if(!loading && !user){
            navigate("/")
        }
      },[user, loading])

    links(idTourOperator)
	return (
        <React.Fragment>
            <Flex overflowX='hidden' h="100%" bg='#F2F3F4'>
                <HStack w="full" h="full" >
                    <Box  h='full' position='absolute'>
                        <LateralMenu />
                    </Box>
                    
                    <VStack h="100%" w="100%" alignItems="flex-end">
                        <Box w='92%' h="16%" marginLeft='2%'>
                        {Header(idTourOperator)}     
                        </Box>
                        <Box h="68%" w="100%">
                            <HStack justifyContent="center" 
                                    w="full" 
                                    spacing={47} 
                                    alignItems='flex-start' 
                                    marginLeft='3.5%'
                                    height='calc(100vh - 190px)'
                                    overflowY='scroll'>
                                <Outlet />
                                {CheckSize(screenSize)}
                            </HStack>
                        </Box>

                        <Box w={[ "90%", "90%", "92%", "94%", "96%", "96.8%"]} marginLeft={'6%'} justifyContent="flex-end">
                            {Footer(idTourOperator)}
                        </Box>
                    </VStack>
                </HStack>
            </Flex>
        </React.Fragment>
	)
}

export default Question;