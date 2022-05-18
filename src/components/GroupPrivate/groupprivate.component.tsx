import * as React from "react"
import {
  Text,
  VStack,
  HStack,
  Button,
  Input,
  Wrap,
  useNumberInput,
  Stack,
  WrapItem,
  IconButton,
  Box,
  Image,
  ChakraProvider,
  Grid,
  useCheckbox,
  chakra,
  useCheckboxGroup,
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

const GruoupPrivate: React.FC = () => {

    function HookUsage() {
        const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
            useNumberInput({
            step: 1,
            defaultValue: 0,
            min: 1,
            })

        const inc = getIncrementButtonProps()
        const dec = getDecrementButtonProps()
        const input = getInputProps()

        return (
            <HStack maxW='200px'>
            <Button {...dec} background='#2F6FE4'>-</Button>
            <Input {...input} background='#white'/>
            <Button {...inc} background='#2F6FE4'>+</Button>
            </HStack>
        )
    }

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
       
      }
      console.log('Arreglo', checkedItems)

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

                <Text alignSelf={'flex-start'} fontSize='35px' paddingBottom='10px'>Please specify the minimum and maximum number of travelers</Text>

                <HStack w='42%' paddingBottom='10px' spacing='42%' justifyContent={'flex-start'}>
                    <Text fontSize='15px' >Minimum</Text>
                    <Text fontSize='15px' >Maximum</Text>
                </HStack>

                <HStack justifyContent={'center'} spacing='50px'>
                    <WrapItem>{HookUsage()}</WrapItem>
                    <WrapItem>{HookUsage()}</WrapItem>
                </HStack>
            </VStack>
            
            </Box>
        </ChakraProvider>

    )
}

export default GruoupPrivate;