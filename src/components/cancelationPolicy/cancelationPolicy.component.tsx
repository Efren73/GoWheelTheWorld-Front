import * as React from "react"
import { useState } from "react"
import {
    Text,
    Box,
    Heading,
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

    /* RESPONSIVE --------------------------------- */
    const fontSizeResponsive = { base:'20px', sm:'15px'};

    return (
    <React.Fragment>
        <Box
        boxShadow='2xl'
        w="65%" 
        p={10}
        background="#EBE9E9"
        borderRadius="10px">
            <Stack spacing={2}>
                <Text fontSize={fontSizeResponsive} color='#3F6FE4'> Cancelation policy </Text>
                <Heading fontSize={{base:'35px', sm:'18px'}}> Cancelation policy </Heading>
                <Box w='full'>
                    <Textarea 
                        h="200px"
                        placeholder="Cancelation policy"
                        background='#fff'
                        onChange={handleInputLink}
                        value = {value1}
                        fontSize={fontSizeResponsive}
                        />
                </Box>
            </Stack>
        </Box >
    </React.Fragment>
    )
}
export default CancelationPolicy;