import * as React from "react"
import { useState } from "react"
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
/*
  //Función para que cuando se de click a add, se agreguen elementos al arreglo con el fin de que se rendericen más componentes
  const addStop = () => {
    setStops([...stops, {
      stopName: "",
      stopDuration: ""
    }]);
  }

  function handleSubmit(e: any){
    e.preventDefault();
    console.dir(e.target)
  }

  function change(e: any, index: any, type: string){
    const newArr = [...stops];
    if(type === "name"){
      newArr[index].stopName = e.target.value;
      setStops(newArr);
    }

    else{
      newArr[index].stopDuration = e.target.value;
      setStops(newArr);
    }
  }

  function deleteStop(e: any, index: any){
    const newArr = [...stops];
    newArr.splice(index, 1);
    setStops(newArr);
  }

  console.log(stops)

  // RESPONSIVE -------------------------------------------------------
  const fontSizeResponsive = { base:'20px', sm:'15px'};
  
  return (
    <React.Fragment>
      <Box boxShadow='2xl'
           w="65%" 
           h="full"
           p={10}
           background="#EBE9E9"
           borderRadius="10px">
        
        <Stack spacing={2}>
          <Text fontSize={fontSizeResponsive} color='#3F6FE4'> Itinerary / Stops </Text>
          <Heading fontSize={{base:'35px', sm:'18px'}}>Introduce the number of stops</Heading>
        </Stack>
        <Stack  paddingTop='20px'>
          <Button bg='#3F6FE4' border=' 1px solid #000' color='#fff' borderRadius='20px' 
          onClick={addStop} w='10%' fontSize={fontSizeResponsive}>
              + Add
          </Button>
        </Stack>
            <form onSubmit={handleSubmit}>
                    {
                        stops && stops.map((stop: any, index: any)=>(
                            
                            <Stack w='70%'>
                                <HStack>
                                    <Input placeholder='Name' bg="#fff" value={stop.stopName} 
                                    onChange = {(e: any) => change(e, index, "name")}/>
                                </HStack>
                                <HStack>
                                    <Input placeholder='Duration' bg="#fff" value={stop.stopDuration} onChange = {(e: any) => change(e, index, "duration")}/>
                                </HStack>
                                <HStack justifyContent='flex-end'>
                                        <Button variant="link" marginBottom={'20px'} onClick={(e: any) => deleteStop(e, index)}>
                                            <DeleteIcon />
                                        </Button>
                                </HStack>
                                
                            </Stack>
                        ))
                    }
                    }
                </form>
        </Box>
      </React.Fragment>

      */

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
            h="full"
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
                                          <Text>Duration</Text>

                                            <HStack w='42%' paddingBottom='10px' spacing='42%' justifyContent={'flex-start'}>
                                                <Text fontSize='15px' >Hours</Text>
                                                <Text fontSize='15px' >Minutes</Text>
                                            </HStack>

                                            <HStack spacing='50px'>
                                            
                                              <HStack maxW='200px'>
                                                <Button {...dec} background='#2F6FE4'>-</Button>
                                                <Input {...input} background='#white' value={x[1]} onChange={(e: any) => changeOneValue(e, index, 1)}/>
                                                <Button {...inc} background='#2F6FE4'>+</Button>
                                              </HStack>

                                              <HStack maxW='200px'>
                                                <Button {...dec} background='#2F6FE4'>-</Button>
                                                <Input {...input} background='#white' value={x[1]} onChange={(e: any) => changeOneValue(e, index, 1)}/>
                                                <Button {...inc} background='#2F6FE4'>+</Button>
                                              </HStack>

                                            </HStack>
                                          
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