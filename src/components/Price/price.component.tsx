import * as React from "react";
import { useEffect, useState } from "react";
import {
  Text,
  HStack,
  Stack,
  NumberInput,
  Box,
  NumberInputField,
  Heading,
  Skeleton,
  Grid,
  Image,
} from "@chakra-ui/react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import sillaDeRuedas from "../../pages/mainScreenTO/sillaDeRuedas.png";
import {
  fetchTours,
  selectAllTours,
  getTourStatus,
  changeState,
  changeAreaEdited,
} from "../../reducers/appSlice";
import { Responsive } from "../generalTypes";
import "../Upload-Photos/upload-photos.modules.css";

const Price: React.FC = () => {
  const [price, setPrice] = useState<number>(0);

  /* REDUX -------------------------------------- */
  const dispatch = useAppDispatch();
  const tour = useAppSelector(selectAllTours);
  const status = useAppSelector(getTourStatus);

  /* get --------- */
  useEffect(() => {
    dispatch(fetchTours());
    dispatch(changeAreaEdited('BASIC_INFORMATION'))
  }, []);

  useEffect(() => {
    if (status === "succeeded") {
      if (tour.basicInformation !== undefined) {
        setPrice(tour.basicInformation.price);
      }
    }
  }, [status]);

  /* update --------- */
  useEffect(() => {
    dispatch(
      changeState({
        basicInformation: {
          ...tour.basicInformation,
          price: price,
        },
      })
    );
  }, [price]);

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
          <Stack spacing={2}>
            <Text fontSize={Responsive.fontSizeResponsiveHead} color="#3F6FE4">
              Basic Information / Price
            </Text>
            <Heading fontSize={Responsive.fontSizeResponsiveBody}>
              Price per person, based on 2 travelers
            </Heading>
          </Stack>

          <HStack
            paddingTop={"30px"}
            paddingBottom="50px"
            justifySelf={"center"}
          >
            <Text
              fontSize={Responsive.fontSizeResponsiveHead}
              alignContent={"flex-start"}
            >
              $USD
            </Text>
            <NumberInput
              variant={price ? "filled" : "outline"}
              onChange={(cost: any) => setPrice(cost)}
              value={price >= 0 ? price : 0}
            >
              <NumberInputField />
            </NumberInput>
          </HStack>

          <Heading
            fontSize={Responsive.fontSizeResponsiveBody}
            paddingBottom="30px"
          >
            Please share any document related to the price
          </Heading>
          <Stack justifyItems={"center"}>
            <div className="uploadBtn">
              <p className="textBtn"> Upload </p>
              <input className="inputFile" type="file" accept="image/*, .pdf" />
            </div>
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

export default Price;
