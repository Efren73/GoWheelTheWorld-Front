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
            p={20}
            background="#EBE9E9"
            borderRadius="10px">
            <VStack alignItems='flex-start' w="full" h="full">
                <Text fontSize='20px' color='#3F6FE4'> Accesibility / Equipment </Text>
                <Heading fontSize='35px'>Equipment</Heading>
                <HStack justifyContent="flex-end" w="full">
                    <HStack w="14%" spacing={31}>
                        <Text color="#4F6FE4"> Yes </Text>
                        <Text color="#4F6FE4"> No </Text>
                    </HStack>
                </HStack>
                <TableContainer w="full" h="80%" overflowY='auto'>
                    <Table bg="white" borderRadius={10} size="sm">
                        <Tbody>
                            <Tr fontSize="16px">
                                <Td>Is adaptive equipment included in this tour/activity?</Td>
                                <Td>
                                    <RadioGroup>
                                        <HStack spacing={8}>
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
                            <Tr fontSize="16px">
                                <Td>Adaptive equipment is included and can be used independently.</Td>
                                <Td>
                                    <RadioGroup>
                                        <HStack spacing={8}>
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
                            <Tr fontSize="16px">
                                <Td>Adaptive equipment is included and can be used independently or assisted.</Td>
                                <Td>
                                    <RadioGroup>
                                        <HStack spacing={8}>
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
                            <Tr fontSize="16px">
                                <Td>Adaptive equipment is included and one person assisting is needed.</Td>
                                <Td>
                                    <RadioGroup>
                                        <HStack spacing={8}>
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
                            <Tr fontSize="16px">
                                <Td>Adaptive equipment is included and two people assisting are needed.</Td>
                                <Td>
                                    <RadioGroup>
                                        <HStack spacing={8}>
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
                            <Tr fontSize="16px">
                                <Td>Adaptive equipment is included and three or more people assisting are needed.</Td>
                                <Td>
                                    <RadioGroup>
                                        <HStack spacing={8}>
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
                            <Tr fontSize="16px">
                                <Td>Optional adaptive equipment is included and can be used independently.</Td>
                                <Td>
                                    <RadioGroup>
                                        <HStack spacing={8}>
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
                </TableContainer>
                
            </VStack>
        </Box>
	);
}
export default Equipment;