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
} from "@chakra-ui/react"

import Group from './images/grupo.png';
import Private from './images/usuario.png';
import src from "@chakra-ui/visually-hidden/dist/declarations/src";
import { InfoIcon } from "@chakra-ui/icons";

const GruoupPrivate = () => (
        <Box boxShadow='2xl'
			 w="65%" 
			 h="full"
			 p={20}
			 background="#EBE9E9"
			 borderRadius="10px">
      
        <Stack spacing={2}>
            <Text fontSize='20px' color='#3F6FE4'>Basic Information / Type</Text>
        </Stack>

        <VStack h='90%' overflowY='auto' w='650px'>
            <Text fontSize='35px'>Is it a private or a group tour/activity?</Text>
            <HStack spacing='24px' paddingTop={'30px'} paddingBottom='50px' justifyContent={'center'}>
               
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

            <Text fontSize='35px' paddingBottom='30px'>Please specify the minimum and maximum number of travelers.</Text>

            <Wrap paddingBottom='10px' spacing={'160px'} justifyContent={'center'}>
                <Text fontSize='15px' >Minimum</Text>
                <Text fontSize='15px' >Maximum</Text>
            </Wrap>

            <Wrap justifyContent={'center'}>
                <WrapItem >
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
                        background={'white'}
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

                </WrapItem>

                <WrapItem paddingLeft={50}>
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
                        background={'white'}
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

                </WrapItem>
            </Wrap>
        </VStack>
        
        </Box>
            

)

function HookUsage(): JSX.Element  {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
        step: 0.01,
        defaultValue: 1.53,
        min: 1,
        max: 6,
        precision: 2,
        })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()

    return (
        <HStack maxW='320px'>
        <Button {...inc}>+</Button>
        <Input {...input} />
        <Button {...dec}>-</Button>
        </HStack>
    )
}

export default GruoupPrivate;