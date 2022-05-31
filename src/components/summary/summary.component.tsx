import * as React from "react"
import {
  Box,
  Text,
  VStack,
  Heading,
  HStack,
  Image,
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
import { Responsive } from "../generalTypes";

/* RESPONSIVE --------------------------------- */


const Summary = () => (
  <Box h ={{ base: '60%', md: '100%', sm:'100%' }} w={{ base: '25%', md: '25%', sm:'100%' }} background="#000" borderRadius='10px' borderColor={'black'} paddingBottom='20px'>
    <Heading fontSize={Responsive.fontSizeResponsiveBody} paddingLeft={22} paddingTop={5} color="#fff" paddingBottom={4}>
      Summary
    </Heading>

    <VStack h='88%' padding='20px' overflowY='auto'>
      <VStack w="full" h="full" alignItems="flex-start" spacing="-0.4">
        <Text color='#89A1CD' fontSize={Responsive.fontSizeResponsiveBody}>
          Basic Information
        </Text>

        <Box borderRadius='10px' border='3px solid #89A1CD' w='98%' padding='10px'>
            <HStack justifyContent='flex-start'>
              <Image src={photo} alt="default image" maxWidth={114} maxH={71}/>
              <Text color='#89A1CD' fontSize={Responsive.fontSizeResponsiveHead}>
                Name of the tour
              </Text>
            </HStack>

            <HStack justifyContent="en" w="full">
                <Image src={Typetour} alt="Type of tour icon" w={25} h={25}/>
              <Text color="#fff" fontSize={Responsive.fontSizeResponsiveHead}>
                Type of tour
              </Text> 
            </HStack>

            <HStack >
              <Image src={duration} alt="Duration icon" w={25} h={25} />
              <Text color="#fff" fontSize={Responsive.fontSizeResponsiveHead}>
              Duration
              </Text>
            </HStack>

            <HStack >
              <Image src={group} alt="Group icon" w={25} h={25} />
              <Text color="#fff" fontSize={Responsive.fontSizeResponsiveHead}>
                Group/Private tour
              </Text>
            </HStack>

            <HStack >
              <Image src={person} alt="Number of members icon" w={25} h={25} />
              <Text color="#fff" fontSize={Responsive.fontSizeResponsiveHead}>
                Number of traveleres
              </Text>
            </HStack>

            <HStack >
            <Image src={price} alt="Price icon" w={25} h={25} />
              <Text color="#fff" fontSize={Responsive.fontSizeResponsiveHead}>
                $ Price
              </Text>
            </HStack>
        </Box>
      </VStack>

      <VStack w="full" h="full" alignItems="flex-start" spacing="-0.4">
        <Text color='#89A1CD' fontSize={Responsive.fontSizeResponsiveHead}>
          Itinerary
        </Text>

        <Box borderRadius='10px' border='3px solid #89A1CD'  w='98%' padding='10px'>
            <HStack justifyContent="en" w="full">
                <Image src={location} alt="Meeting point icon" w={25} h={25}/>
              <Text color="#fff" fontSize={Responsive.fontSizeResponsiveHead}>
                Meeting point
              </Text> 
            </HStack>

            <HStack >
              <Image src={location} alt="End point icon" w={25} h={25} />
              <Text color="#fff" fontSize={Responsive.fontSizeResponsiveHead}>
                End point
              </Text>
            </HStack>
            <HStack >
              <Image src={language} alt="Language icon" w={25} h={25} />
              <Text color="#fff" fontSize={Responsive.fontSizeResponsiveHead}>
                Language
              </Text>
            </HStack>
        </Box>
      </VStack>

      <VStack w="full" h="full" alignItems="flex-start" spacing="-0.4">
        <Text color='#89A1CD' fontSize={Responsive.fontSizeResponsiveHead}>
          Children Policy
        </Text>

        <Box borderRadius='10px' border='3px solid #89A1CD'  w='98%' padding='10px'>
            <HStack justifyContent="en" w="full">
                <Image src={child} alt="Child icon" w={25} h={25}/>
              <Text color="#fff" fontSize={Responsive.fontSizeResponsiveHead}>
              Children's allow age
              </Text> 
            </HStack>

            <HStack >
              <Image src={price} alt="Price icon" w={25} h={25} />
              <Text color="#fff" fontSize={Responsive.fontSizeResponsiveHead}>
              Children's pay from age
              </Text>
            </HStack>
            <HStack >
              <Image src={height} alt="Height icon" w={25} h={25} />
              <Text color="#fff" fontSize={Responsive.fontSizeResponsiveHead}>
                Limit height
              </Text>
            </HStack>
        </Box>
      </VStack>

      <VStack w="full" h="full" alignItems="flex-start" spacing="-0.4">
        <Text color='#89A1CD' fontSize={Responsive.fontSizeResponsiveHead}>
          What's included?
        </Text>

        <Box borderRadius='10px'  border='3px solid #89A1CD'  w='98%' padding='10px'>
          <Text color="#fff" fontSize={Responsive.fontSizeResponsiveHead}>
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
            Here are the things included on this tour
          </Text>
        </Box>
      </VStack>
    </VStack>

  </Box>
) 
export default Summary;