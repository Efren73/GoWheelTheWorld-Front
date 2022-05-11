import * as React from "react"
import {
  Text,
  VStack,
  HStack,
  Button,
  Input,
  Stack,
  Box,
  ChakraProvider,
  Grid,
  useCheckbox,
  chakra,
  useCheckboxGroup,
  useControllableState,
} from "@chakra-ui/react"

import { useState } from "react"

function CustomCheckbox(props: any) {
  const { state, getCheckboxProps, getInputProps, getLabelProps } = useCheckbox(props)
  //console.log('HIJO ', props)
  let backgroundValue: string;
  let colorValue: string;
  let srcValue: any;

  // Para cambiar el estado de los checkbox checkeados
  const [isCheckedItem, setisChecked] = useState(false)
    //console.log('HIJOisChecked ', props.value, props.isChecked)
    //console.log('isCheckedItem', props.value, isCheckedItem)

    if(!isCheckedItem) {
      backgroundValue = '#fff'
      colorValue = '#000'
    } else {
      backgroundValue = '#3F6FE4'
      colorValue='#fff'
    }

    if(props.value == 'Private') {
        srcValue = 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png'
    } else {
        srcValue = 'https://cdn-icons-png.flaticon.com/512/681/681494.png'
    }

    return (
      <chakra.label
          display='flex'
          alignItems='center'
          justifyContent='center'
          w='200px'
          h='105px'
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
            <img src={srcValue} height ="50" width="50" />

            <img {...getInputProps()} hidden />

          <input {...getInputProps()} hidden />
          <Text {...getLabelProps()}>{props.value}</Text>
       </chakra.label>
    )
}

const GroupPrivate: React.FC = () => {

    const { value, getCheckboxProps } = useCheckboxGroup()

    // Arreglo de strings para guardar los checkboxes seleccionados
    const [checkedItems, setCheckedItems] = useState<string[]>([])

    const experiences: string[] = [
        'Private',
        'Group',
      ]

      const handleCheckedItems = (typeExperience:string, checkea:boolean) => {
        // Agregando el nombre de la experiencia que se selccionó en el hijo CustomCheckbox
      
        //console.log('PADREisChecked', checkea)
        if(checkea === false){
          setCheckedItems([...checkedItems, typeExperience])
        }
        else {
          // filter regresa una copia del arreglo original, pero ahora sin el expereinceName que indique
          const result = checkedItems.filter(checkedItems => checkedItems != typeExperience)
          // actualizamos al arreglo original checkedItems con el arreglo de filter
          setCheckedItems(result)
        }
        console.log('PADRE', checkedItems)
      }

    // SEGUNDA PREGUNTA
    /* OPCIÓN 1 ---------------------------------------*/
    // Control de objeto con máximo y mínimo
    const [ valueBotones, setValueBotones ] = React.useState({
        maximum: 1,
        minimum: 1,
    })

    // Control de botones + y -
    const [ internalValue, setInternalValue ] = useControllableState({
        ...valueBotones,
        onChange: setValueBotones,
    })

    // Control de input
    const handleInputChange = (event: any) => {
        setValueBotones({
            ...valueBotones,
            [event.target.name]: event.target.value 
        })

        setInternalValue({
            ...valueBotones,
            [event.target.name]: event.target.value,
        })
    }

    /* OPCIÓN 2 ----------------------------------------- */
    const [minimo, setMinimo] = React.useState(1)
    const [maximo, setMaximo] = React.useState(1)
    const buttonDisabledMinimo = minimo == 1;
    const buttonDisabledMaximo = maximo == 1;

    let inputValue: any;
    function ChangeMinimo(e: any){
        inputValue = +e.target.value;
        if(inputValue > 1 || inputValue == '') setMinimo(inputValue)
        else setMinimo(1)
    }

    let inputValue2: any;
    function ChangeMaximo(e: any) {
        inputValue2 = +e.target.value;
        if(inputValue2 > 1 || inputValue2 == '') setMaximo(inputValue2)
        else setMaximo(1)
    }

    function Decrease(valor: any) {
        if(valor === 'minimo') {
            if(minimo <= 1) setMinimo(1)
            else setMinimo(+minimo-1)
        } else {
           if(maximo <= 1) setMaximo(1)
            else setMaximo(+maximo-1)
        }
        if(maximo < minimo) setMaximo(+minimo)
    }

    function Increase(valor: any) {
        if(maximo < minimo) setMaximo(+minimo + 1)
        if(valor === 'minimo') setMinimo(+minimo+1)
        else setMaximo(+maximo+1)
    }
    // ----------------------------------------

    console.log('Minimo', minimo)
    console.log('Maximo', maximo)

    return(
        <ChakraProvider>
            <Box boxShadow='2xl'
                w="65%" 
                h="full"
                p={10}
                background="#EBE9E9"
                borderRadius="10px">
        
            <Stack spacing={2}>
                <Text fontSize='20px' color='#3F6FE4'>Basic Information / Travelers</Text>
            </Stack>

            <VStack>
                <Text alignSelf={'flex-start'} fontSize='35px'>Is it a private or a group tour/activity?</Text>
                <Grid templateColumns='repeat(2, 1fr)' gap={30} paddingTop='20px' paddingBottom='30px' alignSelf={'center'}>
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
                </Grid>

                <Text alignSelf={'flex-start'} fontSize='35px' paddingBottom='10px'>
                    Please specify the minimum and maximum number of travelers
                </Text>

                <HStack w='42%' paddingBottom='10px' spacing='42%' justifyContent={'flex-start'}>
                    <Text fontSize='15px'>Minimum</Text>
                    <Text fontSize='15px'>Maximum</Text>
                </HStack>

                <HStack justifyContent={'center'} spacing='50px'> 
                    <HStack maxW='200px'>
                        <Button isDisabled={buttonDisabledMinimo} name="minimum" onClick={() => Decrease('minimo')} background='#2F6FE4'> - </Button>
                        <Input  onChange={ChangeMinimo} 
                                value={minimo}
                                background='#white'/>
                        <Button name="minimum" onClick={() => Increase('minimo')} background='#2F6FE4'> + </Button>
                    </HStack>
                    <HStack maxW='200px'>
                        <Button isDisabled={buttonDisabledMaximo} name="maximum" onClick={() => Decrease('maximo')} background='#2F6FE4'> - </Button>
                        <Input  onChange={ChangeMaximo} 
                                value={maximo}
                                background='#white' />
                        <Button name="maximum" onClick={() => Increase('maximo')} background='#2F6FE4'> + </Button>
                    </HStack>
                </HStack>
            </VStack>
            </Box>
        </ChakraProvider>

    )
}

export default GroupPrivate;