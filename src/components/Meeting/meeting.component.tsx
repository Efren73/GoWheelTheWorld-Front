import * as React from "react";
import { useState, useEffect } from "react";
import {
  Text,
  AspectRatio,
  Stack,
  Input,
  Box,
  Heading,
  Skeleton,
} from "@chakra-ui/react";
import { Responsive } from "../generalTypes";
import {
  fetchTours,
  selectAllTours,
  getTourStatus,
  changeState,
} from "../../reducers/appSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

const Meeting: React.FC = () => {

  const dispatch = useAppDispatch();
  const tour = useAppSelector(selectAllTours);
  const status = useAppSelector(getTourStatus);

  console.log(status);

  /* NÚMERO DE CARÁCTERES ------------------------------*/
  let [value, setValue] = useState("");
  let inputValue: any;

  let handleInputChange = (e: any) => {
    inputValue = e.target.value;
    setValue(inputValue);
  };

  useEffect(() => {
    dispatch(fetchTours());
  }, []);

  useEffect(() => {
    dispatch(
      changeState({
        intinerary: {
          ...tour.intinerary,
          meetPoint: value,
        },
      })
    );
  }, [value]);

  useEffect(() => {
    if (status === "succeeded") {
      if (
        tour.intinerary !== undefined &&
        tour.intinerary.meetPoint !== undefined
      ) {
        setValue(tour.intinerary.meetPoint);
      }
    }
  }, [status]);

  return (
    <React.Fragment>
        {status === "succeeded" ?
          (
            <Box boxShadow="md" w="65%" p={10} background="#F8F9F9" borderRadius="10px">
              <Stack spacing={2}>
                <Text fontSize={Responsive.fontSizeResponsiveHead} color="#3F6FE4">
                  Itinerary / Meeting Point
                </Text>
                <Heading fontSize={Responsive.fontSizeResponsiveBody}>
                  Please introduce the meeting point
                </Heading>
              </Stack>

              <Input
                variant={value ? 'filled' : 'outline'}
                h="30px"
                fontSize={Responsive.fontSizeResponsiveHead}
                required
                maxLength={80}
                placeholder="Street, number, City"
                marginBottom={"20px"}
                marginTop={"10px"}
                onChange={handleInputChange}
                value={value}
              />

              <Box h="70%" overflowY="auto">
                <AspectRatio ratio={17 / 8}>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng" title="map"/>
                </AspectRatio>
              </Box>
            </Box>
          )
          :
          (
            <Skeleton w="65%" h="75%" p={10} borderRadius="10px" />
          )
      }
  </React.Fragment>
  );
};

export default Meeting;
