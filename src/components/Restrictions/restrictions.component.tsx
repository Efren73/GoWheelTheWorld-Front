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
import { setConstantValue } from "typescript"

const Restrictions: React.FC = () => {
  function DisableCheckbox() {

      // controla el Checkbox independiente
      const [noRestrictCheck, setCheckNo] = useState(false)

      // Arreglo de checkboxes
      const [checkedItems, setCheckedItems] = useState([false, false, false, false, false, false, false])
  
      return (
        <>
          <Stack pl={6} mt={1} spacing={2}>
            <Checkbox
            onChange={(e) => {
              setCheckedItems([e.target.defaultChecked, !checkedItems[1], e.target.defaultChecked, e.target.defaultChecked, e.target.defaultChecked, e.target.defaultChecked, e.target.defaultChecked])
              
              console.log(checkedItems)
              console.log(noRestrictCheck)
            }}
              isChecked={checkedItems[1]}
              isDisabled={noRestrictCheck}
            >
              This tour is not recommended for people with a heart condition
            </Checkbox>
            <Checkbox
            onChange={(e) => {
              setCheckedItems([e.target.defaultChecked, e.target.defaultChecked, !checkedItems[2], e.target.defaultChecked, e.target.defaultChecked, e.target.defaultChecked, e.target.defaultChecked])
              
              console.log(checkedItems)
              console.log(noRestrictCheck)
            }}
              isChecked={checkedItems[2]}
              isDisabled={noRestrictCheck}
            >
              This tour is not recommended for pregnant travelers
            </Checkbox>
            <Checkbox
            onChange={(e) => {
              setCheckedItems([e.target.defaultChecked, e.target.defaultChecked, e.target.defaultChecked, !checkedItems[3], e.target.defaultChecked, e.target.defaultChecked, e.target.defaultChecked])
              
              console.log(checkedItems)
              console.log(noRestrictCheck)
            }}
              isChecked={checkedItems[3]}
              isDisabled={noRestrictCheck}
            >
              This tour is not recommended for people with dietary restrictions
            </Checkbox>
            <Checkbox
            onChange={(e) => {
              setCheckedItems([e.target.defaultChecked, e.target.defaultChecked, e.target.defaultChecked, e.target.defaultChecked, !checkedItems[4], e.target.defaultChecked, e.target.defaultChecked])
              
              console.log(checkedItems)
              console.log(noRestrictCheck)
            }}
              isChecked={checkedItems[4]}
              isDisabled={noRestrictCheck}
            >
              Special dietary needs and restrictions can be accommodated with prior notice
            </Checkbox>
            <Checkbox
              onChange={(e) => {
                setCheckedItems([e.target.defaultChecked, e.target.defaultChecked, e.target.defaultChecked, e.target.defaultChecked, e.target.defaultChecked, !checkedItems[5], e.target.defaultChecked])
                
                console.log(checkedItems)
                console.log(noRestrictCheck)
              }}
              isChecked={checkedItems[5]}
              isDisabled={noRestrictCheck}
            >
              This tour is not recommended for travelers using a power wheelchair
            </Checkbox>
            <Checkbox
            onChange={(e) => {
              setCheckedItems([e.target.defaultChecked, e.target.defaultChecked, e.target.defaultChecked, e.target.defaultChecked, e.target.defaultChecked, e.target.defaultChecked, !checkedItems[6]])

              console.log(checkedItems)
              console.log(noRestrictCheck)
            }}
              isChecked={checkedItems[6]}
              isDisabled={noRestrictCheck}
            >
              Travelers must be willing to self-transfer manually or be helped to do so,  in order to take part in this tour
            </Checkbox>
            <Checkbox
              onChange={() => {
                setCheckNo(!noRestrictCheck)
                
                console.log(checkedItems)
                console.log(noRestrictCheck)
              }}

              isChecked={noRestrictCheck}
              isDisabled={checkedItems.some(Boolean)}
            >
              There is no restriction of any kind regarding this tour
            </Checkbox>
            <Checkbox
              onChange={(e) => {
                setCheckedItems([e.target.checked, e.target.checked, e.target.checked, e.target.checked, e.target.checked, e.target.checked,])
                
                console.log(checkedItems)
                console.log(noRestrictCheck)
              }}

              isChecked={checkedItems[0]}
              isDisabled={noRestrictCheck}
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
