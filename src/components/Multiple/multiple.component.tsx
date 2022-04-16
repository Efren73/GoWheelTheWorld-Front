import * as React from "react"
import {
  VStack,
  Grid,
  Button,
  Stack,
  Text,
} from "@chakra-ui/react"

const Multiple = () => (
  <VStack
    h='full'
    w="880px"
    padding='20px'
    alignItems='flex-start'
    background="#EBE9E9">
      
      <Stack spacing={2}>
        <Text fontSize='20px' color='#3F6FE4'>Basic Information / Type</Text>
        <Text fontSize='35px'>What kind of experience would you like to offer?</Text>
      </Stack>
      
      <Grid templateColumns='repeat(3, 5fr)' gap={15} paddingTop='50px' alignSelf={'center'}>
        <Button
            variant='outline'
            height='48px'
            width='200px'
            borderColor='#3F6FE4'
            background='#FFFFFF'
            fontSize={'15px'}
            >
            Outdoor activity
        </Button>
        <Button
          variant='outline'
          height='48px'
          width='200px'
          borderColor='#3F6FE4'
          background='#FFFFFF'
          fontSize={'15px'}
            >
            Hiking activity
        </Button>
        <Button variant='outline'
            height='48px'
            width='200px'
            borderColor='#3F6FE4'
            background='#FFFFFF'
            fontSize={'15px'}>
            Snow activity
        </Button>
        <Button variant='outline'
            height='48px'
            width='200px'
            borderColor='#3F6FE4'
            background='#FFFFFF'
            fontSize={'15px'}>
            Water activity
        </Button>
        <Button variant='outline'
            height='48px'
            width='200px'
            borderColor='#3F6FE4'
            background='#FFFFFF'
            fontSize={'15px'}>
            Air activity
            </Button>
            <Button variant='outline'
            height='48px'
            width='200px'
            borderColor='#3F6FE4'
            background='#FFFFFF'
            fontSize={'15px'}>
            Sports activity
            </Button>
            <Button variant='outline'
            height='48px'
            width='200px'
            borderColor='#3F6FE4'
            background='#FFFFFF'
            fontSize={'15px'}>
            Ticket activity
            </Button>
            <Button variant='outline'
            height='48px'
            width='200px'
            borderColor='#3F6FE4'
            background='#FFFFFF'
            fontSize={'15px'}>
            Attraction
            </Button>
            <Button variant='outline'
            height='48px'
            width='200px'
            borderColor='#3F6FE4'
            background='#FFFFFF'
            fontSize={'15px'}>
            City tour
            </Button>
            <Button variant='outline'
            height='48px'
            width='200px'
            borderColor='#3F6FE4'
            background='#FFFFFF'
            fontSize={'15px'}>
            Food tour
            </Button>
            <Button variant='outline'
            height='48px'
            width='200px'
            borderColor='#3F6FE4'
            background='#FFFFFF'
            fontSize={'15px'}>
            Driving tour
            </Button>
            <Button variant='outline'
            height='48px'
            width='200px'
            borderColor='#3F6FE4'
            background='#FFFFFF'
            fontSize={'15px'}>
            Riding tour
            </Button>
            <Button variant='outline'
            height='48px'
            width='200px'
            borderColor='#3F6FE4'
            background='#FFFFFF'
            fontSize={'15px'}>
            Boat tour
            </Button>
            <Button variant='outline'
            height='48px'
            width='200px'
            borderColor='#3F6FE4'
            background='#FFFFFF'
            fontSize={'15px'}>
            Air tour
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
    
export default Multiple;