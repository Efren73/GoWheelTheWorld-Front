import * as React from "react"
import {
  Text,
  VStack,
  AspectRatio,
  Stack,
  Input,
  Box,
} from "@chakra-ui/react"

const Meeting = () => (
    <Box
      boxShadow='2xl'
      w="65%" 
      h="full"
      p={10}
      background="#EBE9E9"
      borderRadius="10px">
      
      <Stack spacing={2}>
        <Text fontSize='20px' color='#3F6FE4'>Itinerary / Meeting and end Point</Text>
        <Text fontSize='35px'>Please introduce the meeting point</Text>
      </Stack>

      <Input
        background={'white'}
				variant='outline'
				h='30px'
				fontSize={'20px'}
				required maxLength={80}
				placeholder='Street, number, City'
        marginBottom={'20px'}
        marginTop={'10px'}
				/>

      <AspectRatio ratio={17 / 8}>
      <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng'
            
        />
        </AspectRatio>

    </Box>

)
export default Meeting;