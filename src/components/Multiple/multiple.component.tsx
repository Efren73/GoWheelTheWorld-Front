import * as React from "react";
import { useState, useEffect } from "react";
import {
  SimpleGrid,
  Stack,
  Text,
  Box,
  chakra,
  useCheckbox,
  Heading,
  Input,
  Skeleton,
} from "@chakra-ui/react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  fetchTours,
  selectAllTours,
  getTourStatus,
  changeState,
} from "../../reducers/appSlice";
import { Responsive } from "../generalTypes";

function CustomCheckbox(props: any) {
  const { state, getCheckboxProps, getInputProps, getLabelProps } =
    useCheckbox(props);
  let backgroundValue: string;
  let colorValue: string;

  if (props.isChecked === false) {
    backgroundValue = "#fff";
    colorValue = "#000";
  } else {
    backgroundValue = "#3F6FE4";
    colorValue = "#fff";
  }

  return (
    <chakra.label
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="200px"
      h="48px"
      bg={backgroundValue}
      border="1px solid"
      borderColor="#3F6FE4"
      color={colorValue}
      rounded="lg"
      cursor="pointer"
      {...getCheckboxProps()}
    >
      <Input {...getInputProps()} hidden />
      <Text {...getLabelProps()}>{props.value}</Text>
    </chakra.label>
  );
}

const Multiple = () => {
  /* LÓGICA ------------------------------------ */
  const [checkedItems, setCheckedItems] = useState<string[]>(
    []
  ); /* arreglo con checkboxes seleccionados ---- */

  let seleccionado: any;
  const experiences: string[] = [
    "Outdoor activity",
    "Hiking activity",
    "Snow activity",
    "Water activity",
    "Air activity",
    "Sports activity",
    "Ticket activity",
    "Attraction",
    "City tour",
    "Food tour",
    "Driving tour",
    "Riding tour",
    "Boat tour",
    "Air tour",
  ];
  seleccionado = checkedItems;

  const handleCheckedItems = (expereinceName: string, checkea: boolean) => {
    /* agregando el nombre de la experiencia que se seleccionó en el hijo CustomCheckbox */
    if (checkea === false) {
      setCheckedItems([...checkedItems, expereinceName]);
    } else {
      /* filter regresa una copia del arreglo original, pero ahora sin el expereinceName que indique */
      const result = checkedItems.filter(
        (checkedItems) => checkedItems != expereinceName
      );
      /* actualizamos al arreglo original checkedItems con el arreglo de filter */
      setCheckedItems(result);
    }
  };

  /* REDUX ----------------------------------- */
  const dispatch = useAppDispatch();
  const tour = useAppSelector(selectAllTours);
  const status = useAppSelector(getTourStatus);

  /* get --------- */
  useEffect(() => {
    dispatch(fetchTours());
  }, []);

  useEffect(() => {
    if (status === "succeeded") {
      if (
        tour.basicInformation != undefined &&
        tour.basicInformation.typeOfActivity != undefined
      ) {
        setCheckedItems(tour.basicInformation.typeOfActivity);
      }
    }
  }, [status]);

  /* update --------- */
  useEffect(() => {
    dispatch(
      changeState({
        basicInformation: {
          ...tour.basicInformation,
          typeOfActivity: checkedItems,
        },
      })
    );
  }, [checkedItems]);

  return (
    <React.Fragment>
      {status === "succeeded" ?
          (
            <Box boxShadow="md" w="65%" p={10} background="#F8F9F9" borderRadius="10px">
              <Stack spacing={2}>
                <Text fontSize={Responsive.fontSizeResponsiveHead} color="#3F6FE4">
                  Basic Information / Type of tour
                </Text>
                <Heading fontSize={Responsive.fontSizeResponsiveBody}>
                  What kind of experience would you like to offer?
                </Heading>
              </Stack>

              <SimpleGrid
                columns={[1, 1, 2, 2, 3]}
                spacing={15}
                paddingTop="25px"
                h="full"
                fontSize={Responsive.fontSizeResponsiveHead}
              >
                {experiences.map((experience: string) => (
                  <React.Fragment>
                    {seleccionado.includes(experience) ? (
                      <CustomCheckbox
                        /* llamando a función hijo CustomCheckbox, se le pasa el arreglo de experiences */
                        {...{ value: `${experience}`, isChecked: true }}
                        /* función que en el Padre se llama handleCheckedItems, se pasa como onChange */
                        onChange={() => handleCheckedItems(experience, true)}
                      />
                    ) : (
                      <CustomCheckbox
                        {...{ value: `${experience}`, isChecked: false }}
                        onChange={() => handleCheckedItems(experience, false)}
                      />
                    )}
                  </React.Fragment>
                ))}
              </SimpleGrid>
            </Box>
          )
          :
          (
            <Skeleton w="65%" h="75%" p={10} borderRadius="10px" />
          )
      }
    </React.Fragment>
  );
};

export default Multiple;
