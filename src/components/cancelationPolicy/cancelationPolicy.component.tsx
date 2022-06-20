import * as React from "react";
import { useState, useEffect } from "react";
import {
  Text,
  Box,
  Heading,
  Stack,
  Textarea,
  Skeleton,
  Image,
  Grid,
} from "@chakra-ui/react";
import { Responsive } from "../generalTypes";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import sillaDeRuedas from "../../pages/mainScreenTO/sillaDeRuedas.png";
import {
  fetchTours,
  selectAllTours,
  getTourStatus,
  changeState,
} from "../../reducers/appSlice";

const CancelationPolicy: React.FC = () => {
  // Control de input para cancelation policy
  let [value1, setValue1] = useState("");
  let inputValue1: any;
  let handleInputLink = (e: any) => {
    inputValue1 = e.target.value;
    console.log('value ----->', inputValue1)
    setValue1(inputValue1);
  };

  /* REDUX -------------------------------------- */
  const dispatch = useAppDispatch();
  const tour = useAppSelector(selectAllTours);
  const status = useAppSelector(getTourStatus);

  /* get --------- */
  useEffect(() => {
    dispatch(fetchTours());
  }, []);

  useEffect(() => {
    if (status === "succeeded") {
      if (tour.cancellationPolicy !== undefined) {
        setValue1(tour.cancellationPolicy);
      }
    }
  }, [status]);

  /* update --------- */
  useEffect(() => {
    dispatch(
      changeState({
        cancellationPolicy: value1,
      })
    );
  }, [value1]);

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
          <Stack spacing={2}>
            <Text fontSize={Responsive.fontSizeResponsiveHead} color="#3F6FE4">
              Cancelation policy
            </Text>
            <Heading fontSize={Responsive.fontSizeResponsiveBody}>
              Tell us about cancelation policy
            </Heading>
            <Box w="full">
              <Textarea
                variant={value1 ? "filled" : "outline"}
                h="200px"
                placeholder="Cancelation policy"
                onChange={handleInputLink}
                value={value1}
                fontSize={Responsive.fontSizeResponsiveHead}
              />
              <Text
                fontSize={Responsive.fontSizeResponsiveHead}
                color="#2F6FE4"
              >
                {value1 ? value1.length : 0}/999
              </Text>
            </Box>
          </Stack>
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
};
export default CancelationPolicy;
