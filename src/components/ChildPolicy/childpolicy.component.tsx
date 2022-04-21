import * as React from "react"
import { useState } from "react"
import { useDisclosure } from "@chakra-ui/react"
import {
    Text,
    VStack,
    HStack,
    ChakraProvider,
    Stack,
    Input, 
    RadioGroup,
    Radio,
    Box,
    Center,
} from "@chakra-ui/react"


const ChildPolicy: React.FC = () => {

    const [valueQ1, setValueQ1] = React.useState('yes')
    const [valueQ2, setValueQ2] = React.useState('yes')
    const [valueQ3, setValueQ3] = React.useState('yes')
    const [valueQ4, setValueQ4] = React.useState('yes')

    const addQuestionAnswer = (answer:string) => {
        if (answer == "no")
        {
            return(
                <Input bg="white" htmlSize={5} width='auto' placeholder='10' />
                )
        }
    }

    
    function addAnswer(RadioB:string){
        if (RadioB == 'yes')
        return(
            <Box>
                <HStack>
                    <Box w='500px' paddingTop='5px' paddingBottom='5px'>
                        <Text fontSize='20px'>From what age are children allowed?</Text>
                    </Box>
                        <RadioGroup onChange={setValueQ2} value={valueQ2}  >
                            <Stack direction='row' paddingLeft={'10px'} spacing={'50px'} >
                                <Radio bg="white" value='yes' size='lg'>Every Age</Radio>
                                <Radio bg="white" value='no' size='lg'>Other</Radio>
                            </Stack>
                        </RadioGroup>
                </HStack>
                <HStack justifyContent="flex-end">
                        {addQuestionAnswer(valueQ2)}
                </HStack>

                <HStack>
                    <Box w='500px' paddingTop='5px' paddingBottom='5px'>
                        <Text fontSize='20px'>From what age does children pay for the tour/activity</Text>
                    </Box>
                    <RadioGroup onChange={setValueQ3} value={valueQ3} >
                        <Stack direction='row' paddingLeft={'10px'} spacing={'50px'}>
                            <Radio bg="white" value='yes' size='lg'>Every Age</Radio>
                            <Radio bg="white" value='no' size='lg'>Other</Radio>
                        </Stack>
                    </RadioGroup>
                </HStack>
                <HStack justifyContent="flex-end">
                        {addQuestionAnswer(valueQ3)}
                </HStack>

                <HStack>
                    <Box w='500px' paddingTop='5px' paddingBottom='5px'>
                        <Text fontSize='20px'>Is there height limit to this tour/activity?</Text>
                    </Box>
                    <RadioGroup onChange={setValueQ4} value={valueQ4} >
                        <Stack direction='row' paddingLeft={'10px'} spacing={'50px'}>
                            <Radio bg="white" value='yes' size='lg'>Every Age</Radio>
                            <Radio bg="white" value='no' size='lg'>Other</Radio>
                        </Stack>
                    </RadioGroup>
                </HStack>
                <HStack justifyContent="flex-end">
                        {addQuestionAnswer(valueQ4)}
                </HStack>

            </Box>

        )
        else
        return(

                <Center  h='full' color='black' w="full">
                        <Text fontSize='20px' color='#black'>That's all from this part!</Text>
                 </Center>
        )
    }


    
    return(
    <ChakraProvider>
        <Box
        boxShadow='2xl'
        w="65%" 
        h="full"
        p={10}
        background="#EBE9E9"
        borderRadius="10px">
  
            <Box>
                <Text fontSize='20px' color='#3F6FE4'>Children Policy</Text>
                <Text fontSize='35px'>Tell us about Children Policy.</Text>
                <HStack>
                    <Box w='500px' paddingTop='20px' paddingBottom='5px'>
                        <Text fontSize='20px'>Are Children allowed in this tour? </Text>
                    </Box>
                    <RadioGroup onChange={setValueQ1} value={valueQ1} >
                        <Stack direction='row' paddingLeft={'10px'} spacing={'103px'}>
                            <Radio bg="white" value='yes' size='lg'>Yes</Radio>
                            <Radio bg="white" value='no' size='lg'>No</Radio>
                        </Stack>
                    </RadioGroup>
                </HStack>
            </Box>
            
            <Box w="full">
                <HStack >
                    {addAnswer(valueQ1)}
                </HStack>
                
            </Box>


        </Box >

    </ChakraProvider>
    )
} 
export default ChildPolicy;