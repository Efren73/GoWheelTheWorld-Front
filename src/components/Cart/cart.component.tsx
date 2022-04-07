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
} from "@chakra-ui/react"
import { ICart } from "./cart.types";

function Cart(props: ICart): JSX.Element {
	const background = useBreakpointValue({ base: "blue.500", sm: "gray.200" });

    return (
		<VStack
			h="full"
			w="full"
			p={10}
			spacing={10}
			alignItems="flex-start"
			bg="wtw.200"
		>
			<VStack alignItems="flex-start" p={0}>
				<Heading size="2xl">Your cart</Heading>
				<Text>If price is too hard on your eyes, try changing the theme.</Text>
			</VStack>					
		</VStack>
	);
}
export default Cart;