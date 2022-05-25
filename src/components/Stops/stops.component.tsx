import * as React from "react"
import { useState, useEffect } from "react"
import {
  Text,
  Stack,
  Input,
  Button,
  HStack,
  Box,
  useNumberInput,
  ChakraProvider,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Heading,
} from "@chakra-ui/react"

import { DeleteIcon } from "@chakra-ui/icons"

const Stops: React.FC = () => {
   // let [stops, setStops] = useState<any>([])

  //Definición de useState para que el usuario pueda ingresar varias preguntas
  let [questionAnswer, setQuestionAnswer] = useState<any>([])

  //Definición de useState para que aparezca la primer pregunta del Checkbox
  let [check1, setCheck1] = useState(false)

  //Definicion de useState para encontrar el valor que se encuentra en el input
  let [text, setText] = useState('')
  //UseState para contar los caracteres
  let [characters, setCharacters] = useState(0)
  //Valor que se encuentra en el input para contar caracteres
  let inputValue: any;

  //Función cada vez que el contenido del texto cambie
  let handleInputChange = (e: any) => {
      inputValue = e.target.value
      //Si la longitud es mayor que 60, entonces no podrán hacerse cambios, esta será la longitud máxima
      if(inputValue.length<=80){
          setText(inputValue)
          setCharacters(inputValue.length)
      }
  }



  //Funcion para que cuando se de click al checkbox, aparezca 
  function addAnswer(){
      return(
          <Box>
              <Input 
                  placeholder='Answer' 
                  bg="#fff" 
                  onChange={handleInputChange}
                  value={text}/>
              <Text color='#2F6FE4'>{characters}/80</Text>
          </Box>
      )
  }

  //Función para que cuando se de click a add, se agreguen elementos al arreglo con el fin de que se rendericen más componentes
  const addQuestionAnswer = () => {
      setQuestionAnswer([...questionAnswer, []]);
  }



  function handleSubmit(e: any){
      e.preventDefault();
      console.dir(e.target)
  }



  //En este Change se manejan varios valores del new array
  //El valor newArray[0] hace referencia a la pregunta que se introduce
  //El valor newArray[1] hace referencia a la respuesta que se introduce
  //El valor newArray[2] hace referencia a la cantidad de caracteres de la pregunta
  //El valor newArray[3] hace referencia a la cantidad de caracteres de la respuesta
  function changeOneValue(e: any, index: any, index2: any){
      console.log(index, index2)
      console.log(e.target.value)
      let newArray:string[][] = [...questionAnswer]
      console.log(e.target.value.length)
      if(e.target.value.length <= 80){
          if(index2 === 0){
              newArray[index][2] = e.target.value.length
          }
          else if(index2 === 1){
              newArray[index][3] = e.target.value.length
          }

          newArray[index][index2] = e.target.value
          setQuestionAnswer(newArray)
      }
  }

  function deleteQ (e: any, index: any){
      let newArray:string[][] = [...questionAnswer]
      newArray.splice(index, 1)
      setQuestionAnswer(newArray)
  }

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

      	/* TIEMPO DEL TOUR --------------------------------- */
	const [ hours, setHours ] = React.useState("")
    const [ minutes, setMinutes ] = React.useState("30")

	console.log(+hours)
	console.log(+minutes)

      // RESPONSIVE -------------------------------------------------------
  const fontSizeResponsive = { base:'20px', sm:'15px'};

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
        step: 1,
        defaultValue: 0,
        min: 1,
        })
    
        const inc = getIncrementButtonProps()
        const dec = getDecrementButtonProps()
        const input = getInputProps()
  return(
    
  <ChakraProvider>
       <Box boxShadow='2xl'
            w="65%"
            p={10}
            background="#EBE9E9"
            borderRadius="10px">

          <Stack spacing={2}>
              <Text  color='#3F6FE4' fontSize={fontSizeResponsive}>tinerary / Stops</Text>
              <Text fontSize={{base:'35px', sm:'20px'}}>Introduce the stops</Text>
          </Stack>

          <Stack overflowY='auto' w='full' justifyContent='flex-start'>

              <Stack>
                  <Button bg='#3F6FE4' border=' 1px solid #000' color='#fff' borderRadius='20px' 
                  onClick={addQuestionAnswer} w='10%' fontSize={{base: '25px', sm: '10px', md:'15px'}} >
                      + Add
                  </Button>
              </Stack>
              <form onSubmit={handleSubmit}>
                  {
                      (questionAnswer && questionAnswer.length > 0) ? questionAnswer.map((x: any, index: any)=>(
                          
                          <Stack w='100%' marginBottom={4}>
                              <HStack>
                                  <Stack w='85%'>
                                      <Text>Stop {index+1}</Text>
                                      <Box>
                                          <Box>
                                              <Input placeholder='Name' bg="#fff" value={x[0]} onChange={(e: any) => changeOneValue(e, index, 0)}/>
                                              <Text color='#2F6FE4'>{x[2] ? x[2]: 0}/80</Text>
                                          </Box>
                                          <Box>
                                          
                                            <Box w='full'>
                                                <Heading fontSize={{base:'35px', sm:'18px'}}>Duration</Heading>
                                            </Box>
                                            <Box>
                                                <Stack shouldWrapChildren direction={['column', 'column', "column", 'row']} >
                                                    <Text fontSize={fontSizeResponsive} color='#595959' paddingBottom='20px'>Hours</Text>
                                                    <NumberInput size='md' 
                                                                maxW={80} 
                                                                min={0} 
                                                                max={10} 
                                                                variant='outline' 
                                                                h='40px' 
                                                                fontSize={'20px'} 
                                                                background={'white'} 
                                                                defaultValue={0}
                                                                onChange={(valueString) => {
                                                                    setHours(valueString)
                                                                    }
                                                                }>
                                                        <NumberInputField />
                                                        <NumberInputStepper>
                                                            <NumberIncrementStepper bg='#2F6FE4' _active={{ bg: '#2558B6' }} children ='+'/>
                                                            <NumberDecrementStepper bg='#2F6FE4' _active={{ bg: '#2558B6' }} children ='-'/>
                                                        </NumberInputStepper>
                                                    </NumberInput>
                                                    
                                                    <Text fontSize={fontSizeResponsive} color='#595959' paddingBottom='20px'>Minutes</Text>
                                                    <NumberInput size='md' 
                                                                maxW={80}  
                                                                min={15} 
                                                                max={59} 
                                                                variant='outline' 
                                                                h='40px' 
                                                                fontSize={fontSizeResponsive}
                                                                background={'white'} 
                                                                defaultValue={30}
                                                                onChange={(value) => {
                                                                    setMinutes(value)
                                                                    }}>
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper  bg='#2F6FE4' _active={{ bg: '#2558B6' }} children ='+'/>
                                                                <NumberDecrementStepper bg='#2F6FE4' _active={{ bg: '#2558B6' }}  children ='-'/>
                                                            </NumberInputStepper>
                                                    </NumberInput>
                                                </Stack>
                                            </Box>
                                          
                                          </Box>
                                      <Flex justifyContent='flex-end'>
                                          <Button variant="link" onClick={(e: any) => deleteQ(e, index)} marginBottom='20px'>
                                              <DeleteIcon />
                                          </Button>
                                      </Flex>
                                      </Box>
                                  </Stack>

                              </HStack>
                          </Stack>
                      ))
                      : <p></p>
                  }
                  {/*
                  <Button type="submit">Type submit</Button>
              */}
              </form>
          </Stack>
      </Box >

  </ChakraProvider>
  )

}
export default Stops;