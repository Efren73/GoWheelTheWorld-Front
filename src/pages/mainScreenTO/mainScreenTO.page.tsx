import React from 'react';
import {
  Text,
  VStack,
  Grid,
  GridItem,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  ChakraProvider,
  Container,
  AspectRatio,
  Image,
  HStack,
  Link,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from "@chakra-ui/react";
import { DeleteIcon } from '@chakra-ui/icons';
import { IMainScreenTO } from './mainScreenTO.types';
import fondoMS from './FondoMS.png';

function MainScreenTO(props: IMainScreenTO): JSX.Element {
	return (
    <ChakraProvider>
      <Box w='full' h="full">
        <Flex w='full' h="full">
          <Box w="full" h="full">
            <AspectRatio ratio={2.44} w="full" h="full">
              <Image src={fondoMS} alt="fondoMS" position="absolute"/>
            </AspectRatio>
          </Box>
        </Flex>
      </Box>
		</ChakraProvider>
	);
}

export default MainScreenTO;