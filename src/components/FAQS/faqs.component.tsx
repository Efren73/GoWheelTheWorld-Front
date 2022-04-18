import * as React from "react"
import { useState } from "react"
import { useDisclosure } from "@chakra-ui/react"
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
    ModalFooter
} from "@chakra-ui/react"

const Faqs: React.FC = () => {

    //Definición de useState para que el usuario pueda ingresar varias preguntas
    let [questionAnswer, setQuestionAnswer]:any = useState([])

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

    
    return(
    <ChakraProvider>
         <VStack
        h='full'
        w="880px"
        padding='20px'
        alignItems='flex-start'
        background="#EBE9E9">
  
            <Stack spacing={2}>
                <Text fontSize='20px' color='#3F6FE4'>FAQS</Text>
                <Text fontSize='35px'>Add your Frequently Asked Questions.</Text>
            </Stack>

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

            <Button bg='#3F6FE4' border=' 1px solid #000' color='#fff' borderRadius='20px'
             onClick={addQuestionAnswer}>
                + Add
            </Button>
            {
                questionAnswer && questionAnswer.map(()=>(
                    <Stack w='70%'>
                        <HStack>
                            <Input placeholder='Question' bg="#fff" />
                            <Text >0/60</Text>
                        </HStack>
                        <HStack>
                            <Input placeholder='Answer' bg="#fff"/>
                            <Text>0/60</Text>
                        </HStack>
                    </Stack>
                ))
            }

            <Box w='full'>
                <HStack justifyContent='flex-end'>
                    <Button variant="link" onClick={onOpen}>
                        <Text color='#2F6FE4' as='u'>Show examples</Text>
                    </Button>
                </HStack>
            </Box>
        </VStack >

        <Modal onClose={onClose} size='xl' isOpen={isOpen} scrollBehavior='inside'>
            <ModalOverlay />
            <ModalContent background='#EBE9E9'>
            <ModalHeader color='#3F6FE4'>Examples</ModalHeader>
            <ModalBody>
                {
                    faqsExamples.map((faq) => (
                        <Stack marginBottom='10px'>
                            <Text color='#3F6FE4' fontSize='20px'>{faq[0]}</Text>
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