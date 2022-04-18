import * as React from "react"
import { useState } from "react"
import {
  Text,
  VStack,
  ChakraProvider,
  Button,
  Stack,
  Grid,
} from "@chakra-ui/react"

const WhatsIncluded: React.FC = () => {
    const included: string[]=[
        'Admission / ticket',
        'Snacks',
        'Instructors',
        'Park entrance',
        'Alcoholic beverages',
        'Audio guides',
        'Breakfast',
        'Soft Drinks',
        'Equipment rental',
        'Lunch',
        'Tour Guides',
        'Gound transportation',
        'Dinner',
        'Assistants',
        'Accessible transportation',
        'Professional driver',
        'Insurance',
        'Gratuities',
        'Parking',
        'Tourist city taxes'
    ];
    console.log(included.length)
    return(
    <ChakraProvider>
         <VStack
        h='full'
        w="880px"
        padding='20px'
        alignItems='flex-start'
        background="#EBE9E9">
  
            <Stack spacing={2}>
                <Text fontSize='20px' color='#3F6FE4'>What's included</Text>
                <Text fontSize='35px'>Select what's included with your tour.</Text>
            </Stack>
            
            <Grid templateColumns='repeat(3, 7fr)' gap={15} paddingTop='50px' alignSelf={'center'}>
                {
                    included.map ((includes: string) =>(
                        <Button
                        variant='outline'
                        height='48px'
                        width='200px'
                        borderColor='#3F6FE4'
                        background='#FFFFFF'
                        fontSize={'15px'}
                        _focus={{background: '#3F6FE4', color: '#fff'}}
                        _hover={{background: '##3F6FE4'}}
                        value={includes}
                        >
                            {includes}
                        </Button>
                    ))
                }
        
      </Grid>

        </VStack >
    </ChakraProvider>
    )
}
export default WhatsIncluded;