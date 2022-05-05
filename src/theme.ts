import { extendTheme, theme as base } from '@chakra-ui/react';

console.log('Hola')
const theme = extendTheme({
	fonts: {
		body: `Lato, ${base.fonts.body}`,
		heading: `Lato, ${base.fonts.heading}`,
	}
})

export default theme;