import * as React from "react"
import {
  Grid,
  Stack,
  Text,
  Box,
  chakra,
  useCheckbox,
  useCheckboxGroup
} from "@chakra-ui/react"

const Multiple = () => {

  //Customización del checkbox
function CustomCheckbox(props: any) {
  const { state, getCheckboxProps, getInputProps, getLabelProps } =
    useCheckbox()
  
  let backgroundValue: string;
  let colorValue: string;

    if(!state.isChecked){

      backgroundValue = '#fff'
      colorValue = '#000'
    }
    else{
      backgroundValue = '#3F6FE4'
      colorValue='#fff'
    }

    return (
      <chakra.label
          display='flex'
          alignItems='center'
          justifyContent='center'
          w='200px'
          h='48px'
          bg={backgroundValue}
          border='1px solid'
          borderColor='#3F6FE4'
          color={colorValue}
          rounded='lg'
          cursor='pointer'
          {...getCheckboxProps()}
          >
          <input {...getInputProps()} hidden />
          <Text {...getLabelProps()}>{props.value}</Text>
       </chakra.label>
    )
  }
  const { value, getCheckboxProps } = useCheckboxGroup()

  const experiences: string[] = [
    'Outdoor activity',
'Hiking activity',
'Snow activity',
'Water activity',
'Air activity',
'Sports activity',
'Ticket activity',
'Attraction',
'City tour',
'Food tour',
'Driving tour',
'Riding tour',
'Boat tour',
'Air tour'
  ]
  return(
    <Box boxShadow='2xl'
        w="65%" 
        h="full"
        p={10}
        background="#EBE9E9"
        borderRadius="10px">
        
        <Stack spacing={2}>
          <Text fontSize='20px' color='#3F6FE4'>Basic Information / Type of tour</Text>
          <Text fontSize='35px'>What kind of experience would you like to offer?</Text>
        </Stack>
        
        <Grid templateColumns='repeat(3, 5fr)' gap={15} paddingTop='25px' h='70%' overflowY='auto'  >
          {
            experiences.map((experience: string) =>(
              <CustomCheckbox {...getCheckboxProps({value: `${experience}`})} />
            ))
          }
        </Grid>
    </Box>
  )
}
    
export default Multiple;