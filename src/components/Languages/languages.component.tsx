import * as React from "react"
import {
  Text,
  VStack,
  Stack,
  Input,
  Button,
  HStack,
  Grid,
} from "@chakra-ui/react"

const Languages = () => (
    <VStack
        h='full'
        w='880px'
        padding='20px'
        alignItems='flex-start'
        background="#EBE9E9">
      
      <Stack spacing={2}>
        <Text fontSize='20px' color='#3F6FE4'>Itinerary / Meeting and end Point</Text>
        <Text fontSize='35px'>Select the spoken languages on this tour.</Text>
      </Stack>

      <Grid templateColumns='repeat(2, 5fr)' gap={15} paddingTop='50px' alignSelf={'center'}>
        <Button
            variant='outline'
            height='48px'
            width='200px'
            borderColor='#3F6FE4'
            background='#FFFFFF'
            fontSize={'15px'}
            >
            English
        </Button>
        <Button
          variant='outline'
          height='48px'
          width='200px'
          borderColor='#3F6FE4'
          background='#FFFFFF'
          fontSize={'15px'}
            >
            Spanish
        </Button>
        <Button variant='outline'
            height='48px'
            width='200px'
            borderColor='#3F6FE4'
            background='#FFFFFF'
            fontSize={'15px'}>
            French
        </Button>
        <Button variant='outline'
            height='48px'
            width='200px'
            borderColor='#3F6FE4'
            background='#FFFFFF'
            fontSize={'15px'}>
            German
        </Button>
        <Button variant='outline'
            height='48px'
            width='200px'
            borderColor='#3F6FE4'
            background='#FFFFFF'
            fontSize={'15px'}>
            Italian
            </Button>
            <Button variant='outline'
            height='48px'
            width='200px'
            borderColor='#3F6FE4'
            background='#FFFFFF'
            fontSize={'15px'}>
            Portuguese
            </Button>
            <Button variant='outline'
            height='48px'
            width='200px'
            borderColor='#3F6FE4'
            background='#FFFFFF'
            fontSize={'15px'}>
            Russian
            </Button>
            <Button variant='outline'
            height='48px'
            width='200px'
            borderColor='#3F6FE4'
            background='#FFFFFF'
            fontSize={'15px'}>
            Mandarin
            </Button>
            <Button variant='outline'
            height='48px'
            width='200px'
            borderColor='#3F6FE4'
            background='#FFFFFF'
            fontSize={'15px'}>
            Japanese
            </Button>
            <Button variant='outline'
            height='48px'
            width='200px'
            borderColor='#3F6FE4'
            background='#FFFFFF'
            fontSize={'15px'}>
            Other
            </Button>
      </Grid>
    </VStack>
)
export default Languages;