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
                <Text fontSize='20px' color='#3F6FE4'>Basic Information / Travelers</Text>
            </Stack>

            <VStack h='90%' overflowY='auto'>
                <Text alignSelf={'flex-start'} fontSize='35px'>Is it a private or a group tour/activity?</Text>
                <HStack spacing='24px' paddingTop={'20px'} paddingBottom='30px' justifyContent={'center'}>
                
                    <Button 
                            variant='outline'
                            height='80px'
                            width='200px'
                            borderColor='#3F6FE4'
                            background='#FFFFFF'
                            border-radius='5px'
                            fontSize={'20px'}
                            >
                            <Image src={Private} alt='privateicon' w='50px' h='50px' paddingRight={'7px'}/>

                        Private
                    </Button>
                    <Button 
                            variant='outline'
                            height='80px'
                            width='200px'
                            borderColor='#3F6FE4'
                            background='#FFFFFF'
                            border-radius='5px'
                            fontSize={'20px'}
                            >
                            <Image src={Group} alt='groupicon' w='50px' h='50px' paddingRight={'7px'}/>

                        Group
                    </Button>
                </HStack>

                <Text fontSize='35px' paddingBottom='10px'>Please specify the minimum and maximum number of travelers.</Text>

                <HStack w='55%' paddingBottom='10px' spacing='42%' justifyContent={'flex-start'}>
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