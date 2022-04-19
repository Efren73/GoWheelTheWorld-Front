import * as React from "react"
import { useState } from "react"
import { useDisclosure } from "@chakra-ui/react"
import {
    Text,
    VStack,
    HStack,
    Flex,
    ChakraProvider,
    Button,
    Stack,
    Checkbox,
    Input, 
    RadioGroup,
    Radio,
    Box,
    Container,
    ModalOverlay,
    Center,
    ModalHeader,
    ModalBody,
    Wrap,
    ModalFooter
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
                <HStack  justifyContent="space-between" >
                    <Text fontSize='20px'>From what age are children allowed?</Text>
                    <Stack  justifyContent="flex-end">
                        <RadioGroup onChange={setValueQ2} value={valueQ2}  >
                            <Stack direction='row'>
                                <Radio p={5} bg="white" value='yes' size='lg'>Every Age</Radio>
                                <Radio p={5} bg="white" value='no' size='lg'>Other</Radio>
                            </Stack>
                        </RadioGroup>
                    </Stack>
                </HStack>
                <HStack justifyContent="flex-end">
                        {addQuestionAnswer(valueQ2)}
                </HStack>

                <HStack justifyContent="space-between">
                    <Text fontSize='20px'>From what age does children pay for the tour/activity</Text>
                    <RadioGroup onChange={setValueQ3} value={valueQ3} >
                        <Stack direction='row'>
                            <Radio p={5} bg="white" value='yes' size='lg'>Every Age</Radio>
                            <Radio p={5} bg="white" value='no' size='lg'>Other</Radio>
                        </Stack>
                    </RadioGroup>
                </HStack>
                <HStack justifyContent="flex-end">
                        {addQuestionAnswer(valueQ3)}
                </HStack>


                <HStack  justifyContent="space-between">
                    <Text fontSize='20px'>Is there height limit to this tour/activity?</Text>
                    <RadioGroup onChange={setValueQ4} value={valueQ4} >
                        <Stack direction='row'>
                            <Radio p={5} bg="white" value='yes' size='lg'>Every Age</Radio>
                            <Radio p={5} bg="white" value='no' size='lg'>Other</Radio>
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
         <VStack
        h='full'
        w="880px"
        padding='20px'
        alignItems='flex-start'
        background="#EBE9E9">
  
            <Box>
                <Text fontSize='20px' color='#3F6FE4'>Child Policy</Text>
                <Text fontSize='35px'>Tell us about Children Policy.</Text>

                <HStack  justifyContent="space-between">
                <Text fontSize='20px'>Are Children allowed in this tour? </Text>
                    <RadioGroup onChange={setValueQ1} value={valueQ1} >
                        <Stack direction='row'>
                            <Radio p={5} bg="white" value='yes' size='lg'>Yes</Radio>
                            <Radio p={5} bg="white" value='no' size='lg'>No</Radio>
                        </Stack>
                    </RadioGroup>
                </HStack>
            </Box>
            
            <Box w="full">
                <HStack >
                    {addAnswer(valueQ1)}
                </HStack>
                
            </Box>


        </VStack >

    </ChakraProvider>
    )
} 
export default ChildPolicy;