import {
  Button,
  useDisclosure,
  useBreakpointValue,
  Text,
  HStack,
  Box,
  Drawer,
  VStack,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
  useMediaQuery,
  Flex,
} from "@chakra-ui/react"
import { useState} from "react"
import { useNavigate, useLocation } from "react-router-dom";
import { HamburgerIcon } from '@chakra-ui/icons'
import Summary from "../../../components/summary"
import logo from '../../login/images/logo.png'
import { useAppSelector, useAppDispatch } from "../../../app/hooks"
import { getTourStatus, selectAllTours} from "../../../reducers/appSlice"
import { updateTour  } from "../../../reducers/appSlice";
import { link } from "fs";


const Header = (props:any) =>{ 
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const status = useAppSelector(getTourStatus);
  const tour = useAppSelector(selectAllTours);
  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const [isLargerThan1280] = useMediaQuery('(min-width: 768px)')

  function saveProgress():any {
        try {
            setAddRequestStatus('pending')
            dispatch(updateTour(tour))     
            } catch (err) {
              console.error('Failed to save the post', err)
            } finally {
              setAddRequestStatus('idle')
            }
      navigate(
        `/tour-operator/${props}`
      );
    }

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

  function CheckSgiize(screenSize:any) {
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
                <Button onClick={saveProgress} variant={"ghost"}>
                <u>
                    Save and exit
                </u>
                </Button>
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
              <Button onClick={saveProgress}  variant={"ghost"}>
                <u>
                  Save and exit 
                </u>              
              </Button>
            </VStack>
          </HStack>
        )
      }
    </Flex>
  )
}

export default Header;