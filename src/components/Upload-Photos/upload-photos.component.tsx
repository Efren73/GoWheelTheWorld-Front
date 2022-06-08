import * as React from "react";
import {
  Text,
  VStack,
  Button,
  HStack,
  Image,
  Stack,
  Box,
  Progress,
  Heading,
  Skeleton,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  changeState,
  selectAllTours,
  getTourStatus,
} from "../../reducers/appSlice";

import Photo from "./image.png";
import "./upload-photos.modules.css";
import { Responsive } from "../generalTypes";
import { storage } from "../../firebase/index";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useLocation } from "react-router-dom";

/* CMANEJAR ESTATUS (loading, succeeded, idle' ) ----------- */
let status = "succeeded";

const UploadPhotos: React.FC = () => {
  const location = useLocation();
  const tour = useAppSelector(selectAllTours);

  const dispatch = useAppDispatch();
  const link: string[] = location.pathname.split("/");
  const idTourOperator: string = link[link.length - 2];

  let temp: any;
  const [file, setFile] = React.useState(temp);
  const [percent, setPercent] = useState(0);
  const [url, setUrl] = useState("");

  useEffect(() => {
    dispatch(
      changeState({
        photos: [],
      })
    );
  }, [url]);

  function handleChange(event: any) {
    setFile(event.target.files[0]);
  }

  /* TOAST ----------------------------------------*/
  const toast = useToast();

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

    const storageRef = ref(storage, `/${idTourOperator}/photos/${file?.name}`);
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
          console.log(url);
        });
      }
    );
  }

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
          <VStack alignItems="flex-start">
            <Stack spacing={2}>
              <Text
                fontSize={Responsive.fontSizeResponsiveHead}
                color="#3F6FE4"
              >
                Basic Information / Upload Photos
              </Text>
              <Heading fontSize={Responsive.fontSizeResponsiveBody}>
                Send us the best photos of your tour
              </Heading>
            </Stack>
            <Box>
              <Stack margin="10px">
                <Stack
                  direction={["column", "column", "row", "row"]}
                  w={["70%", "70%", "90%", "90%"]}
                >
                  <Image
                    boxSize="100px"
                    borderRadius="10px"
                    src={url || "http://via.placeholder.com/150"}
                    alt="firebase-image"
                  />
                  <input type="file" onChange={handleChange} accept="" />
                </Stack>
                <Button
                  w={["70%", "70%", "90%", "90%"]}
                  marginTop="50px"
                  onClick={handleUpload}
                >
                  SAVE
                </Button>
                <HStack>
                  <p>{percent} %</p>
                  <Progress hasStripe value={percent} />
                </HStack>
              </Stack>
            </Box>
          </VStack>
        </Box>
      ) : (
        <Skeleton w="65%" h="75%" p={10} borderRadius="10px" />
      )}
    </React.Fragment>
  );
};

export default UploadPhotos;
