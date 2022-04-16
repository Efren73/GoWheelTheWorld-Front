import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Heading,
  HStack,
  Image,
  AspectRatio,
} from "@chakra-ui/react"
import photo from './images/photo.png';
import duration from './images/duration.png';
import group from './images/group.png';
import child from './images/child.png';
import height from './images/height.png';
import language from './images/language.png';
import location from './images/location.png';
import person from './images/person.png';
import Typetour from './images/type-of-tour.png';
import price from './images/price.png';

const Summary = () => (
  <Box h='100%' w="25%" background="#000" borderRadius='10px' borderColor={'black'}>
    <Heading paddingLeft={22} paddingTop={5} color="#fff">
      Summary
    </Heading>

    <VStack h='80%' overflowY='auto' padding='20px' maxW="98%">
      <VStack w="full" h="full" alignItems="flex-start" spacing="-0.4">
        <Text color='#2F6FE4'>
          Basic Information
        </Text>

        <Box borderRadius='10px' borderColor='#2F6FE4' border='3px solid #2F6FE4' w='98%' padding='10px'>
            <HStack justifyContent='flex-start'>
              <Image src={photo} alt="default image" maxWidth={114} maxH={71}/>
              <Text color='#2F6FE4'>
                Name of the tour
              </Text>
            </HStack>

            <HStack justifyContent="en" w="full">
                <Image src={Typetour} alt="Type of tour icon" w={25} h={25}/>
              <Text color="#fff">
                Type of tour
              </Text> 
            </HStack>

            <HStack >
              <Image src={duration} alt="Duration icon" w={25} h={25} />
              <Text color="#fff">
              Duration
              </Text>
            </HStack>

            <HStack >
              <Image src={group} alt="Group icon" w={25} h={25} />
              <Text color="#fff">
                Group/Private tour
              </Text>
            </HStack>

            <HStack >
              <Image src={person} alt="Number of members icon" w={25} h={25} />
              <Text color="#fff">
                Number of traveleres
              </Text>
            </HStack>

            <HStack >
            <Image src={price} alt="Price icon" w={25} h={25} />
              <Text color="#fff">
                $ Price
              </Text>
            </HStack>
        </Box>
      </VStack>

      <VStack w="full" h="full" alignItems="flex-start" spacing="-0.4">
        <Text color='#2F6FE4'>
          Itinerary
        </Text>

        <Box borderRadius='10px' borderColor='#2F6FE4' border='3px solid #2F6FE4'  w='98%' padding='10px'>
            <HStack justifyContent="en" w="full">
                <Image src={location} alt="Meeting point icon" w={25} h={25}/>
              <Text color="#fff">
                Meeting point
              </Text> 
            </HStack>

            <HStack >
              <Image src={location} alt="End point icon" w={25} h={25} />
              <Text color="#fff">
                End point
              </Text>
            </HStack>
            <HStack >
              <Image src={language} alt="Language icon" w={25} h={25} />
              <Text color="#fff">
                Language
              </Text>
            </HStack>
        </Box>
      </VStack>

      <VStack w="full" h="full" alignItems="flex-start" spacing="-0.4">
        <Text color='#2F6FE4'>
          Children Policy
        </Text>

        <Box borderRadius='10px' borderColor='#2F6FE4' border='3px solid #2F6FE4'  w='98%' padding='10px'>
            <HStack justifyContent="en" w="full">
                <Image src={child} alt="Child icon" w={25} h={25}/>
              <Text color="#fff">
              Children's allow age
              </Text> 
            </HStack>

            <HStack >
              <Image src={price} alt="Price icon" w={25} h={25} />
              <Text color="#fff">
              Children's pay from age
              </Text>
            </HStack>
            <HStack >
              <Image src={height} alt="Height icon" w={25} h={25} />
              <Text color="#fff">
                Limit height
              </Text>
            </HStack>
        </Box>
      </VStack>

      <VStack w="full" h="full" alignItems="flex-start" spacing="-0.4">
        <Text color='#2F6FE4'>
          What's included?
        </Text>

        <Box borderRadius='10px' borderColor='#2F6FE4' border='3px solid #2F6FE4'  w='98%' padding='10px'>
          <Text color="#fff">
            Here are the things included on this tour
          </Text>
        </Box>
      </VStack>
    </VStack>

  </Box>
) 
export default Summary;