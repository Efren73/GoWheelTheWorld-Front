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
  Heading,
} from "@chakra-ui/react"

import { DeleteIcon } from "@chakra-ui/icons"

const Stops: React.FC = () => {
    let [stops, setStops] = useState<any>([])

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

  /* RESPONSIVE -------------------------------------------------------*/
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
                    {/*
                    <Button type="submit">Type submit</Button>
                */}
                </form>
        </Box>
      </React.Fragment>
  )
}
export default Stops;