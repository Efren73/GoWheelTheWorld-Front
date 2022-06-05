import * as React from "react";
import { useState, useEffect, useRef } from "react";
import {
  Text,
  HStack,
  Box,
  Button,
  Stack,
  Checkbox,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Heading,
  Skeleton,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Flex,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";
import { Responsive } from "../generalTypes";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  fetchTours,
  selectAllTours,
  getTourStatus,
  changeState,
} from "../../reducers/appSlice";

const Faqs: React.FC = () => {
  /* ALERT DIALOG ------------------------------*/
  const cancelRef: any = useRef();

  /* REDUX ------------------------------*/
  const dispatch = useAppDispatch();
  const tour = useAppSelector(selectAllTours);
  const status = useAppSelector(getTourStatus);
  //Definición de useState para que el usuario pueda ingresar varias preguntas
  let [questionAnswer, setQuestionAnswer] = useState<any>([]);

  //Definición de useState para que aparezca la primer pregunta del Checkbox
  let [check1, setCheck1] = useState(false);

  //Definicion de useState para encontrar el valor que se encuentra en el input
  let [text, setText] = useState("");
  //UseState para contar los caracteres
  let [characters, setCharacters] = useState(0);
  //Valor que se encuentra en el input para contar caracteres
  let inputValue: any;

  let [indexValue, setIndex] = useState(0);

  //Función cada vez que el contenido del texto cambie
  let handleInputChange = (e: any) => {
    inputValue = e.target.value;
    //Si la longitud es mayor que 60, entonces no podrán hacerse cambios, esta será la longitud máxima
    if (inputValue.length <= 80) {
      setText(inputValue);
      setCharacters(inputValue.length);
    }
  };

  //Funcion para que cuando se de click al checkbox, aparezca
  function addAnswer() {
    return (
      <Box>
        <Input
          placeholder="Answer"
          bg="#fff"
          onChange={handleInputChange}
          value={text}
        />
        <Text color="#2F6FE4">{characters}/80</Text>
      </Box>
    );
  }

  //Función para que cuando se de click a add, se agreguen elementos al arreglo con el fin de que se rendericen más componentes
  const addQuestionAnswer = () => {
    setQuestionAnswer([
      ...questionAnswer,
      {
        question: "",
        answer: "",
        indexElement: questionAnswer.length,
      },
    ]);
  };

  //Elementos utilizados para la ventana modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  //Matriz en donde se guardan los ejemplos de faqs
  const faqsExamples: string[][] = [
    [
      "Who can go on the tours?",
      "The tours we offer are designed to accommodate all kind of disabilities. Our travel experts can help you find the right tour to meet your accessibility needs.",
    ],
    [
      "When is the Museum open?",
      "The Museum opens from Tuesday to Sunday, from 09:30 AM to 05:15 PM.",
    ],
    [
      "What type of food and drink options are available?",
      "Guests can enjoy a meal from any of the resort’s 5 restaurants and 5 bars.",
    ],
    [
      "Can I have a meal?",
      "Yes! there is a Cafe on-site and eating and drinking is allowed in designated areas.",
    ],
  ];

  function handleSubmit(e: any) {
    e.preventDefault();
    console.dir(e.target);
  }

  //En este Change se manejan varios valores del new array
  //El valor newArray[0] hace referencia a la pregunta que se introduce
  //El valor newArray[1] hace referencia a la respuesta que se introduce
  //El valor newArray[2] hace referencia a la cantidad de caracteres de la pregunta
  //El valor newArray[3] hace referencia a la cantidad de caracteres de la respuesta
  function changeOneValue(e: any, index: any, type: any) {
    let newArray = [...questionAnswer];
    inputValue = e.target.value;

    if (e.target.value.length <= 200) {
      if (type === "question") {
        newArray[index] = {
          ...questionAnswer[index],
          question: e.target.value,
        };
      } else if (type === "answer") {
        newArray[index] = {
          ...questionAnswer[index],
          answer: e.target.value,
        };
      }
    }
    setQuestionAnswer(newArray);
  }

  function deleteQ() {
    let newArray = [...questionAnswer];
    newArray.splice(indexValue, 1);

    for (let i = 0; i < newArray.length; i++) {
      newArray[i] = {
        ...newArray[i],
        indexElement: i,
      };
    }

    setQuestionAnswer(newArray);
    onClose();
  }

  console.log("Faqs", questionAnswer);

  useEffect(() => {
    dispatch(fetchTours());
  }, []);

  useEffect(() => {
    dispatch(
      changeState({
        faqs: questionAnswer,
      })
    );
  }, [questionAnswer]);

  useEffect(() => {
    if (status === "succeeded") {
      if (tour.faqs !== undefined) {
        setQuestionAnswer(tour.faqs);
      }
    }
  }, [status]);

  return (
    <React.Fragment>
      {status === "succeeded" ? (
        <Box
          boxShadow="md"
          w="65%"
          p={10}
          background="#F8F9F9"
          borderRadius="10px"
        >
          <Stack spacing={2} marginBottom={15}>
            <Text color="#3F6FE4" fontSize={Responsive.fontSizeResponsiveHead}>
              FAQS
            </Text>
            <Heading fontSize={Responsive.fontSizeResponsiveBody}>
              Add your Frequently Asked Questions
            </Heading>
          </Stack>

          <Stack overflowY="auto" w="full" justifyContent="flex-start">
            <Stack w="85%" justifyContent="start">
              <HStack justifyContent="flex-start" marginTop="20px">
                <Checkbox
                  background="#fff"
                  _focus={{ background: "#000" }}
                  size="lg"
                  onChange={() => setCheck1(!check1)}
                />
                <Text fontSize={Responsive.fontSizeResponsiveHead}>
                  Can I Park here?
                </Text>
              </HStack>
              {check1 && addAnswer()}
            </Stack>
            <Stack>
              <Button
                marginTop="20px"
                bg="#3F6FE4"
                border=" 1px solid #000"
                color="#fff"
                borderRadius="20px"
                onClick={addQuestionAnswer}
                w="10%"
                fontSize={Responsive.fontSizeResponsiveBody}
              >
                + Add
              </Button>
            </Stack>
            <form onSubmit={handleSubmit}>
              {questionAnswer && questionAnswer.length > 0 ? (
                questionAnswer.map((x: any, index: any) => (
                  <Stack w="100%" marginBottom={4}>
                    <HStack>
                      <Stack w="85%" marginTop="20px">
                        <Heading fontSize={Responsive.fontSizeResponsiveHead}>
                          Question {index + 1}
                        </Heading>
                        <Box>
                          <Box>
                            <Input
                              variant={x.question ? "filled" : "outline"}
                              placeholder="Question"
                              value={x.question}
                              onChange={(e: any) =>
                                changeOneValue(e, index, "question")
                              }
                            />
                            <Text color="#2F6FE4">
                              {x.question ? x.question.length : 0}/200
                            </Text>
                          </Box>
                          <Box>
                            <Textarea
                              variant={x.answer ? "filled" : "outline"}
                              marginTop="10px"
                              h="80px"
                              placeholder="Answer"
                              value={x.answer}
                              onChange={(e: any) =>
                                changeOneValue(e, index, "answer")
                              }
                            />
                            <Text color="#2F6FE4">
                              {x.answer ? x.answer.length : 0}/200
                            </Text>
                          </Box>
                          <Flex justifyContent="flex-end">
                            <Button
                              variant="link"
                              onClick={() => {
                                onOpen();
                                setIndex(x.indexElement);
                              }}
                              marginBottom="20px"
                            >
                              <DeleteIcon />
                            </Button>
                            <AlertDialog
                              isOpen={isOpen}
                              leastDestructiveRef={cancelRef}
                              motionPreset="slideInBottom"
                              onClose={onClose}
                              isCentered
                            >
                              <AlertDialogOverlay>
                                <AlertDialogContent>
                                  <AlertDialogHeader
                                    fontSize="lg"
                                    fontWeight="bold"
                                  >
                                    Delete question
                                  </AlertDialogHeader>

                                  <AlertDialogBody>
                                    Are you sure? You can't undo this action
                                    afterwards.
                                  </AlertDialogBody>

                                  <AlertDialogFooter>
                                    <Button ref={cancelRef} onClick={onClose}>
                                      Cancel
                                    </Button>
                                    <Button
                                      colorScheme="red"
                                      onClick={() => deleteQ()}
                                      ml={3}
                                    >
                                      Delete
                                    </Button>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialogOverlay>
                            </AlertDialog>
                          </Flex>
                        </Box>
                      </Stack>
                    </HStack>
                  </Stack>
                ))
              ) : (
                <p></p>
              )}
            </form>
          </Stack>

          <Box w="full"></Box>

          <Box w="full">
            <HStack justifyContent="flex-end">
              <Button variant="link">
                <Text color="#2F6FE4" as="u">
                  Show examples
                </Text>
              </Button>
            </HStack>
          </Box>
        </Box>
      ) : (
        <Skeleton w="65%" h="75%" p={10} borderRadius="10px" />
      )}

      {/* <Modal
            onClose={onClose}
            size="xl"
            isOpen={isOpen}
            scrollBehavior="inside"
        >
            <ModalOverlay />
            <ModalContent background="#EBE9E9">
            <ModalHeader color="#3F6FE4">Examples</ModalHeader>
            <ModalBody>
                {faqsExamples.map((faq) => (
                    <Stack marginBottom="10px">
                        <Text color="#3F6FE4" fontSize="20px">
                        {faq[0]}
                        </Text>
                        <Text fontSize="16px">{faq[1]}</Text>
                    </Stack>
                ))}
            </ModalBody>
            <ModalFooter>
                <Button onClick={onClose}>Close</Button>
            </ModalFooter>
            </ModalContent>
        </Modal> */}
    </React.Fragment>
  );
};
export default Faqs;
