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
import { Responsive } from "../generalTypes";
import { useState, useEffect } from "react"

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchTours, updateTour, selectAllTours, getTourStatus, changeState} from "../../reducers/appSlice";

function CustomCheckbox(props: any) {
  const { state, getCheckboxProps, getInputProps, getLabelProps } = useCheckbox(props)
  
  let backgroundValue: string;
  let colorValue: string;

    if(props.isChecked === true){
      backgroundValue = "#3F6FE4"
      colorValue = "#fff"
    }
    else{
      backgroundValue = '#fff'
      colorValue = '#000'
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
          //onChange={() => {
            // Función que en el Padre se llama handleCheckedItems, se pasó como onChange
            // El hijo le pasa al Padre la experience selccionada y su estado
            //setisChecked(!isCheckedItem)
           // props.onChange(props.value, isCheckedItem)
            
            //console.log('HIJOisCheckedItem',isCheckedItem)
          //}}
          >
          <input {...getInputProps()} hidden />
          <Text {...getLabelProps()}>{props.value}</Text>
       </chakra.label>
    )
}

const Languages: React.FC = () => {
  const dispatch = useAppDispatch();
  const [addRequestStatus, setAddRequestStatus] = useState('idle')
  const tour = useAppSelector(selectAllTours);
  const status = useAppSelector(getTourStatus);

  useEffect(() => {
    dispatch(fetchTours())
    }, []);

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
    
  }

  console.log(checkedItems)

  useEffect(() => {
    dispatch(changeState(
      {
        intinerary : {
          ...tour.intinerary,
          languages: checkedItems
        }
      }
    ))    
    },[checkedItems]);

  useEffect(() => {
    if (status === "succeeded" ) {   
      if (tour.intinerary != undefined  && tour.intinerary.languages!= undefined)
        setCheckedItems(tour.intinerary.languages)
    } 
    }, [status]);

  console.log('checkedItems', checkedItems)
 

  return(
    <Box boxShadow='2xl'
      w="65%" 
      p={10}
      background="#EBE9E9"
      borderRadius="10px">

      <Stack spacing={2}>
        <Text fontSize={Responsive.fontSizeResponsiveHead} color='#3F6FE4'> Itinerary / Languages </Text>
        <Heading fontSize={Responsive.fontSizeResponsiveBody}> Select the spoken languages on this tour </Heading>
      </Stack>

      <SimpleGrid columns={[1, 1, 1, 2, 3]} spacing={15} justifyItems='center' paddingTop='30px' h='80%' overflowY='auto' fontSize={Responsive.fontSizeResponsiveHead}>
        {
          languages.map((language: string) =>(
            <React.Fragment>
              {checkedItems.includes(language) ? 
              <CustomCheckbox
              // Llamando a función hijo CustomCheckbox, se le pasa el arreglo de experiences
              {...{value: `${language}`, isChecked: true}}
              // Función que en el Padre se llama handleCheckedItems, se pasa como onChange
              onChange={()=> handleCheckedItems(language, true)}
              /> :
              <CustomCheckbox
              {...{value: `${language}`, isChecked: false}}
              onChange={()=> handleCheckedItems(language, false)}
              />}
            </React.Fragment>

          ))
        }
      </SimpleGrid>
    </Box>
  )
}
export default Languages;