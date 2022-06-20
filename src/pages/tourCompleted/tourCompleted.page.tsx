import React from 'react';
import {
  Text,
  VStack,
  Heading,
  Flex,
  Button,
  HStack,
  Link,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  Box,
} from "@chakra-ui/react";
import { CheckCircleIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { ITourCompleted } from './tourCompleted.types';
import TopMenu from '../../components/TopMenu/topMenu.component';
import {useNavigate, useLocation} from 'react-router-dom'
import {useAuthState} from "react-firebase-hooks/auth"
import {auth} from "../../firebase/firebase-auth"
import {useEffect} from "react"
import axios from 'axios';

function TourCompleted(props: ITourCompleted): JSX.Element {
    const navigate = useNavigate()

    const [user, loading, error] = useAuthState(auth)

    const location = useLocation();
    const link: string[] = location.pathname.split('/')
    const idTour: string = link[link.length-1]

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


    function change(){
        navigate(`/tour-operator/${user?.uid}`)
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
                            <HStack justifyContent="flex-end" w="full" paddingLeft={5} paddingRight={5}>
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