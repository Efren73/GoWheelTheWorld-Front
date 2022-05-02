import * as React from "react"
import { useState } from "react"
import { Flex, position, useDisclosure } from "@chakra-ui/react"
import {
    Text,
    VStack,
    HStack,
    Box,
    ChakraProvider,
    Button,
    Stack,
    Checkbox,
    Input, 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormControl,
} from "@chakra-ui/react"

import { DeleteIcon } from "@chakra-ui/icons"
import { AnyRecord } from "dns"

const Faqs: React.FC = () => {

    //Definición de useState para que el usuario pueda ingresar varias preguntas
    let [questionAnswer, setQuestionAnswer]:any = useState([[]])


    //Definición de useState para que aparezca la primer pregunta del Checkbox
    let [check1, setCheck1] = useState(false)

    //Definicion de useState para encontrar el valor que se encuentra en el input
    let [text, setText] = useState('')
    //UseState para contar los caracteres
    let [characters, setCharacters] = useState(0)
    //Valor que se encuentra en el input para contar caracteres
    let inputValue: any;

    //Función cada vez que el contenido del texto cambie
    let handleInputChange = (e: any) => {
        inputValue = e.target.value
        //Si la longitud es mayor que 60, entonces no podrán hacerse cambios, esta será la longitud máxima
        if(inputValue.length<=60){
            setText(inputValue)
            setCharacters(inputValue.length)
        }
    }

    

    //Funcion para que cuando se de click al checkbox, aparezca 
    function addAnswer(){
        return(
            <HStack>
                <Input 
                    placeholder='Answer' 
                    bg="#fff" 
                    onChange={handleInputChange}
                    value={text}/>
                <Text>{characters}/60</Text>
            </HStack>
        )
    }

    //Función para que cuando se de click a add, se agreguen elementos al arreglo con el fin de que se rendericen más componentes
    const addQuestionAnswer = () => {
        setQuestionAnswer([...questionAnswer, '']);
    }


    //Elementos utilizados para la ventana modal
    const { isOpen, onOpen, onClose } = useDisclosure()

    //Matriz en donde se guardan los ejemplos de faqs
    const faqsExamples: string[][]=[
        ['Who can go on the tours?', 'The tours we offer are designed to accommodate all kind of disabilities. Our travel experts can help you find the right tour to meet your accessibility needs.'],
        ['When is the Museum open?', 'The Museum opens from Tuesday to Sunday, from 09:30 AM to 05:15 PM.'],
        ['What type of food and drink options are available?','Guests can enjoy a meal from any of the resort’s 5 restaurants and 5 bars.'],
        ['Can I have a meal?', 'Yes! there is a Cafe on-site and eating and drinking is allowed in designated areas.']
    ];

    function handleSubmit(e: any){
        e.preventDefault();
        console.dir(e.target)
    }


    function changeOneValue(e: any, index: any, index2: any){
        console.log(index, index2)
        let newArray:string[][] = [[...questionAnswer]]
        newArray[index][index2] = e.target.value
        setQuestionAnswer(newArray)
    }

    function deleteQ (e: any, index: any){
        let newArray:string[][] = [[...questionAnswer]]
        newArray.splice(index, 1)
        setQuestionAnswer(newArray)
    }
    
    return(
    <ChakraProvider>
         <Box boxShadow='2xl'
              w="65%" 
              h="full"
              p={10}
              background="#EBE9E9"
              borderRadius="10px">
  
            <Stack spacing={2}>
                <Text fontSize='20px' color='#3F6FE4'>FAQS</Text>
                <Text fontSize='35px'>Add your Frequently Asked Questions</Text>
            </Stack>

            <Stack overflowY='auto' w='full' justifyContent='flex-start'>

                <Stack w='70%' justifyContent='start'>
                    <HStack justifyContent='flex-start'>
                        <Checkbox 
                            background ='#fff' 
                            _focus={{background: '#000'}} 
                            size='lg' 
                            onChange={() => setCheck1(!check1)}
                            />
                        <Text fontSize='25px'>Can I Park here?</Text>
                    </HStack>
                        {check1 && addAnswer()}
                    
                </Stack>
                <Stack>
                    <Button bg='#3F6FE4' border=' 1px solid #000' color='#fff' borderRadius='20px' 
                    onClick={addQuestionAnswer} w='10%' >
                        + Add
                    </Button>
                </Stack>
                <form onSubmit={handleSubmit}>
                    {
                        (questionAnswer && questionAnswer.length > 0) ? questionAnswer.map((x: any, index: any)=>(
                            
                            <Stack w='100%' marginBottom={4}>
                                <HStack>
                                    <Stack w='70%'>
                                        <Text>Question {index+1}</Text>
                                        <Box>
                                            <Box>
                                                <Input placeholder='Question' bg="#fff" value={x[0]} onChange={(e) => changeOneValue(e, index, 0)}/>
                                                <Text color='#2F6FE4'>0/60</Text>
                                            </Box>
                                            <Box>
                                                <Input placeholder='Answer' value={x[1]} bg="#fff" onChange={(e) => changeOneValue(e, index, 1)}/>
                                                <Text color='#2F6FE4'>0/60</Text>
                                            </Box>
                                        <Flex justifyContent='flex-end'>
                                            <Button variant="link" onClick={(e) => deleteQ(e, index)} marginBottom='20px'>
                                                <DeleteIcon />
                                            </Button>
                                        </Flex>
                                        </Box>
                                    </Stack>

                                </HStack>
                            </Stack>
                        ))
                        : <p></p>
                    }
                    {/*
                    <Button type="submit">Type submit</Button>
                */}
                </form>
            </Stack>

            <Box w='full'>
                
            </Box>

            <Box w='full' >
                <HStack justifyContent='flex-end'>
                    <Button variant="link" onClick={onOpen}>
                        <Text color='#2F6FE4' as='u'>Show examples</Text>
                    </Button>
                </HStack>
            </Box>
        </Box >

        <Modal onClose={onClose} size='xl' isOpen={isOpen} scrollBehavior='inside'>
            <ModalOverlay />
            <ModalContent background='#EBE9E9'>
            <ModalHeader color='#3F6FE4'>Examples</ModalHeader>
            <ModalBody>
                {
                    faqsExamples.map((faq) => (
                        <Stack marginBottom='10px'>
                            <Text color='#3F6FE4' fontSize='20px' >{faq[0]}</Text>
                            <Text fontSize='16px'>{faq[1]}</Text>
                        </Stack>
                    ))
                }
            </ModalBody>
            <ModalFooter>
                <Button onClick={onClose}>Close</Button>
            </ModalFooter>
            </ModalContent>
      </Modal>

    </ChakraProvider>
    )
}
export default Faqs;