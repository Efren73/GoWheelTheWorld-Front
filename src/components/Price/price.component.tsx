import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useEffect, useState } from "react";
import * as React from "react";
import {
  Text,
  HStack,
  Stack,
  NumberInput,
  Progress,
  NumberInputField,
  useToast,
  Button,
  IconButton,
  Grid,
  Image,
  Heading,
  Skeleton,
  Box,

} from "@chakra-ui/react";
import sillaDeRuedas from "../../pages/mainScreenTO/sillaDeRuedas.png";
import {
  fetchTours,
  selectAllTours,
  getTourStatus,
  changeState,
  changeAreaEdited,
} from "../../reducers/appSlice";
import { CloseIcon } from "@chakra-ui/icons";


import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/index";

import { Responsive } from "../generalTypes";
import "../Upload-Photos/upload-photos.modules.css";
import { useLocation } from "react-router-dom";

const Price: React.FC = () => {

  let temp: any;
  const location = useLocation();
  const [file, setFile] = useState(temp);
  const [url, setUrl] = useState("");
  const [percent, setPercent] = useState(0);
  const [price, setPrice] = useState<number>(0);
  const toast = useToast();

  const link: string[] = location.pathname.split("/");
  const idTourOperator: string = link[link.length - 2];



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

  useEffect(() => {
    dispatch(
      changeState({
        basicInformation: {
          ...tour.basicInformation,
          priceDocument: url
        }
      })
    );
  }, [url]);

  function toastSuccess() {
    toast({
      title: "Success!",
      description: "Your file has been uploaded.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  }

  function toastError() {
    toast({
      title: "Warning!",
      description: "Please choose a file first.",
      status: "warning",
      duration: 9000,
      isClosable: true,
    });
  }

  function handleUpload() {
    if (!file) {
      toastError();
    } else toastSuccess();

    const storageRef = ref(storage, `/${idTourOperator}/docs/${file?.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setUrl(url);
          //  console.log(url);
        });
      }
    );
  }

  function handleChange(event: any) {
    setFile(event.target.files[0]);
  }

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
          {
              status == "succeeded" && tour.basicInformation.priceDocument !== undefined ?
               (                  
                <HStack m={5} justifyContent="space-between" bg={"#f5f6fa"}>
               <Image
                 src={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Circle-icons-document.svg/1024px-Circle-icons-document.svg.png"}
                 borderRadius={10}
                 shadow={"md"}
                 w={"80px"}
                 h={"80px"}
               />
               <Text> Document 1 </Text>
               <IconButton
                 aria-label="Search database"
                 //onClick={()=>{deleteImage(index)}}
                 icon={<CloseIcon />}
               />
              </HStack>
) 
               : null
          }
          <Stack 
          justifyItems={"center"}
          direction={["column", "column", "row", "row"]}
          w={["70%", "70%", "90%", "90%"]}
          >

            <input type="file" onChange={handleChange}/>
            <Button w={20} marginTop="50px" colorScheme='blue' onClick={handleUpload} >
              SAVE
            </Button>
          </Stack>
          <Progress value={percent}  hasStripe={percent != 100 ? true : false}  m={5} size='sm' colorScheme={percent != 100 ? "red" : "green"} />
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
