import * as React from "react"
import {
  Text,
  VStack,
  Stack,
  Checkbox,
  Box,
} from "@chakra-ui/react"

const Restrictions = () => (
    <Box boxShadow='2xl'
      w="65%" 
      h="full"
      p={20}
      background="#EBE9E9"
      borderRadius="10px">
      
      <Stack spacing={2}>
        <Text fontSize='20px' color='#3F6FE4'>Itinerary / Restrictions</Text>
        <Text fontSize='35px'>Select the restrictions on this tour</Text>
      </Stack>

      <VStack spacing={15} alignItems='flex-start' paddingTop='20px'>
        <Checkbox iconColor={'#3F6FE4'}>
            There is no restriction of any kind regarding this tour.
        </Checkbox>
        <Checkbox iconColor={'#3F6FE4'}>
            This tour is not recommended for people with a heart condition.
        </Checkbox>
        <Checkbox iconColor={'#3F6FE4'}>
            This tour is not recommended for pregnant travelers.
            </Checkbox>
        <Checkbox iconColor={'#3F6FE4'}>
            This tour is not recommended for people with dietary restrictions.
        </Checkbox>
        <Checkbox >
            Special dietary needs and restrictions can be accommodated with prior notice.
        </Checkbox>
        <Checkbox iconColor={'#3F6FE4'}>
            This tour is not recommended for travelers using a power wheelchair.
        </Checkbox>
        <Checkbox >
            Travelers must be willing to self-transfer manually or be helped to do so,  in order to take part in this tour.      </Checkbox>
        <Checkbox iconColor={'#3F6FE4'}>
            Other
        </Checkbox>
      </VStack>
      
    </Box>
)
export default Restrictions;