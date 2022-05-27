import * as React from "react"
import {
  Text,
  Heading,
  ChakraProvider,
  Stack,
  SimpleGrid,
  useCheckbox,
  chakra, 
  useCheckboxGroup,
  Box,
} from "@chakra-ui/react"

import { useLocation } from "react-router-dom"
import { useState } from "react";
import { Responsive } from "../generalTypes";

function CustomCheckbox(props: any) {
  const { state, getCheckboxProps, getInputProps, getLabelProps } = useCheckbox(props)
  //console.log('HIJO ', props)
  let backgroundValue: string;
  let colorValue: string;

  // Para cambiar el estado de los checkbox checkeados
  const [isCheckedGeneral, setisGeneral] = useState(false)
  const [isCheckedFood, setisFood] = useState(false)
  const [isCheckedTrans, setisTrans] = useState(false)
  const [isCheckedAccess, setisAccess] = useState(false)

    function State() {
      if(props.ruta == 'whats-included-general') {
        setisGeneral(!isCheckedGeneral)
        props.onChange(props.value, isCheckedGeneral)
      } else if (props.ruta == 'whats-included-food'){
        setisFood(!isCheckedFood)
        props.onChange(props.value, isCheckedFood)
      } else if (props.ruta == 'whats-included-transport') {
        setisTrans(!isCheckedTrans)
        props.onChange(props.value, isCheckedTrans)
      } else if (props.ruta == 'whats-included-accessibility') {
        setisAccess(!isCheckedAccess)
        props.onChange(props.value, isCheckedAccess)
      }
    }

    if(props.ruta == 'whats-included-general' && isCheckedGeneral == false){
        backgroundValue = '#fff'
        colorValue = '#000'
      } else if(props.ruta == 'whats-included-food' && isCheckedFood == false){
          backgroundValue = '#fff'
          colorValue = '#000'
      } else if(props.ruta == 'whats-included-transport' && isCheckedTrans == false){
        backgroundValue = '#fff'
        colorValue = '#000'
      } else if(props.ruta == 'whats-included-accessibility' && isCheckedAccess == false){
        backgroundValue = '#fff'
        colorValue = '#000'
      } else {
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
            State()
          }}
          >
          <input {...getInputProps()} hidden />
          <Text {...getLabelProps()}>{props.value}</Text>
       </chakra.label>
    )
}

const WhatsIncluded: React.FC = () => {
    const { value, getCheckboxProps } = useCheckboxGroup()

    const location = useLocation();
    const link: string[] = location.pathname.split('/')
    const route: string = link[link.length - 1]

    // Arreglo de strings para guardar los checkboxes seleccionados
    const [checkedItemsGeneral, setCheckedItems1] = useState<string[]>([])
    const [checkedItemsFood, setCheckedItems2] = useState<string[]>([])
    const [checkedItemsTransport, setCheckedItems3] = useState<string[]>([])
    const [checkedItemsAccessibility, setCheckedItems4] = useState<string[]>([])
    
    const included: string[]=[];
    if(route === "whats-included-general"){
      included.push('Admission / ticket', 
      'Park entrance',
      'Audio guides',
      'Tour Guides',
      'Insurance',
      'Gratuities',
      'Tourist city taxes');
    }
    else if(route === "whats-included-food"){
      included.push('Snacks',
      'Alcoholic beverages',
      'Breakfast',
      'Soft Drinks',
      'Lunch',
      'Dinner')
    }
    else if(route === "whats-included-transport"){
      included.push('Gound transportation',
      'Accessible transportation',
      'Professional driver',
      'Parking')
    }
    else if(route === "whats-included-accessibility"){
      included.push('Instructors',
      'Equipment rental',
      'Assistants')
    }

    /* RESPONSIVE --------------------------------- */
    const handleCheckedItems = (includesName:string, checkea:boolean) => {
      // Agregando el nombre de la experiencia que se selccionó en el hijo CustomCheckbox
        if(route === "whats-included-general"){
          if(checkea === false){
            setCheckedItems1([...checkedItemsGeneral, includesName])
          }
          else {
            // filter regresa una copia del arreglo original, pero ahora sin el expereinceName que indique
            const result = checkedItemsGeneral.filter(checkedItemsGeneral => checkedItemsGeneral != includesName)
            // actualizamos al arreglo original checkedItems con el arreglo de filter
            setCheckedItems1(result)
          }
        } else if(route === "whats-included-food"){
          if(checkea === false){
            setCheckedItems2([...checkedItemsFood, includesName])
          }
          else {
            // filter regresa una copia del arreglo original, pero ahora sin el expereinceName que indique
            const result = checkedItemsFood.filter(checkedItemsFood => checkedItemsFood != includesName)
            // actualizamos al arreglo original checkedItems con el arreglo de filter
            setCheckedItems2(result)
          }
        } else if(route === "whats-included-transport"){
          if(checkea === false){
            setCheckedItems3([...checkedItemsTransport, includesName])
          }
          else {
            // filter regresa una copia del arreglo original, pero ahora sin el expereinceName que indique
            const result = checkedItemsTransport.filter(checkedItemsTransport => checkedItemsTransport != includesName)
            // actualizamos al arreglo original checkedItems con el arreglo de filter
            setCheckedItems3(result)
          }
        }else if(route === "whats-included-accessibility"){
          if(checkea === false){
            setCheckedItems4([...checkedItemsAccessibility, includesName])
          }
          else {
            // filter regresa una copia del arreglo original, pero ahora sin el expereinceName que indique
            const result = checkedItemsAccessibility.filter(checkedItemsAccessibility => checkedItemsAccessibility != includesName)
            // actualizamos al arreglo original checkedItems con el arreglo de filter
            setCheckedItems4(result)
          }
        }
    }
        console.log('General', checkedItemsGeneral)
        console.log('Food', checkedItemsFood)
        console.log('transport',checkedItemsTransport)
        console.log('Accesibility', checkedItemsAccessibility)

    return(
      <React.Fragment>
        <Box boxShadow='2xl'
             w="65%" 
             p={10}
             background="#EBE9E9"
             borderRadius="10px">
  
            <Stack spacing={2}>
                <Text fontSize={Responsive.fontSizeResponsiveHead} color='#3F6FE4'> What's included </Text>
                <Heading fontSize={Responsive.fontSizeResponsiveBody}> Select what's included with your tour </Heading>
            </Stack>
            
            <SimpleGrid h='80%' columns={[1, 1, 2, 2, 3]} spacing={15} paddingTop='30px' alignSelf={'center'} fontSize={Responsive.fontSizeResponsiveHead}>
            {
            included.map ((includes: string) =>(
            <CustomCheckbox
            // Llamando a función hijo CustomCheckbox, se le pasa el arreglo de experiences
            {...getCheckboxProps({value: `${includes}`, ruta: `${route}`})}
            // Función que en el Padre se llama handleCheckedItems, se pasa como onChange
            onChange={handleCheckedItems}
            />
            ))
            }
            </SimpleGrid>

        </Box >
      </React.Fragment>
    )
}

export default WhatsIncluded;
