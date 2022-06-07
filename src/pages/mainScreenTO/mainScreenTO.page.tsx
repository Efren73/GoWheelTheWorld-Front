import React, { useEffect, useState, useRef } from "react";
import {
  Text,
  VStack,
  Heading,
  Flex,
  Button,
  Image,
  HStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  Box,
  IconButton,
  useBreakpointValue,
  useDisclosure,
  ChakraProvider,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Skeleton,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { IMainScreenTO } from "./mainScreenTO.types";
import ImageInfoMSTO from "./ImageInfoMSTO.png";
import sillaDeRuedas from "./sillaDeRuedas.png";
import TopMenu from "../../components/TopMenu/topMenu.component";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { links } from "../../reducers/appSlice";

function MainScreenTO(props: IMainScreenTO): JSX.Element {
  /* ALERT DIALOG ------------------------------*/
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef: any = useRef();

  const navigate = useNavigate();

  function cambiarPag(idTour: string) {
    navigate(
      `/tour-operator/${idTourOperator}/question/${idTour}/name-of-tour`
    );
  }

  function createTour(event: any) {
    event.preventDefault();
    const url = `https://api-things-to-do.herokuapp.com/tour-operator/create-tour/${idTourOperator}`;
    axios
      .post(url, {})
      .then((result) => {
        let value = result.data.id;
        console.log("JIJIJ", result.data.id);
        cambiarPag(value);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const tamanoBox = useBreakpointValue({ base: "", md: "80%", lg: "80%" });
  const spacing = useBreakpointValue({ base: "-4", md: "", lg: "-4" });
  const botonContinue = useBreakpointValue({ base: "md", md: "sm", lg: "md" });
  const fSBContinue = useBreakpointValue({ base: "", md: "10px", lg: "14px" });

  const location = useLocation();
  const link: string[] = location.pathname.split("/");
  const idTourOperator: string = link[link.length - 1];

  console.log(idTourOperator);

  let [indexValue, setIndex] = useState<any>(0);
  const [tours, setTours] = useState<any>([]);
  const [status, setStatus] = useState<string>("idle");
  // status: 'idle' | 'loading' | 'succeeded' | 'failed'

  /* GET ----------------------------------------*/
  const url = `https://api-things-to-do.herokuapp.com/tour-operator/all-tours/${idTourOperator}`;
  useEffect(() => {
    setStatus("loading");
    axios
      .get(url)
      .then((result) => {
        console.log(result);
        setTours(result.data);
        setIndex(result.data);

        setStatus("succeeded");
      })
      .catch((error) => {
        console.log(error);
        setStatus("failed");
      });
  }, []);

  console.log(tours);
  console.log(status);
  console.log(tours.length);

  const goToTour = (idTour: string) => {
    links(idTour);
    navigate(
      `/tour-operator/${idTourOperator}/question/${idTour}/name-of-tour`
    );
  };

  function refresh() {
    //navigate(`/tour-operator/${idTourOperator}`);
  }

  function deleteTour(event: any) {
    console.log("-----", indexValue);
    console.log("elimina----->", tours[indexValue].id);

    let idTour = tours[indexValue].id;

    event.preventDefault();
    const url = `https://api-things-to-do.herokuapp.com/tour-operator/delete-tour/${idTour}`;
    axios
      .put(url, {})
      .then((result) => {
        console.log("JIJIJ", result);
        toastSuccess();

        refresh();
      })
      .catch((error) => {
        console.log(error);
        toastError();
      });

    onClose();
  }

  /* TOAST ----------------------------------------*/
  const toast = useToast();

  function toastSuccess() {
    toast({
      title: "Success!",
      description: "Your tour or activity has been deleted.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  }

  function toastError() {
    toast({
      title: "Error!.",
      description: "We were unable to delete your tour or activity.",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  }

  /* BOXES ----------------------------------------*/
  function newTourWindow() {
    return (
      <Box
        w={["90%", "90%", "40%", "40%"]}
        h={tamanoBox}
        bgColor="white"
        boxShadow="md"
        p={10}
        borderRadius={20}
        alignSelf={"center"}
      >
        <VStack alignItems="flex-start">
          <HStack alignItems="flex-start">
            <VStack alignItems="flex-start">
              <Heading> New tour </Heading>
              <Text>
                People with disabilities are already booking tours and
                activities through our platform. Become a certified partner!
              </Text>
            </VStack>
            <Image src={ImageInfoMSTO} w={["20%", "20%", "30%", "30%"]} />
          </HStack>
          <Text> How to become a Wheel the World Partner? </Text>
          <HStack>
            <Text color="#2F6FE4"> 1 </Text>
            <Text> Access to any mobile device or computer </Text>
          </HStack>
          <HStack>
            <Text color="#2F6FE4"> 2 </Text>
            <Text> Follow the steps on the app </Text>
          </HStack>
          <HStack>
            <Text color="#2F6FE4"> 3 </Text>
            <Text> Our team will take care of the rest </Text>
          </HStack>
        </VStack>
        <HStack justifyContent="center" w="full">
          <Button
            marginTop={["2", "5", "7", "7", "7", "7", "7"]}
            height={["50px", "60px", "40px", "68px"]}
            width={"50%"}
            bg="#2F6FE4"
            color="white"
            onClick={createTour}
          >
            Let's start!{" "}
          </Button>
        </HStack>
      </Box>
    );
  }

  function tourRegisteredWindow() {
    return (
      <Box
        w={["90%", "90%", "40%", "40%"]}
        h={tamanoBox}
        bgColor="white"
        boxShadow="md"
        p={10}
        borderRadius={20}
        alignSelf={"center"}
      >
        <Heading marginBottom={5}> Tour registered </Heading>
        {status === "loading" ? (
          <Skeleton w="full" h="85%" p={10} borderRadius="10px" />
        ) : status === "succeeded" ? (
          tours.map((tourInfo: any) => {
            return (
              <VStack alignItems="flex-start" spacing={spacing}>
                <Text>{tourInfo.basicInformation.tourName}</Text>
                <HStack w="full" spacing={6}>
                  <HStack w="full">
                    <Slider defaultValue={30} isReadOnly={true}>
                      <SliderTrack>
                        <SliderFilledTrack />
                      </SliderTrack>
                    </Slider>
                    <Text color="#2F6FE4"> 30% </Text>
                  </HStack>
                  <Button
                    onClick={() => goToTour(tourInfo.id)}
                    size={botonContinue}
                    bg="#2F6FE4"
                    color="white"
                    fontSize={fSBContinue}
                  >
                    {" "}
                    Continue{" "}
                  </Button>
                  <IconButton
                    variant="outline"
                    aria-label="eliminar"
                    size={botonContinue}
                    icon={
                      <DeleteIcon
                        w={6}
                        h={6}
                        onClick={() => {
                          setIndex(tours.indexOf(tourInfo));
                          onOpen();
                        }}
                      />
                    }
                  />
                  <Modal
                    isCentered
                    isOpen={isOpen}
                    onClose={onClose}
                    scrollBehavior="inside"
                  >
                    <ModalOverlay
                      bg="none"
                      backdropFilter="auto"
                      backdropBlur="2px"
                    />
                    <ModalContent>
                      <ModalHeader fontSize="lg" fontWeight="bold">
                        {" "}
                        Delete stop{" "}
                      </ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        Are you sure? You can't undo this action afterwards.
                      </ModalBody>
                      <ModalFooter>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button
                          colorScheme="red"
                          onClick={(e: any) => deleteTour(e)}
                          ml={3}
                        >
                          Delete
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </HStack>
              </VStack>
            );
          })
        ) : (
          // status === "failed"
          <Stack alignItems={"center"}>
            <Text marginBottom={5} color="#3F6FE4">
              Sorry, something went wrong!{" "}
            </Text>
            <Image src={sillaDeRuedas} h="200px" marginTop={"10px"} />
          </Stack>
        )}
      </Box>
    );
  }

  return (
    <ChakraProvider>
      <Flex h="100vh">
        <VStack w="full" h="full">
          <TopMenu />
          <Box bg={"#f5f6fa"} w="full" h="full" bgSize={"cover"}>
            <Flex
              alignItems={["center", "center", "start", "center"]}
              justifyContent="center"
              w="full"
              h="full"
              direction={["column", "column", "row", "row"]}
            >
              {indexValue != "No doc" ? ( // Sí hay tours registrados
                <ChakraProvider>
                  <Stack
                    h={"80%"}
                    direction={"row"}
                    spacing={"5%"}
                    justifyContent={"center"}
                  >
                    {newTourWindow()}
                    {tourRegisteredWindow()}
                  </Stack>
                </ChakraProvider>
              ) : (
                newTourWindow()
              )}
            </Flex>
          </Box>
        </VStack>
      </Flex>
    </ChakraProvider>
  );
}

export default MainScreenTO;
