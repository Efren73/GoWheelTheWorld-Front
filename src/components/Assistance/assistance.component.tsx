import * as React from "react"
import { Stack, NumberInput, NumberInputField, useDisclosure } from "@chakra-ui/react"
import {
  Text,
  VStack,
  Box,
  Heading,
  HStack,
  Tbody,
  Table,
  Td,
  Tr,
  RadioGroup,
  Radio,
} from "@chakra-ui/react"
import { IAssistance} from "./assistance.types";
import {useState, useEffect} from 'react'
import { Responsive } from "../generalTypes";


import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchTours, updateTour, selectAllTours, getTourStatus, changeState} from "../../reducers/appSlice";

function Assistance(props: IAssistance): JSX.Element {

    const dispatch = useAppDispatch();
    const [addRequestStatus, setAddRequestStatus] = useState('idle')
    const tour = useAppSelector(selectAllTours);
    const status = useAppSelector(getTourStatus);

    



    const [assistan,setAssistan]= useState([
        {
            question:"Guides / staff members have been trained by Wheel the World to provide assistance to people with disabilities during the tour/activity",
            answer:""
        },
        {
            question:"Guides / staff members have experience assisting people with disabilities",
            answer:""
        },
        {
            question:"Guides / staff members will be available to assist",
            answer:""
        }
    ])

    function changeValue(e:any, index: any){
        
        let newArray: any = [...assistan];

        newArray[index] = {
            ...assistan[index],
            answer: e.target.value
        }
        setAssistan(newArray)
    }

    /* RESPONSIVE --------------------------------- */
  
    useEffect(() => {
        dispatch(fetchTours())  
        }, []);
      
      useEffect(() => {
        if (status === "succeeded" ) {
            
            if(tour.accessibility != undefined && tour.accessibility.assistance != undefined ) {
                setAssistan(tour.accessibility.assistance)
            }
        }
        },[status]);

        useEffect(() => {
            dispatch(changeState(
              {
                accessibility : {
                  ...tour.accessibility,
                  assistance: assistan
                }
              }
            ))    
            },[assistan]);

    return (
        <Box boxShadow='md'
        w="65%" 
        p={10}
        background="#F8F9F9"
        borderRadius="10px">
        <VStack alignItems='flex-start' w="full">
            <Text fontSize={Responsive.fontSizeResponsiveHead} color='#3F6FE4'> Accessibility / Assistance </Text>
            <Heading fontSize={Responsive.fontSizeResponsiveBody}>Assistance</Heading>
            
            <HStack justifyContent="flex-end" w="50%">
                <HStack w="15%" spacing={31}>
                    <Text color="#4F6FE4" fontSize={Responsive.fontSizeResponsiveHead}> Yes </Text>
                    <Text color="#4F6FE4" fontSize={Responsive.fontSizeResponsiveHead}> No </Text>
                </HStack>
            </HStack>
            <Table bg="white" borderRadius={10}>
                <Tbody>
                    <Tr fontSize={Responsive.fontSizeResponsiveHead}>
                        <Td>Guides / staff members have been trained by Wheel the World to provide assistance to people with disabilities during the tour/activity</Td>
                        <Td>
                            <RadioGroup value = {assistan[0].answer}>
                                <HStack spacing={8}>
                                    <Radio  value='yes'
                                            border='1px'
                                            borderColor='#2F6FE4'
                                            onChange={(e) => changeValue(e, 0)}></Radio>
                                    <Radio  value='no'
                                            border='1px'
                                            borderColor='#2F6FE4'
                                            onChange={(e) => changeValue(e, 0)}></Radio>
                                </HStack>
                            </RadioGroup>
                        </Td>
                    </Tr>
                    <Tr fontSize={Responsive.fontSizeResponsiveHead}>
                        <Td>Guides / staff members have experience assisting people with disabilities</Td>
                        <Td>
                            <RadioGroup value = {assistan[1].answer}>
                                <HStack spacing={8}>
                                    <Radio  value='yes'
                                            border='1px'
                                            borderColor='#2F6FE4'
                                            onChange={(e) => changeValue(e, 1)}></Radio>
                                    <Radio  value='no'
                                            border='1px'
                                            borderColor='#2F6FE4'
                                            onChange={(e) => changeValue(e, 1)}></Radio>
                                </HStack>
                            </RadioGroup>
                        </Td>
                    </Tr>
                    <Tr fontSize={Responsive.fontSizeResponsiveHead}>
                        <Td>Guides / staff members will be available to assist</Td>
                        <Td>
                            <RadioGroup value = {assistan[2].answer}>
                                <HStack spacing={8}>
                                    <Radio  value='yes'
                                            border='1px'
                                            borderColor='#2F6FE4'
                                            onChange={(e) => changeValue(e, 2)}></Radio>
                                    <Radio  value='no'
                                            border='1px'
                                            borderColor='#2F6FE4'
                                            onChange={(e) => changeValue(e, 2)}></Radio>
                                </HStack>
                            </RadioGroup>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
            
        </VStack>
    </Box>

    );
}

export default Assistance;