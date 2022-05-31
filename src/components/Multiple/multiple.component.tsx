import * as React from "react"
import { useState, useEffect } from "react";
import {
  SimpleGrid,
  Stack,
  Text,
  Box,
  chakra,
  useCheckbox,
  useCheckboxGroup,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchTours, updateTour, selectAllTours, getTourStatus } from "../../reducers/appSlice";
import { Responsive } from "../generalTypes";

function CustomCheckbox(props: any) {
  const { state, getCheckboxProps, getInputProps, getLabelProps } = useCheckbox(props)
  //console.log('HIJO ', props)
  let backgroundValue: string;
  let colorValue: string;

  // Para cambiar el estado de los checkbox checkeados
  const [isCheckedItem, setisChecked] = useState(false)
    //console.log('HIJOisChecked ', props.value, props.isChecked)
    console.log('isCheckedItem', props.value, isCheckedItem)
    //console.log('isCheckedItem', props, isCheckedItem)

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
          <Input {...getInputProps()} hidden />
          <Text {...getLabelProps()}>{props.value}</Text>
       </chakra.label>
    )
}

const Multiple = () => {
  /* Redux ----------------------------------------------------------- */
  const dispatch = useAppDispatch();
	const tour = useAppSelector(selectAllTours);
	const status = useAppSelector(getTourStatus);

  useEffect(() => {
    dispatch(fetchTours())
  }, []);

  useEffect(() => {
    if (status === "succeeded" ) {
      setCheckedItems(tour.basicInformation.typeOfActivity)
    }
  }, [status]);

  // Arreglo de strings para guardar los checkboxes seleccionados
  const [checkedItems, setCheckedItems] = useState<string[]>([])

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

  const handleCheckedItems = (expereinceName:string, checkea:boolean) => {
    // Agregando el nombre de la experiencia que se seleccionó en el hijo CustomCheckbox
  
    //console.log('PADREisChecked', checkea)
    if(checkea === false){
      setCheckedItems([...checkedItems, expereinceName])
    }
    else {
      // filter regresa una copia del arreglo original, pero ahora sin el expereinceName que indique
      const result = checkedItems.filter(checkedItems => checkedItems != expereinceName)
      // actualizamos al arreglo original checkedItems con el arreglo de filter
      setCheckedItems(result)
    }  
  }
  //console.log('Arreglo', checkedItems)
  //console.log('Arreglo', value)

  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: ['Air tour'],
  })

  return (
    <Box boxShadow='2xl'
        w="65%" 
        p={10}
        background="#EBE9E9"
        borderRadius="10px">
        
        <Stack spacing={2}>
          <Text fontSize={Responsive.fontSizeResponsiveHead} color='#3F6FE4'> Basic Information / Type of tour </Text>
          <Heading fontSize={Responsive.fontSizeResponsiveBody}> What kind of experience would you like to offer? </Heading>
        </Stack>
        
        <SimpleGrid columns={[1, 1, 2, 2, 3]} spacing={15} paddingTop='25px' h='full' fontSize={Responsive.fontSizeResponsiveHead} >
          {
            experiences.map((experience: string) =>(
              <CustomCheckbox
              // Llamando a función hijo CustomCheckbox, se le pasa el arreglo de experiences
              {...getCheckboxProps({value: `${experience}`})}
              // Función que en el Padre se llama handleCheckedItems, se pasa como onChange
              onChange={handleCheckedItems}
              />
            ))
          }
        </SimpleGrid>
    </Box>
  )
}
    
export default Multiple;