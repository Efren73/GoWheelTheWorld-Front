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
  NumberInputStepper,
  FormControl,
  InputRightElement,
} from "@chakra-ui/react"

import '../Upload-Photos/upload-photos.modules.css';
const Price = () => (

    <Box boxShadow='2xl'
			 w="65%" 
			 h="full"
			 p={10}
			 background="#EBE9E9"
			 borderRadius="10px">
  
        <Stack spacing={2}>
            <Text fontSize='20px' color='#3F6FE4'>Basic Information / Price</Text>
            <Text fontSize='35px'>Price per person, based on 2 travelers</Text>
        </Stack>
            
            <HStack paddingTop={'30px'} paddingBottom='50px' justifySelf={'center'}>
                <Text alignContent={'flex-start'}>$USD</Text>
                <NumberInput background='white' borderRadius={10}>
                    <NumberInputField/>
                </NumberInput>
            </HStack>

            <Text fontSize='35px' paddingBottom='30px'>Please share any document related to the price</Text>
            <Stack justifyItems={'center'}>
                <div className='uploadBtn'>
                    <p className='textBtn'>Upload</p>
                    <input className="inputFile" type='file' accept='image/*, .pdf'/>
                </div>
            </Stack>
           
            
    </Box>


)
export default Price;