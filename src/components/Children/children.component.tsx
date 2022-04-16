import * as React from "react"
import {
  VStack,
  Grid,
  Button,
  Stack,
  Text,
  HStack,
  TableContainer,
  Table,
  Thead,
  TableCaption,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  RadioGroup,
  Radio,
} from "@chakra-ui/react"

const Children = () => (
  <VStack
    h='full'
    w="880px"
    padding='20px'
    alignItems='flex-start'
    background="#EBE9E9">
      
      <Stack spacing={2}>
        <Text fontSize='20px' color='#3F6FE4'>Itinerary / Meeting and end Point</Text>
        <Text fontSize='35px'>Tell us about children policy</Text>
      </Stack>

      <TableContainer >
        <Table variant='simple'>

            <Thead >
            <Tr>
                <Th>Policy</Th>
                <Th>Yes</Th>
                <Th>No</Th>
            </Tr>
            </Thead>
            <Tbody >
            <Tr>
                <Text w='500px'>Guides / staff members have been trained by Wheel the World to provide assistance to people with disabilities during the tour/activity.
                </Text>
                <Td>
                <RadioGroup >
                    <Stack spacing={5} direction='row'>
                        <Radio colorScheme='blue' value='1'>
                        
                        </Radio>
                        <Radio colorScheme='blue' value='2'>
                        
                        </Radio>
                    </Stack>
                </RadioGroup>
                </Td>
            </Tr>
            <Tr>
                <Td w='500px'>Guides / staff members have experience assisting people with disabilities.</Td>
                <Td></Td>
                <Td></Td>
            </Tr>
            <Tr>
                <Td w='500px'>Guides / staff members will be available to assist.</Td>
                <Td></Td>
                <Td></Td>
            </Tr>

            </Tbody>
        </Table>
    </TableContainer>

    </VStack>
)
export default Children;