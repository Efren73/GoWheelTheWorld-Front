import * as React from "react"
import {
  Text,
  VStack,
  HStack,
  Image,
  ChakraProvider,
  Button,
  Stack,
  Box
} from "@chakra-ui/react"

import Photo from './image.png';
import './upload-photos.modules.css'

const arreglo: string[] = ['Photo 1', 'Photo 2']; 
const UploadPhotos = () => (
    <ChakraProvider>
        <Box boxShadow='2xl'
				w="65%" 
				h="full"
				p={10}
				background="#EBE9E9"
				borderRadius="10px">

            <VStack alignItems='flex-start'>
    
                <Stack spacing={2}>
                    <Text fontSize='20px' color='#3F6FE4'>Basic Information / Upload Photos</Text>
                    <Text fontSize='35px'>Send us the best photos of your tour.</Text>
                </Stack>
                <VStack>

                    <HStack>
                        <Image src={Photo} alt="Tour photo" w='40px' h = '40px'/>
                        <Text>Photo 1</Text>
                    </HStack>

                    <HStack>
                        <Image src={Photo} alt="Tour photo" w='40px' h = '40px'/>
                        <Text>Photo 2</Text>
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
    </ChakraProvider>
) 
export default UploadPhotos;