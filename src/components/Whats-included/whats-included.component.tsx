import * as React from "react"
import { useState } from "react"
import {
  Text,
  VStack,
  ChakraProvider,
  Stack,
  Grid,
  useCheckbox,
  chakra, 
  useCheckboxGroup,
  Box,
} from "@chakra-ui/react"

const WhatsIncluded: React.FC = () => {

    //Customización del checkbox
    function CustomCheckbox(props: any) {
        const { state, getCheckboxProps, getInputProps, getLabelProps } =
          useCheckbox()
        
        let backgroundValue: string;
        let colorValue: string;

          if(!state.isChecked){

            backgroundValue = '#fff'
            colorValue = '#000'
          }
          else{
            backgroundValue = '#3F6FE4'
            colorValue='#fff'
          }

          return (
            <chakra.label
                display='flex'
                alignItems='center'
                justifyContent='center'
                w='200px'
                h='48px'
                bg={backgroundValue}
                border='1px solid'
                borderColor='#3F6FE4'
                color={colorValue}
                rounded='lg'
                cursor='pointer'
                {...getCheckboxProps()}
                >
                <input {...getInputProps()} hidden />
                <Text {...getLabelProps()}>{props.value}</Text>
             </chakra.label>
          )
        }
        const { value, getCheckboxProps } = useCheckboxGroup()


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


    return(
    <ChakraProvider>
         <Box boxShadow='2xl'
              w="65%" 
              h="full"
              p={10}
              background="#EBE9E9"
              borderRadius="10px">
  
            <Stack spacing={2}>
                <Text fontSize='20px' color='#3F6FE4'>What's included</Text>
                <Text fontSize='35px'>Select what's included with your tour</Text>
            </Stack>
            
            <Grid h='80%' templateColumns='repeat(3, 7fr)' gap={15} paddingTop='30px' alignSelf={'center'} overflowY='auto'>
            {
                    included.map ((includes: string) =>(
                        <CustomCheckbox {...getCheckboxProps({value: `${includes}`})}/>
                    ))
                }
                
        
      </Grid>

        </Box >
    </ChakraProvider>
    )
}
export default WhatsIncluded;
