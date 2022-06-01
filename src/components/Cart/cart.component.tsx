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
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"
import { InfoIcon } from '@chakra-ui/icons';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchTours, updateTour, selectAllTours, getTourStatus, changeState } from "../../reducers/appSlice";
import { Responsive } from "../generalTypes";
import { ProgressNav } from "../../pages/question/Footer";

const Cart: React.FC = () => {
	const dispatch = useAppDispatch();
	const tour = useAppSelector(selectAllTours);
	const status = useAppSelector(getTourStatus);

	console.log(status)
	console.log(tour)

	/* NÚMERO DE CARÁCTERES ------------------------------*/
    let [value, setValue] = useState('')
    let [characters, setCharacters] = useState(0)
    let inputValue: any;
	
	/* TIEMPO DEL TOUR --------------------------------- */
	const [ hours, setHours ] = React.useState("")
	const [ minutes, setMinutes ] = React.useState("30")


	let handleInputChange = (e: any) => {
        inputValue = e.target.value
        if(inputValue.length<=50){
			setValue(inputValue)
            setCharacters(inputValue.length)
        }
    }

	useEffect(() => {
		dispatch(fetchTours())
	  },[]);

	  useEffect(() => {
		dispatch(changeState(
			{
				basicInformation : {
					...tour.basicInformation,
					tourName: value,
					duration:
					{	hours: hours,
						minutes: minutes
					}
				}
			}
		))    
	  },[value, hours, minutes]);


	  useEffect(() => {
		if (status === "succeeded" ) {
			if(tour.basicInformation!= undefined)
			{			
			setValue(tour.basicInformation.tourName)
			setHours(tour.basicInformation.duration.hours)
			setMinutes(tour.basicInformation.duration.minutes)
		}
		}
	  }, [status]); 

	/* VENTANA MODAL -------------------------------------*/
    const { isOpen, onOpen, onClose } = useDisclosure()

    //Arreglo en donde se guardan los ejemplos de faqs
    const faqsExamples: string[]=[
        'Downtown Manhattan Private Guided Tour',
        'Boat Tour in Manhattan',
        'DUMBO Tour, The New Brooklyn',
        'Snorkel with whale sharks'
	];

    return(
		<React.Fragment>
			<Box boxShadow='2xl'
				w="65%" 
				p={10}
				background="#EBE9E9"
				borderRadius="10px">

				<VStack alignItems='flex-start'>
					<Text fontSize={Responsive.fontSizeResponsiveHead} color='#3F6FE4'>Basic Information / Name of the tour</Text>
					<HStack w="full">
						<Heading fontSize={Responsive.fontSizeResponsiveBody}>Give your experience a name</Heading>
						<IconButton
							variant='outline'
							aria-label='Info'
							icon={<InfoIcon w={6} h={6} />}
						/>
					</HStack>
					<Text fontSize={Responsive.fontSizeResponsiveHead} paddingBottom='20px'> Make sure it's descriptive and unique so travelers know what you offer</Text>
					<Box w='full'>
						<Input	background={'white'}
								variant='outline'
								h='40px'
								fontSize={Responsive.fontSizeResponsiveHead}
								required maxLength={80}
								placeholder= 'Experience name'
								onChange={handleInputChange}
								value = {value}
						/>

						<HStack justifyContent='space-between' color='#2F6FE4' >
							<Text fontSize={Responsive.fontSizeResponsiveHead}> {characters}/50 </Text>
							<Button variant="link" onClick={onOpen}>
								<Text color='#2F6FE4' as='u' fontSize={Responsive.fontSizeResponsiveHead}> Show examples </Text>
							</Button>
						</HStack>
					</Box>
						<Box w='full'>
							<Heading fontSize={Responsive.fontSizeResponsiveHead}>Trip duration</Heading>
						</Box>
						<Box>
						<Stack shouldWrapChildren direction={['column', 'column', "column", 'row']} >
							<Text fontSize={Responsive.fontSizeResponsiveHead} color='#595959' paddingBottom='20px'>Hours</Text>
							<NumberInput size='md' 
										 maxW={80} 
										 min={0} 
										 max={10} 
										 variant='outline' 
										 h='40px' 
										 fontSize={'20px'} 
										 background={'white'} 
										 defaultValue={0}
										 value = {hours}
										 borderRadius='10px'
										 onChange={(valueString) => {
											 setHours(valueString)
											 //dispatch(duration(valueString+":"+minutes+ " horas"))
											}
										 }>
								<NumberInputField />
								<NumberInputStepper>
									<NumberIncrementStepper bg='#2F6FE4' _active={{ bg: '#2558B6' }} children ='+'/>
									<NumberDecrementStepper bg='#2F6FE4' _active={{ bg: '#2558B6' }} children ='-'/>
								</NumberInputStepper>
							</NumberInput>
							
							<Text fontSize={Responsive.fontSizeResponsiveHead} color='#595959' paddingBottom='20px'>Minutes</Text>
							<NumberInput size='md' 
										 maxW={80}  
										 min={15} 
										 max={59} 
										 variant='outline' 
										 h='40px' 
										 fontSize={Responsive.fontSizeResponsiveHead}
										 background={'white'} 
										 defaultValue={0}
										 value = {minutes}
										 borderRadius='10px'
										 onChange={(value) => {
											 setMinutes(value)
											 //dispatch(duration(hours+":"+value+ " horas"))
											}}>
									<NumberInputField />
									<NumberInputStepper>
										<NumberIncrementStepper  bg='#2F6FE4' _active={{ bg: '#00000' }} children ='+'/>
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