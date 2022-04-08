import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  useBreakpointValue,
  Heading,
  HStack,
  AspectRatio,
  Divider,
  Stack,
  Input,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react"
import { ICart } from "./cart.types";

function Cart(props: ICart): JSX.Element {
	const background = useBreakpointValue({ base: "blue.500", sm: "gray.200" });

    return (
		<VStack
			h="full"
			w="full"
			padding='20px'
			spacing={10}
			alignItems="flex-start"
			bg="wtw.200"
			background="#EBE9E9"
		>
			<Stack spacing={2}>
				
					<Text fontSize='20px' color='#3F6FE4'>Basic Information / Name</Text>
					<Text fontSize='50px'>Give your experience a name</Text>
					<Text fontSize='25px' paddingTop='20px'>Make sure it's descriptive and unique so travelers know what you offer.</Text>	
				
				
				<Stack spacing={3} w='full' paddingTop='20px'>
					<InputGroup>
						<Input placeholder='Experience name' size='lg'w='full'/>
					</InputGroup>
				</Stack>

			</Stack>
			
		</VStack>
	);
}
export default Cart;