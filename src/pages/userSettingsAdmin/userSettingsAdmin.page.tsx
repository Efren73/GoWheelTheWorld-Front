import * as React from "react";
import { useState, useEffect } from "react";
import { Heading, Skeleton } from "@chakra-ui/react";
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
  useEditableControls,
} from "@chakra-ui/react";
import TopMenu from "../../components/TopMenu/topMenu.component";
import { MdHome } from 'react-icons/md';
import { useLocation, useNavigate } from "react-router-dom";
import { Responsive } from "../../components/generalTypes";
import axios from "axios";

export const UserSettings  = () => {
  /* MOVERME A MENÚ PRINCIPAL -------------------------------------------------- */
  let navigate = useNavigate();
  
  function goToMenu() {
    navigate (`/admin/${idAdmin}`)
  }

  /* CONTROL DE INPUTS --------------------------------------------------------- */
  const [ infoAdmin, setInfoAdmin ] = useState({
    fullName: '', 
    email: '',
    password: '', 
    phoneNumber: ''
  });

  function handleChange (e: any, name: string) {
    setInfoAdmin({
        ...infoAdmin,
        [name]: e
    })
  };

  /* GET ---------------------------------------------------------------------- */
  const location = useLocation();
  const link: string[] = location.pathname.split("/");
  const idAdmin: string = link[link.length - 2];
  const [status, setStatus] = useState("idle");

  const url = `https://api-things-to-do.herokuapp.com/admin/info/${idAdmin}`;

  useEffect(() => {
    setStatus("loading");
    axios
      .get(url)
      .then((result) => {
        setInfoAdmin(result.data);
        setStatus("succeeded");
      })
      .catch((error) => {
        setStatus("failed");
      });
  }, []);

  /* UPDATE ----------------------------------------------------------------- */
  function update(event: any){
    event.preventDefault();
    setStatus("loading")
    const action ='put';
    const url = `https://api-things-to-do.herokuapp.com/admin/update-admin/${idAdmin}`;

    axios({
        method: action,
        url: url,
        data: infoAdmin,
        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        }
    }) 
    .then(() => {
      setStatus('succeeded')
    })
    .catch((error) => {
      setStatus("failed");
    })
  }

  /* HABILITAR PARA EDICIÓN -------------------------------------------- */
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls()

    return isEditing ? (
      <ButtonGroup justifyContent='center' size='sm'>
        <Button {...getSubmitButtonProps()} onClick={update} > Save </Button>
        <Button {...getCancelButtonProps()} > Cancel </Button>
      </ButtonGroup>
    ) : (
      <Button size='sm' {...getEditButtonProps()}> Edit </Button>
    )
  }

  function MyEditable(value: string, label: string, name: string) {
    return (
      <Editable
          textAlign='left'
          colorScheme="facebook"
          fontSize='md'
          startWithEditView={true}
          value={value}
          onChange = { (e: any) => handleChange(e, name) }
      >
        <FormLabel> {label} </FormLabel>
        <Input as={EditableInput} borderRadius="4px" name={name} />
        <EditablePreview />
      </Editable>
    )
  };

  const ResponsiveSize = { lg: '40%', md: '60%', sm: '80%' };
  const colSpan = { base: 2, md: 1 };

  return(
    <React.Fragment>
      <Flex h="100vh">
        <VStack w="full" h="full">
          <TopMenu/>
          <HStack w="80%" justifyContent='flex-start' paddingTop={10} paddingBottom={10}>
            <Button leftIcon={<MdHome />} colorScheme='gray' variant='solid' onClick={goToMenu}>
                Home
            </Button>
          </HStack>
            
          <Box  w={ResponsiveSize}>
            <Heading fontSize={Responsive.fontSizeResponsiveHead}>
              Profile Settings
            </Heading>
            <Text color='gray.400' fontSize={Responsive.fontSizeResponsiveBody}>
              Edit your profile
            </Text>
          </Box>

          { status === "succeeded" ? (
            <VStack  boxShadow='md' p='6' rounded='md' bg='white' w={ResponsiveSize} >
              <Grid  column={2} columnGap={3} rowGap={6} w="full">
                <GridItem colSpan={2}>
                  { MyEditable(infoAdmin.fullName, "First Name", "fullName") }
                </GridItem>

                <GridItem colSpan={colSpan} >
                  { MyEditable(infoAdmin.phoneNumber, "Phone number", "phoneNumber") }  
                </GridItem>

                <GridItem colSpan={colSpan}>
                  { MyEditable(infoAdmin.email, "Email", "email") }                       
                </GridItem>

                <GridItem colSpan={colSpan}>
                    {/*MyEditable("***********", "Password")*/}
                </GridItem>
              </Grid>
              <Box w='90%' paddingTop={10} >
                <ButtonGroup variant='solid' spacing='6' size='md'>
                  <Button colorScheme='blue' onClick={update}>Save</Button>
                </ButtonGroup>
              </Box>
            </VStack> ) 
            : 
            ( <Skeleton w="50%" h="60%" p={10} borderRadius="10px" /> )
          }
        </VStack>
      </Flex>
    </React.Fragment>
  )
} 

export default UserSettings;
        