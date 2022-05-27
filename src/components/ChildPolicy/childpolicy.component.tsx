import * as React from "react"
import { NumberInput, NumberInputField } from "@chakra-ui/react"
import {
    Text,
    HStack,
    Heading,
    Stack,
    Grid, 
    GridItem,
    RadioGroup,
    Radio,
    Box,
    Center,
} from "@chakra-ui/react"
import { Responsive } from "../generalTypes";

const ChildPolicy: React.FC = () => {

    const [valueQ1, setValueQ1] = React.useState('')
    const [valueQ2, setValueQ2] = React.useState('yes')
    const [valueQ3, setValueQ3] = React.useState('yes')
    const [valueQ4, setValueQ4] = React.useState('yes')

    const colSpan = { base: 2, md: 1 };

    const addQuestionAnswer = (answer:string) => {
        if (answer == "no")
        {
            return (
                <NumberInput background='white' borderRadius={5} width='20%' >
                    <NumberInputField placeholder={'10'}/>
                </NumberInput>
                )
        }
    }
    
    function addAnswer(RadioB:string){
        if (RadioB == 'yes')
        return (
            <Stack w="full" p={5}>
                <Grid  column={2} columnGap={3} rowGap={6} w="full">
                    <GridItem colSpan = {2}>
                        <Heading fontSize={Responsive.fontSizeResponsiveHead}>Additional questions</Heading>
                    </GridItem>

                    <GridItem colSpan={colSpan}>
                        <Text fontSize={Responsive.fontSizeResponsiveHead}>From what age are children allowed?</Text>
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
                        <Text fontSize={Responsive.fontSizeResponsiveHead}>From what age does children pay for the tour/activity</Text>
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
                        <Text fontSize={Responsive.fontSizeResponsiveHead}>Is there height limit to this tour/activity?</Text>
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
                <Text fontSize={Responsive.fontSizeResponsiveHead} color='#black'> That's all from this part! </Text>
            </Center>
        )
    }
    
    return (
    <React.Fragment>
        <Box
        boxShadow='xl'
        w={{base:"65%", md:'70%', sm:'75%'}}
        h="full"
        p={10}
        background="#EBE9E9"
        borderRadius="10px">
            <Stack spacing={2}>
                <Text fontSize={Responsive.fontSizeResponsiveHead} color='#3F6FE4'>Children Policy</Text>
                <Heading fontSize={{base:'35px', sm:'18px'}}>Tell us about children policy</Heading>

                <HStack w="full"  >
                    <Text fontSize={Responsive.fontSizeResponsiveHead} >Are children allowed in this tour? </Text>
                    <RadioGroup onChange={setValueQ1} value={valueQ1} >
                    <Stack direction='row'>
                        <Radio bg="white" value='yes' size='lg'>Yes</Radio>
                        <Radio bg="white" value='no' size='lg'>No</Radio>
                    </Stack>
                </RadioGroup>
                </HStack>
                    
                <HStack>
                    {addAnswer(valueQ1)}
                </HStack>
            </Stack>
        </Box>
    </React.Fragment>
    )
} 

export default ChildPolicy;