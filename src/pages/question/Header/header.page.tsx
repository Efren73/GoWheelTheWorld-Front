import * as React from "react"

import {
    Text,
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
  } from "@chakra-ui/react"

  import {HamburgerIcon } from '@chakra-ui/icons'
  import Summary from "../../../components/summary"
  import logo from '../../login/images/logo.png'
import { useAppSelector } from "../../../app/hooks"
import { getTourStatus } from "../../../reducers/appSlice"

  const Header = () =>{ 
    const status = useAppSelector(getTourStatus);
    const screenSize = useBreakpointValue({ base: 'true', md: 'false', lg:'false' })


    function SummaryDrawer() {
        const { isOpen, onOpen, onClose } = useDisclosure()
      
        return (
          <>
            <Button colorScheme='gray' leftIcon={<HamburgerIcon />}  onClick={onOpen}>
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
      function CheckSize(screenSize:any){
        if (screenSize==='true' && status==="succeeded")
            return (
                <SummaryDrawer/>
                )
    }

    return (
    <HStack w='full' h={20} justifyContent='space-between' paddingRight='3%'>
        <Box  w={{base: '10%', md: '15%', lg:'10%', sm: '30%'}}>
            <Image src={logo} />
        </Box>
        <Box alignItems={'flex-end'}>
            <VStack alignItems="flex-start" spacing="-2">
                <Text fontSize={['10px', '15px', '20px', '20px']} color="#3F6FE4"> Fernanda, let's start! </Text>
                <Link fontSize={['10px', '10px', '15px']} > Save and exit </Link>
            </VStack>
        </Box>
        { 
            CheckSize(screenSize)
         }
    </HStack>

  )}
  export default Header;