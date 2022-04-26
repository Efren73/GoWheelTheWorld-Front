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

function Equipment(props: IEquipment): JSX.Element {
    return(
        <Box boxShadow='2xl'
            w="65%" 
            h="full"
            p={10}
            background="#EBE9E9"
            borderRadius="10px">
            <VStack alignItems='flex-start' w="full" h="full">
                <Text fontSize='20px' color='#3F6FE4'> Accesibility / Equipment </Text>
                <Heading fontSize='35px'>Equipment</Heading>
                <HStack justifyContent="flex-end" w="95%">
                    <HStack w="15%" spacing={31}>
                        <Text color="#4F6FE4"> Yes </Text>
                        <Text color="#4F6FE4"> No </Text>
                    </HStack>
                </HStack>

                    <Table bg="white" borderRadius={10} w='90%'>
                        <Tbody>
                            <Tr>
                                <Td>Is adaptive equipment included in this tour/activity?</Td>
                                <Td>
                                    <RadioGroup>
                                        <HStack spacing={8} justifyContent='flex-end'>
                                            <Radio  value='yes'
                                                    border='1px'
                                                    borderColor='#2F6FE4'></Radio>
                                            <Radio  value='no'
                                                    border='1px'
                                                    borderColor='#2F6FE4'></Radio>
                                        </HStack>
                                    </RadioGroup>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>Adaptive equipment is included and can be used independently</Td>
                                <Td>
                                    <RadioGroup>
                                        <HStack spacing={8} justifyContent='flex-end'>
                                            <Radio  value='yes'
                                                    border='1px'
                                                    borderColor='#2F6FE4'></Radio>
                                            <Radio  value='no'
                                                    border='1px'
                                                    borderColor='#2F6FE4'></Radio>
                                        </HStack>
                                    </RadioGroup>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>Adaptive equipment is included and can be used independently or assisted</Td>
                                <Td>
                                    <RadioGroup>
                                        <HStack spacing={8} justifyContent='flex-end'>
                                            <Radio  value='yes'
                                                    border='1px'
                                                    borderColor='#2F6FE4'></Radio>
                                            <Radio  value='no'
                                                    border='1px'
                                                    borderColor='#2F6FE4'></Radio>
                                        </HStack>
                                    </RadioGroup>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>Adaptive equipment is included and one person assisting is needed</Td>
                                <Td>
                                    <RadioGroup>
                                        <HStack spacing={8} justifyContent='flex-end'>
                                            <Radio  value='yes'
                                                    border='1px'
                                                    borderColor='#2F6FE4'></Radio>
                                            <Radio  value='no'
                                                    border='1px'
                                                    borderColor='#2F6FE4'></Radio>
                                        </HStack>
                                    </RadioGroup>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>Adaptive equipment is included and two people assisting are needed</Td>
                                <Td>
                                    <RadioGroup>
                                        <HStack spacing={8} justifyContent='flex-end'>
                                            <Radio  value='yes'
                                                    border='1px'
                                                    borderColor='#2F6FE4'></Radio>
                                            <Radio  value='no'
                                                    border='1px'
                                                    borderColor='#2F6FE4'></Radio>
                                        </HStack>
                                    </RadioGroup>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>Adaptive equipment is included and three or more people assisting are needed</Td>
                                <Td>
                                    <RadioGroup>
                                        <HStack spacing={8} justifyContent='flex-end'>
                                            <Radio  value='yes'
                                                    border='1px'
                                                    borderColor='#2F6FE4'></Radio>
                                            <Radio  value='no'
                                                    border='1px'
                                                    borderColor='#2F6FE4'></Radio>
                                        </HStack>
                                    </RadioGroup>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>Optional adaptive equipment is included and can be used independently</Td>
                                <Td>
                                    <RadioGroup>
                                        <HStack spacing={8} justifyContent='flex-end'>
                                            <Radio  value='yes'
                                                    border='1px'
                                                    borderColor='#2F6FE4'></Radio>
                                            <Radio  value='no'
                                                    border='1px'
                                                    borderColor='#2F6FE4'></Radio>
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
export default Equipment;