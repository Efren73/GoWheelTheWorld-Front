import * as React from "react"
import { useState } from "react"
import {
    Text,
    VStack,
    Box,
    HStack,
    Image,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    Button,
  } from "@chakra-ui/react"
  
import logo from '../../login/images/logo.png'
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { fetchTours, updateTour, selectAllTours, getTourStatus, changeState} from "../../../reducers/appSlice";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { IFooter } from "./footer.types";

export let ProgressNav = ["name-of-tour", "type-of-tour", "group-private", "price","description","upload-photos","meeting-point","end-point","stops","languages", "restrictions","children-policy","General","Food","Transport", "assistance","transportation","restrooms","places","equipment","faqs","cancelation-policy","" ]
  function Footer (props:any)  {
    console.log("Checa esto ->", props)
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const tour = useAppSelector(selectAllTours);
    const status = useAppSelector(getTourStatus);
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const location = useLocation();
    const link: string[] = location.pathname.split('/')
    const idTourOperator: string = link[link.length - 1]



    let Position = location.pathname.split('/');
    const index = ProgressNav.findIndex(element => element === Position[Position.length-1]);
    console.log(ProgressNav[index])

    function changeNext(){
      try {
        setAddRequestStatus('pending')
        dispatch(updateTour(tour))
        
      } catch (err) {
        console.error('Failed to save the post', err)
      } finally {
        setAddRequestStatus('idle')
      }
    }

    
    function changeBack(){
      try {
        setAddRequestStatus('pending')
        dispatch(updateTour(tour))
        
      } catch (err) {
        console.error('Failed to save the post', err)
      } finally {
        setAddRequestStatus('idle')
      }
    }

    /* RESPONSIVE ------------------------------------*/
    const fontSizeResponsive = { base:'20px', sm:'15px'};
    
    return (
      <Box h="16%" w="full" marginBottom={'10px'}>
        <Slider defaultValue={0} isReadOnly={true} size="lg" w="full">
            <SliderTrack w="full" bg="#C9C9C9">
                <SliderFilledTrack w="full"/>
            </SliderTrack>
        </Slider>
        <HStack justifyContent="space-between" w="full" paddingRight={41} paddingLeft={41} paddingTop="3">
        <Link to = { ProgressNav[index-1]}>
            <Button size='lg'
                    fontSize={fontSizeResponsive}
                    borderRadius={10}
                    bg="white"
                    border='1px'
                    borderColor="#3F6FE4" 
                    onClick={changeBack}
                    > Back </Button>
          </Link>
            {/*<Text fontSize="20px" color="#9B9B9B"> 1 of 19 items sent </Text>*/}
            <Link to = { ProgressNav[index+1]}>
            <Button size='lg'
                    fontSize={fontSizeResponsive}
                    borderRadius={10}
                    bg="#3F6FE4"
                    color="white"
                    onClick={changeNext}> Next </Button>
            </Link>
        </HStack>
    </Box>
    
    )
  }
  export default Footer;