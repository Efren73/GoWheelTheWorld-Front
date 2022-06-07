import * as React from "react"
import { useState, useEffect } from "react";
import { Heading, Skeleton } from "@chakra-ui/react"
import {
    Button,
    Box,
    Text,
    VStack,
    HStack,
    Input,
    FormLabel,
    GridItem,
    Grid,
    Flex,
    Editable,
    EditableInput,
    ButtonGroup,
    EditablePreview,

  } from "@chakra-ui/react"
  import TopMenu from "../../components/TopMenu/topMenu.component"
  import { useAppSelector, useAppDispatch } from "../../app/hooks";
  import {
    fetchTours,
    changeState,
    selectAllTours,
    getTourStatus,
  } from "../../reducers/appSlice";
  import { MdHome } from 'react-icons/md'

  export const UserSettings  = () => {

  const dispatch = useAppDispatch();
  const tour = useAppSelector(selectAllTours);
  const status = useAppSelector(getTourStatus);

  console.log(status);

  let [value, setValue] = useState("");
  let [value1, setValue1] = useState("");
  let [value2, setValue2] = useState("");
  let [value3, setValue3] = useState("");
  let [value4, setValue4] = useState("");
  let inputValue: any;

  let handleInputChange = (e: any) => {
    inputValue = e.target.value;
    setValue(inputValue);
  };

  useEffect(() => {
    dispatch(fetchTours());
  }, []);

  useEffect(() => {
    dispatch(
      changeState({
        profile: {
          ...tour.profile,
          firstname: value,
          companyname: value,
          phone: value,
          email: value,
          password: value,
        },
      })
    );
  }, [value]);

  useEffect(() => {
    if (status === "succeeded") {
      if (
        tour.profile !== undefined
      )
        setValue(tour.profile);
    }
  }, [status]);

    function MyEditable(data: any, label:string) {
        return(
        <Editable
            textAlign='left'
            fontSize='md'
            isPreviewFocusable={true}
            variant={value ? "filled" : "outline"} 
            value={data}  
            onChange={handleInputChange}
            >
            <FormLabel>{label}</FormLabel>
            <Input as={EditableInput} borderRadius="4px" />
            <EditablePreview />
        </Editable>
        )
    }

    const Responsive = { lg: '40%', md: '60%', sm: '80%' };
    const colSpan = { base: 2, md: 1 };


    return(
        <React.Fragment>
        {status === "succeeded" ? (
        <Flex h="100vh">
            <VStack w="full" h="full">
                <TopMenu/>

                <HStack w="80%" justifyContent='flex-start'>

                <Button leftIcon={<MdHome />} colorScheme='gray' variant='solid'>
                    Home
                </Button>

                </HStack>
                
                <Box  w={Responsive} >
                    <Heading as='h2'>
                        Profile Settings
                    </Heading>
                    <Text color='gray.400'>
                        Edit your profile
                    </Text>
                </Box>

                <VStack  boxShadow='md' p='6' rounded='md' bg='white' w={Responsive} >


                        <Grid  column={2} columnGap={3} rowGap={6} w="full">

                            <GridItem colSpan={2}>
                                {MyEditable("Carlos Manuel Gonzalez Vallejo", "First Name")}
                            </GridItem>

                            <GridItem colSpan={colSpan} >
                                {MyEditable("Los MexiTours, Cancun", "Company name")}                         
                            </GridItem>

                            <GridItem colSpan={colSpan} >
                                {MyEditable("775 771 6931", "Phone number")}
                            </GridItem>

                            <GridItem colSpan={colSpan}>
                                {MyEditable("A01276000@tec.mx", "Email Address")}                           
                            </GridItem>

                            <GridItem colSpan={colSpan}>
                                {MyEditable("***********", "Password")}
                            </GridItem>
                        </Grid>

                    <Box w='90%' paddingTop={10} >
                        <ButtonGroup variant='solid' spacing='6' size='md'>
                            <Button colorScheme='blue'>Save</Button>
                            <Button>Cancel</Button>
                        </ButtonGroup>
                    </Box>

               </VStack>
            </VStack>
        </Flex>
        ) : (
        <Skeleton w="65%" h="75%" p={10} borderRadius="10px" />
      )}
        </React.Fragment>
    )} 

    export default UserSettings;
        