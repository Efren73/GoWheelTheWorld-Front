import * as React from "react"
import {
  Text,
  VStack,
  HStack,
  Image,
  ChakraProvider,
  Button,
  Stack
} from "@chakra-ui/react"

import Photo from './image.png';

const arreglo: string[] = ['Photo 1', 'Photo 2']; 
const UploadPhotos = () => (
    <ChakraProvider>
         <VStack
        h='full'
        w="880px"
        padding='20px'
        alignItems='flex-start'
        background="#EBE9E9">
  
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
            <Button alignSelf={'end'}
                background='#4F6FE4'
                color='#FFFFFF'
                fontSize={'15px'}
                height='48px'
                width='200px'
                >
                Upload
            </Button>
        </VStack >
    </ChakraProvider>
) 
export default UploadPhotos;