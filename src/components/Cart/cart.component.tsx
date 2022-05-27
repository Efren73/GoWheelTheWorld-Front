import * as React from "react"
import { useState, useEffect } from "react"
import {
  Text,
  VStack,
  Input,
  Heading,
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
  Stack,NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"
import { ICart } from "./cart.types";
import { InfoIcon } from '@chakra-ui/icons';
import {useSelector, useDispatch } from 'react-redux';
import { tourName, duration } from "../../actions/basicInformationAcction";

const Cart: React.FC = () => {
	const dispatcher = useDispatch();

	const basicInfo = useSelector((state:any)=>{
		return state.basicInformation;
	})
	console.log(basicInfo.tourName)

	//REDUX


	/* NÚMERO DE CARÁCTERES ------------------------------*/
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

	useEffect(() => {
		dispatcher(tourName(value))
	  },[value]);



	/* VENTANA MODAL -------------------------------------*/
    const { isOpen, onOpen, onClose } = useDisclosure()

    //Arreglo en donde se guardan los ejemplos de faqs
    const faqsExamples: string[]=[
        'Downtown Manhattan Private Guided Tour',
        'Boat Tour in Manhattan',
        'DUMBO Tour, The New Brooklyn',
        'Snorkel with whale sharks'
	];

	/* TIEMPO DEL TOUR --------------------------------- */
	const [ hours, setHours ] = React.useState("")
    const [ minutes, setMinutes ] = React.useState("30")

	console.log(+hours)
	console.log(+minutes)

	/* RESPONSIVE ------------------------------------- */
	const fontSizeResponsive = { base:'20px', sm:'15px'};

    return(
		<React.Fragment>
			<Box boxShadow='2xl'
				w="65%" 
				p={10}
				background="#EBE9E9"
				borderRadius="10px">

				<VStack alignItems='flex-start'>
					<Text fontSize={fontSizeResponsive} color='#3F6FE4'>Basic Information / Name of the tour</Text>
					<HStack w="full">
						<Heading fontSize={{base:'35px', sm:'18px'}}>Give your experience a name</Heading>
						<IconButton
							variant='outline'
							aria-label='Info'
							icon={<InfoIcon w={6} h={6} />}
						/>
					</HStack>
					<Text fontSize={fontSizeResponsive} paddingBottom='20px'> Make sure it's descriptive and unique so travelers know what you offer</Text>
					<Box w='full'>
						<Input	background={'white'}
								variant='outline'
								h='40px'
								fontSize={fontSizeResponsive}
								required maxLength={80}
								placeholder= 'Experience name'
								onChange={handleInputChange}
								value = {value}
						/>

						<HStack justifyContent='space-between' color='#2F6FE4' >
							<Text fontSize={fontSizeResponsive}> {characters}/50 </Text>
							<Button variant="link" onClick={onOpen}>
								<Text color='#2F6FE4' as='u' fontSize={fontSizeResponsive}> Show examples </Text>
							</Button>
						</HStack>
					</Box>
						<Box w='full'>
							<Heading fontSize={{base:'35px', sm:'18px'}}>Trip duration</Heading>
						</Box>
						<Box>
						<Stack shouldWrapChildren direction={['column', 'column', "column", 'row']} >
							<Text fontSize={fontSizeResponsive} color='#595959' paddingBottom='20px'>Hours</Text>
							<NumberInput size='md' 
										 maxW={80} 
										 min={0} 
										 max={10} 
										 variant='outline' 
										 h='40px' 
										 fontSize={'20px'} 
										 background={'white'} 
										 defaultValue={0}
										 onChange={(valueString) => {
											 setHours(valueString)
											 dispatcher(duration(valueString+":"+minutes+ " horas"))
											}
										 }>
								<NumberInputField />
								<NumberInputStepper>
									<NumberIncrementStepper bg='#2F6FE4' _active={{ bg: '#2558B6' }} children ='+'/>
									<NumberDecrementStepper bg='#2F6FE4' _active={{ bg: '#2558B6' }} children ='-'/>
								</NumberInputStepper>
							</NumberInput>
							
							<Text fontSize={fontSizeResponsive} color='#595959' paddingBottom='20px'>Minutes</Text>
							<NumberInput size='md' 
										 maxW={80}  
										 min={15} 
										 max={59} 
										 variant='outline' 
										 h='40px' 
										 fontSize={fontSizeResponsive}
										 background={'white'} 
										 defaultValue={30}
										 onChange={(value) => {
											 setMinutes(value)
											 dispatcher(duration(hours+":"+value+ " horas"))
											}}>
									<NumberInputField />
									<NumberInputStepper>
										<NumberIncrementStepper  bg='#2F6FE4' _active={{ bg: '#2558B6' }} children ='+'/>
										<NumberDecrementStepper bg='#2F6FE4' _active={{ bg: '#2558B6' }}  children ='-'/>
									</NumberInputStepper>
							</NumberInput>
						</Stack>
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
										<Text fontSize='16px'>{faq}</Text>
									</Stack>
								))
							}
						</ModalBody>
						<ModalFooter>
							<Button onClick={onClose} background='#3F6FE4' color={'white'}>Close</Button>
						</ModalFooter>
				</ModalContent>
			</Modal>
		</React.Fragment>
	)
}

export default Cart;