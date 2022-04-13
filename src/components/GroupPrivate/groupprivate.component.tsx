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
} from "@chakra-ui/react"

import group from './images/grupo.png';
//import private from './images/usuario.png';
import src from "@chakra-ui/visually-hidden/dist/declarations/src";

const GruoupPrivate = () => (
    <VStack
        h='full'
        w='880px'
        padding='20px'
        alignItems='flex-start'
        background="#EBE9E9">
      
      <Stack spacing={2}>
        <Text fontSize='20px' color='#3F6FE4'>Basic Information / Type</Text>
        <Text fontSize='35px'>Is it a private or a group tour/activity?</Text>
      </Stack>
        
        <HStack spacing='24px' paddingTop={'30px'} paddingBottom='50px' alignSelf={'center'}>
            <Button 
                    variant='outline'
                    height='80px'
                    width='200px'
                    borderColor='#3F6FE4'
                    background='#FFFFFF'
                    border-radius='5px'
                    fontSize={'20px'}
                    >
                        
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
                //<Image src={photo} alt="default image"  maxWidth={114} maxH={71}/>
                //leftIcon={src={group}}
                >
                Group
            </Button>
        </HStack>

        <Text fontSize='35px' paddingBottom='30px'>Is it a private or a group tour/activity?</Text>

        <Wrap paddingBottom='10px' spacing={'170px'}>
            <Text fontSize='15px' paddingLeft='240px'>Minimum</Text>
            <Text fontSize='15px' >Maximum</Text>
        </Wrap>

        <Wrap alignSelf={'center'}>
            <WrapItem>
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