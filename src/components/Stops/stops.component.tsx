import * as React from "react"
import { useState } from "react"
import {
  Text,
  VStack,
  Stack,
  Input,
  Button,
  HStack,
  Box,
  ChakraProvider,
  useNumberInput,
} from "@chakra-ui/react"

import { DeleteIcon } from "@chakra-ui/icons"

const Stops: React.FC = () => {

  //Definición de useState para que el usuario pueda ingresar varias preguntas
    let [questionAnswer, setQuestionAnswer]:any = useState([])

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

  //Función para que cuando se de click a add, se agreguen elementos al arreglo con el fin de que se rendericen más componentes
  const addQuestionAnswer = () => {
    setQuestionAnswer([...questionAnswer, '']);
  }

  function handleSubmit(e: any){
    e.preventDefault();
    console.dir(e.target)
  }
  
  return(
    <ChakraProvider>
      <Box boxShadow='2xl'
        w="65%" 
        h="full"
        p={10}
        background="#EBE9E9"
        borderRadius="10px">
          
          <Stack spacing={2}>
            <Text fontSize='20px' color='#3F6FE4'>Itinerary / Stops</Text>
            <Text fontSize='35px'>Introduce the number of stops</Text>
          </Stack>

          <HStack spacing={0} paddingTop='30px'>
            
          </HStack>

          <Stack>
                    <Button bg='#3F6FE4' border=' 1px solid #000' color='#fff' borderRadius='20px' 
                    onClick={addQuestionAnswer} w='10%' >
                        + Add
                    </Button>
            </Stack>
            <form onSubmit={handleSubmit}>
                    {
                        questionAnswer && questionAnswer.map(()=>(
                            
                            <Stack w='70%'>
                                <HStack>
                                    <Input placeholder='Name' bg="#fff" />
                                </HStack>
                                <HStack>
                                    <Input placeholder='Duration' bg="#fff"/>
                                </HStack>
                                <HStack justifyContent='flex-end'>
                                        <Button variant="link" marginBottom={'20px'}>
                                            <DeleteIcon />
                                        </Button>
                                </HStack>
                                
                            </Stack>
                        ))
                    }
                    {/*
                    <Button type="submit">Type submit</Button>
                */}
                </form>
        </Box>
      </ChakraProvider>
  )
}
export default Stops;