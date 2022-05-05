import * as React from "react"
import {
  Text,
  VStack,
  HStack,
  Button,
  Input,
  useNumberInput,
  Stack,
  WrapItem,
  Box,
  ChakraProvider,
  Grid,
  useCheckbox,
  chakra,
  useCheckboxGroup,
  useControllableState,
} from "@chakra-ui/react"

const GroupPrivate: React.FC = () => {
    function HookUsage() {
        const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
            useNumberInput({
            step: 1,
            defaultValue: 1,
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

    // Control de Input
    const [ valueBotones, setValueBotones ] = React.useState({
        maximum: 1,
        minimum: 1,
    });

    let maximo: number;
    let minimo: number;
    maximo = valueBotones.maximum;

    const [ internalValue, setInternalValue ] = useControllableState({
        ...valueBotones,
        onChange: setValueBotones,
    })

    let inputValue: number;
    const handleInputChange = (event: any) => {
        inputValue = +event.target.value
        console.log(inputValue)
        setValueBotones({
            ...valueBotones,
            [event.target.name]: event.target.value 
        })
    }

    console.log('HOLAA', valueBotones)
    console.log('holaaa 2 ', internalValue)

    {/*}
    const handleInputChange = (event: any) => {
        console.log(event.target.value)
        setNumeroInput({
            ...numeroInput,
            [event.target.name]: event.target.value,
        })
        }
    } */}

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

                <Text alignSelf={'flex-start'} fontSize='35px' paddingBottom='10px'>
                    Please specify the minimum and maximum number of travelers
                </Text>

                <HStack w='42%' paddingBottom='10px' spacing='42%' justifyContent={'flex-start'}>
                    <Text fontSize='15px'>Minimum</Text>
                    <Text fontSize='15px'>Maximum</Text>
                </HStack>

                <HStack justifyContent={'center'} spacing='50px'> 
                    <HStack maxW='200px'>
                        <Button name="minimum" onClick={() => setValueBotones(valueBotones)} background='#2F6FE4'> - </Button>
                        <Input name="minimum" onChange={handleInputChange} value={valueBotones.minimum}/>
                        <Button name="minimum" onClick={() => setInternalValue(valueBotones)} background='#2F6FE4'> + </Button>
                    </HStack>
                    <HStack maxW='200px'>
                        <Button name="maximum" onClick={() => setInternalValue(valueBotones)} background='#2F6FE4'> - </Button>
                        <Input name="maximum" onChange={handleInputChange} value={valueBotones.maximum}/>
                        <Button name="maximum" onClick={() => setInternalValue(valueBotones)} background='#2F6FE4'> + </Button>
                    </HStack>
                   
                   {/*
                <Button onClick={() => setCounter(counter - 1)}>-</Button>
                <Input onChange={handleInputChange} name="maximum" defaultValue='1'/> 
                <Button onClick={() => setCounter(counter + 1)}>+</Button>
                
                    <WrapItem>{HookUsage()}</WrapItem>
                    <WrapItem>{HookUsage()}</WrapItem> */}
                </HStack>
            </VStack>
            </Box>
        </ChakraProvider>

    )
}

export default GroupPrivate;