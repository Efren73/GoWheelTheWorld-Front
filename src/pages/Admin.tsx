import * as React from "react"
import {
    ChakraProvider,
    Select,
    Button,
    Box,
    Checkbox, 
    Container,
    CheckboxGroup,
    Text,
    Link,
    GridItem,
    VStack,
    HStack,
    Spacer,
    Code,
    Grid,
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
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    RangeSlider,
    Flex,
    Heading,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
    WrapItem,
  } from "@chakra-ui/react"

  import { ChevronDownIcon, ArrowDownIcon, WarningIcon } from '@chakra-ui/icons'
  import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
  import { Image } from '@chakra-ui/react'
  import { TopMenu } from "../components/summary/TopMenu"



  function Feature({ Title, Destination, TourOperator, Date, Status, ...rest }) {
    return (
      <Box p={5} shadow='md' borderWidth='1px' {...rest}   paddingLeft={10}>
        

        <HStack justifyContent="space-between" fontSize="20" p="5" >

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
            <Wrap spacing="10px" align ="center">
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
  

  export const Admin = () => (

    <ChakraProvider theme={theme}>
      <TopMenu/>

        <HStack w={"full"} justifyContent="space-between" p={4} paddingRight={10} paddingLeft={10}>

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
                        <Stack spacing={5} p={5} direction='column'>
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

            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Status
                </MenuButton>
                <MenuList>
                    <MenuItem>
                        <FormControl display='flex' alignItems='center'>
                            <FormLabel htmlFor='email-alerts' mb='0'>
                                Completed tours
                            </FormLabel>
                            <Switch id='email-alerts'/>
                        </FormControl>
                    </MenuItem>

                    <Divider />

                    <MenuItem>
                        <Slider aria-label='slider-ex-1' defaultValue={30}>
                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                            <SliderThumb />
                        </Slider>
                    </MenuItem>

                </MenuList>
            </Menu>
        </HStack>

        <HStack w={"full"} justifyContent="flex-end" paddingRight={5} p={1}  color="red.500">
          <text >Clear all filters</text>
        </HStack>
        
        <Box bg='#3F6FE4' w='100%' p={3} paddingRight={20} paddingLeft={20} color='white'>
            <HStack w={"full"} justifyContent="space-between">
                <text>
                    Name
                    <ArrowDownIcon  p={1}  w={6} h={6}/>
                </text>

                <text>
                    Tour operator
                    <ArrowDownIcon p={1}  w={6} h={6}/>
                </text>
                <text>
                    Date
                    <ArrowDownIcon p={1}  w={6} h={6}/>
                </text>
                <text>
                    Status
                    <ArrowDownIcon p={1}  w={6} h={6}/>
                </text>
            </HStack>
        </Box>
        
        <VStack p={5} direction='row' w="full">
            <Feature w={"full"} 
            Title='Snorkel'
            Destination='Cancun, Mex'
            TourOperator = 'Jhon Wayne'
            Date = '10/10/21'
            Status = '29'
            />
        </VStack>

    </ChakraProvider>
  )
  