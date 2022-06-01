import React, { useEffect, useState } from 'react';
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
  useBreakpointValue,
} from "@chakra-ui/react";
import { DeleteIcon } from '@chakra-ui/icons';
import { IMainScreenTO } from './mainScreenTO.types';
import ImageInfoMSTO from './ImageInfoMSTO.png';
import fondoMS from './FondoMS.png';
import TopMenu from '../../components/TopMenu/topMenu.component';
import {useNavigate, useLocation} from  'react-router-dom'
import axios from 'axios';
import {links} from '../../reducers/appSlice'

function MainScreenTO(props: IMainScreenTO): JSX.Element {
  const navigate = useNavigate()
  function change(){
    navigate(`/tour-operator/${idTourOperator}/question/1/name-of-tour`)
  }
  const tamanoBox = useBreakpointValue({ base: '', md: '80%', lg: '80%' })
  const spacing = useBreakpointValue({ base: '-4', md: '', lg: '-4' })
  const botonContinue = useBreakpointValue({ base: 'md', md: 'sm', lg: 'md'})
  const fSBContinue = useBreakpointValue({ base: '', md: '10px', lg: '14px'})

  const location = useLocation();
  const link: string[] = location.pathname.split('/')
  const idTourOperator: string = link[link.length - 1]

  console.log(idTourOperator)
  const [tours, setTours] = useState<any>([])

  const url = `https://api-things-to-do.herokuapp.com/tour-operator/all-tours/${idTourOperator}`
  useEffect (() =>{
    axios.get(url)
        .then((result)=>{
          console.log(result)
          setTours(result.data)
        })
        .catch((error)=>{
          console.log(error)
        })
      },[])

      console.log(tours)

    const goToTour = ((idTour: string) =>{
      //AQUI PONER EL DISPATCH
      links(idTour)
      navigate(`/tour-operator/${idTourOperator}/question/${idTour}/name-of-tour`)
    })
  
	return (
    <Flex h="100vh">
      <VStack w="full" h="full">
        <TopMenu />
        <Box bgImage={`url(${fondoMS})`} w="full" h="full" bgSize={"cover"}>
          <Flex alignItems={[ 'center', 'center', 'start', 'center' ]} 
                justifyContent="center" 
                w="full" 
                h="full" 
                direction={[ "column" , "column", "row", "row" ]}>
            <Box  w={['90%', '90%', '40%', '40%' ]}
                  h={tamanoBox}
                  bgColor="white"
                  p={[ '6', '6', '6', '6', '39', '49' ]}
                  borderRadius={20}
                  marginRight={[ '0', '0', '50', '100' ]}
                  marginTop={[ '20', '20', '20', '20']}
                  marginBottom={[ '10', '10', '20', '20']}
                  marginLeft={[ '0', '0', '10', '20']}>
              <VStack alignItems="flex-start" >
                <HStack alignItems="flex-start">
                  <VStack alignItems="flex-start">
                    <Heading> New tour </Heading>
                    <Text> 
                      People with disabilities are already booking tours and activities 
                      through our platform. Become a certified partner! 
                    </Text>
                  </VStack>
                  <Image src={ImageInfoMSTO} w={['20%', '20%', '30%', '30%']}/>
                </HStack>
                <Text> How to become a Wheel the World Partner? </Text>
                <HStack>
                  <Text color="#2F6FE4"> 1 </Text>
                  <Text> Access to any mobile device or computer </Text>
                </HStack>
                <HStack>
                  <Text color="#2F6FE4"> 2 </Text>
                  <Text> Follow the steps on the app </Text>
                </HStack>
                <HStack>
                  <Text color="#2F6FE4"> 3 </Text>
                  <Text> Our team will take care of the rest </Text>
                </HStack>
              </VStack>
              <HStack justifyContent="center" w="full">
                <Button marginTop={[ '2', '5', '7', '7', '7', '7', '7']}
                        height={[ '50px', '60px', '40px', '68px' ]}
                        width={'50%'}
                        bg="#2F6FE4" 
                        color="white"
                        onClick={change}> 
                  Let's start! </Button>
              </HStack>
            </Box>
            <Box w={[ '90%', '90%', '40%', '40%' ]}
                 h={tamanoBox}
                 bgColor="white"
                 p={[ '6', '6', '6', '6', '39', '49' ]}
                 borderRadius={20}
                 marginRight={[ '0', '0', '10', '20' ]}
                 marginTop={[ '0', '0', '20', '20']}
                 marginBottom={[ '10', '10', '20', '20']}>
              <Heading marginBottom={5}> Tour registered </Heading>
              {
                tours.map((tourInfo: any) => {
                  console.log(tourInfo)
                  return(
                    <VStack alignItems="flex-start" spacing={spacing}>
                       <Text>{tourInfo.basicInformation.tourName}</Text>
                <HStack w="full" spacing={6}>
                  <HStack w="full">
                    <Slider defaultValue={30} isReadOnly={true}>
                      <SliderTrack>
                        <SliderFilledTrack />
                      </SliderTrack>
                    </Slider>
                    <Text color="#2F6FE4"> 30% </Text>
                  </HStack>
                  <Button onClick = {() => goToTour(tourInfo.id)} size={botonContinue} bg="#2F6FE4" color="white" fontSize={fSBContinue}> Continue </Button>
                  <IconButton
                    variant='outline'
                    aria-label='eliminar'
                    size={botonContinue}
                    icon={<DeleteIcon w={6} h={6}/>}
                  />
                </HStack>
              </VStack>
                  )
                })
              }
            </Box>
          </Flex>
        </Box>
      </VStack>
    </Flex>
	);
}

export default MainScreenTO;