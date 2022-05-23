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
import { IEquipment } from "./equipment.types";
import {useState} from 'react';

function Equipment(props: IEquipment): JSX.Element {

    const [equipment, setEquipment] = useState([
        {
            question: "Is adaptive equipment included in this tour/activity?",
            answer: ""
        },
        {
            question: "Adaptive equipment is included and can be used independently",
            answer: ""
        },
        {
            question: "Adaptive equipment is included and can be used independently or assisted",
            answer: ""
        },
        {
            question: "Adaptive equipment is included and one person assisting is needed",
            answer: ""
        },
        {
            question: "Adaptive equipment is included and two people assisting are needed",
            answer: ""
        },
        {
            question: "Adaptive equipment is included and three or more people assisting are needed",
            answer: ""
        },
        {
            question: "Optional adaptive equipment is included and can be used independently",
            answer: ""
        },
    ])

    console.log(equipment)

    function changeValue(e:any, index: any){
        let newArray: any[] = [...equipment];
        newArray[index].answer = e.target.value;
        setEquipment(newArray)
    }

    /* RESPONSIVE --------------------------------- */
    const fontSizeResponsive = { base:'20px', sm:'15px'};

    return(
        <Box boxShadow='2xl'
            w="65%" 
            h="full"
            p={20}
            background="#EBE9E9"
            borderRadius="10px">
            <VStack alignItems='flex-start' w="full" h="full">
                <Text fontSize={fontSizeResponsive} color='#3F6FE4'> Accesibility / Equipment </Text>
                <Heading fontSize={{base:'35px', sm:'18px'}}>Equipment</Heading>
                <HStack justifyContent="flex-end" w="full">
                    <HStack w="14%" spacing={31}>
                        <Text color="#4F6FE4" fontSize={fontSizeResponsive}> Yes </Text>
                        <Text color="#4F6FE4" fontSize={fontSizeResponsive}> No </Text>
                    </HStack>
                </HStack>
                <TableContainer w="full" h="80%" overflowY='auto'>
                    <Table bg="white" borderRadius={10}>
                        <Tbody>
                            <Tr fontSize={fontSizeResponsive}>
                                <Td>Is adaptive equipment included in this tour/activity?</Td>
                                <Td>
                                    <RadioGroup value= {equipment[0].answer}>
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
                                <Td>Adaptive equipment is included and can be used independently</Td>
                                <Td>
                                    <RadioGroup value= {equipment[1].answer}>
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
                                <Td>Adaptive equipment is included and can be used independently or assisted</Td>
                                <Td>
                                    <RadioGroup value= {equipment[2].answer}>
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
                                <Td>Adaptive equipment is included and one person assisting is needed</Td>
                                <Td>
                                    <RadioGroup value= {equipment[3].answer}>
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
                            <Tr fontSize={fontSizeResponsive}>
                                <Td>Adaptive equipment is included and two people assisting are needed</Td>
                                <Td>
                                    <RadioGroup value= {equipment[4].answer}>
                                        <HStack spacing={8} justifyContent='flex-end'>
                                            <Radio  value='yes'
                                                    border='1px'
                                                    borderColor='#2F6FE4'
                                                    onChange={(e) => changeValue(e, 4)}></Radio>
                                            <Radio  value='no'
                                                    border='1px'
                                                    borderColor='#2F6FE4'
                                                    onChange={(e) => changeValue(e, 4)}></Radio>
                                        </HStack>
                                    </RadioGroup>
                                </Td>
                            </Tr>
                            <Tr fontSize={fontSizeResponsive}>
                                <Td>Adaptive equipment is included and three or more people assisting are needed</Td>
                                <Td>
                                    <RadioGroup value= {equipment[5].answer}>
                                        <HStack spacing={8} justifyContent='flex-end'>
                                            <Radio  value='yes'
                                                    border='1px'
                                                    borderColor='#2F6FE4'
                                                    onChange={(e) => changeValue(e, 5)}></Radio>
                                            <Radio  value='no'
                                                    border='1px'
                                                    borderColor='#2F6FE4'
                                                    onChange={(e) => changeValue(e, 5)}></Radio>
                                        </HStack>
                                    </RadioGroup>
                                </Td>
                            </Tr>
                            <Tr fontSize={fontSizeResponsive}>
                                <Td>Optional adaptive equipment is included and can be used independently</Td>
                                <Td>
                                    <RadioGroup value= {equipment[6].answer}>
                                        <HStack spacing={8} justifyContent='flex-end'>
                                            <Radio  value='yes'
                                                    border='1px'
                                                    borderColor='#2F6FE4'
                                                    onChange={(e) => changeValue(e, 6)}></Radio>
                                            <Radio  value='no'
                                                    border='1px'
                                                    borderColor='#2F6FE4'
                                                    onChange={(e) => changeValue(e, 6)}></Radio>
                                        </HStack>
                                    </RadioGroup>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </VStack>
        </Box>
	);
}
export default Equipment;