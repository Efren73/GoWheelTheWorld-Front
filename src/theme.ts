import { extendTheme, theme as base } from '@chakra-ui/react';

console.log('Hola')
const breakpoints = {
	sm: '200px',
	md: '768px',
	lg: '960px',
	xl: '1200px',
	'2xl': '1536px',
  }

const theme = extendTheme({
	fonts: {
		body: `Lato, ${base.fonts.body}`,
		heading: `Lato, ${base.fonts.heading}`,
	},
	breakpoints
})

export default theme;