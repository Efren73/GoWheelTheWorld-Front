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

function Restrooms(props: IRestrooms): JSX.Element {
    return(
        <Box boxShadow='2xl'
            w="65%" 
            h="full"
            p={10}
            background="#EBE9E9"
            borderRadius="10px">
            <VStack alignItems='flex-start' w="full">
                <Text fontSize='20px' color='#3F6FE4'> Accesibility / Restrooms </Text>
                <Heading fontSize='35px'>Restrooms</Heading>
                <HStack justifyContent="flex-end" w="95%">
                    <HStack w="15%" spacing={31}>
                        <Text color="#4F6FE4"> Yes </Text>
                        <Text color="#4F6FE4"> No </Text>
                    </HStack>
                </HStack>

                    <Table bg="white" borderRadius={10} w='90%'>
                        <Tbody>
                            <Tr fontSize="16px">
                                <Td >Accessible restrooms available at every place of the tour/activity</Td>
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
                            <Tr fontSize="16px">
                                <Td>Accessible restrooms available at multiple stops during the tour/activity.</Td>
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
                            <Tr fontSize="16px">
                                <Td>Accessible restrooms available in only one stop of the tour/activity.</Td>
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
                            <Tr fontSize="16px">
                                <Td>No accessible restrooms available for the tour/activity.</Td>
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
export default Restrooms;