import React, { useEffect } from "react";
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
  Link,
  Box,
  InputGroup,
  InputRightElement,
  useMediaQuery,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import logo from "./images/logo.png";
import ImgFondo from "./images/beach-418742_1920.jpg";
import { ILogin } from "./login.types";
import { useNavigate } from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth"
import {auth, signInWithEmail} from "../../firebase/firebase-auth"
import axios from "axios";

function Login(props: ILogin): JSX.Element {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth)
  const [userInfo, setUserInfo] = React.useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    if(user && !loading){
      axios.get(`https://api-things-to-do.herokuapp.com/tour-operator/info/${user.uid}`)
      .then(result =>{
        navigate(`/tour-operator/${user.uid}`)
      })
      .catch(error => {
        if(error.response.data.document === "No document"){
          axios.get(`https://api-things-to-do.herokuapp.com/admin/info/${user.uid}`)
          .then(result => {
            navigate(`/admin/${user.uid}`)
          })
          .catch(error => {
            console.log(error)
          })
        }
      })
    }
  },[user, loading])
  async function change() {

      await signInWithEmail(userInfo.email, userInfo.password)
  }

  function change2() {
    navigate("/signup");
  }

  function handleChange(e: any) {
    setUserInfo({
      ...userInfo, //Mantener todo lo que ya esta en la constante body
      [e.target.name]: e.target.value
  })
  }

  /* RESPONSIVE ------------------------------------*/
  const fontSizeResponsive = { base: "20px", sm: "15px" };
  const [isLargerThan1280] = useMediaQuery("(min-width: 800px)");
  const tamano = { base: "62%", sm: "70%" };

  return (
    <React.Fragment>
      <Flex h="100vh" w="100%" overflowY={'hidden'}>
        {isLargerThan1280 ? (
          <Flex w="100%" h="full" overflowY={'hidden'}>
            <Box
              bgImage={`url(${ImgFondo})`}
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
                  Empowering people with disabilities to travel the world
                  without limits{" "}
                </Text>
              </VStack>
            </Box>
            <Box w="50%" overflowY="auto">
              <HStack justifyContent="center" w="full" h="13%" marginTop='10%'>
                <Image
                  src={logo}
                  h={{ lg: "120%", md: "80%" }}
                />
              </HStack>
              <VStack w="100%" spacing={59} p={10} marginTop='3px'>
                <Heading> Welcome! </Heading>
                <VStack w="full" spacing={5}>
                  <FormControl w={tamano}>
                    <VStack alignItems="flex-start" spacing="-2">
                      <FormLabel fontSize={fontSizeResponsive}>
                        {" "}
                        Email address{" "}
                      </FormLabel>
                      <Input
                        placeholder="What's your email address?"
                        borderRadius={10}
                        fontSize={fontSizeResponsive}
                        size="lg"
                        border="1px"
                        borderColor="#2F6FE4"
                        isRequired={true}
                        type="email"
                        name="email"
                        onChange={handleChange}
                      />
                    </VStack>
                  </FormControl>
                  <FormControl w={tamano}>
                    <VStack alignItems="flex-start" spacing="-2">
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
                          isRequired={true}
                          name="password"
                        onChange={handleChange}
                        />
                        <InputRightElement width="19%" h="100%">
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
                  w={tamano}
                  fontSize={fontSizeResponsive}
                  bg="#2F6FE4"
                  color="white"
                  borderRadius={10}
                  onClick={change}
                >
                  {" "}
                  Login{" "}
                </Button>
                <VStack spacing="-2">
                  <Text fontSize={fontSizeResponsive}>
                    Don't have an account yet?{" "}
                  </Text>
                  <Link
                    fontSize={fontSizeResponsive}
                    color="#2F6FE4"
                    onClick={change2}
                  >
                    {" "}
                    Click here to become a partner.{" "}
                  </Link>
                </VStack>
              </VStack>
            </Box>
          </Flex>
        ) : (
          <Flex w="100%" h="full" justifyContent="center" marginTop='10%' overflowY={'hidden'}>
            <Box w="90%" h="full" overflowY={'hidden'}>
              <HStack justifyContent="center" w="full" h="13%">
                <Image
                  src={logo}
                  h={["50%", "90%", "90%", "100%"]}
                />
              </HStack>
              <VStack w="full" spacing={59} p={10}>
                <Heading> Welcome! </Heading>
                <VStack w="full" spacing={5}>
                  <FormControl>
                    <VStack alignItems="flex-start" spacing="-2">
                      <FormLabel fontSize={fontSizeResponsive}>
                        {" "}
                        Email address{" "}
                      </FormLabel>
                      <Input
                        placeholder="What's your email address?"
                        borderRadius={10}
                        fontSize={fontSizeResponsive}
                        size="lg"
                        border="1px"
                        borderColor="#2F6FE4"
                        isRequired={true}
                        type="email"
                        name="email"
                        onChange={handleChange}
                      />
                    </VStack>
                  </FormControl>
                  <FormControl>
                    <VStack alignItems="flex-start" spacing="-2">
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
                          isRequired={true}
                          name="password"
                        onChange={handleChange}
                        />
                        <InputRightElement width="19%" h="100%">
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
                  width="100%"
                  fontSize={fontSizeResponsive}
                  bg="#2F6FE4"
                  color="white"
                  borderRadius={10}
                  onClick={change}
                >
                  {" "}
                  Login{" "}
                </Button>
                <VStack spacing="-2">
                  <Text fontSize={fontSizeResponsive}>
                    Don't have an account yet?{" "}
                  </Text>
                  <Link
                    fontSize={fontSizeResponsive}
                    color="#2F6FE4"
                    onClick={change2}
                  >
                    {" "}
                    Click here to become a partner.{" "}
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

export default Login;
