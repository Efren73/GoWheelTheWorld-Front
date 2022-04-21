import * as React from "react"
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

const Stops: React.FC = () => {
  function HookUsage() {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
        step: 1,
        defaultValue: 0,
        min: 1,
        max: 20,
        precision: 1,
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
            {HookUsage()}
          </HStack>
        </Box>
      </ChakraProvider>
  )
}
export default Stops;