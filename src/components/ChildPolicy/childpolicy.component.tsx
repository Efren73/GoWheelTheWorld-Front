import * as React from "react";
import { useEffect } from "react";
import {
  Text,
  HStack,
  Heading,
  Stack,
  Grid,
  GridItem,
  RadioGroup,
  Radio,
  Box,
  Center,
  NumberInput,
  NumberInputField,
  Skeleton,
} from "@chakra-ui/react";
import { Responsive } from "../generalTypes";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  fetchTours,
  selectAllTours,
  getTourStatus,
  changeState,
  changeAreaEdited,
} from "../../reducers/appSlice";

const ChildPolicy: React.FC = () => {
  /* CONTROL DE INPUTS -------------------------------------------- */
  const [valueAge, setValueAge] = React.useState(0);
  const [valuePay, setValuePay] = React.useState(0);
  const [valueH, setValueH] = React.useState(0);

  let inputAge: any;
  let handleInputAge = (e: any) => {
    inputAge = +e;
    //console.log('age ----->', inputAge)
    setValueAge(inputAge);
  };

  let inputPay: any;
  let handleInputPay = (e: any) => {
    inputPay = +e;
    //console.log('pay ----->', inputPay)
    setValuePay(inputPay);
  };

  let inputH: any;
  let handleInputH = (e: any) => {
    inputH = +e;
    //console.log('height ----->', inputH)
    setValueH(inputH);
  };

  /* REDUX -------------------------------------------------------- */
  const dispatch = useAppDispatch();
  const tour = useAppSelector(selectAllTours);
  const status = useAppSelector(getTourStatus);

  useEffect(() => {
    dispatch(fetchTours());
    dispatch(changeAreaEdited('CHILDREN'))
  }, []);

  useEffect(() => {
    if (status === "succeeded") {
      if (tour.childrenPolicy !== undefined) {
        setValueQ1(tour.childrenPolicy.childrenAllowed.toString());

        if(tour.childrenPolicy.childrenAllowed !== undefined && tour.childrenPolicy.childrenAllowed.toString() === 'true') {
          if (!tour.childrenPolicy.childrenAge || tour.childrenPolicy.childrenAge === 0) {
            setValueQ2("yes"); 
          } else { 
            setValueQ2("no");
            setValueAge(tour.childrenPolicy.childrenAge);
          }

          if (!tour.childrenPolicy.childrenAgePay || tour.childrenPolicy.childrenAgePay === 0) setValueQ3("yes"); 
          else { 
            setValueQ3("no");
            setValuePay(tour.childrenPolicy.childrenAgePay);
          }

          if (!tour.childrenPolicy.childrenHeight || tour.childrenPolicy.childrenHeight === 0) setValueQ4("yes");
          else { 
            setValueQ4("no");
            setValueH(tour.childrenPolicy.childrenHeight);
          }
        }
      }
    }
  }, [status]);

  const [valueQ1, setValueQ1] = React.useState("");
  const [valueQ2, setValueQ2] = React.useState("");
  const [valueQ3, setValueQ3] = React.useState("");
  const [valueQ4, setValueQ4] = React.useState("");

  useEffect(() => {
    if (valueQ1 === "true") {
      dispatch(
        changeState({
          childrenPolicy: {
            ...tour.childrenPolicy,
            childrenAllowed: valueQ1,
            childrenAgePay: valuePay,
            childrenAge: valueAge,
            childrenHeight: valueH,
          },
        })
      );
    } else {
      dispatch(
        changeState({
          childrenPolicy: {
            childrenAllowed: valueQ1,
          },
        })
      );
    }
  }, [valueQ1, valueAge, valueH, valuePay]);

  const colSpan = { base: 2, md: 1 };

  console.log('valueQ1----->', valueQ1)
  console.log('valueQ2----->', valueQ2)
  console.log('valueQ3----->', valueQ3)
  console.log('valueQ4----->', valueQ4)
  console.log(valueAge)

  const addQuestionAnswer = (answer: string, numero: number | undefined, input: number) => {
    if (answer === "no") {
      if (input === 1) {
        return (
          <NumberInput
            variant={numero ? "filled" : "outline"}
            bg={numero ? "#F8F9F9" : "#fff"}
            borderRadius={5}
            width="55%"
            value={numero}
            onChange={handleInputAge}
          >
            <NumberInputField placeholder={"Number"} />
          </NumberInput>
        );
      }
      else if (input === 2) {
        return (
          <NumberInput
            variant={numero ? "filled" : "outline"}
            bg={numero ? "#F8F9F9" : "#fff"}
            borderRadius={5}
            width="55%"
            value={numero}
            onChange={handleInputPay}
          >
            <NumberInputField placeholder={"Number"} />
          </NumberInput>
        );
      }
      else if (input === 3) {
        return (
          <NumberInput
            variant={numero ? "filled" : "outline"}
            bg={numero ? "#F8F9F9" : "#fff"}
            borderRadius={5}
            width="55%"
            value={numero}
            onChange={handleInputH}
          >
            <NumberInputField placeholder={"Number"} />
          </NumberInput>
        );
      }
    }
  };

  function addAnswer(RadioB: string) {
    if (RadioB === "true")
      return (
        <Stack w="full" p={5}>
          <Grid column={2} columnGap={3} rowGap={6} w="full">
            <GridItem colSpan={2}>
              <Heading fontSize={Responsive.fontSizeResponsiveHead}>
                Additional questions
              </Heading>
            </GridItem>

            <GridItem colSpan={colSpan}>
              <Text fontSize={Responsive.fontSizeResponsiveHead}>
                From what age are children allowed?
              </Text>
            </GridItem>

            <GridItem colSpan={colSpan}>
              <RadioGroup onChange={setValueQ2} value={valueQ2}>
                <Stack direction="row">
                  <Radio bg="white" value="yes" size="md">
                    Every age
                  </Radio>
                  <Radio bg="white" value="no" size="md">
                    Other
                  </Radio>
                </Stack>
              </RadioGroup>
              {addQuestionAnswer(valueQ2, valueAge, 1)}
            </GridItem>

            <GridItem colSpan={colSpan}>
              <Text fontSize={Responsive.fontSizeResponsiveHead}>
                From what age does children pay for the tour/activity
              </Text>
            </GridItem>

            <GridItem colSpan={colSpan}>
              <RadioGroup onChange={setValueQ3} value={valueQ3}>
                <Stack direction="row">
                  <Radio bg="white" value="yes" size={"md"}>
                    Every age
                  </Radio>
                  <Radio bg="white" value="no" size="md">
                    Other
                  </Radio>
                </Stack>
              </RadioGroup>
              {addQuestionAnswer(valueQ3, valuePay, 2)}
            </GridItem>

            <GridItem colSpan={colSpan}>
              <Text fontSize={Responsive.fontSizeResponsiveHead}>
                Is there height limit to this tour/activity?
              </Text>
            </GridItem>

            <GridItem colSpan={colSpan}>
              <RadioGroup onChange={setValueQ4} value={valueQ4}>
                <Stack direction="row">
                  <Radio bg="white" value="yes" size="md">
                    Any height
                  </Radio>
                  <Radio bg="white" value="no" size="md">
                    Other
                  </Radio>
                </Stack>
              </RadioGroup>
              {addQuestionAnswer(valueQ4, valueH, 3)}
            </GridItem>
          </Grid>
        </Stack>
      );
    else if (RadioB === "false")
      return (
        <Center h="full" color="black" w="full">
          <Text fontSize={Responsive.fontSizeResponsiveHead} color="#black">
            That's all from this part!
          </Text>
        </Center>
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
          <Stack spacing={2}>
            <Text fontSize={Responsive.fontSizeResponsiveHead} color="#3F6FE4">
              Children Policy
            </Text>
            <Heading fontSize={Responsive.fontSizeResponsiveHead}>
              Tell us about children policy
            </Heading>

            <HStack w="full">
              <Text fontSize={Responsive.fontSizeResponsiveHead}>
                Are children allowed in this tour?
              </Text>
              <RadioGroup
                onChange={setValueQ1}
                value={valueQ1}
                defaultValue={valueQ1}
              >
                <Stack direction="row">
                  <Radio bg="white" value="true" size="lg">
                    Yes
                  </Radio>
                  <Radio bg="white" value="false" size="lg">
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
            </HStack>

            <HStack>{addAnswer(valueQ1)}</HStack>
          </Stack>
        </Box>
      ) : (
        <Skeleton w="65%" h="75%" p={10} borderRadius="10px" />
      )}
    </React.Fragment>
  );
};

export default ChildPolicy;
