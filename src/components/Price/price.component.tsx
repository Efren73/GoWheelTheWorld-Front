import * as React from "react"
import {
  Text,
  HStack,
  Stack,
  NumberInput,
  Box,
  NumberInputField,
  Heading,
} from "@chakra-ui/react"

import '../Upload-Photos/upload-photos.modules.css';
import { Responsive } from "../generalTypes";

const Price: React.FC = () => {
    /* RESPONSIVE -------------------------------------- */

    
    const [price, setPrice] = React.useState();
   
    console.log('value',price)

    return (
    <Box boxShadow='2xl'
			 w="65%" 
			 p={10}
			 background="#EBE9E9"
			 borderRadius="10px">
  
        <Stack spacing={2}>
            <Text fontSize={Responsive.fontSizeResponsiveHead} color='#3F6FE4'> Basic Information / Price </Text>
            <Heading fontSize={Responsive.fontSizeResponsiveBody}> Price per person, based on 2 travelers </Heading>
        </Stack>
            
            <HStack paddingTop={'30px'} paddingBottom='50px' justifySelf={'center'}>
                <Text fontSize={Responsive.fontSizeResponsiveHead} alignContent={'flex-start'}>$USD</Text>
                <NumberInput background='white' borderRadius={10} onChange={(cost: any) => setPrice(cost)} value={price}>
                    <NumberInputField />
                </NumberInput>
            </HStack>

            <Heading fontSize={Responsive.fontSizeResponsiveBody} paddingBottom='30px'>Please share any document related to the price</Heading>
            <Stack justifyItems={'center'}>
                <div className='uploadBtn'>
                    <p className='textBtn'> Upload </p>
                    <input className="inputFile" type='file' accept='image/*, .pdf'/>
                </div>
            </Stack>  
    </Box>
    )
}

export default Price;