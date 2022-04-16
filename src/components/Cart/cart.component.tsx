import * as React from "react"
import {
  Text,
  VStack,
  useBreakpointValue,
  Stack,
  Input,
  Heading,
  Link,
  HStack,
  IconButton,
  Box,
} from "@chakra-ui/react"
import { ICart } from "./cart.types";
import { InfoIcon } from '@chakra-ui/icons';

function Cart(props: ICart): JSX.Element {
	const background = useBreakpointValue({ base: "blue.500", sm: "gray.200" });

    return(
		<Box boxShadow='2xl'
			 w="65%" 
			 h="full"
			 p={20}
			 background="#EBE9E9"
			 borderRadius="10px">
			<VStack alignItems='flex-start'>
				<Text fontSize='20px' color='#3F6FE4'>Basic Information / Name</Text>
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
				<Text fontSize='25px' paddingBottom='20px'>Make sure it's descriptive and unique so travelers know what you offer.</Text>
			
				<Input
				variant='outline'
				h='40px'
				fontSize={'20px'}
				required maxLength={80}
				placeholder='Experience name'
				color={'#2F6FE4'}/>
				
				<Link color='#2F6FE4' href='#' alignSelf={'flex-end'} size='15px'>
					Show examples
				</Link>	
			</VStack>
		</Box>
	);
}
export default Cart;