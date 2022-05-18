import * as React from "react"
import { useState } from "react"
import {
    Text,
    HStack,
    Box,
    ChakraProvider,
    Button,
    Stack,
    Textarea,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Link,
} from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Description: React.FC = () => {
    //Elementos utilizados para limitar el numero de caracteres
    let [value, setValue] = useState('')
    let [characters, setCharacters] = useState(0)
    let inputValue: any;

    let handleInputChange = (e: any) => {
        inputValue = e.target.value

        if(inputValue.length<=1600){
            setValue(inputValue)
            setCharacters(inputValue.length)
        }
    }
    console.log('description', value)

    // Control de input para el link
    let [value1, setValue1] = useState('')
    let inputValue1: any;

    let handleInputLink = (e: any) => {
        inputValue1 = e.target.value
        setValue1(inputValue1)
    }
    console.log('link', value1)

    //Elementos utilizados para la ventana modal
    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
<ChakraProvider>
        <Box
        boxShadow='2xl'
        w="65%" 
        h="full"
        p={10}
        background="#EBE9E9"
        borderRadius="10px">
  
            <Stack spacing={2}>
                <Text fontSize='20px' color='#3F6FE4'>Basic Information / Description</Text>
                <Text fontSize='35px'> Please share the link to your website or any another platform
                                       where the tour/activity is displayed </Text>
                <Box w="full">
                    <Textarea 
                            h='100px'
                            placeholder="Link"
                            background='#fff'
                            onChange={handleInputLink}
                            value = {value1}
                            />
                </Box>
                <Text fontSize='35px'>Description of the tour / activity</Text>
              
                <Box w='full'>
                    <Textarea 
                        h='500px'
                        placeholder="Description of the tour"
                        background='#fff'
                        onChange={handleInputChange}
                        value = {value}
                        
                        />
                  
                    <HStack justifyContent='space-between' color='#2F6FE4' >
                        <Text>{characters}/1600</Text>
                        <Button variant="link" onClick={onOpen}>
                            <Text color='#2F6FE4' as='u'>Show examples</Text>
                        </Button>
                    </HStack>
                </Box>
            </Stack>
        </Box >

        <Modal onClose={onClose} size='xl' isOpen={isOpen} scrollBehavior='inside'>
            <ModalOverlay />
            <ModalContent background='#EBE9E9'>
            <ModalHeader color='#3F6FE4'>Examples</ModalHeader>
            <ModalBody alignSelf={'center'}>
                <Link href='https://wheeltheworld.com/destinations/accessible-travel-usa/new-york/things-to-do/downtown-manhattan-private-guided-tour' isExternal>
                Example 1 <ExternalLinkIcon mx='2px' color='#3F6FE4'/>
                </Link>
                <Link marginLeft={'30px'} href='https://wheeltheworld.com/destinations/accessible-travel-mexico/playa-del-carmen/things-to-do/rio-secreto-dry-tour' isExternal>
                Example 2 <ExternalLinkIcon mx='2px' color='#3F6FE4'/>
                </Link>
                <Link marginLeft={'30px'} href='https://wheeltheworld.com/destinations/accessible-travel-usa/maui/things-to-do/whale-watching-tour' isExternal>
                Example 3 <ExternalLinkIcon mx='2px' color='#3F6FE4'/>
                </Link>
                
            </ModalBody>
            <ModalFooter>
                <Button onClick={onClose} background='#3F6FE4' color={'white'}>Close</Button>
            </ModalFooter>
            </ModalContent>
      </Modal>
    </ChakraProvider>
    )
}
export default Description;