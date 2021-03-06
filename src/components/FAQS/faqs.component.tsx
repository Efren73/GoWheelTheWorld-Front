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
  Flex,
  Textarea,
  useDisclosure,
  ModalCloseButton,
  IconButton,
  Image,
  Grid,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { Responsive } from "../generalTypes";
import sillaDeRuedas from "../../pages/mainScreenTO/sillaDeRuedas.png";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  fetchTours,
  selectAllTours,
  getTourStatus,
  changeState,
} from "../../reducers/appSlice";

const Faqs: React.FC = () => {

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
    if (inputValue.length <= 200) {
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
        <Text color="#2F6FE4">{characters}/200</Text>
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

  /* ALERT DIALOG ------------------------------*/
  let [myModal, setMyModal] = useState<string>('');

  const OverlayOne = () => (
    <ModalBody>
      Are you sure? You can't undo this action afterwards.
    </ModalBody>
  );

  const OverlayTwo = () => (
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
  )

  const [overlay, setOverlay] = React.useState(<OverlayOne />)
  //Elementos utilizados para la ventana modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log("Faqs", questionAnswer);

  return (
    <React.Fragment>
      {status === "succeeded" ? (
        <Box
          boxShadow="md"
          w="62%"
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
            {/* <Stack w="85%" justifyContent="start">
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
            </Stack> */}
            <Stack>
              <Button
                marginTop="20px"
                marginLeft={'5px'}
                bg="#3F6FE4"
                color="#fff"
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
                            <IconButton
                                size='md'
                                icon={<DeleteIcon />}
                                aria-label={'Delete stop'}
                                colorScheme='gray'
                                onClick={() => {
                                  setOverlay(<OverlayOne />);
                                  onOpen();
                                  setIndex(x.indexElement);
                                  setMyModal("delete");
                                }}                             
                              />
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
              <Button
                variant="link"
                onClick={() => {
                  setOverlay(<OverlayTwo />);
                  onOpen();
                  setMyModal("examples");
                }}
              >
                <Text color="#2F6FE4" as="u">
                  Show examples
                </Text>
              </Button>
            </HStack>
          </Box>
        </Box>
      ) : (
        status === "loading" ? (
          <Skeleton w="62%" h="75%" p={10} borderRadius="10px" />
        ) : ( // status ===  failed
        <Grid w="62%" h='full' justifyContent={'center'}>
          <Text color="#3F6FE4" >
            Sorry, something went wrong!{" "}
            <Image src={sillaDeRuedas} boxSize='200px' marginTop='10px'/>
          </Text>
        </Grid>
        )
      )}
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
      >
        <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
        <ModalContent>
          {myModal === "examples" ? (
            <ModalHeader marginLeft={'5%'} fontSize="lg"
            fontWeight="bold"> Examples </ModalHeader>
          ) : (
            <ModalHeader
            marginLeft={'5%'}
            fontSize="lg"
            fontWeight="bold"> Delete FAQ </ModalHeader>
          )}
          <ModalCloseButton />
          <ModalBody>{overlay}</ModalBody>
          {myModal === "examples" ? (
            <ModalFooter>
              <Button onClick={onClose} background="#3F6FE4" color={"white"}>
                Close
              </Button>
            </ModalFooter>
          ) : (
            <ModalFooter>
              <Button onClick={onClose}>Cancel</Button>
              <Button colorScheme="red" onClick={() => deleteQ()} ml={3}>
                Delete
              </Button>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};
export default Faqs;
