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
  NumberInput,
  Box,
  Input,
  NumberInputField,
} from "@chakra-ui/react"

const Price = () => (

    <Box boxShadow='2xl'
			 w="65%" 
			 h="full"
			 p={10}
			 background="#EBE9E9"
			 borderRadius="10px">
  
        <Stack spacing={2}>
            <Text fontSize='20px' color='#3F6FE4'>Basic Information / Type</Text>
            <Text fontSize='35px'>Price per person, based on 2 travelers.</Text>
        </Stack>
            
            <HStack paddingTop={'30px'} paddingBottom='50px' alignSelf={'center'}>
                <InputGroup size={'lg'}>
                    <InputLeftElement
                        pointerEvents='none'
                        fontSize='1.2em'
                        children='$'
                        />
                    <Input placeholder='Enter amount' background='white'/>
                    
                </InputGroup>

                <Select size={'lg'} background='white' placeholder='Select option'>
                    <option value='MXN'>MXN</option>
                    <option value='EUA'>EUA</option>
                    <option value='EUR'>EUR</option>
                </Select>
            </HStack>

            <Text fontSize='35px' paddingBottom='30px'>Please share any document related to the price.</Text>

            <Button marginLeft={'35%'}
                background='#4F6FE4'
                color='#FFFFFF'
                fontSize={'15px'}
                height='48px'
                width='200px'>
                Upload
            </Button>
            
    </Box>


)
export default Price;