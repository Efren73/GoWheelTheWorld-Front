import * as React from "react"
import {
  Text,
  VStack,
  Stack,
  Checkbox,
  Box,
  HStack,
} from "@chakra-ui/react"

const Restrictions = () => (
    <Box boxShadow='2xl'
      w="65%" 
      h="full"
      p={10}
      background="#EBE9E9"
      borderRadius="10px">
      
      <Stack spacing={2}>
        <Text fontSize='20px' color='#3F6FE4'>Itinerary / Restrictions</Text>
        <Text fontSize='35px'>Select the restrictions on this tour</Text>
      </Stack>

      <VStack spacing={19} alignItems='flex-start' paddingTop='20px'>
        <HStack justifyContent='flex-start'>
                <Checkbox 
                    background ='#fff' 
                    _focus={{background: '#000'}} 
                    size='lg'/>
                <Text fontSize='17px'>This tour is not recommended for people with a heart condition.</Text>
        </HStack>
        <HStack justifyContent='flex-start'>
                <Checkbox 
                    background ='#fff' 
                    _focus={{background: '#000'}} 
                    size='lg'/>
                <Text fontSize='17px'>This tour is not recommended for pregnant travelers.</Text>
        </HStack>
        <HStack justifyContent='flex-start'>
                <Checkbox 
                    background ='#fff' 
                    _focus={{background: '#000'}} 
                    size='lg'/>
                <Text fontSize='17px'>This tour is not recommended for people with dietary restrictions.</Text>
        </HStack>
        <HStack justifyContent='flex-start'>
                <Checkbox 
                    background ='#fff' 
                    _focus={{background: '#000'}} 
                    size='lg'/>
                <Text fontSize='17px'>Special dietary needs and restrictions can be accommodated with prior notice.</Text>
        </HStack>
        <HStack justifyContent='flex-start'>
                <Checkbox 
                    background ='#fff' 
                    _focus={{background: '#000'}} 
                    size='lg'/>
                <Text fontSize='17px'>This tour is not recommended for travelers using a power wheelchair.</Text>
        </HStack>
        <HStack justifyContent='flex-start'>
                <Checkbox 
                    background ='#fff' 
                    _focus={{background: '#000'}} 
                    size='lg'/>
                <Text fontSize='17px'>Travelers must be willing to self-transfer manually or be helped to do so,  in order to take part in this tour.</Text>
        </HStack>
      </VStack>
      
    </Box>
)
export default Restrictions;