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
} from "@chakra-ui/react";
import { ITransportation } from "./transportation.types";
import { useState, useEffect } from "react";
import { Responsive } from "../generalTypes";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  fetchTours,
  selectAllTours,
  getTourStatus,
  changeState,
} from "../../reducers/appSlice";

function Transportation(props: ITransportation): JSX.Element {
  const dispatch = useAppDispatch();
  const tour = useAppSelector(selectAllTours);
  const status = useAppSelector(getTourStatus);

  const [transport, setTransport] = useState<any>([
    {
      question: "Transportation is wheelchair accessible",
      answer: "",
    },
    {
      question:
        "Transportation is not wheelchair accessible but assistance will be provided for transfers.",
      answer: "",
    },
    {
      question:
        "If needed, your wheelchair can be stored safely inside the vehicle",
      answer: "",
    },
    {
      question: "Is transportation included in this tour/activity?",
      answer: "",
    },
  ]);

  console.log(transport);

  function changeValue(e: any, index: any) {
    let newArray: any[] = [...transport];
    newArray[index] = {
      ...transport[index],
      answer: e.target.value,
    };
    setTransport(newArray);
  }

  useEffect(() => {
    dispatch(fetchTours());
  }, []);

  useEffect(() => {
    if (status === "succeeded") {
      if (tour.accessibility !== undefined) {
        if (tour.accessibility.transportation !== undefined)
          setTransport(tour.accessibility.transportation);
      }
    }
  }, [status]);

  useEffect(() => {
    dispatch(
      changeState({
        accessibility: {
          ...tour.accessibility,
          transportation: transport,
        },
      })
    );
  }, [transport]);

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
          <VStack alignItems="flex-start" w="full">
            <Text fontSize={Responsive.fontSizeResponsiveHead} color="#3F6FE4">
              Accessibility / Transportation
            </Text>
            <Heading fontSize={Responsive.fontSizeResponsiveBody}>
              Transportation
            </Heading>

            <HStack justifyContent="flex-end" w="93%">
              <HStack w="15%" spacing={31}>
                <Text
                  color="#4F6FE4"
                  fontSize={Responsive.fontSizeResponsiveHead}
                >
                  Yes
                </Text>
                <Text
                  color="#4F6FE4"
                  fontSize={Responsive.fontSizeResponsiveHead}
                >
                  No
                </Text>
              </HStack>
            </HStack>

            <Table bg="white" borderRadius={10}>
              <Tbody>
                <Tr fontSize={Responsive.fontSizeResponsiveHead}>
                  <Td>Transportation is wheelchair accessible</Td>
                  <Td>
                    <RadioGroup value={transport[0].answer}>
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
                    Transportation is not wheelchair accessible but assistance
                    will be provided for transfers.
                  </Td>
                  <Td>
                    <RadioGroup value={transport[1].answer}>
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
                    If needed, your wheelchair can be stored safely inside the
                    vehicle
                  </Td>
                  <Td>
                    <RadioGroup value={transport[2].answer}>
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
                  <Td>Is transportation included in this tour/activity?</Td>
                  <Td>
                    <RadioGroup value={transport[3].answer}>
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
              </Tbody>
            </Table>
          </VStack>
        </Box>
      ) : (
        <Skeleton w="65%" h="75%" p={10} borderRadius="10px" />
      )}
    </React.Fragment>
  );
}
export default Transportation;
