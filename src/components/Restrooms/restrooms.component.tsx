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
import { IRestrooms } from "./restrooms.types";
import {useState} from 'react'

function Restrooms(props: IRestrooms): JSX.Element {

    const[restRoom, setRestRoom] = useState([
        {
            question: "Accessible restrooms available at every place of the tour/activity",
            answer: ""
        },
        {
            question: "Accessible restrooms available at multiple stops during the tour/activity.",
            answer: ""
        },
        {
            question: "Accessible restrooms available in only one stop of the tour/activity.",
            answer: ""
        },
        {
            question: "No accessible restrooms available for the tour/activity.",
            answer: ""
        }
    ])

    console.log(restRoom)

    function changeValue(e:any, index: any){
        let newArray: any[] = [...restRoom];
        newArray[index].answer = e.target.value;
        setRestRoom(newArray)
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
                <Text fontSize={fontSizeResponsive} color='#3F6FE4'> Accesibility / Restrooms </Text>
                <Heading fontSize={{base:'35px', sm:'18px'}}>Restrooms</Heading>
                <HStack justifyContent="flex-end" w="95%">
                    <HStack w="15%" spacing={31}>
                        <Text color="#4F6FE4" fontSize={fontSizeResponsive}> Yes </Text>
                        <Text color="#4F6FE4" fontSize={fontSizeResponsive}> No </Text>
                    </HStack>
                </HStack>

                <Table bg="white" borderRadius={10}>
                    <Tbody>
                        <Tr fontSize={fontSizeResponsive}>
                            <Td>Accessible restrooms available at every place of the tour/activity</Td>
                            <Td>
                                <RadioGroup value={restRoom[0].answer}>
                                    <HStack spacing={8} justifyContent='flex-end'>
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
                        <Tr fontSize={fontSizeResponsive}>
                            <Td>Accessible restrooms available at multiple stops during the tour/activity.</Td>
                            <Td>
                                <RadioGroup value={restRoom[1].answer}>
                                    <HStack spacing={8} justifyContent='flex-end'>
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
                        <Tr fontSize={fontSizeResponsive}>
                            <Td>Accessible restrooms available in only one stop of the tour/activity.</Td>
                            <Td>
                                <RadioGroup value={restRoom[2].answer}>
                                    <HStack spacing={8} justifyContent='flex-end'>
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
                        <Tr fontSize={fontSizeResponsive}>
                            <Td>No accessible restrooms available for the tour/activity.</Td>
                            <Td>
                                <RadioGroup value={restRoom[3].answer}>
                                    <HStack spacing={8} justifyContent='flex-end'>
                                        <Radio  value='yes'
                                                border='1px'
                                                borderColor='#2F6FE4'
                                                onChange={(e) => changeValue(e, 3)}></Radio>
                                        <Radio  value='no'
                                                border='1px'
                                                borderColor='#2F6FE4'
                                                onChange={(e) => changeValue(e, 3)}></Radio>
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
export default Restrooms;