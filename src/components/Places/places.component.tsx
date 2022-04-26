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

function Places(props: IPlaces): JSX.Element {
    return(
        <Box boxShadow='2xl'
            w="65%" 
            h="full"
            p={20}
            background="#EBE9E9"
            borderRadius="10px">
            <VStack alignItems='flex-start' w="full">
                <Text fontSize='20px' color='#3F6FE4'> Accesibility / Places </Text>
                <Heading fontSize='35px'>Places</Heading>
                <HStack justifyContent="flex-end" w="full">
                    <HStack w="17%" spacing={31}>
                        <Text color="#4F6FE4"> Yes </Text>
                        <Text color="#4F6FE4"> No </Text>
                    </HStack>
                </HStack>
                <TableContainer w="full">
                    <Table bg="white" borderRadius={10} size="sm">
                        <Tbody>
                            <Tr fontSize="16px">
                                <Td>
                                    <Text>Places visited are all wheelchair accessible and can be</Text>
                                    navigated independently.
                                </Td>
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
                                <Td>
                                    <Text>Places present some barriers and minimum assistance</Text>
                                    is needed.
                                </Td>
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
                                <Td>
                                    <Text>Few accessibility measures are in place and assistance is needed for</Text>
                                    the full experience.
                                </Td>
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
                                <Td>There are smooth floors and pathways.</Td>
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
                                <Td>
                                    <Text>There are pathways with rocks, stones, or other terrain</Text>
                                    that makes them difficult to access.
                                </Td>
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
export default Places;