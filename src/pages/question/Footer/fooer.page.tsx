import * as React from "react"
import { useState } from "react"
import {
    Text,
    VStack,
    Box,
    HStack,
    Link,
    Image,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    Button,
  } from "@chakra-ui/react"
  
import logo from '../../login/images/logo.png'
import { useNavigate, useLocation } from "react-router-dom";
import { endPoint } from "../../../actions/intineraryAccion";
import {useSelector, useDispatch} from 'react-redux'
import { IFooter } from "./footer.types";

  function Footer ()  {
    let ProgressNav = ["name-of-tour", "type-of-tour", "group-private", "price","description","upload-photos","meeting-point","end-point","stops","languages", "restrictions","children-policy","General","Food","Transport", "assistance","transportation","restrooms","places","equipment","faqs","cancelation-policy","" ]
    let dispatcher =  useDispatch();
    const navigate = useNavigate();
    const location = useLocation();


    let Position = location.pathname.split('/');
    const index = ProgressNav.findIndex(element => element === Position[Position.length-1]);
    console.log(ProgressNav[index])

    function changeNext(){
      if (ProgressNav[index+1]=="")
        navigate('/tour-operator/1/tour-completed/1')
      else
        navigate(`/tour-operator/1/question/1/${ProgressNav[index+1]}`)
        dispatcher(endPoint(""))
    }

    
    function changeBack(){
      if (index===0)
        navigate(`/tour-operator/1`)
      else
        navigate(`/tour-operator/1/question/1/${ProgressNav[index-1]}`)
      //dispatcher(moveNext(Position[Position.length-1]))
    }
    
    return(
      <Box h="16%" w="full" marginBottom={'10px'}>
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
                    borderColor="#3F6FE4" 
                    onClick={changeBack}
                    > Back </Button>
            <Text fontSize="20px" color="#9B9B9B"> 1 of 19 items sent </Text>
            <Button size='lg'
                    fontSize="20px"
                    borderRadius={10}
                    bg="#3F6FE4"
                    color="white"
                    onClick={changeNext}> Next </Button>
        </HStack>
    </Box>
    
    )
    }
  export default Footer;