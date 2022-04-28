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

const Restrictions: React.FC = () => {

  function DisableCheckbox() {

      const [checkedItems, setCheckedItems] = React.useState([false, false, false, false, false])

      const allChecked = checkedItems.every(Boolean)

      const isIndeterminate = checkedItems.some(Boolean) && !allChecked

      const disable = checkedItems.some(Boolean) && checkedItems[0] != false
      
  
      return (
        <>
          <Checkbox
            isChecked={allChecked}
            isIndeterminate={isIndeterminate}
            onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked, e.target.checked, e.target.checked, e.target.checked])}
          >
            Parent Checkbox
          </Checkbox>
          <Stack pl={6} mt={1} spacing={1}>
            <Checkbox
              isChecked={checkedItems[0]}
              onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1], checkedItems[2], checkedItems[3], checkedItems[4]])}
            >
              Child Checkbox 1
            </Checkbox>
            <Checkbox
              isChecked={checkedItems[1]}
              isDisabled={disable}
              defaultChecked={false}
              onChange={(e) => setCheckedItems([checkedItems[0],e.target.checked, checkedItems[2], checkedItems[3], checkedItems[4]])}
            >
              Child Checkbox 2
            </Checkbox>
            <Checkbox
              isChecked={checkedItems[2]}
              isDisabled={disable}
              onChange={(e) => setCheckedItems([checkedItems[0], checkedItems[1], e.target.checked, checkedItems[3], checkedItems[4]])}
            >
              Child Checkbox 3
            </Checkbox>
            <Checkbox
              isChecked={checkedItems[3]}
              isDisabled={disable}
              onChange={(e) => setCheckedItems([checkedItems[0], checkedItems[1], checkedItems[2], e.target.checked, checkedItems[4]])}
            >
              Child Checkbox 4
            </Checkbox>
            <Checkbox
              isChecked={checkedItems[4]}
              isDisabled={disable}
              onChange={(e) => setCheckedItems([checkedItems[0], checkedItems[1], checkedItems[2], checkedItems[3], e.target.checked])}
            >
              Child Checkbox 5
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
