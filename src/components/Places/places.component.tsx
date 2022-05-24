import * as React from "react"
import {
  Text,
  VStack,
  Heading,
  HStack,
  Box,
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td,
  RadioGroup,
  Radio
} from "@chakra-ui/react"
import { IPlaces } from "./places.types";
import {useState} from 'react'
function Places(props: IPlaces): JSX.Element {

    const [places, setPlaces] = useState<any>([
        {
            question: "Places visited are all wheelchair accessible and can be navigated independently",
            answer: ""
        },
        {
            question: "Places present some barriers and minimum assistance is needed",
            answer: ""
        },
        {
            question: "Few accessibility measures are in place and assistance is needed for the full experience",
            answer: ""
        },
        {
            question: "There are smooth floors and pathways",
            answer: ""
        },
        {
            question: "There are pathways with rocks, stones, or other terrain that makes them difficult to access",
            answer: ""
        },
    ])

    console.log(places)

    function changeValue(e:any, index: any){
        let newArray: any[] = [...places];
        newArray[index].answer = e.target.value;
        setPlaces(newArray)
    }

    /* RESPONSIVE --------------------------------- */
    const fontSizeResponsive = { base:'20px', sm:'15px'};

    return (
        <Box boxShadow='2xl'
            w="65%" 
            p={10}
            background="#EBE9E9"
            borderRadius="10px">
            <VStack alignItems='flex-start' w="full">
                <Text fontSize={fontSizeResponsive} color='#3F6FE4'> Accesibility / Places </Text>
                <Heading fontSize={{base:'35px', sm:'18px'}}>Places</Heading>
                <HStack justifyContent="flex-end" w="95%">
                    <HStack w="15%" spacing={31}>
                        <Text color="#4F6FE4" fontSize={fontSizeResponsive}> Yes </Text>
                        <Text color="#4F6FE4" fontSize={fontSizeResponsive}> No </Text>
                    </HStack>
                </HStack>

                <Table bg="white" borderRadius={10}>
                    <Tbody>
                        <Tr fontSize={fontSizeResponsive}>
                            <Td>Places visited are all wheelchair accessible and can be navigated independently</Td>
                            <Td>
                                <RadioGroup value={places[0].answer}>
                                    <HStack spacing={8} justifyContent='flex-end'>
                                        <Radio  value='yes'
                                                border='1px'
                                                borderColor='#2F6FE4'
                                                onChange = {(e) => changeValue(e, 0)}></Radio>
                                        <Radio  value='no'
                                                border='1px'
                                                borderColor='#2F6FE4'
                                                onChange = {(e) => changeValue(e, 0)}></Radio>
                                    </HStack>
                                </RadioGroup>
                            </Td>
                        </Tr>
                        <Tr fontSize={fontSizeResponsive}>
                            <Td>Places present some barriers and minimum assistance is needed</Td>
                            <Td>
                                <RadioGroup value={places[1].answer}>
                                    <HStack spacing={8} justifyContent='flex-end'>
                                        <Radio  value='yes'
                                                border='1px'
                                                borderColor='#2F6FE4'
                                                onChange = {(e) => changeValue(e, 1)}></Radio>
                                        <Radio  value='no'
                                                border='1px'
                                                borderColor='#2F6FE4'
                                                onChange = {(e) => changeValue(e, 1)}></Radio>
                                    </HStack>
                                </RadioGroup>
                            </Td>
                        </Tr>
                        <Tr fontSize={fontSizeResponsive}>
                            <Td>Few accessibility measures are in place and assistance is needed for the full experience</Td>
                            <Td>
                                <RadioGroup value={places[2].answer}>
                                    <HStack spacing={8} justifyContent='flex-end'>
                                        <Radio  value='yes'
                                                border='1px'
                                                borderColor='#2F6FE4'
                                                onChange = {(e) => changeValue(e, 2)}></Radio>
                                        <Radio  value='no'
                                                border='1px'
                                                borderColor='#2F6FE4'
                                                onChange = {(e) => changeValue(e, 2)}></Radio>
                                    </HStack>
                                </RadioGroup>
                            </Td>
                        </Tr>
                        <Tr fontSize={fontSizeResponsive}>
                            <Td>There are smooth floors and pathways</Td>
                            <Td>
                                <RadioGroup value={places[3].answer}>
                                    <HStack spacing={8} justifyContent='flex-end'>
                                        <Radio  value='yes'
                                                border='1px'
                                                borderColor='#2F6FE4'
                                                onChange = {(e) => changeValue(e, 3)}></Radio>
                                        <Radio  value='no'
                                                border='1px'
                                                borderColor='#2F6FE4'
                                                onChange = {(e) => changeValue(e, 3)}></Radio>
                                    </HStack>
                                </RadioGroup>
                            </Td>
                        </Tr>
                        <Tr fontSize={fontSizeResponsive}>
                            <Td>There are pathways with rocks, stones, or other terrain that makes them difficult to access</Td>
                            <Td>
                                <RadioGroup value={places[4].answer}>
                                    <HStack spacing={8} justifyContent='flex-end'>
                                        <Radio  value='yes'
                                                border='1px'
                                                borderColor='#2F6FE4'
                                                onChange = {(e) => changeValue(e, 4)}></Radio>
                                        <Radio  value='no'
                                                border='1px'
                                                borderColor='#2F6FE4'
                                                onChange = {(e) => changeValue(e, 4)}></Radio>
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
export default Places;