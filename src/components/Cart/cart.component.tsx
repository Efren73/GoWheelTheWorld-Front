import * as React from "react";
import { useState, useEffect } from "react";
import {
  Text,
  VStack,
  Input,
  Heading,
  HStack,
  IconButton,
  Box,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Skeleton,
  Tooltip,
  Grid,
  Image,
  toast,
  useToast,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import sillaDeRuedas from "../../pages/mainScreenTO/sillaDeRuedas.png";
import {
  fetchTours,
  changeState,
  selectAllTours,
  getTourStatus,
  changeAreaEdited,
} from "../../reducers/appSlice";
import { Responsive, ToastWarning } from "../generalTypes";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const tour = useAppSelector(selectAllTours);
  const status = useAppSelector(getTourStatus);

  /* NÚMERO DE CARÁCTERES ------------------------------*/
  let [value, setValue] = useState("");
  let [characters, setCharacters] = useState(0);
  let inputValue: any;

  //console.log("Tour Complete:",Object.values(tour),"BI:",Object.values(tour.accessibility.assistance))

  /* TIEMPO DEL TOUR --------------------------------- */
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);

  let handleInputChange = (e: any) => {
    inputValue = e.target.value;
    if (inputValue.length <= 50) {
      setValue(inputValue);
      setCharacters(inputValue.length);
    }
  };

  useEffect(() => {
    dispatch(fetchTours());
    dispatch(changeAreaEdited('BASIC_INFORMATION'))
  }, []);

  useEffect(() => {
    dispatch(
      changeState({
        basicInformation: {
          ...tour.basicInformation,
          tourName: value,
          duration: { hours: hours, minutes: minutes },
        },
      })
    );
  }, [value, hours, minutes]);

  useEffect(() => {
    if (status === "succeeded") {
      if (tour.basicInformation !== undefined) {
        setValue(tour.basicInformation.tourName);
        setHours(tour.basicInformation.duration.hours);
        setMinutes(tour.basicInformation.duration.minutes);
      }
    }
  }, [status]);
  
  const toast = useToast();

  function ToastWarning() {
    toast({
      title: "Out of range!",
      description: "The value is out of range.",
      status: "warning",
      duration: 4000,
      isClosable: true,
    });
  }

  if( hours>10 || minutes > 59) {
    ToastWarning();
  } 

  /* VENTANA MODAL -------------------------------------*/
  const { isOpen, onOpen, onClose } = useDisclosure();

  //Arreglo en donde se guardan los ejemplos de faqs
  const faqsExamples: string[] = [
    "Downtown Manhattan Private Guided Tour",
    "Boat Tour in Manhattan",
    "DUMBO Tour, The New Brooklyn",
    "Snorkel with whale sharks",
    "Río Secreto Wet Cave",
    "Accessible Airport Transportation - El Cairo",
  ];
  //console.log("Prueba1 ->", Object.values(tour.basicInformation))
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
            <Text fontSize={Responsive.fontSizeResponsiveHead} color="#3F6FE4">
              Basic Information / Name of the tour
            </Text>
            <HStack w="full">
              <Heading fontSize={Responsive.fontSizeResponsiveBody}>
                Give your experience a name
              </Heading>
              <Tooltip bg='#EBE9E9' color='black' placement='top' label=
              "Choose a unique and descriptive name for your tour to offer">
                <IconButton
                  variant="outline"
                  aria-label="Info"
                  icon={<InfoIcon w={6} h={6} />}
                />
              </Tooltip>
            </HStack>
            <Text
              fontSize={Responsive.fontSizeResponsiveHead}
              paddingBottom="20px"
            >
              Make sure it's descriptive and unique so travelers know what you
              offer
            </Text>
            <Box w="full">
              <Input
                variant={value ? "filled" : "outline"}
                h="40px"
                fontSize={Responsive.fontSizeResponsiveHead}
                isRequired = {true}
                maxLength={80}
                placeholder="Experience name"
                onChange={handleInputChange}
                value={value}
              />

              <HStack
                justifyContent="space-between"
                color="#2F6FE4"
                paddingBottom="20px"
              >
                <Text fontSize={Responsive.fontSizeResponsiveHead}>
                  {value ? value.length : 0}/50
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
            </Box>
            <Box w="full" paddingBottom="20px">
              <Heading fontSize={Responsive.fontSizeResponsiveHead}>
                Trip duration
              </Heading>
            </Box>
            <Box>
              <Stack
                shouldWrapChildren
                direction={["column", "column", "column", "row"]}
              >
                <Text
                  fontSize={Responsive.fontSizeResponsiveHead}
                  color="#595959"
                  paddingBottom="20px"
                >
                  Hours
                </Text>
                <NumberInput
                  variant={hours ? "filled" : "outline"}
                  bg={hours ? "#F8F9F9" : "#fff"}
                  marginRight={"40px"}
                  size="md"
                  maxW={80}
                  min={0}
                  max={10}
                  h="40px"
                  fontSize={"20px"}
                  defaultValue={0}
                  value={hours >= 0 ? hours : 0}
                  borderRadius="10px"
                  onChange={(valueString: any) => {
                    Number.isInteger(Number(value)) == true ?  setHours(valueString) : setHours(Math.round(valueString)) 
                  }}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper
                      color="white"
                      bg="#2F6FE4"
                      _active={{ bg: "#2558B6" }}
                      children="+"
                    />
                    <NumberDecrementStepper
                      color="white"
                      bg="#2F6FE4"
                      _active={{ bg: "#2558B6" }}
                      children="-"
                    />
                  </NumberInputStepper>
                </NumberInput>

                <Text
                  fontSize={Responsive.fontSizeResponsiveHead}
                  color="#595959"
                  paddingBottom="20px"
                >
                  Minutes
                </Text>
                <NumberInput
                  variant={minutes ? "filled" : "outline"}
                  bg={minutes ? "#F8F9F9" : "#fff"}
                  marginRight={"40px"}
                  size="md"
                  maxW={80}
                  min={hours > 0 ? 0 : 30}
                  max={59}
                  h="40px"
                  fontSize={Responsive.fontSizeResponsiveHead}
                  defaultValue={0}
                  value={minutes >= 0 ? minutes : 0}
                  borderRadius="10px"
                  onChange={(value: any) => {
                    setMinutes(value);
                  }}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper
                      color="white"
                      bg="#2F6FE4"
                      _active={{ bg: "#2558B6" }}
                      children="+"
                    />
                    <NumberDecrementStepper
                      color="white"
                      bg="#2F6FE4"
                      _active={{ bg: "#2558B6" }}
                      children="-"
                    />
                  </NumberInputStepper>
                </NumberInput>
              </Stack>
            </Box>
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

      <Modal
        onClose={onClose}
        size="xl"
        isOpen={isOpen}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent background="#EBE9E9">
          <ModalHeader color="#3F6FE4">Examples</ModalHeader>
          <ModalBody>
            {faqsExamples.map((faq) => (
              <Stack marginBottom="10px">
                <Text fontSize="16px">{faq}</Text>
              </Stack>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} background="#3F6FE4" color={"white"}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </React.Fragment>
  );
};

export default Cart;
