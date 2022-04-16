import * as React from "react"
import {
  Text,
  VStack,
  useBreakpointValue,
  Stack,
  Input,
  Heading,
  Link,
} from "@chakra-ui/react"
import { ICart } from "./cart.types";

function Cart(props: ICart): JSX.Element {
	const background = useBreakpointValue({ base: "blue.500", sm: "gray.200" });

    return (
		<VStack
			h='full'
			w='880px'
			padding='20px'
			alignItems='flex-start'
			background="#EBE9E9">
      
			<Stack spacing={2}>
				<Text fontSize='20px' color='#3F6FE4'>Basic Information / Name</Text>
				<Heading fontSize='35px'>Give your experience a name</Heading>
				<Text fontSize='25px'paddingTop='20px' paddingBottom='50px'>Make sure it's descriptive and unique so travelers know what you offer.</Text>
			
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
			</Stack>

			
					
		</VStack>
	);
}
export default Cart;