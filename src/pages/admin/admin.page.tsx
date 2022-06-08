import * as React from "react"
import { useState, useEffect } from "react"
import {useNavigate} from 'react-router-dom'
import {
    Button,
    Box,
    Checkbox, 
    Text,
    VStack,
    HStack,
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
    MenuList,
    MenuItem,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    WrapItem,
    Flex,
  } from "@chakra-ui/react"
  
  import { ChevronDownIcon, ArrowDownIcon } from '@chakra-ui/icons'
  import { Avatar } from '@chakra-ui/react'
  import TopMenu from "../../components/TopMenu/topMenu.component"
import axios from "axios"
  

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
        navigate (`/admin/AdminSummary/${tourId}`)
    }

    let colorScheme = ""
    if(+Status <= 40){
        colorScheme = "red";
    }
    else if(+Status > 40 && +Status<=75){
        colorScheme = "yellow";
    }
    else if(+Status > 75){
        colorScheme = "green";
    }
    return (
        <Box p={5} shadow='md' borderWidth='1px' {...rest}  borderRadius="6px"  onClick={Change}>
        <HStack justifyContent="space-between"    >
            <VStack h="full">
                <Text fontSize="18px" >
                    {Title}
                </Text>
                <Text fontSize="15px" color="blue" >
                    {Destination}
                </Text>
            </VStack>

            <Text mt={4}>{TourOperator}</Text>
            <Text mt={4}>{Date}</Text>
            <Wrap align ="center">
                <WrapItem >
                    <Text>{Status}%</Text>
                </WrapItem>
                <WrapItem  paddingLeft={1} paddingBottom={1} paddingRight={1}>
                    <Avatar size='lg' src='http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcS2YWLd02hXBD0xLRSWqzCKHpImAEQ_1BuQFhfZn8iNjvXFIFy9J_WOK2vFoiML' />
                </WrapItem>
            </Wrap>
        </HStack>
        <Progress  value={Status} size='md' colorScheme={colorScheme} />
        </Box>
    )
}

export const Admin  = () => {
    let [check1, setCheck1] = useState(true)

    const [tours, setTours] = useState<any>([]);
    const url = `https://api-things-to-do.herokuapp.com/admin/principal`;
    useEffect(() => {
      axios
        .get(url)
        .then((result) => {
          console.log(result);
          setTours(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);


    console.log(tours)
    return(
    <React.Fragment>
        <Flex h="100vh">
            <VStack w="full" h="full">
                <TopMenu/>
{/* 
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
                */}
        
                <VStack paddingTop={5} direction='row' w="80%"  >

                    {
                        tours.map((tour: any) => {
                            return(
                                <Feature w={"full"} 
                                Title={tour.basicInformation.tourName}
                                Destination={tour.tourOperatorCountry}
                                TourOperator = {tour.tourOperatorName}
                                Date = {tour.cratedAt}
                                Status = {tour.percentage}
                                tourId = {tour.id}
                                />
                            )
                        })
                    }
                </VStack>
                

            </VStack>
        </Flex>
    </React.Fragment>
    )}
   
export default Admin;