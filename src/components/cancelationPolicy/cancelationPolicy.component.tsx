import * as React from "react"
import { useState } from "react"
import {
    Text,
    Box,
    ChakraProvider,
    Stack,
    Textarea,
} from "@chakra-ui/react"

const CancelationPolicy: React.FC = () => {
    // Control de input para cancelation policy
    let [value1, setValue1] = useState('')
    let inputValue1: any;
    let handleInputLink = (e: any) => {
        inputValue1 = e.target.value
        setValue1(inputValue1)
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
            <Stack spacing={2}>
                <Text fontSize='20px' color='#3F6FE4'> Cancelation policy </Text>
                <Text fontSize='35px'> Cancelation policy </Text>
                <Box w='full'>
                    <Textarea 
                        placeholder="Cancelation policy"
                        background='#fff'
                        onChange={handleInputLink}
                        value = {value1}
                        />
                </Box>
            </Stack>
        </Box >
    </ChakraProvider>
    )
}
export default CancelationPolicy;