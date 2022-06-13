import * as React from "react";
import {
  Text,
  VStack,
  Heading,
  HStack,
  Box,
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
import { IPlaces } from "./places.types";
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

function Places(props: IPlaces): JSX.Element {
  const dispatch = useAppDispatch();
  const tour = useAppSelector(selectAllTours);
  const status = useAppSelector(getTourStatus);

  const [places, setPlaces] = useState<any>([
    {
      question:
        "Places visited are all wheelchair accessible and can be navigated independently",
      answer: "",
    },
    {
      question: "Places present some barriers and minimum assistance is needed",
      answer: "",
    },
    {
      question:
        "Few accessibility measures are in place and assistance is needed for the full experience",
      answer: "",
    },
    {
      question: "There are smooth floors and pathways",
      answer: "",
    },
    {
      question:
        "There are pathways with rocks, stones, or other terrain that makes them difficult to access",
      answer: "",
    },
  ]);

  console.log(places);

  function changeValue(e: any, index: any) {
    let newArray: any[] = [...places];
    newArray[index] = {
      ...places[index],
      answer: e.target.value,
    };
    setPlaces(newArray);
  }

  /* RESPONSIVE --------------------------------- */

  useEffect(() => {
    dispatch(fetchTours());
  }, []);

  useEffect(() => {
    if (status === "succeeded") {
      if (
        tour.accessibility !== undefined &&
        tour.accessibility.places !== undefined
      ) {
        setPlaces(tour.accessibility.places);
      }
    }
  }, [status]);

  useEffect(() => {
    dispatch(
      changeState({
        accessibility: {
          ...tour.accessibility,
          places: places,
        },
      })
    );
  }, [places]);

  const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;

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
          <VStack alignItems="flex-start" w="full">
            <Text fontSize={Responsive.fontSizeResponsiveHead} color="#3F6FE4">
              Accessibility / Places
            </Text>
            <Heading fontSize={Responsive.fontSizeResponsiveBody}>
              Places
            </Heading>
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
                    Places visited are all wheelchair accessible and can be
                    navigated independently
                  </Td>
                  <Td>
                    <RadioGroup value={places[0].answer}>
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
                    Places present some barriers and minimum assistance is
                    needed
                  </Td>
                  <Td>
                    <RadioGroup value={places[1].answer}>
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
                    Few accessibility measures are in place and assistance is
                    needed for the full experience
                  </Td>
                  <Td>
                    <RadioGroup value={places[2].answer}>
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
                  <Td>There are smooth floors and pathways</Td>
                  <Td>
                    <RadioGroup value={places[3].answer}>
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
                    There are pathways with rocks, stones, or other terrain that
                    makes them difficult to access
                  </Td>
                  <Td>
                    <RadioGroup value={places[4].answer}>
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
              </Tbody>
            </Table>
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
export default Places;
