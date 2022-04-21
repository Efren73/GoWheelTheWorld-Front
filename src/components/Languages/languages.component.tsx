import * as React from "react"
import {
  Text,
  VStack,
  Stack,
  Button,
  Grid,
  Box,
  useCheckbox,
  chakra,
  useCheckboxGroup
} from "@chakra-ui/react"




const Languages = () => {
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

  const languages: string[] = [
    'English',
    'Spanish',
    'French',
    'German',
    'Italian',
    'Portuguese',
    'Russian',
    'Mandarin',
    'Japanese'
  ]

  return(
    <Box boxShadow='2xl'
      w="65%" 
      h="full"
      p={10}
      background="#EBE9E9"
      borderRadius="10px">

      <Stack spacing={2}>
        <Text fontSize='20px' color='#3F6FE4'>Itinerary / Languages</Text>
        <Text fontSize='35px'>Select the spoken languages on this tour.</Text>
      </Stack>

      <Grid templateColumns='repeat(2, 5fr)' gap={15} justifyItems='center' paddingTop='30px' h='80%' overflowY='auto'>
        {
          languages.map((language: string) =>(
            <CustomCheckbox {...getCheckboxProps({value: `${language}`})} />
          ))
        }
      </Grid>
    </Box>
  )
}
export default Languages;