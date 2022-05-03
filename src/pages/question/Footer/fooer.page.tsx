import * as React from "react"

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
import { useNavigate } from "react-router-dom";
import { IFooter } from "./footer.types";

  function Footer(props: IFooter): JSX.Element {
    const navigate = useNavigate();

    function change(){
      
      navigate('/tour-operator/1/tour-completed/1')

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
    
    )
    }
  export default Footer;