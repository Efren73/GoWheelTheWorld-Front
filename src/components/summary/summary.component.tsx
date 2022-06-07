import * as React from "react";
import { useRef } from "react";
import {
  Box,
  Text,
  VStack,
  Heading,
  HStack,
  Image,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import photo from "./images/photo.png";
import duration from "./images/duration.png";
import group from "./images/group.png";
import child from "./images/child.png";
import height from "./images/height.png";
import language from "./images/language.png";
import location from "./images/location.png";
import person from "./images/person.png";
import Typetour from "./images/type-of-tour.png";
import price from "./images/price.png";
import { Responsive } from "../generalTypes";
import { useAppSelector } from "../../app/hooks";
import { selectAllTours, getTourStatus } from "../../reducers/appSlice";

const Summary: React.FC = () => {
  /* REDUX ----------------------------------------- */
  const tour = useAppSelector(selectAllTours);
  const status = useAppSelector(getTourStatus);

  //console.log(status.diff)

  /* GROUP-PRIVATE --------------------------------- */
  function showGroupPrivate() {
    if (status === "succeeded") {
      if (
        tour.basicInformation.privateTour !== undefined &&
        tour.basicInformation.groupTour !== undefined
      ) {
        if (
          tour.basicInformation.privateTour === true &&
          tour.basicInformation.groupTour === true
        )
          return "Group / Private tour";
        else if (
          tour.basicInformation.privateTour === false &&
          tour.basicInformation.groupTour === true
        )
          return "Group tour";
        else if (
          tour.basicInformation.privateTour === true &&
          tour.basicInformation.groupTour === false
        )
          return "Private tour";
      } else return "Type of group";
    }
  }

  /* TOUR NAME ----------------------------- */
  function showTourName() {
    if (status === "succeeded") {
      if (tour.basicInformation.tourName !== "Experience name")
        return tour.basicInformation.tourName;
      else return "Name of the tour";
    }
  }

  const initialRef = React.useRef<any>(null);

  /* CHILD POLICY -------------------------- */
  function showChildPolicy() {
    if (status === "succeeded") {
      if(tour.childrenPolicy !== undefined) {
        if(tour.childrenPolicy.childrenAllowed === 'true') {
          return 'informacion disponible'
        } else return "Nada en children policy";
      } 
    } 
  } 

  return (
    <Box
      h={{ base: "60%", md: "100%", sm: "100%" }}
      w={{ base: "25%", md: "25%", sm: "100%" }}
      background="#1e272e"
      borderRadius="10px"
      borderColor={"black"}
      paddingBottom="20px"
    >
      <Heading
        fontSize="20px"
        paddingLeft={22}
        paddingTop={5}
        color="#fff"
        paddingBottom={2}
      >
        Summary
      </Heading>
      <VStack h="88%" padding="20px" overflowY="scroll">
        <VStack w="full" h="full" alignItems="flex-start" spacing="-0.4">
          <Box
            borderRadius="10px"
            w="98%"
            paddingLeft={"10px"}
            paddingBottom={"10px"}
            paddingRight={"10px"}
            borderBottom={"solid #89A1CD"}
            borderLeft={"solid #89A1CD"}
            borderRight={"solid #89A1CD"}
          >
            <Text
              color="#89A1CD"
              fontSize={Responsive.fontSizeResponsiveBody}
              marginLeft={"3%"}
            >
              Basic Information
            </Text>
            <Stack spacing={"1%"}>
              <HStack justifyContent="flex-start">
                <Image
                  src={photo}
                  alt="default image"
                  maxWidth={114}
                  maxH={71}
                  p={1}
                />
                <Text
                  color="#89A1CD"
                  fontSize={Responsive.fontSizeResponsiveHead}
                >
                  {status === "loading" ? (
                    <Skeleton height="20px" />
                  ) : (
                    showTourName()
                  )}
                </Text>
              </HStack>

              <HStack>
                <Image
                  src={duration}
                  alt="Duration icon"
                  w={25}
                  h={25}
                  m={0.5}
                />
                <Text color="#fff" fontSize={Responsive.fontSizeResponsiveHead}>
                  {status === "succeeded" &&
                  tour.basicInformation.duration.hours !== "" &&
                  tour.basicInformation.duration.minutes !== ""
                    ? tour.basicInformation.duration.hours +
                      ":" +
                      tour.basicInformation.duration.minutes +
                      " hours"
                    : "Duration"}
                </Text>
              </HStack>

              <HStack justifyContent="en" w="full">
                <Image
                  src={Typetour}
                  alt="Type of tour icon"
                  w={25}
                  h={25}
                  m={0.5}
                />
                <Text color="#fff" fontSize={Responsive.fontSizeResponsiveHead}>
                  {status === "succeeded" &&
                  tour.basicInformation.typeOfActivity !== undefined
                    ? tour.basicInformation.typeOfActivity + ""
                    : "Type of tour"}
                </Text>
              </HStack>

              <HStack>
                <Image src={group} alt="Group icon" w={25} h={25} m={0.5} />
                <Text color="#fff" fontSize={Responsive.fontSizeResponsiveHead}>
                  {showGroupPrivate()}
                </Text>
              </HStack>

              <HStack>
                <Image
                  src={person}
                  alt="Number of members icon"
                  w={25}
                  h={25}
                  m={0.5}
                />
                <Text color="#fff" fontSize={Responsive.fontSizeResponsiveHead}>
                  {status === "succeeded" &&
                  tour.basicInformation.numberMaxTravelers !== undefined &&
                  tour.basicInformation.numberMinTravelers !== undefined
                    ? `Min: ${tour.basicInformation.numberMinTravelers} / Max: ${tour.basicInformation.numberMaxTravelers}`
                    : "Number of traveleres"}
                </Text>
              </HStack>

              <HStack>
                <Image src={price} alt="Price icon" w={25} h={25} m={0.5} />
                <Text color="#fff" fontSize={Responsive.fontSizeResponsiveHead}>
                  {status === "succeeded" &&
                  tour.basicInformation.price !== undefined
                    ? tour.basicInformation.price
                    : "$ Price"}
                </Text>
              </HStack>
            </Stack>
          </Box>
        </VStack>

        <VStack w="full" h="full" alignItems="flex-start" spacing="-0.4">
          <Box
            borderRadius="10px"
            w="98%"
            ref={initialRef}
            marginTop={"15px"}
            paddingLeft={"10px"}
            paddingBottom={"10px"}
            paddingRight={"10px"}
            borderBottom={"solid #89A1CD"}
            borderLeft={"solid #89A1CD"}
            borderRight={"solid #89A1CD"}
          >
            <Text
              color="#89A1CD"
              fontSize={Responsive.fontSizeResponsiveHead}
              marginBottom={"3%"}
            >
              Itinerary
            </Text>
            <Stack spacing={"1%"}>
              <HStack justifyContent="en" w="full">
                <Image
                  src={location}
                  alt="Meeting point icon"
                  w={25}
                  h={25}
                  m={0.5}
                />
                <Text color="#fff" fontSize={Responsive.fontSizeResponsiveHead}>
                  {status === "succeeded" && tour.intinerary !== undefined && tour.intinerary.meetPoint !== undefined
                    ? tour.intinerary.meetPoint
                    : "Meeting point"}
                </Text>
              </HStack>

              <HStack>
                <Image
                  src={location}
                  alt="End point icon"
                  w={25}
                  h={25}
                  m={0.5}
                />
                <Text color="#fff" fontSize={Responsive.fontSizeResponsiveHead}>
                  {status === "succeeded" && tour.intinerary !== undefined && tour.intinerary.endPoint !== undefined
                    ? tour.intinerary.endPoint
                    : "End point"}
                </Text>
              </HStack>
              <HStack>
                <Image
                  src={language}
                  alt="Language icon"
                  w={25}
                  h={25}
                  m={0.5}
                />
                <Text
                  color="#fff"
                  fontSize={Responsive.fontSizeResponsiveHead}
                  w="80%"
                >
                  {status === "succeeded" && tour.intinerary !== undefined && tour.intinerary.languages !== undefined
                    ? tour.intinerary.languages + ""
                    : "Languages"}
                </Text>
              </HStack>
            </Stack>
          </Box>
        </VStack>

        <VStack w="full" h="full" alignItems="flex-start" spacing="-0.4">
          <Box
            borderRadius="10px"
            w="98%"
            marginTop={"15px"}
            paddingLeft={"10px"}
            paddingBottom={"10px"}
            paddingRight={"10px"}
            borderBottom={"solid #89A1CD"}
            borderLeft={"solid #89A1CD"}
            borderRight={"solid #89A1CD"}
          >
            <Text
              color="#89A1CD"
              fontSize={Responsive.fontSizeResponsiveHead}
              marginBottom={"3%"}
            >
              Children policy
            </Text>

            { showChildPolicy() === 'informacion disponible' ? 
              <Stack spacing={"1%"}>
                <HStack justifyContent="en" w="full">
                  <Image src={child} alt="Child icon" w={25} h={25} m={0.5} />
                  <Text color="#fff" fontSize={Responsive.fontSizeResponsiveHead}>
                    { tour.childrenPolicy.childrenAge !== undefined && tour.childrenPolicy.childrenAge === 0
                      ? "Children's allow age: Every age "
                      : "Children's allow age: " + tour.childrenPolicy.childrenAge}
                  </Text>
                </HStack>
                <HStack>
                  <Image src={price} alt="Price icon" w={25} h={25} m={0.5} />
                  <Text color="#fff" fontSize={Responsive.fontSizeResponsiveHead}>
                    { tour.childrenPolicy.childrenAgePay !== undefined && tour.childrenPolicy.childrenAgePay === 0
                      ? "Children's pay from age: Every age "
                      : "Children's pay from age: " + tour.childrenPolicy.childrenAgePay }   
                  </Text>
                </HStack>
                <HStack>
                  <Image src={height} alt="Height icon" w={25} h={25} m={0.5} />
                  <Text color="#fff" fontSize={Responsive.fontSizeResponsiveHead}>
                    { tour.childrenPolicy.childrenHeight !== undefined && tour.childrenPolicy.childrenHeight === 0
                      ? "Limit height: Any height "
                      : "Limit height: " + tour.childrenPolicy.childrenHeight } 
                  </Text>
                </HStack>
              </Stack> 
              :
              <Text color="#fff" fontSize={Responsive.fontSizeResponsiveHead}>
                Doesn't include anything in children policy
              </Text>
            } 
          </Box>
        </VStack>

        <VStack w="full" h="full" alignItems="flex-start" spacing="-0.4">
          <Box
            borderRadius="10px"
            w="98%"
            marginTop={"15px"}
            paddingLeft={"10px"}
            paddingBottom={"10px"}
            paddingRight={"10px"}
            borderBottom={"solid #89A1CD"}
            borderLeft={"solid #89A1CD"}
            borderRight={"solid #89A1CD"}
          >
            <Text color="#89A1CD" fontSize={Responsive.fontSizeResponsiveHead}>
              What's included?
            </Text>
            <Box w="98%" padding="10px">
              {status === "succeeded" && tour.whatsIncluded ? (
                tour.whatsIncluded.general.map((i: string) => (
                  <Text
                    color="#fff"
                    fontSize={Responsive.fontSizeResponsiveHead}
                  >
                    {i}
                  </Text>
                ))
              ) : (
                <Text color="#fff" fontSize={Responsive.fontSizeResponsiveHead}>
                  Doesn't include anything in general
                </Text>
              )}
            </Box>
            <Box w="98%" padding="10px">
              {status === "succeeded" && tour.whatsIncluded ? (
                tour.whatsIncluded.food.map((i: string) => (
                  <Text
                    color="#fff"
                    fontSize={Responsive.fontSizeResponsiveHead}
                  >
                    {i}
                  </Text>
                ))
              ) : (
                <Text color="#fff" fontSize={Responsive.fontSizeResponsiveHead}>
                  Doesn't include anything in food
                </Text>
              )}
            </Box>
            <Box w="98%" padding="10px">
              {status === "succeeded" && tour.whatsIncluded ? (
                tour.whatsIncluded.transport.map((i: string) => (
                  <Text
                    color="#fff"
                    fontSize={Responsive.fontSizeResponsiveHead}
                  >
                    {i}
                  </Text>
                ))
              ) : (
                <Text color="#fff" fontSize={Responsive.fontSizeResponsiveHead}>
                  Doesn't include anything in transport
                </Text>
              )}
            </Box>
            <Box w="98%" padding="10px">
              {status === "succeeded" && tour.whatsIncluded ? (
                tour.whatsIncluded.accessibility.map((i: string) => (
                  <Text
                    color="#fff"
                    fontSize={Responsive.fontSizeResponsiveHead}
                  >
                    {i}
                  </Text>
                ))
              ) : (
                <Text color="#fff" fontSize={Responsive.fontSizeResponsiveHead}>
                  Doesn't include anything in accessibility
                </Text>
              )}
            </Box>
          </Box>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Summary;
