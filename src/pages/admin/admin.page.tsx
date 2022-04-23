import * as React from "react"
import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import { useDisclosure } from "@chakra-ui/react"
import {
    ChakraProvider,
    Button,
    Box,
    Checkbox, 
    Text,
    VStack,
    HStack,
    theme,
    Progress,
    Divider,
    Stack,
    Switch,
    FormControl,
    FormLabel,
    Menu,
    Radio, 
    RadioGroup, 
    MenuButton,
    Wrap,
    Grid,
    MenuList,
    MenuItem,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    WrapItem,
    Flex,
  } from "@chakra-ui/react"
  
  import { ChevronDownIcon, ArrowDownIcon, WarningIcon } from '@chakra-ui/icons'
  import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
  import { Image } from '@chakra-ui/react'
  import TopMenu from "../../components/TopMenu/topMenu.component"
  

function StatusSlider(State:boolean){
    
    if (State)
    return(
        <Slider aria-label='slider-ex-1' defaultValue={30}>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
        </Slider>
    )
}


function Feature({ Title, Destination, TourOperator, Date, Status, tourId, ...rest }:any) {
    let navigate = useNavigate()
    
    function Change():void {
        navigate (`AdminSummary/${tourId}`)
    }
    return (
        <Box p={5} shadow='md' borderWidth='1px' {...rest}   paddingLeft={10} onClick={Change}>
        <HStack justifyContent="space-between" fontSize="20" p="5"  >
            <VStack h="full">
                <Text >
                    {Title}
                </Text>
                <Text fontSize="15" color="blue" >
                    {Destination}
                </Text>
            </VStack>

            <Text mt={4}>{TourOperator}</Text>
            <Text mt={4}>{Date}</Text>
            <Wrap spacing="{5}" align ="center">
                <WrapItem >
                    <Text>{Status}%</Text>
                </WrapItem>
                <WrapItem >
                    <Avatar size='lg' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </WrapItem>
            </Wrap>
        </HStack>
        <Progress  value={Status} size='md' colorScheme='red' />
        </Box>
    )
}

export const Admin  = () => {
    let [check1, setCheck1] = useState(true)


    return(
    <ChakraProvider theme={theme}>
        <Flex h="100vh">
            <VStack w="full" h="full">
                <TopMenu/>

                <HStack w={"80%"} justifyContent="flex-end" paddingRight={2}  color="red.500">
                    <Text>Clear all filters</Text>
                </HStack>

                <HStack w={"80%"} justifyContent="space-between"  paddingRight={10} paddingLeft={10}>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Country
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                <Checkbox>Spain</Checkbox>
                            </MenuItem>

                            <Divider />

                            <MenuItem>
                                <Checkbox>US</Checkbox>
                            </MenuItem>
                            
                            <Divider />

                            <MenuItem>
                                <Checkbox>Mexico</Checkbox>
                            </MenuItem>

                            <Divider />

                            <MenuItem>
                                <Checkbox>France</Checkbox>
                            </MenuItem>

                            <Divider />

                            <MenuItem>
                                <Checkbox>UK</Checkbox>
                            </MenuItem>
                        </MenuList>
                    </Menu>

                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Date
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                <Checkbox defaultChecked>Checkbox</Checkbox>
                            </MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                    </Menu>

                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Destinations
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                <Checkbox>Cozumel</Checkbox>
                            </MenuItem>

                            <Divider />

                            <MenuItem>
                                <Checkbox>New York</Checkbox>
                            </MenuItem>
                            
                            <Divider />

                            <MenuItem>
                                <Checkbox>Eiffel Tower</Checkbox>
                            </MenuItem>

                            <Divider />

                            <MenuItem>
                                <Checkbox>Rome</Checkbox>
                            </MenuItem>
                        </MenuList>
                    </Menu>

                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Type of Activty
                        </MenuButton>
                        <MenuList>
                            <RadioGroup >
                                <Stack spacing={5} p='1' direction='column'>
                                    <Radio value='1'>
                                        Water Activity
                                    </Radio>
                                    <Radio value='2'>
                                        City tour
                                    </Radio>
                                    <Radio value='3'>
                                        Bus tour
                                    </Radio>
                                </Stack>
                            </RadioGroup>
                        </MenuList>
                    </Menu>

                    <HStack>

                    <Text paddingRight={1}>
                        Select progress:                  
                    </Text>
                    <VStack>
                        <FormControl display='flex' alignItems='center'>
                            <FormLabel htmlFor='status' mb='0'>
                                        Completed tours
                            </FormLabel>
                            <Switch onChange={() => setCheck1(!check1)} id='status'/>
                        </FormControl>
                            {StatusSlider(check1)}
                    </VStack>
                    </HStack>
                </HStack>

        
                <Box bg='#3F6FE4' w='100%' p={3} paddingRight={'10%'} paddingLeft={'10%'} color='white'>
                    <HStack w={"full"} justifyContent="space-between">
                        <Text>
                            Name
                            <ArrowDownIcon  p={1}  w={6} h={6}/>
                        </Text>

                        <Text>
                            Tour operator
                            <ArrowDownIcon p={1}  w={6} h={6}/>
                        </Text>
                        <Text>
                            Date
                            <ArrowDownIcon p={1}  w={6} h={6}/>
                        </Text>
                        <Text>
                            Status
                            <ArrowDownIcon p={1}  w={6} h={6}/>
                        </Text>
                    </HStack>
                </Box>
        
                <VStack p={5} direction='row' w="80%" >
                    <Feature w={"full"} 
                    Title='Snorkel'
                    Destination='Cancun, Mex'
                    TourOperator = 'Jhon Wayne'
                    Date = '10/10/21'
                    Status = '29'
                    tourId = {1}
                    borderRadius="10px" />
                </VStack>
            </VStack>
        </Flex>
    </ChakraProvider>
    )}
   
export default Admin;