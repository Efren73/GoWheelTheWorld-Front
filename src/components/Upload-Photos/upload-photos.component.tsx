import * as React from "react"
import {
  Text,
  VStack,
  HStack,
  Image,
  Stack,
  Box,
  Heading,
} from "@chakra-ui/react"

import Photo from './image.png';
import './upload-photos.modules.css'
import { Responsive } from "../generalTypes";

const UploadPhotos: React.FC = () => {
    /* RESPONSIVE -------------------------------------- */
   

    return (
        <React.Fragment>
            <Box boxShadow='2xl'
                    w="65%" 
                    p={10}
                    background="#EBE9E9"
                    borderRadius="10px">

                <VStack alignItems='flex-start'>
                    <Stack spacing={2}>
                        <Text fontSize={Responsive.fontSizeResponsiveHead} color='#3F6FE4'> Basic Information / Upload Photos </Text>
                        <Heading fontSize={Responsive.fontSizeResponsiveBody}> Send us the best photos of your tour </Heading>
                    </Stack>
                    <VStack>
                        <HStack>
                            <Image src={Photo} alt="Tour photo" w='40px' h = '40px'/>
                            <Text fontSize={Responsive.fontSizeResponsiveHead}> Photo 1 </Text>
                        </HStack>
                        <HStack>
                            <Image src={Photo} alt="Tour photo" w='40px' h = '40px'/>
                            <Text fontSize={Responsive.fontSizeResponsiveHead}> Photo 2 </Text>
                        </HStack>
                    </VStack>
                    <Box >
                        <div className='uploadBtn'>
                            <p className='textBtn'>Upload</p>
                            <input className="inputFile" type='file' accept='image/*'/>
                        </div>
                    </Box>
                </VStack >
            </Box>
        </React.Fragment>
    )
}

export default UploadPhotos;