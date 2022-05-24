import * as React from "react"
import {
  Text,
  Stack,
  SimpleGrid,
  Box,
  useCheckbox,
  chakra,
  useCheckboxGroup,
  Heading,
} from "@chakra-ui/react"

import { useState } from "react"

function CustomCheckbox(props: any) {
  const { state, getCheckboxProps, getInputProps, getLabelProps } = useCheckbox(props)
  //console.log('HIJO ', props)
  let backgroundValue: string;
  let colorValue: string;

  // Para cambiar el estado de los checkbox checkeados
  const [isCheckedItem, setisChecked] = useState(false)
    //console.log('HIJOisChecked ', props.value, props.isChecked)
    //console.log('isCheckedItem', props.value, isCheckedItem)

    if(!isCheckedItem){
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
          onChange={() => {
            // Función que en el Padre se llama handleCheckedItems, se pasó como onChange
            // El hijo le pasa al Padre la experience selccionada y su estado
            setisChecked(!isCheckedItem)
            props.onChange(props.value, isCheckedItem)
            
            //console.log('HIJOisCheckedItem',isCheckedItem)
          }}
          >
          <input {...getInputProps()} hidden />
          <Text {...getLabelProps()}>{props.value}</Text>
       </chakra.label>
    )
}

const Languages = () => {
  const { value, getCheckboxProps } = useCheckboxGroup()

  // Arreglo de strings para guardar los checkboxes seleccionados
  const [checkedItems, setCheckedItems] = useState<string[]>([])

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

  const handleCheckedItems = (languageName:string, checkea:boolean) => {
    // Agregando el nombre de el lenguaje que se selccionó en el hijo CustomCheckbox
  
    //console.log('PADREisChecked', checkea)
    if(checkea === false){
      setCheckedItems([...checkedItems, languageName])
    }
    else {
      // filter regresa una copia del arreglo original, pero ahora sin el languageName que indique
      const result = checkedItems.filter(checkedItems => checkedItems != languageName)
      // actualizamos al arreglo original checkedItems con el arreglo de filter
      setCheckedItems(result)
    }
    console.log('PADRE', checkedItems)
  }

  /* RESPONSIVE -------------------------------------------------------*/
  const fontSizeResponsive = { base:'20px', sm:'15px'};

  return(
    <Box boxShadow='2xl'
      w="65%" 
      p={10}
      background="#EBE9E9"
      borderRadius="10px">

      <Stack spacing={2}>
        <Text fontSize={fontSizeResponsive} color='#3F6FE4'> Itinerary / Languages </Text>
        <Heading fontSize={{base:'35px', sm:'18px'}}> Select the spoken languages on this tour </Heading>
      </Stack>

      <SimpleGrid columns={[1, 1, 1, 2, 3]} spacing={15} justifyItems='center' paddingTop='30px' h='80%' overflowY='auto' fontSize={fontSizeResponsive}>
        {
          languages.map((language: string) =>(
            <CustomCheckbox
            // Llamando a función hijo CustomCheckbox, se le pasa el arreglo de experiences
            {...getCheckboxProps({value: `${language}`})}
            // Función que en el Padre se llama handleCheckedItems, se pasa como onChange
            onChange={handleCheckedItems}
            />

          ))
        }
      </SimpleGrid>
    </Box>
  )
}
export default Languages;