import * as React from "react"
import {
  Text,
  VStack,
  Stack,
  Input,
  Button,
  HStack,
} from "@chakra-ui/react"

const Stops = () => (
    <VStack
        h='full'
        w='880px'
        padding='20px'
        alignItems='flex-start'
        background="#EBE9E9">
      
      <Stack spacing={2}>
        <Text fontSize='20px' color='#3F6FE4'>Itinerary / Meeting and end Point</Text>
        <Text fontSize='35px'>Introduce the number of stops</Text>
      </Stack>

      <HStack spacing={0} paddingTop='30px'>
        <Button 
                    variant='outline'
                    h='45px'
                    w='55px'
                    background='#3F6FE4'
                    fontSize={'20px'}
                    color='#FFFFFF'
                    >     
                    -
                </Button>
                <Input
                    h='40px'
                    w='55px'
                    variant='outline'
                    placeholder='0'
                    fontSize={'15px'}/>
                <Button 
                    variant='outline'
                    h='45px'
                    w='55px'
                    background='#3F6FE4'
                    fontSize={'20px'}
                    color='#FFFFFF'
                    >     
                    +
                </Button>

      </HStack>
    </VStack>

)
export default Stops;