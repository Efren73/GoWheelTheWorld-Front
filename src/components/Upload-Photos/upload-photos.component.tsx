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
  IconButton
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  changeState,
  selectAllTours,
  getTourStatus,
  fetchTours,
  changeAreaEdited,
} from "../../reducers/appSlice";


import { CloseIcon } from '@chakra-ui/icons'
import "./upload-photos.modules.css";
import { Responsive } from "../generalTypes";
import { storage } from "../../firebase/index";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useLocation } from "react-router-dom";
import { async } from "@firebase/util";

/* CMANEJAR ESTATUS (loading, succeeded, idle' ) ----------- */

const UploadPhotos: React.FC = () => {
  const location = useLocation();
  const tour = useAppSelector(selectAllTours);
  const status = useAppSelector(getTourStatus);


  const dispatch = useAppDispatch();
  const link: string[] = location.pathname.split("/");
  const idTourOperator: string = link[link.length - 2];

  let temp: any;

  const [file, setFile] = React.useState(temp);
  const [percent, setPercent] = useState(0);
  const [url, setUrl] = useState("");
  const [urlTemp, setUrlTemp]= useState([""])

  //GET DATA FROM BD
  useEffect(() => {
    dispatch(fetchTours());
    dispatch(changeAreaEdited('BASIC_INFORMATION'))
  }, []);

  //SAVE DATA IN LOCAL HOOK
  useEffect(() => {
    if (status === "succeeded"){
      if(tour.photos != undefined && tour.photos != [""])
        setUrlTemp(tour.photos)
    }
  }, [status]);

  useEffect(() => {
    setUrlTemp([...urlTemp,url])
  }, [url]);

  useEffect(() => {
    dispatch(
      changeState({
        photos: urlTemp
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
  
  function deleteImage(index:any): any {
      const result = urlTemp.filter(link => link !== urlTemp[index]);
      setUrlTemp(result);
      console.log(urlTemp)
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
              <Text
                fontSize={Responsive.fontSizeResponsiveHead}
                color="#3F6FE4"
              >
                Basic Information / Upload Photos
              </Text>

              <Heading fontSize={Responsive.fontSizeResponsiveBody}>
                Send us the best photos of your tour
              </Heading>

          <Box width="40%">
              {
                  urlTemp != undefined ?urlTemp.map((value, index)=>
                    (
                      <HStack m={5} justifyContent="space-between" bg={"#f5f6fa"}>
                        <Image src={value} borderRadius={10} shadow={"md"} w={"80px"} h={"80px"} />
                        <Text>Imagen {index+1} </Text>
                        <IconButton aria-label='Search database' onClick={()=>{deleteImage(index)}} icon={<CloseIcon />} />
                      </HStack>
                    )
                  ): null
              }
          </Box>

            <Box marginTop={10} width="100%">
              <Stack margin="10px">
                <Stack
                  direction={["column", "column", "row", "row"]}
                  w={["70%", "70%", "90%", "90%"]}
                  >
                <input type="file" onChange={handleChange} accept="" />
                </Stack>
                <Button
                  w={20}
                  marginTop="50px"
                  onClick={handleUpload}
                >
                  SAVE
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Box>
      ) : (
        <Skeleton w="65%" h="75%" p={10} borderRadius="10px" />
      )}
    </React.Fragment>
  );
};

export default UploadPhotos;
