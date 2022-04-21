import React from 'react';
import {
  Text,
  VStack,
  Heading,
  Flex,
  Button,
  Image,
  HStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon } from '@chakra-ui/icons';
import { IMainScreenTO } from './mainScreenTO.types';
import ImageInfoMSTO from './ImageInfoMSTO.png';
import fondoMS from './FondoMS.png';
import TopMenu from '../../components/TopMenu/topMenu.component';

function MainScreenTO(props: IMainScreenTO): JSX.Element {
	return (
    <Flex h="100vh">
      <VStack w="full" h="full">
        <TopMenu />
        <Box bgImage={`url(${fondoMS})`} w="full" h="full" bgSize={"cover"}>
          <HStack justifyContent="center" w="full" h="full">
            <Box  w="38%" 
                  h="78%"
                  bgColor="white"
                  p={6}
                  borderRadius={20} 
                  marginRight="100" >
              <VStack spacing={2}>
                <VStack alignItems="flex-start">
                  <HStack>
                    <VStack alignItems="flex-start">
                      <Heading fontSize='30px'> New tour </Heading>
                      <Text fontSize='25px'> People with disabilities are already booking tours and activities through our platform. Become a certified partner! </Text>
                    </VStack>
                    <Image src={ImageInfoMSTO} w="30%"/>
                  </HStack>
                  <Text fontSize='25px'> How to become a Wheel the World Partner? </Text>
                  <HStack>
                    <Text fontSize='22px' color="#2F6FE4"> 1 </Text>
                    <Text fontSize='22px'> Access to any mobile device or computer </Text>
                  </HStack>
                  <HStack>
                    <Text fontSize='22px' color="#2F6FE4"> 2 </Text>
                    <Text fontSize='22px'> Follow the steps on the app </Text>
                  </HStack>
                  <HStack>
                    <Text fontSize='22px' color="#2F6FE4"> 3 </Text>
                    <Text fontSize='22px'> Our team will take care of the rest </Text>
                  </HStack>
                </VStack>
                <HStack justifyContent="center" w="full">
                  <Button size='lg'
                          height='68px'
                          width='200px'
                          fontSize='25px'
                          bg="#2F6FE4" 
                          color="white"> 
                    Let's start! </Button>
                </HStack>
              </VStack>
            </Box>
            <Box  w="38%" 
                  h="78%"
                  bgColor="white"
                  p={6}
                  borderRadius={20} 
                  marginLeft="100">
              <Heading marginBottom={5} fontSize='30px'> Tour registered </Heading>
              <VStack alignItems="flex-start" spacing="-4">
                <Text fontSize='25px'> Bike ride in Manhattan </Text>
                <HStack w="full" spacing={6}>
                  <HStack w="full">
                    <Slider defaultValue={30} isReadOnly={true}>
                      <SliderTrack>
                        <SliderFilledTrack />
                      </SliderTrack>
                    </Slider>
                    <Text fontSize='22px' color="#2F6FE4"> 30% </Text>
                  </HStack>
                  <Button size='md' fontSize="18px" bg="#2F6FE4" color="white"> Continue </Button>
                  <IconButton
                    variant='outline'
                    aria-label='Send email'
                    icon={<DeleteIcon w={6} h={6}/>}
                  />
                </HStack>
              </VStack>
              <VStack alignItems="flex-start" spacing="-4">
                <Text fontSize='25px'> Snorkel with whale sharks </Text>
                <HStack w="full" spacing={6}>
                  <HStack w="full">
                    <Slider defaultValue={70} isReadOnly={true}>
                      <SliderTrack>
                        <SliderFilledTrack />
                      </SliderTrack>
                    </Slider>
                    <Text fontSize='22px' color="#2F6FE4"> 70% </Text>
                  </HStack>
                  <Button size='md' fontSize='18px' bg="#2F6FE4" color="white"> Continue </Button>
                  <IconButton
                    variant='outline'
                    aria-label='Send email'
                    icon={<DeleteIcon w={6} h={6}/>}
                  />
                </HStack>
              </VStack>
            </Box>
          </HStack>
        </Box>
      </VStack>
    </Flex>
	);
}

export default MainScreenTO;