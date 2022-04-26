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

import Group from './images/grupo.png';
import Private from './images/usuario.png';
import src from "@chakra-ui/visually-hidden/dist/declarations/src";
import { InfoIcon } from "@chakra-ui/icons";


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
            height='80px'
            width='200px'
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
        'Private',
        'Group',
      ]
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
                        <CustomCheckbox {...getCheckboxProps({value: `${experience}`})} />
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