import * as React from "react"
import {
  Text,
  VStack,
  Stack,
  Checkbox,
  Box,
  HStack,
} from "@chakra-ui/react"

const Restrictions: React.FC = () => {

  function SelectAll() {
    const [checkedItems, setCheckedItems] = React.useState([false, false])
  
    const allChecked = checkedItems.every(Boolean)
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked
  
    return (
      <>
        <Stack pl={6} mt={1} spacing={1}>
          <Checkbox
            isChecked={checkedItems[0]}
            onChange={(e) => setCheckedItems([checkedItems[7], e.target.checked])}
          >
            This tour is not recommended for people with a heart condition
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[0]}
            onChange={(e) => setCheckedItems([checkedItems[2], e.target.checked])}
          >
            This tour is not recommended for pregnant travelers
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[0]}
            onChange={(e) => setCheckedItems([checkedItems[3], e.target.checked])}
          >
            This tour is not recommended for people with dietary restrictions
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[0]}
            onChange={(e) => setCheckedItems([checkedItems[4], e.target.checked])}
          >
            Special dietary needs and restrictions can be accommodated with prior notice
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[0]}
            onChange={(e) => setCheckedItems([checkedItems[5], e.target.checked])}
          >
            This tour is not recommended for travelers using a power wheelchair
          </Checkbox>
          <Checkbox
            isChecked={checkedItems[0]}
            onChange={(e) => setCheckedItems([checkedItems[6], e.target.checked])}
          >
            Travelers must be willing to self-transfer manually or be helped to do so,  in order to take part in this tour
          </Checkbox>

          <Checkbox
          isChecked={allChecked}
          isIndeterminate={isIndeterminate}
          onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
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
            {SelectAll()}
        </Stack>
      
    </Box>
)
  }
export default Restrictions;