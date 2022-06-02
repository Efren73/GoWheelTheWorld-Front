import * as React from "react";
import { useState, useEffect } from "react";
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
  const dispatch = useAppDispatch();
  const tour = useAppSelector(selectAllTours);
  const status = useAppSelector(getTourStatus);

  /* NÚMERO DE CARÁCTERES ------------------------------*/
  let [value, setValue] = useState([""]);
  let [characters, setCharacters] = useState(0);
  let inputValue: any;

  let [myStop, setMyStop] = useState<any[]>([]);

  let handleInputChange = (e: any) => {
    inputValue = e.target.value;
    if (inputValue.length <= 80) {
      setValue(inputValue);
      setCharacters(inputValue.length);
    }
  };

  //Función para que cuando se de click a add, se agreguen elementos al arreglo con el fin de que se rendericen más componentes
  const addQuestionAnswer = () => {
    setMyStop([
      ...myStop,
      {
        stopName: "",
        hours: 0,
        minutes: 0,
      },
    ]);
  };

  function handleSubmit(e: any) {
    e.preventDefault();
    //console.dir(e.target)
  }

  function changeOneValue(e: any, index: any, value: any) {
    let newArray: any[] = [...myStop];

    console.log("value-------", value);
    if (value === "name") {
      newArray[index] = {
        ...myStop[index],
        stopName: e.target.value,
      };
      setMyStop(newArray);
    } else if (value === "minutes") {
      console.log("hola", e);
      newArray[index] = {
        ...myStop[index],
        minutes: e,
      };
      setMyStop(newArray);
    } else if (value === "hours") {
      newArray[index] = {
        ...myStop[index],
        hours: e,
      };
      setMyStop(newArray);
    }
  }

  function deleteQ(e: any, index: any) {
    let newArray: string[] = [...myStop];
    newArray.splice(index, 1);
    setMyStop(newArray);
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
                    <Heading fontSize={Responsive.fontSizeResponsiveBody}>
                        Introduce the stops
                    </Heading>
                    </Stack>

                    <Stack overflowY="auto" w="full" justifyContent="flex-start">
                    <Stack>
                        <Button
                        bg="#3F6FE4"
                        border=" 1px solid #000"
                        color="#fff"
                        borderRadius="20px"
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
                                    <Stack w="85%">
                                    <Text>Stop {index + 1}</Text>
                                    <Box>
                                        <Box>
                                        <Input
                                            placeholder="Name"
                                            bg="#fff"
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
                                        <Box w="full">
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
                                                size="md"
                                                maxW={80}
                                                min={0}
                                                max={10}
                                                variant="outline"
                                                h="40px"
                                                fontSize={"20px"}
                                                background={"white"}
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
                                                size="md"
                                                maxW={80}
                                                min={15}
                                                max={59}
                                                variant="outline"
                                                h="40px"
                                                fontSize={Responsive.fontSizeResponsiveHead}
                                                background={"white"}
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
                                            onClick={(e: any) => deleteQ(e, index)}
                                            marginBottom="20px"
                                        >
                                            <DeleteIcon />
                                        </Button>
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
