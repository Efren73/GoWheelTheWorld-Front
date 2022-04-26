import * as React from "react"
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
} from "@chakra-ui/react";

const Assistance = () => (
    <Box boxShadow='2xl'
    w="65%" 
    h="full"
    p={20}
    background="#EBE9E9"
    borderRadius="10px">
    <VStack alignItems='flex-start' w="full">
        <Text fontSize='20px' color='#3F6FE4'> Accesibility / Assistance </Text>
        <Heading fontSize='35px'> Assistance </Heading>
        <HStack justifyContent="flex-end" w="full">
            <HStack w="15%" spacing={31}>
                <Text color="#4F6FE4"> Yes </Text>
                <Text color="#4F6FE4"> No </Text>
            </HStack>
        </HStack>
        <TableContainer w="full">
            <Table bg="white" borderRadius={10}>
                <Tbody>
                    <Tr>
                        <Td>
                            <Text>Guides / staff members have been trained by Wheel the World to provide </Text>
                            assistance to people with disabilities during the tour/activity.
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
                    <Tr>
                        <Td>Guides / staff members have experience assisting people with disabilities.</Td>
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
                    <Tr>
                        <Td>Guides / staff members will be available to assist.</Td>
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
)
export default Assistance;