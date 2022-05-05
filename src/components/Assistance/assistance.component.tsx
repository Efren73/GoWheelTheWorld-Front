import * as React from "react"
import { Stack, NumberInput, NumberInputField, useDisclosure } from "@chakra-ui/react"
import {
  Text,
  VStack,
  Box,
  Heading,
  HStack,
  TableContainer,
  Tbody,
  Table,
  Td,
  Tr,
  RadioGroup,
  Radio,
  background,
} from "@chakra-ui/react"
import { IAssistance} from "./assistance.types";
import {useState} from 'react'

function Assistance(props: IAssistance): JSX.Element {

    const [assistan,setAssistan]= useState<any>([
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

    console.log(assistan)

    function changeValue(e:any, index: any){
        let newArray: any[] = [...assistan];
        newArray[index].answer=e.target.value;
        setAssistan(newArray)
    }

    return(
        <Box boxShadow='2xl'
        w="65%" 
        h="full"
        p={20}
        background="#EBE9E9"
        borderRadius="10px">
        <VStack alignItems='flex-start' w="full">
            <Text fontSize='20px' color='#3F6FE4'> Accesibility / Assistance </Text>
            <Heading fontSize='35px'>Assistance</Heading>
            
            <HStack justifyContent="flex-end" w="95%">
                <HStack w="15%" spacing={31}>
                    <Text color="#4F6FE4"> Yes </Text>
                    <Text color="#4F6FE4"> No </Text>
                </HStack>
            </HStack>
            
                <Table bg="white" borderRadius={10} w='90%'>
                    <Tbody>
                        <Tr>
                            <Td>Guides / staff members have been trained by Wheel the World to provide assistance to people with disabilities during the tour/activity</Td>
                            <Td>
                            <RadioGroup>
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
                        <Tr>
                            <Td>Guides / staff members have experience assisting people with disabilities</Td>
                            <Td>
                            <RadioGroup>
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
                        <Tr>
                            <Td>Guides / staff members will be available to assist</Td>
                            <Td>
                            <RadioGroup>
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