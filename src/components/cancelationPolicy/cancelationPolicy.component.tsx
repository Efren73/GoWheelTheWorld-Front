import * as React from "react"
import { useState } from "react"
import {
    Text,
    Box,
    Heading,
    Stack,
    Textarea,
} from "@chakra-ui/react"
import { Responsive } from "../generalTypes";
const CancelationPolicy: React.FC = () => {
    // Control de input para cancelation policy
    let [value1, setValue1] = useState('')
    let inputValue1: any;
    let handleInputLink = (e: any) => {
        inputValue1 = e.target.value
        setValue1(inputValue1)
    }

    /* RESPONSIVE --------------------------------- */
    

    return (
    <React.Fragment>
        <Box
        boxShadow='2xl'
        w="65%" 
        p={10}
        background="#EBE9E9"
        borderRadius="10px">
            <Stack spacing={2}>
                <Text fontSize={Responsive.fontSizeResponsiveHead} color='#3F6FE4'> Cancelation policy </Text>
                <Heading fontSize={Responsive.fontSizeResponsiveBody}> Cancelation policy </Heading>
                <Box w='full'>
                    <Textarea 
                        h="200px"
                        placeholder="Cancelation policy"
                        background='#fff'
                        onChange={handleInputLink}
                        value = {value1}
                        fontSize={Responsive.fontSizeResponsiveHead}
                        />
                </Box>
            </Stack>
        </Box >
    </React.Fragment>
    )
}
export default CancelationPolicy;