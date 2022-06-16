import React, { useEffect, useState } from "react";
import {
  Text,
  VStack,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Image,
  HStack,
  Box,
  InputRightElement,
  InputGroup,
  useMediaQuery,
  Link
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import logo from './logo.png';
//import ImagenPrincipal from '../login/images/ImagenPrincipal.png';
import { ISignup } from './signup.types';
import {signUpWithEmail, auth} from "../../firebase/firebase-auth"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useAuthState} from "react-firebase-hooks/auth"
import ImagenPrincipal from "../login/images/beach-418742_1920.jpg";

function Signup(props: ISignup): JSX.Element {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  /* RESPONSIVE ------------------------------------*/
  const fontSizeResponsive = { base: "20px", sm: "15px" };
  const [isLargerThan1280] = useMediaQuery("(min-width: 800px)");
  const tamano = { base: "62%", sm: "70%" };

  const navigate = useNavigate();

  const [person, loading, error] = useAuthState(auth)

  console.log(person)

  useEffect(()=>{
    if(!loading && person){
      axios.get(`https://api-things-to-do.herokuapp.com/tour-operator/info/${person.uid}`)
      .then(result =>{
        navigate(`/tour-operator/${person.uid}`)
      })
      .catch(error => {
        if(error.response.data.document === "No document"){
          axios.get(`https://api-things-to-do.herokuapp.com/admin/info/${person.uid}`)
          .then(result => {
            navigate(`/admin/${person.uid}`)
          })
          .catch(error => {
            console.log(error)
          })
        }
        
      })
  }
  }, [person, loading])
  const [user, setUser] = useState({
    fullName: "",
    company: "",
    phone: 0,
    country: "",
    email: "",
    password: ""
  })

  async function createUser(e: any){
    try {
      await signUpWithEmail(user.fullName, user.company, +user.phone, user.country, user.email, user.password)
    } catch (error) {
      console.log(error)
    }
    
  }

  function change2(){
    navigate("/")
  }

  function handleChange(e: any){
    setUser({
      ...user, //Mantener todo lo que ya esta en la constante body
      [e.target.name]: e.target.value
  })
  }
  console.log(user)

  return (
    <React.Fragment>
      <Flex h="100vh" overflowY={"hidden"}>
        {isLargerThan1280 ? (
          <Flex w="100%" h="full">
            <Box
              bgImage={`url(${ImagenPrincipal})`}
              w="50%"
              h="full"
              bgSize={"cover"}
            >
              <VStack
                h="full"
                w="full"
                paddingLeft={10}
                paddingTop={'6%'}
                paddingRight={5}
                alignItems="flex-start"
              >
                <Heading fontSize="50px"> HELLO! </Heading>
                <Text fontSize="25px">
                  {" "}
                  Empower people with disabilities to travel the world without
                  limits{" "}
                </Text>
              </VStack>
            </Box>
            <Box w="50%" overflowY="auto">
              <HStack justifyContent="center" w="full" h="13%" marginTop="5%">
                <Image src={logo} h="100%" marginBottom={"5%"} />
              </HStack>
              <VStack w="full" spacing={5}>
                <Heading> Become a partner! </Heading>
                <VStack w="full" spacing={4}>
                  <FormControl w={tamano}>
                    <VStack alignItems="flex-start" spacing="-2.5">
                      <FormLabel fontSize={fontSizeResponsive}>
                        {" "}
                        Full name{" "}
                      </FormLabel>
                      <Input
                        placeholder="What's your full name?"
                        borderRadius={10}
                        fontSize={fontSizeResponsive}
                        size="lg"
                        border="1px"
                        borderColor="#2F6FE4"
                        name = "fullName"
                        onChange={handleChange}
                      />
                    </VStack>
                  </FormControl>
                  <FormControl w={tamano}>
                    <VStack alignItems="flex-start" spacing="-2.5">
                      <FormLabel fontSize={fontSizeResponsive}>
                        {" "}
                        Company name{" "}
                      </FormLabel>
                      <Input
                        placeholder="What's your company name?"
                        borderRadius={10}
                        fontSize={fontSizeResponsive}
                        size="lg"
                        border="1px"
                        borderColor="#2F6FE4"
                        name = "company"
                        onChange={handleChange}
                      />
                    </VStack>
                  </FormControl>
                  <FormControl w={tamano}>
                    <VStack alignItems="flex-start" spacing="-2.5">
                      <FormLabel fontSize={fontSizeResponsive}>
                        {" "}
                        Country{" "}
                      </FormLabel>
                      <Input
                        placeholder="What's your country name?"
                        borderRadius={10}
                        fontSize={fontSizeResponsive}
                        size="lg"
                        border="1px"
                        borderColor="#2F6FE4"
                        name = "country"
                        onChange={handleChange}
                      />
                    </VStack>
                  </FormControl>
                  <FormControl w={tamano}>
                    <VStack alignItems="flex-start" spacing="-2.5">
                      <FormLabel fontSize={fontSizeResponsive}>
                        {" "}
                        Phone number{" "}
                      </FormLabel>
                      <Input
                        placeholder="What's your phone number?"
                        borderRadius={10}
                        fontSize={fontSizeResponsive}
                        size="lg"
                        type="tel"
                        border="1px"
                        borderColor="#2F6FE4"
                        name = "phone"
                        onChange={handleChange}
                      />
                    </VStack>
                  </FormControl>
                  <FormControl w={tamano}>
                    <VStack alignItems="flex-start" spacing="-2.5">
                      <FormLabel fontSize={fontSizeResponsive}>
                        {" "}
                        Email address{" "}
                      </FormLabel>
                      <Input
                        placeholder="What's your email address?"
                        borderRadius={10}
                        fontSize={fontSizeResponsive}
                        size="lg"
                        type="email"
                        border="1px"
                        borderColor="#2F6FE4"
                        name = "email"
                        onChange={handleChange}
                      />
                    </VStack>
                  </FormControl>
                  <FormControl w={tamano}>
                    <VStack alignItems="flex-start" spacing="-2.5">
                      <FormLabel fontSize={fontSizeResponsive}>
                        {" "}
                        Password{" "}
                      </FormLabel>
                      <InputGroup size="md">
                        <Input
                          type={show ? "text" : "password"}
                          placeholder="What's your password?"
                          borderRadius={10}
                          fontSize={fontSizeResponsive}
                          size="lg"
                          border="1px"
                          borderColor="#2F6FE4"
                          name = "password"
                          onChange={handleChange}
                        />
                        <InputRightElement width="18%" h="100%">
                          <Button
                            h="80%"
                            size="lg"
                            onClick={handleClick}
                            fontSize="15px"
                          >
                            {show ? (
                              <ViewOffIcon w="6" h="6" />
                            ) : (
                              <ViewIcon w="6" h="6" />
                            )}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </VStack>
                  </FormControl>
                </VStack>
                <Button
                  size="lg"
                  width={tamano}
                  fontSize={fontSizeResponsive}
                  bg="#2F6FE4"
                  color="white"
                  borderRadius={10}
                  onClick={createUser}
                >
                  {" "}
                  Create Account{" "}
                </Button>
                <VStack spacing="-2">
                  <Text fontSize={fontSizeResponsive}>
                  Already have an account?{" "}
                  </Text>
                  <Link
                    fontSize={fontSizeResponsive}
                    color="#2F6FE4"
                    onClick={change2}
                  >
                    {" "}
                    Click here to Login.{" "}
                  </Link>
                </VStack>
              </VStack>
            </Box>
          </Flex>
        ) : (
          <Flex w="100%" h="full" justifyContent="center">
            <Box w="90%" h="full">
              <HStack justifyContent="center" w="full" h="13%" marginTop="5%">
                <Image
                  src={logo}
                  h={["50%", "90%", "90%", "100%"]}
                  marginBottom="5%"
                />
              </HStack>
              <VStack w="full" spacing={5}>
                <Heading> Become a partner! </Heading>
                <VStack w="full" spacing={4}>
                  <FormControl w={tamano}>
                    <VStack alignItems="flex-start" spacing="-2.5">
                      <FormLabel fontSize={fontSizeResponsive}>
                        {" "}
                        Full name{" "}
                      </FormLabel>
                      <Input
                        placeholder="What's your full name?"
                        borderRadius={10}
                        fontSize={fontSizeResponsive}
                        size="lg"
                        border="1px"
                        borderColor="#2F6FE4"
                        name = "fullName"
                        onChange={handleChange}
                      />
                    </VStack>
                  </FormControl>
                  <FormControl w={tamano}>
                    <VStack alignItems="flex-start" spacing="-2.5">
                      <FormLabel fontSize={fontSizeResponsive}>
                        {" "}
                        Company name{" "}
                      </FormLabel>
                      <Input
                        placeholder="What's your company name?"
                        borderRadius={10}
                        fontSize={fontSizeResponsive}
                        size="lg"
                        border="1px"
                        borderColor="#2F6FE4"
                        name = "company"
                        onChange={handleChange}
                      />
                    </VStack>
                  </FormControl>
                  <FormControl w={tamano}>
                    <VStack alignItems="flex-start" spacing="-2.5">
                      <FormLabel fontSize={fontSizeResponsive}>
                        {" "}
                        Country{" "}
                      </FormLabel>
                      <Input
                        placeholder="What's your country name?"
                        borderRadius={10}
                        fontSize={fontSizeResponsive}
                        size="lg"
                        border="1px"
                        borderColor="#2F6FE4"
                        name = "country"
                        onChange={handleChange}
                      />
                    </VStack>
                  </FormControl>
                  <FormControl w={tamano}>
                    <VStack alignItems="flex-start" spacing="-2.5">
                      <FormLabel fontSize={fontSizeResponsive}>
                        {" "}
                        Phone number{" "}
                      </FormLabel>
                      <Input
                        placeholder="What's your phone number?"
                        borderRadius={10}
                        fontSize={fontSizeResponsive}
                        size="lg"
                        type="tel"
                        border="1px"
                        borderColor="#2F6FE4"
                        name = "phone"
                        onChange={handleChange}
                      />
                    </VStack>
                  </FormControl>
                  <FormControl w={tamano}>
                    <VStack alignItems="flex-start" spacing="-2.5">
                      <FormLabel fontSize={fontSizeResponsive}>
                        {" "}
                        Email address{" "}
                      </FormLabel>
                      <Input
                        placeholder="What's your email address?"
                        borderRadius={10}
                        fontSize={fontSizeResponsive}
                        size="lg"
                        type="email"
                        border="1px"
                        borderColor="#2F6FE4"
                        name = "email"
                        onChange={handleChange}
                      />
                    </VStack>
                  </FormControl>
                  <FormControl w={tamano}>
                    <VStack alignItems="flex-start" spacing="-2.5">
                      <FormLabel fontSize={fontSizeResponsive}>
                        {" "}
                        Password{" "}
                      </FormLabel>
                      <InputGroup size="md">
                        <Input
                          type={show ? "text" : "password"}
                          placeholder="What's your password?"
                          borderRadius={10}
                          fontSize={fontSizeResponsive}
                          size="lg"
                          border="1px"
                          borderColor="#2F6FE4"
                          name = "password"
                          onChange={handleChange}
                        />
                        <InputRightElement width="18%" h="100%">
                          <Button
                            h="80%"
                            size="lg"
                            onClick={handleClick}
                            fontSize="15px"
                          >
                            {show ? (
                              <ViewOffIcon w="6" h="6" />
                            ) : (
                              <ViewIcon w="6" h="6" />
                            )}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </VStack>
                  </FormControl>
                </VStack>
                <Button
                  size="lg"
                  width={tamano}
                  fontSize={fontSizeResponsive}
                  bg="#2F6FE4"
                  color="white"
                  borderRadius={10}
                  onClick={createUser}
                >
                  {" "}
                  Create Account{" "}
                </Button>
                <VStack spacing="-2">
                  <Text fontSize={fontSizeResponsive}>
                    Already have an account?{" "}
                  </Text>
                  <Link
                    fontSize={fontSizeResponsive}
                    color="#2F6FE4"
                    onClick={change2}
                  >
                    {" "}
                    Click here to Login.{" "}
                  </Link>
                </VStack>
              </VStack>
            </Box>
          </Flex>
        )}
      </Flex>
    </React.Fragment>
  );
}

export default Signup;
