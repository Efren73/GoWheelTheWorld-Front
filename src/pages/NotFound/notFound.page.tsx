import React, { useEffect, useState, useRef } from "react";
import {
  Button,
  Text,
  VStack,
  HStack,
  Heading,
  Flex,
  useMediaQuery,
  Grid,
  Image,
} from "@chakra-ui/react";

import logo from "../login/images/logo.png";
import ImagenPrincipal from '../login/images/ImagenPrincipal.png'
import { useNavigate, useLocation } from "react-router-dom";
import { INotFound } from "./notFound.types";
import { Responsive } from "../../components/generalTypes";


const NotFound: React.FC = () => {
  const navigate = useNavigate();

  function home() {
    navigate(
      `/login`
    );
}

  /* RESPONSIVE ------------------------------------*/
  const fontSizeResponsive = { base: "20px", sm: "15px" };
  const [isLargerThan1280] = useMediaQuery("(min-width: 800px)");
  const tamano = { base: "62%", sm: "70%" };

  return (
    <React.Fragment>
      <Flex h="100vh" w="100%">
        <Grid
        h='full'
        w='full'
        background="#F8F9F9"
        justifyContent={'center'}
        alignContent={'start'}
        paddingTop={'5%'}
        >
          <VStack>
              <Image
              src={logo}
              h='70%'
              />
          </VStack>
          <HStack
          spacing={'2'}
          >
            <Heading fontSize={'250px'} color="#89A1CD" marginRight={'10px'}>
              404
            </Heading>
            <VStack
            alignItems={'flex-start'}
            >
              <Heading fontSize={'80px'} color="#3F6FE4">
                NOT FOUND
              </Heading>
              <Heading fontSize={Responsive.fontSizeResponsiveBody}>
                Something went wrong!
              </Heading>
              <Text fontSize={Responsive.fontSizeResponsiveBody}>
                Sorry, this page doesn't work!
              </Text>
              <Button
                bg="#3F6FE4"
                color="#fff"
                marginTop="20px"
                borderRadius="20px"
                onClick={home}
                
                fontSize={{ base: "25px", sm: "10px", md: "15px" }}
              >
                Go back home
              </Button>

            </VStack>
           
            
          </HStack>
          
        </Grid>
      </Flex>
    </React.Fragment>
  );
};
export default NotFound;
