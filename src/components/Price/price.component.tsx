import * as React from "react"
import {
  Text,
  VStack,
  HStack,
  Stack,
  Button,
  Select,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react"

const Price = () => (

    <VStack
        h='full'
        w="880px"
        padding='20px'
        alignItems='flex-start'
        background="#EBE9E9">
  
        <Stack spacing={2}>
            <Text fontSize='20px' color='#3F6FE4'>Basic Information / Type</Text>
            <Text fontSize='35px'>Price per person, based on 2 travelers.</Text>
        </Stack>
            
            <HStack paddingTop={'30px'} paddingBottom='50px' alignSelf={'center'}>
                <InputGroup size={'lg'}>
                    <InputLeftElement
                        pointerEvents='none'
                        color='gray.300'
                        fontSize='1.2em'
                        children='$'
                        />
                    <Input placeholder='Enter amount'/>
                </InputGroup>

                <Select size={'lg'} placeholder='Select option'>
                    <option value='MXN'>MXN</option>
                    <option value='EUA'>EUA</option>
                    <option value='EUR'>EUR</option>
                </Select>
            </HStack>

            <Text fontSize='35px' paddingBottom='30px'>Please share any document related to the price.</Text>

            <Button alignSelf={'center'}
                background='#4F6FE4'
                color='#FFFFFF'
                fontSize={'15px'}
                height='48px'
                width='200px'>
                Upload
            </Button>
            
    </VStack>


)
export default Price;