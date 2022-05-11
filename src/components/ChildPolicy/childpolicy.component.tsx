import * as React from "react"
import { useState } from "react"
import { NumberInput, NumberInputField, useDisclosure } from "@chakra-ui/react"
import {
    Text,
    HStack,
    ChakraProvider,
    Stack,
    Grid, 
    GridItem,
    RadioGroup,
    Radio,
    Box,
    Center,
} from "@chakra-ui/react"

const ChildPolicy: React.FC = () => {

    const [valueQ1, setValueQ1] = React.useState('')
    const [valueQ2, setValueQ2] = React.useState('yes')
    const [valueQ3, setValueQ3] = React.useState('yes')
    const [valueQ4, setValueQ4] = React.useState('yes')

    const colSpan = { base: 2, md: 1 };
    const fontSizeResponsive = { base:'20px', sm:'15px'};

    const addQuestionAnswer = (answer:string) => {
        if (answer == "no")
        {
            return(
                <NumberInput background='white' borderRadius={5} width='20%' >
                    <NumberInputField placeholder={'10'}/>
                </NumberInput>
                )
        }
    }
    
    function addAnswer(RadioB:string){
        if (RadioB == 'yes')
        return(
            <Stack w="full" p={5}>
                <Grid  column={2} columnGap={3} rowGap={6} w="full">
                    <GridItem colSpan = {2}>
                        <Text>Additional questions</Text>
                    </GridItem>

                    <GridItem colSpan={colSpan}>
                        <Text fontSize={fontSizeResponsive}>From what age are children allowed?</Text>
                    </GridItem>

                    <GridItem colSpan={colSpan}>
                            <RadioGroup onChange={setValueQ2} value={valueQ2} >
                                <Stack direction='row'>
                                    <Radio bg="white" value='yes' size='md'>Every age</Radio>
                                    <Radio bg="white" value='no' size='md'>Other</Radio>
                                </Stack>
                            </RadioGroup>
                            {addQuestionAnswer(valueQ2)}
                    </GridItem>

                    <GridItem colSpan={colSpan}>
                        <Text fontSize={fontSizeResponsive}>From what age does children pay for the tour/activity</Text>
                    </GridItem>

                    <GridItem colSpan={colSpan}>
                        <RadioGroup onChange={setValueQ3} value={valueQ3}>
                            <Stack direction='row'>
                                <Radio bg="white" value='yes' size={'md'}> Every age</Radio>
                                <Radio bg="white" value='no' size='md'>Other</Radio>
                            </Stack>
                        </RadioGroup>
                            {addQuestionAnswer(valueQ3)}
                    </GridItem>

                    <GridItem colSpan={colSpan}>
                        <Text fontSize={fontSizeResponsive}>Is there height limit to this tour/activity?</Text>
                    </GridItem>
                    
                    <GridItem colSpan={colSpan}>
                        <RadioGroup onChange={setValueQ4} value={valueQ4} >
                            <Stack direction='row'>
                                <Radio bg="white" value='yes' size='md'>Every age</Radio>
                                <Radio bg="white" value='no' size='md'>Other</Radio>
                            </Stack>
                        </RadioGroup>
                            {addQuestionAnswer(valueQ4)}
                    </GridItem>
                </Grid>
            </Stack>
        )
        else if(RadioB == 'no')
        return(

                <Center  h='full' color='black' w="full">
                        <Text fontSize='20px' color='#black'>That's all from this part!</Text>
                 </Center>
        )
    }
    
    return(
    <React.Fragment>
        <Box
        boxShadow='xl'
        w={{base:"65%", sm:'80%'}}
        h="full"
        p={10}
        background="#EBE9E9"
        borderRadius="10px">
  

        <Text fontSize={fontSizeResponsive} color='#3F6FE4'>Children Policy</Text>
        <Text fontSize={{base:'35px', sm:'20px'}}>Tell us about children policy</Text>

        <HStack w="full"  >
            <Text fontSize={fontSizeResponsive} >Are children allowed in this tour? </Text>
            <RadioGroup onChange={setValueQ1} value={valueQ1} >
            <Stack direction='row'>
                <Radio bg="white" value='yes' size='lg'>Yes</Radio>
                <Radio bg="white" value='no' size='lg'>No</Radio>
            </Stack>
        </RadioGroup>
        </HStack>
            
        <HStack >
            {addAnswer(valueQ1)}
        </HStack>

        </Box >
    </React.Fragment>
    )
} 
export default ChildPolicy;