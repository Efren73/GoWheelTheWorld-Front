import {
  Button,
  useDisclosure,
  useBreakpointValue,
  HStack,
  Box,
  Drawer,
  VStack,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
  Image,
  useMediaQuery,
  Flex,
} from "@chakra-ui/react"

import { HamburgerIcon } from '@chakra-ui/icons'
import Summary from "../../../components/summary"
import logo from '../../login/images/logo.png'
import { useAppSelector } from "../../../app/hooks"
import { getTourStatus } from "../../../reducers/appSlice"

const Header = () =>{ 
  const status = useAppSelector(getTourStatus);
  const screenSize = useBreakpointValue({ base: 'true', md: 'false', lg:'false', sm: 'false'})
  const [isLargerThan1280] = useMediaQuery('(min-width: 768px)')

  function SummaryDrawer() {
      const { isOpen, onOpen, onClose } = useDisclosure()
    
      return (
        <>
          <Button borderColor='gray.500' leftIcon={<HamburgerIcon />}  onClick={onOpen} variant='outline'>
              Summary
          </Button>

          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            size={'full'}
          >
            <DrawerOverlay />
            <DrawerContent w='full'>
            <DrawerCloseButton color='white'/>
              <Summary/>
            </DrawerContent>
          </Drawer>
        </>
      )
    }

  function CheckSize(screenSize:any) {
    if (screenSize=='true' && status==="succeeded")
      return (
        <SummaryDrawer/>
      )
  }

  return (
    <Flex w="full">
      { !isLargerThan1280 ? (
          <HStack w='full' 
                  h={20} 
                  justifyContent='space-between' 
                  paddingRight={{ base: 0, sm: 110}}
                  paddingLeft={{ base: 0, sm: 90}}>
                  
            <Box  w={{ base: '18%', sm: '18%' }}>
                <Image src={logo} />
            </Box>
            <VStack alignItems="flex-start" spacing={1}>
              <Box alignItems={'flex-end'}>
                <SummaryDrawer/>
              </Box>
              <Link fontSize={['10px', '14px', '15px']}> Save and exit </Link>
            </VStack>
          </HStack>
        ) : (
          <HStack w='full' 
                  h={20} 
                  justifyContent='flex-end' 
                  paddingRight={{ md: 6, lg: 8 }}>
            <VStack alignItems="flex-end" spacing={-0.1}>
              <Box  w= '35%'>
                  <Image src={logo} />
              </Box>
              <Link fontSize='13px'> Save and exit </Link>
            </VStack>
          </HStack>
        )
      }
    </Flex>
  )
}

export default Header;