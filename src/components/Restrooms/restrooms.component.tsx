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
import { IRestrooms } from "./restrooms.types";
import { useState, useEffect } from "react";
import { Responsive } from "../generalTypes";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  fetchTours,
  selectAllTours,
  getTourStatus,
  changeState,
} from "../../reducers/appSlice";

function Restrooms(props: IRestrooms): JSX.Element {
  const dispatch = useAppDispatch();
  const tour = useAppSelector(selectAllTours);
  const status = useAppSelector(getTourStatus);

  const [restRoom, setRestRoom] = useState([
    {
      question:
        "Accessible restrooms available at every place of the tour/activity",
      answer: "",
    },
    {
      question:
        "Accessible restrooms available at multiple stops during the tour/activity.",
      answer: "",
    },
    {
      question:
        "Accessible restrooms available in only one stop of the tour/activity.",
      answer: "",
    },
    {
      question: "No accessible restrooms available for the tour/activity.",
      answer: "",
    },
  ]);

  console.log(restRoom);

  function changeValue(e: any, index: any) {
    let newArray: any[] = [...restRoom];
    newArray[index] = {
      ...restRoom[index],
      answer: e.target.value,
    };
    setRestRoom(newArray);
  }

  useEffect(() => {
    dispatch(fetchTours());
  }, []);

  useEffect(() => {
    if (status === "succeeded") {
      if (
        tour.accessibility !== undefined &&
        tour.accessibility.restrooms !== undefined
      ) {
        setRestRoom(tour.accessibility.restrooms);
      }
    }
  }, [status]);

  useEffect(() => {
    dispatch(
      changeState({
        accessibility: {
          ...tour.accessibility,
          restrooms: restRoom,
        },
      })
    );
  }, [restRoom]);

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
              Accessibility / Restrooms
            </Text>
            <Heading fontSize={Responsive.fontSizeResponsiveBody}>
              Restrooms
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
                    Accessible restrooms available at every place of the
                    tour/activity
                  </Td>
                  <Td>
                    <RadioGroup value={restRoom[0].answer}>
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
                    Accessible restrooms available at multiple stops during the
                    tour/activity.
                  </Td>
                  <Td>
                    <RadioGroup value={restRoom[1].answer}>
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
                    Accessible restrooms available in only one stop of the
                    tour/activity.
                  </Td>
                  <Td>
                    <RadioGroup value={restRoom[2].answer}>
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
                    No accessible restrooms available for the tour/activity.
                  </Td>
                  <Td>
                    <RadioGroup value={restRoom[3].answer}>
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
        <Skeleton w="62%" h="75%" p={10} borderRadius="10px" />
      )}
    </React.Fragment>
  );
}
export default Restrooms;
