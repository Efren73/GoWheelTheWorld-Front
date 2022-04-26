import * as React from "react"
import { useState } from "react"
import {
  Text,
  VStack,
  useBreakpointValue,
  Input,
  Heading,
  Link,
  HStack,
  IconButton,
  Box,
  Button,
  useDisclosure,
  Modal,
	ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
	ChakraProvider,
	Stack,
} from "@chakra-ui/react"
import { ICart } from "./cart.types";
import { InfoIcon } from '@chakra-ui/icons';

const Cart: React.FC = () => {
	const background = useBreakpointValue({ base: "blue.500", sm: "gray.200" });

	//Elementos utilizados para limitar el numero de caracteres
    let [value, setValue] = useState('')
    let [characters, setCharacters] = useState(0)
    let inputValue: any;

	let handleInputChange = (e: any) => {
        inputValue = e.target.value

        if(inputValue.length<=50){
            setValue(inputValue)
            setCharacters(inputValue.length)
        }
    }

	//Elementos utilizados para la ventana modal
    const { isOpen, onOpen, onClose } = useDisclosure()

	//Matriz en donde se guardan los ejemplos de faqs
    const faqsExamples: string[][]=[
        ['Downtown Manhattan Private Guided Tour'],
        ['Boat Tour in Manhattan'],
        ['DUMBO Tour, The New Brooklyn'],
        ['Snorkel with whale sharks']
    ];

    return(
		<ChakraProvider>
			<Box boxShadow='2xl'
				w="65%" 
				h="full"
				p={10}
				background="#EBE9E9"
				borderRadius="10px">

				<VStack alignItems='flex-start'>
					<Text fontSize='20px' color='#3F6FE4'>Basic Information / Name of the tour</Text>
					<HStack w="full">
						<Heading fontSize='35px'>Give your experience a name</Heading>
						<IconButton
							variant='outline'
							aria-label='Info'
							icon={<InfoIcon 
							w={6} 
							h={6} />}
						/>
					</HStack>
					<Text fontSize='25px' paddingBottom='20px'>Make sure it's descriptive and unique so travelers know what you offer</Text>
					<Box w='full'>
						<Input
						background={'white'}
						variant='outline'
						h='40px'
						fontSize={'20px'}
						required maxLength={80}
						placeholder='Experience name'
						onChange={handleInputChange}
						value = {value}
						/>

						<HStack justifyContent='space-between' color='#2F6FE4' >
							<Text>{characters}/50</Text>
							<Button variant="link" onClick={onOpen}>
								<Text color='#2F6FE4' as='u'>Show examples</Text>
							</Button>
						</HStack>
					</Box>
				</VStack>
			</Box>

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
					<Button onClick={onClose} background='#3F6FE4' color={'white'}>Close</Button>
				</ModalFooter>
				</ModalContent>
			</Modal>
		</ChakraProvider>
	)
}
export default Cart;