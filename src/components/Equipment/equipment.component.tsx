import * as React from "react";
import {
  Text,
  VStack,
  Heading,
  HStack,
  Box,
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td,
  RadioGroup,
  Radio,
  Skeleton,
  Image,
  Grid,
} from "@chakra-ui/react";
import { IEquipment } from "./equipment.types";
import { useState, useEffect } from "react";
import { Responsive } from "../generalTypes";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import sillaDeRuedas from "../../pages/mainScreenTO/sillaDeRuedas.png";
import {
  fetchTours,
  selectAllTours,
  getTourStatus,
  changeState,
} from "../../reducers/appSlice";

function Equipment(props: IEquipment): JSX.Element {
  const dispatch = useAppDispatch();
  const tour = useAppSelector(selectAllTours);
  const status = useAppSelector(getTourStatus);

  const [equipment, setEquipment] = useState([
    {
      question: "Is adaptive equipment included in this tour/activity?",
      answer: "",
    },
    {
      question: "Adaptive equipment is included and can be used independently",
      answer: "",
    },
    {
      question:
        "Adaptive equipment is included and can be used independently or assisted",
      answer: "",
    },
    {
      question:
        "Adaptive equipment is included and one person assisting is needed",
      answer: "",
    },
    {
      question:
        "Adaptive equipment is included and two people assisting are needed",
      answer: "",
    },
    {
      question:
        "Adaptive equipment is included and three or more people assisting are needed",
      answer: "",
    },
    {
      question:
        "Optional adaptive equipment is included and can be used independently",
      answer: "",
    },
  ]);

  // console.log(equipment);

  function changeValue(e: any, index: any) {
    let newArray: any[] = [...equipment];
    newArray[index] = {
      ...equipment[index],
      answer: e.target.value,
    };
    setEquipment(newArray);
  }

  useEffect(() => {
    dispatch(fetchTours());
  }, []);

  useEffect(() => {
    if (status === "succeeded") {
      if (
        tour.accessibility !== undefined &&
        tour.accessibility.equipment !== undefined
      ) {
        setEquipment(tour.accessibility.equipment);
      }
    }
  }, [status]);

  useEffect(() => {
    dispatch(
      changeState({
        accessibility: {
          ...tour.accessibility,
          equipment: equipment,
        },
      })
    );
  }, [equipment]);

  const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;

  return (
    <React.Fragment>
      {status === "succeeded" ? (
        <Box
          boxShadow="md"
          w="62%"
          p={20}
          background="#F8F9F9"
          borderRadius="10px"
        >
          <VStack alignItems="flex-start" w="full" h="full">
            <Text fontSize={Responsive.fontSizeResponsiveHead} color="#3F6FE4">
              Accessibility / Equipment
            </Text>
            <Heading fontSize={Responsive.fontSizeResponsiveBody}>
              Equipment
            </Heading>
            <TableContainer w="full" h="80%" overflowY="auto">
              <Table bg="white" borderRadius={10}>
                <Tbody>
                  <Tr fontSize={Responsive.fontSizeResponsiveHead}>
                    <Td> </Td>
                    <Td color="#4F6FE4"> 
                      <HStack justifyContent="flex-end">
                        <Text> Yes {tab} No </Text>
                      </HStack>
                    </Td>
                  </Tr>
                  <Tr fontSize={Responsive.fontSizeResponsiveHead}>
                    <Td>
                      Is adaptive equipment included in this tour/activity?
                    </Td>
                    <Td>
                      <RadioGroup value={equipment[0].answer}>
                        <HStack spacing={8} justifyContent="flex-end">
                          <Radio
                            value="yes"
                            border="1px"
                            borderColor="#2F6FE4"
                            onChange={(e: any) => changeValue(e, 0)}
                          ></Radio>
                          <Radio
                            value="no"
                            border="1px"
                            borderColor="#2F6FE4"
                            onChange={(e: any) => changeValue(e, 0)}
                          ></Radio>
                        </HStack>
                      </RadioGroup>
                    </Td>
                  </Tr>
                  <Tr fontSize={Responsive.fontSizeResponsiveHead}>
                    <Td>
                      Adaptive equipment is included and can be used
                      independently
                    </Td>
                    <Td>
                      <RadioGroup value={equipment[1].answer}>
                        <HStack spacing={8} justifyContent="flex-end">
                          <Radio
                            value="yes"
                            border="1px"
                            borderColor="#2F6FE4"
                            onChange={(e: any) => changeValue(e, 1)}
                          ></Radio>
                          <Radio
                            value="no"
                            border="1px"
                            borderColor="#2F6FE4"
                            onChange={(e: any) => changeValue(e, 1)}
                          ></Radio>
                        </HStack>
                      </RadioGroup>
                    </Td>
                  </Tr>
                  <Tr fontSize={Responsive.fontSizeResponsiveHead}>
                    <Td>
                      Adaptive equipment is included and can be used
                      independently or assisted
                    </Td>
                    <Td>
                      <RadioGroup value={equipment[2].answer}>
                        <HStack spacing={8} justifyContent="flex-end">
                          <Radio
                            value="yes"
                            border="1px"
                            borderColor="#2F6FE4"
                            onChange={(e: any) => changeValue(e, 2)}
                          ></Radio>
                          <Radio
                            value="no"
                            border="1px"
                            borderColor="#2F6FE4"
                            onChange={(e: any) => changeValue(e, 2)}
                          ></Radio>
                        </HStack>
                      </RadioGroup>
                    </Td>
                  </Tr>
                  <Tr fontSize={Responsive.fontSizeResponsiveHead}>
                    <Td>
                      Adaptive equipment is included and one person assisting is
                      needed
                    </Td>
                    <Td>
                      <RadioGroup value={equipment[3].answer}>
                        <HStack spacing={8} justifyContent="flex-end">
                          <Radio
                            value="yes"
                            border="1px"
                            borderColor="#2F6FE4"
                            onChange={(e: any) => changeValue(e, 3)}
                          ></Radio>
                          <Radio
                            value="no"
                            border="1px"
                            borderColor="#2F6FE4"
                            onChange={(e: any) => changeValue(e, 3)}
                          ></Radio>
                        </HStack>
                      </RadioGroup>
                    </Td>
                  </Tr>
                  <Tr fontSize={Responsive.fontSizeResponsiveHead}>
                    <Td>
                      Adaptive equipment is included and two people assisting
                      are needed
                    </Td>
                    <Td>
                      <RadioGroup value={equipment[4].answer}>
                        <HStack spacing={8} justifyContent="flex-end">
                          <Radio
                            value="yes"
                            border="1px"
                            borderColor="#2F6FE4"
                            onChange={(e: any) => changeValue(e, 4)}
                          ></Radio>
                          <Radio
                            value="no"
                            border="1px"
                            borderColor="#2F6FE4"
                            onChange={(e: any) => changeValue(e, 4)}
                          ></Radio>
                        </HStack>
                      </RadioGroup>
                    </Td>
                  </Tr>
                  <Tr fontSize={Responsive.fontSizeResponsiveHead}>
                    <Td>
                      Adaptive equipment is included and three or more people
                      assisting are needed
                    </Td>
                    <Td>
                      <RadioGroup value={equipment[5].answer}>
                        <HStack spacing={8} justifyContent="flex-end">
                          <Radio
                            value="yes"
                            border="1px"
                            borderColor="#2F6FE4"
                            onChange={(e: any) => changeValue(e, 5)}
                          ></Radio>
                          <Radio
                            value="no"
                            border="1px"
                            borderColor="#2F6FE4"
                            onChange={(e: any) => changeValue(e, 5)}
                          ></Radio>
                        </HStack>
                      </RadioGroup>
                    </Td>
                  </Tr>
                  <Tr fontSize={Responsive.fontSizeResponsiveHead}>
                    <Td>
                      Optional adaptive equipment is included and can be used
                      independently
                    </Td>
                    <Td>
                      <RadioGroup value={equipment[6].answer}>
                        <HStack spacing={8} justifyContent="flex-end">
                          <Radio
                            value="yes"
                            border="1px"
                            borderColor="#2F6FE4"
                            onChange={(e: any) => changeValue(e, 6)}
                          ></Radio>
                          <Radio
                            value="no"
                            border="1px"
                            borderColor="#2F6FE4"
                            onChange={(e: any) => changeValue(e, 6)}
                          ></Radio>
                        </HStack>
                      </RadioGroup>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </VStack>
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
    </React.Fragment>
  );
}
export default Equipment;
