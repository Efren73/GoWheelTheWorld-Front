import * as React from "react";
import { useState, useEffect } from "react";
import {
  Text,
  HStack,
  Box,
  Button,
  Stack,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Link,
  Heading,
  Skeleton,
  Input,
  Image,
  Grid,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Responsive } from "../generalTypes";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import sillaDeRuedas from "../../pages/mainScreenTO/sillaDeRuedas.png";
import {
  fetchTours,
  selectAllTours,
  getTourStatus,
  changeState,
  changeAreaEdited,
} from "../../reducers/appSlice";

const Description: React.FC = () => {
  /* NÚMERO DE CARÁCTERES Y CONTROL DESCRIPTION --- */
  let [value, setValue] = useState("");
  let [characters, setCharacters] = useState(0);
  let inputValue: any;

  let handleInputChange = (e: any) => {
    inputValue = e.target.value;

    if (inputValue.length <= 1600) {
      setValue(inputValue);
      setCharacters(inputValue.length);
    }
  };

  /* CONTROL INPUT LINK ---------------------------- */
  let [value1, setValue1] = useState("");
  let inputValue1: any;

  let handleInputLink = (e: any) => {
    inputValue1 = e.target.value;
    setValue1(inputValue1);
  };

  /* REDUX ----------------------------------------- */
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
        setValue(tour.basicInformation.description);
        setValue1(tour.basicInformation.link);
      }
    }
  }, [status]);

  /* update --------- */
  useEffect(() => {
    dispatch(
      changeState({
        basicInformation: {
          ...tour.basicInformation,
          description: value,
          link: value1,
        },
      })
    );
  }, [value, value1]);

  /* VENTANA MODAL -------------------------------- */
  const { isOpen, onOpen, onClose } = useDisclosure();

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
              Basic Information / Description
            </Text>
            <Heading fontSize={Responsive.fontSizeResponsiveBody}>
              Please share the link to your website or any another platform
              where the tour/activity is displayed
            </Heading>
            <Input
              variant={value ? "filled" : "outline"}
              placeholder="Link"
              onChange={handleInputLink}
              value={value1}
              fontSize={Responsive.fontSizeResponsiveHead}
            />
            <Stack paddingTop="20px">
              <Heading fontSize={Responsive.fontSizeResponsiveBody}>
                Description of the tour / activity
              </Heading>
              <Textarea
                variant={value ? "filled" : "outline"}
                h="500px"
                placeholder="Description of the tour"
                onChange={handleInputChange}
                value={value}
                fontSize={Responsive.fontSizeResponsiveHead}
              />
            </Stack>
            <HStack justifyContent="space-between" color="#2F6FE4">
              <Text fontSize={Responsive.fontSizeResponsiveHead}>
                {value ? value.length : 0}/1600
              </Text>
              <Button variant="link" onClick={onOpen}>
                <Text
                  color="#2F6FE4"
                  as="u"
                  fontSize={Responsive.fontSizeResponsiveHead}
                >
                  Show examples
                </Text>
              </Button>
            </HStack>
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

      <Modal
        onClose={onClose}
        size="xl"
        isOpen={isOpen}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent background="#EBE9E9">
          <ModalHeader
            color="#3F6FE4"
            fontSize={Responsive.fontSizeResponsiveHead}
          >
            Examples
          </ModalHeader>
          <ModalBody justifySelf={'flex-start'}>
            <Link
              href="https://wheeltheworld.com/destinations/accessible-travel-usa/new-york/things-to-do/downtown-manhattan-private-guided-tour"
              isExternal
              fontSize={Responsive.fontSizeResponsiveHead}
            >
              Downtown Manhattan Private Guided Tour <ExternalLinkIcon mx="2px" color="#3F6FE4" />
            </Link>
            <br/>
            <Link
              href="https://wheeltheworld.com/destinations/accessible-travel-mexico/playa-del-carmen/things-to-do/rio-secreto-dry-tour"
              isExternal
              fontSize={Responsive.fontSizeResponsiveHead}
            >
              Rio Secreto Dry Tour <ExternalLinkIcon mx="2px" color="#3F6FE4" />
            </Link>
            <br/>
            <Link
              href="https://wheeltheworld.com/destinations/accessible-travel-usa/maui/things-to-do/whale-watching-tour"
              isExternal
              fontSize={Responsive.fontSizeResponsiveHead}
            >
              Whale Watching Tour - Maui <ExternalLinkIcon mx="2px" color="#3F6FE4" />
            </Link>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={onClose}
              background="#3F6FE4"
              color={"white"}
              fontSize={Responsive.fontSizeResponsiveHead}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};
export default Description;
