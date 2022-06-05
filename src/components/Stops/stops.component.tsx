import * as React from "react";
import { useState, useEffect, useRef } from "react";
import {
  Text,
  Stack,
  Input,
  Button,
  HStack,
  Box,
  useNumberInput,
  ChakraProvider,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Heading,
  Skeleton,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
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

const Stops: React.FC = () => {
  /* ALERT DIALOG ------------------------------*/
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef:  any = useRef()

  /* REDUX ------------------------------*/
  const dispatch = useAppDispatch();
  const tour = useAppSelector(selectAllTours);
  const status = useAppSelector(getTourStatus);

  /* NÚMERO DE CARÁCTERES ------------------------------*/
  let [value, setValue] = useState([""]);
  let [indexValue, setIndex] = useState(0);
  let [characters, setCharacters] = useState(0);
  let inputValue: any;

  let [myStop, setMyStop] = useState<any[]>([]);

  //Función para que cuando se de click a add, se agreguen elementos al arreglo con el fin de que se rendericen más componentes
  const addQuestionAnswer = () => {
    console.log("Tamaño STOPS -> ", myStop.length);
    setMyStop([
      ...myStop,
      {
        stopName: "",
        hours: 0,
        minutes: 0,
        indexElement: myStop.length
      },
    ]);
  };

  function handleSubmit(e: any) {
    e.preventDefault();
    //console.dir(e.target)
  }

  function changeOneValue(e: any, index: any, value: any) {
    console.log("value-------", e);
    let newArray: any[] = [...myStop];
    
    if (value === "name") {
      inputValue = e.target.value;
      if (inputValue.length <= 80) {
        newArray[index] = {
          ...myStop[index],
          stopName: e.target.value,
          //index: index
        };
        setMyStop(newArray);

        setCharacters(inputValue.length);
      }
    } else if (value === "minutes") {
      console.log("hola", e);
      newArray[index] = {
        ...myStop[index],
        minutes: e,
        //index: index
      };
      setMyStop(newArray);
    } else if (value === "hours") {
      newArray[index] = {
        ...myStop[index],
        hours: e,
        //index: index
      };
      setMyStop(newArray);
    }
    
    //console.log('STOP ARRAY VALUE -> ', myStop[index])
  }

  function deleteQ() {
    
    console.log('Index a ELIMINAR ', indexValue)
    let newArray: any[] = [...myStop];
    newArray.splice(indexValue, 1);

    for(let i = 0; i<newArray.length; i++){
      newArray[i] = {
        ...newArray[i],
        indexElement: i
      }
    }

    setMyStop(newArray);
    onClose();
  }

  console.log(myStop);

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 0,
      min: 1,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  console.log(status);

  useEffect(() => {
    dispatch(fetchTours());
  }, []);

  /* UPDATE ------------------------------*/
  useEffect(() => {
    dispatch(
      changeState({
        intinerary: {
          ...tour.intinerary,
          stops: myStop,
        },
      })
    );
  }, [myStop]);

  /* GET ------------------------------*/
  useEffect(() => {
    if (status === "succeeded") {
      if (tour.intinerary != undefined) {
        setMyStop(tour.intinerary.stops);
      }
    }
  }, [status]);


  return (
    <ChakraProvider>
        {status === "succeeded" ?
			(
                <Box
                    boxShadow="md"
                    w="65%"
                    p={10}
                    background="#F8F9F9"
                    borderRadius="10px"
                >
                    <Stack spacing={2}>
                      <Text color="#3F6FE4" fontSize={Responsive.fontSizeResponsiveHead}>
                          Itinerary / Stops
                      </Text>
                      <Text fontSize={Responsive.fontSizeResponsiveBody}>
                          Introduce the stops
                      </Text>
                    </Stack>

                    <Stack overflowY="auto" w="full" justifyContent="flex-start">
                    <Stack>
                        <Button
                        bg="#3F6FE4"
                        border=" 1px solid #000"
                        color="#fff"
                        borderRadius="20px"
                        marginTop='20px'
                        onClick={addQuestionAnswer}
                        w="10%"
                        fontSize={{ base: "25px", sm: "10px", md: "15px" }}
                        >
                            + Add
                        </Button>
                    </Stack>
                    <form onSubmit={handleSubmit}>
                        {myStop && myStop.length > 0 ? (
                            myStop.map((theStop: any, index: number) => (
                                <Stack w="100%" marginBottom={4}>
                                  <HStack>
                                      <Stack w="85%" marginTop='20px'>
                                        <Heading
                                          fontSize={Responsive.fontSizeResponsiveHead}
                                        >
                                          Stop {index + 1}
                                        </Heading>
                                        <Box>
                                            <Box>
                                            <Input
                                                placeholder="Name"
                                                variant={theStop.stopName ? 'filled' : 'outline'}
                                                value={theStop.stopName}
                                                onChange={(e: any) =>
                                                changeOneValue(e, index, "name")
                                                }
                                            />
                                            <Text color="#2F6FE4">
                                                {theStop.stopName ? theStop.stopName.length : 0}/80
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Box w="full" marginTop='20px' paddingBottom="20px">
                                                <Heading
                                                fontSize={Responsive.fontSizeResponsiveHead}
                                                >
                                                  Duration
                                                </Heading>
                                            </Box>
                                            <Box>
                                                <Stack
                                                shouldWrapChildren
                                                direction={["column", "column", "column", "row"]}
                                                >
                                                <Text
                                                    fontSize={Responsive.fontSizeResponsiveHead}
                                                    color="#595959"
                                                    paddingBottom="20px"
                                                >
                                                    Hours
                                                </Text>
                                                <NumberInput
                                                    marginRight={'40px'}
                                                    size="md"
                                                    maxW={80}
                                                    min={0}
                                                    max={10}
                                                    variant={theStop.hours ? 'filled' : 'outline'}
                                                    h="40px"
                                                    fontSize={"20px"}
                                                    defaultValue={0}
                                                    value={+theStop.hours}
                                                    onChange={(e: any) =>
                                                    changeOneValue(e, index, "hours")
                                                    }
                                                >
                                                    <NumberInputField />
                                                    <NumberInputStepper>
                                                    <NumberIncrementStepper
                                                        color="white"
                                                        bg="#2F6FE4"
                                                        _active={{ bg: "#2558B6" }}
                                                        children="+"
                                                    />
                                                    <NumberDecrementStepper
                                                        color="white"
                                                        bg="#2F6FE4"
                                                        _active={{ bg: "#2558B6" }}
                                                        children="-"
                                                    />
                                                    </NumberInputStepper>
                                                </NumberInput>

                                                <Text
                                                    fontSize={Responsive.fontSizeResponsiveHead}
                                                    color="#595959"
                                                    paddingBottom="20px"
                                                >
                                                    Minutes
                                                </Text>
                                                <NumberInput
                                                    marginRight={'40px'}
                                                    size="md"
                                                    maxW={80}
                                                    min={(theStop.hours > 0 ) ? 0 : 15}
                                                    variant={theStop.minutes ? 'filled' : 'outline'}
                                                    bg={theStop.minutes ? '#F8F9F9' : '#fff'}
                                                    max={59}
                                                    h="40px"
                                                    fontSize={Responsive.fontSizeResponsiveHead}
                                                    defaultValue={30}
                                                    value={theStop.minutes}
                                                    onChange={(e: any) => {
                                                    changeOneValue(e, index, "minutes");
                                                    }}
                                                >
                                                    <NumberInputField />
                                                    <NumberInputStepper>
                                                    <NumberIncrementStepper
                                                        color="white"
                                                        bg="#2F6FE4"
                                                        _active={{ bg: "#2558B6" }}
                                                        children="+"
                                                    />
                                                    <NumberDecrementStepper
                                                        color="white"
                                                        bg="#2F6FE4"
                                                        _active={{ bg: "#2558B6" }}
                                                        children="-"
                                                    />
                                                    </NumberInputStepper>
                                                </NumberInput>
                                                </Stack>
                                            </Box>
                                            </Box>
                                            <Flex justifyContent="flex-end">
                                            <Button
                                                variant="link"
                                                marginTop="20px"
                                                onClick={() => {
                                                  onOpen();
                                                  setIndex(theStop.indexElement)
                                                }}
                                            >
                                              <DeleteIcon h={'200%'}/>
                                            </Button>
                                            <AlertDialog
                                              isOpen={isOpen}
                                              leastDestructiveRef={cancelRef}
                                              onClose={onClose}
                                              motionPreset="slideInBottom"
                                              isCentered
                                            >
                                              <AlertDialogOverlay>
                                                <AlertDialogContent>
                                                  <AlertDialogHeader fontSize="lg" fontWeight="bold">
                                                    Delete stop
                                                  </AlertDialogHeader>

                                                  <AlertDialogBody>
                                                    Are you sure? You can't undo this action afterwards.
                                                  </AlertDialogBody>

                                                  <AlertDialogFooter>
                                                    <Button ref={cancelRef} onClick={onClose}>
                                                      Cancel
                                                    </Button>
                                                    <Button colorScheme="red" onClick={() => deleteQ()} ml={3}>
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
                </Box>
            )
            :
            (
                <Skeleton w="65%" h="75%" p={10} borderRadius="10px" />
            )
        }
    </ChakraProvider>
  );
};
export default Stops;
