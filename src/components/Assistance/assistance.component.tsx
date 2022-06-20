import * as React from "react";
import { Skeleton } from "@chakra-ui/react";
import {
  Text,
  VStack,
  Box,
  Heading,
  HStack,
  Tbody,
  Table,
  Td,
  Tr,
  RadioGroup,
  Radio,
  Image,
  Grid,
} from "@chakra-ui/react";
import { IAssistance } from "./assistance.types";
import { useState, useEffect } from "react";
import { Responsive } from "../generalTypes";
import sillaDeRuedas from "../../pages/mainScreenTO/sillaDeRuedas.png";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  fetchTours,
  selectAllTours,
  getTourStatus,
  changeState,
} from "../../reducers/appSlice";

function Assistance(props: IAssistance): JSX.Element {
  const dispatch = useAppDispatch();
  const tour = useAppSelector(selectAllTours);
  const status = useAppSelector(getTourStatus);

  const [assistan, setAssistan] = useState([
    {
      question:
        "Guides / staff members have been trained by Wheel the World to provide assistance to people with disabilities during the tour/activity",
      answer: "",
    },
    {
      question:
        "Guides / staff members have experience assisting people with disabilities",
      answer: "",
    },
    {
      question: "Guides / staff members will be available to assist",
      answer: "",
    },
  ]);

  function changeValue(e: any, index: any) {
    let newArray: any = [...assistan];

    newArray[index] = {
      ...assistan[index],
      answer: e.target.value,
    };
    setAssistan(newArray);
  }

  /* RESPONSIVE --------------------------------- */

  useEffect(() => {
    dispatch(fetchTours());
  }, []);

  useEffect(() => {
    if (status === "succeeded") {
      if (
        tour.accessibility !== undefined &&
        tour.accessibility.assistance !== undefined
      ) {
        setAssistan(tour.accessibility.assistance);
      }
    }
  }, [status]);

  useEffect(() => {
    dispatch(
      changeState({
        accessibility: {
          ...tour.accessibility,
          assistance: assistan,
        },
      })
    );
  }, [assistan]);

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
              {" "}
              Accessibility / Assistance{" "}
            </Text>
            <Heading fontSize={Responsive.fontSizeResponsiveBody}>
              Assistance
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
                    Guides / staff members have been trained by Wheel the World
                    to provide assistance to people with disabilities during the
                    tour/activity
                  </Td>
                  <Td>
                    <RadioGroup value={assistan[0].answer}>
                      <HStack spacing={8}>
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
                    Guides / staff members have experience assisting people with
                    disabilities
                  </Td>
                  <Td>
                    <RadioGroup value={assistan[1].answer}>
                      <HStack spacing={8}>
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
                  <Td>Guides / staff members will be available to assist</Td>
                  <Td>
                    <RadioGroup value={assistan[2].answer}>
                      <HStack spacing={8}>
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

export default Assistance;
