import * as React from "react"
import {
  Text,
  VStack,
  Stack,
  Checkbox,
  Box,
  HStack,
  useCheckbox,
  chakra,
  useCheckboxGroup,
} from "@chakra-ui/react"

import { useState } from "react"


const Restrictions: React.FC = () => {
  function DisableCheckbox() {
    
      let [check1, setCheck1] = useState(true)
      let [check2, setCheck2] = useState(false)
      let [check3, setCheck3] = useState(false)

      
  
      return (
        <>
          <Stack pl={6} mt={1} spacing={2}>
            <Checkbox
              onChange={() => {
                setCheck2(!check2)
                setCheck1(false)
                setCheck3(!check3)

              }}

              isChecked={check3}
            >
              This tour is not recommended for people with a heart condition
            </Checkbox>
            <Checkbox
              isChecked={check1}
              isDisabled={check2}
              defaultChecked={false}
            >
              This tour is not recommended for pregnant travelers
            </Checkbox>
            <Checkbox
              isChecked={check1}
              isDisabled={check2}
            >
              This tour is not recommended for people with dietary restrictions
            </Checkbox>
            <Checkbox
              isChecked={check1}
              isDisabled={check2}
            >
              Special dietary needs and restrictions can be accommodated with prior notice
            </Checkbox>
            <Checkbox
              isChecked={check1}
              isDisabled={check2}
            >
              This tour is not recommended for travelers using a power wheelchair
            </Checkbox>
            <Checkbox
              isChecked={check1}
              isDisabled={check2}
            >
              Travelers must be willing to self-transfer manually or be helped to do so,  in order to take part in this tour
            </Checkbox>

            <Checkbox
              isChecked={check1}
              isDisabled={check2}
              onChange={() => setCheck1(!check1)}
            >
              Select all
            </Checkbox>
          </Stack>
        </>
      )
  }
  
    
  return(
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
    
        <Stack spacing={5} direction='row'>
          {DisableCheckbox()}
        
        </Stack>
      
    </Box>
)
  }
export default Restrictions;
