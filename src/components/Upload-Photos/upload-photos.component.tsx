import * as React from "react";
import {
  Text,
  Button,
  HStack,
  Image,
  Stack,
  Box,
  Heading,
  Skeleton,
  useToast,
  Grid,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import sillaDeRuedas from "../../pages/mainScreenTO/sillaDeRuedas.png";
import {
  changeState,
  selectAllTours,
  getTourStatus,
  fetchTours,
  changeAreaEdited,
} from "../../reducers/appSlice";

import { CloseIcon } from "@chakra-ui/icons";
import "./upload-photos.modules.css";
import { Responsive } from "../generalTypes";
import { storage } from "../../firebase/index";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useLocation } from "react-router-dom";
import { async } from "@firebase/util";
import folder from "./folder.png"

/* CMANEJAR ESTATUS (loading, succeeded, idle' ) ----------- */

const UploadPhotos: React.FC = () => {
  const location = useLocation();
  const tour = useAppSelector(selectAllTours);
  const status = useAppSelector(getTourStatus);

  const dispatch = useAppDispatch();
  const link: string[] = location.pathname.split("/");
  const idTourOperator: string = link[link.length - 2];

  let temp: any;

  const [file, setFile] = useState(temp);
  const [percent, setPercent] = useState(0);
  const [url, setUrl] = useState("");
  const [urlTemp, setUrlTemp] = useState([""]);

  //GET DATA FROM BD
  useEffect(() => {
    dispatch(fetchTours());
    dispatch(changeAreaEdited("BASIC_INFORMATION"));
    setUrlTemp([]);
  }, []);

  //SAVE DATA IN LOCAL HOOK
  useEffect(() => {
    if (status === "succeeded") {
      if (tour.photos != undefined)
        setUrlTemp(tour.photos);
    }
  }, [status]);

  useEffect(() => {
    if(url != ""){
      setUrlTemp([...urlTemp, url]);
    }
  }, [url]);

  useEffect(() => {
    dispatch(
      changeState({
        photos: urlTemp,
      })
    );
  }, [urlTemp]);

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

  function toastSuccessDelete() {
    toast({
      title: "Success!",
      description: "Your tour or activity has been deleted.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  }

  function toastErrorDelete() {
    toast({
      title: "Error!.",
      description: "We were unable to delete your tour or activity.",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  }

  /* ALERT DIALOG ------------------------------*/
  const { isOpen, onOpen, onClose } = useDisclosure();

  let [indexValue, setIndex] = useState<any>(0);

  function deleteImage(): any {
    console.log("---------", indexValue);
    const result = urlTemp.filter((link) => link !== urlTemp[indexValue]);
    if (result != urlTemp) {
      setUrlTemp(result);
      toastSuccessDelete();
    } else {
      toastErrorDelete();
    }
    onClose();
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
          //  console.log(url);
        });
      }
    );
  }
  console.log(urlTemp)

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
          <Stack alignItems="flex-start" width="100%">
            <Text fontSize={Responsive.fontSizeResponsiveHead} color="#3F6FE4">
              Basic Information / Upload Photos
            </Text>

            <Heading fontSize={Responsive.fontSizeResponsiveBody}>
              Send us the best photos of your tour
            </Heading>

            <Box width="40%">
              {status == "succeeded" && urlTemp.length != 0
                ? urlTemp.map((value, index) => (
                    <HStack m={5} justifyContent="space-between" bg={"#f5f6fa"}>
                      <Image
                        src={value}
                        borderRadius={10}
                        shadow={"md"}
                        w={"80px"}
                        h={"80px"}
                      />
                      <Text>Photo {index + 1} </Text>
                      <IconButton
                        aria-label="Search database"
                        //onClick={()=>{deleteImage(index)}}
                        onClick={() => {
                          setIndex(index);
                          onOpen();
                        }}
                        icon={<CloseIcon />}
                      />
                    </HStack>
                  ))
                : (
                  <Box justifyContent="center">
                      <Image src={folder}/>
                  </Box>
                )}
            </Box>

            <Box marginTop={10} width="100%">
              <Stack margin="10px">
                <Stack
                  direction={["column", "column", "row", "row"]}
                  w={["70%", "70%", "90%", "90%"]}
                >
                  <input type="file" onChange={handleChange} accept="" />
                </Stack>
                <Button w={20} marginTop="50px" colorScheme='blue' onClick={handleUpload}>
                  SAVE
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Box>
      ) : status === "loading" ? (
        <Skeleton w="62%" h="75%" p={10} borderRadius="10px" />
      ) : (
        // status ===  failed
        <Grid w="62%" h="full" justifyContent={"center"}>
          <Text color="#3F6FE4">
            Sorry, something went wrong!{" "}
            <Image src={sillaDeRuedas} boxSize="200px" marginTop="10px" />
          </Text>
        </Grid>
      )}

      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
      >
        <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
        <ModalContent>
          <ModalHeader fontSize="lg" fontWeight="bold">
            {" "}
            Delete photo{" "}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure? You can't undo this action afterwards.
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
            <Button
              colorScheme="red"
              onClick={(e: any) => deleteImage()}
              ml={3}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};

export default UploadPhotos;
