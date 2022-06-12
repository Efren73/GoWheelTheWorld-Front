import * as React from "react";
import {
  Text,
  Heading,
  Stack,
  SimpleGrid,
  useCheckbox,
  chakra,
  Box,
  Skeleton,
} from "@chakra-ui/react";

import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Responsive } from "../generalTypes";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  fetchTours,
  selectAllTours,
  getTourStatus,
  changeState,
  changeAreaEdited
} from "../../reducers/appSlice";

let name: string;

function CustomCheckbox(props: any) {
  const { getCheckboxProps, getInputProps, getLabelProps } = useCheckbox(props);
  //console.log('HIJO ', props)
  let backgroundValue: string;
  let colorValue: string;

  if (props.isChecked === true) {
    backgroundValue = "#3F6FE4";
    colorValue = "#fff";
  } else {
    backgroundValue = "#fff";
    colorValue = "#000";
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
      <input {...getInputProps()} hidden />
      <Text {...getLabelProps()}>{props.value}</Text>
    </chakra.label>
  );
}

const WhatsIncluded: React.FC = () => {
  const location = useLocation();
  const link: string[] = location.pathname.split("/");
  const route: string = link[link.length - 1];

  const dispatch = useAppDispatch();
  const tour = useAppSelector(selectAllTours);
  const status = useAppSelector(getTourStatus);

  useEffect(() => {
    dispatch(fetchTours());
    dispatch(changeAreaEdited('WHATS_INCLUDED'));
  }, []);

  // Arreglo de strings para guardar los checkboxes seleccionados
  const [checkedItemsGeneral, setCheckedItems1] = useState<string[]>([]);
  const [checkedItemsFood, setCheckedItems2] = useState<string[]>([]);
  const [checkedItemsTransport, setCheckedItems3] = useState<string[]>([]);
  const [checkedItemsAccessibility, setCheckedItems4] = useState<string[]>([]);

  let principal: any;

  const included: string[] = [];
  if (route === "whats-included-general") {
    included.push(
      "Admission / ticket",
      "Park entrance",
      "Audio guides",
      "Tour Guides",
      "Insurance",
      "Gratuities",
      "Tourist city taxes"
    );
    principal = checkedItemsGeneral;
    name = "General";
  } else if (route === "whats-included-food") {
    included.push(
      "Snacks",
      "Alcoholic beverages",
      "Breakfast",
      "Soft Drinks",
      "Lunch",
      "Dinner"
    );
    principal = checkedItemsFood;
    name = "Food";
  } else if (route === "whats-included-transport") {
    included.push(
      "Gound transportation",
      "Accessible transportation",
      "Professional driver",
      "Parking"
    );
    principal = checkedItemsTransport;
    name = "Transport";
  } else if (route === "whats-included-accessibility") {
    included.push("Instructors", "Equipment rental", "Assistants");
    principal = checkedItemsAccessibility;
    name = "Accessibility";
  }

  const handleCheckedItems = (includesName: string, checkea: boolean) => {
    // Agregando el nombre de la experiencia que se selccionó en el hijo CustomCheckbox
    if (route === "whats-included-general") {
      if (checkea === false) {
        setCheckedItems1([...checkedItemsGeneral, includesName]);
      } else {
        // filter regresa una copia del arreglo original, pero ahora sin el expereinceName que indique
        const result = checkedItemsGeneral.filter(
          (checkedItemsGeneral) => checkedItemsGeneral !== includesName
        );
        // actualizamos al arreglo original checkedItems con el arreglo de filter
        setCheckedItems1(result);
      }
    } else if (route === "whats-included-food") {
      if (checkea === false) {
        setCheckedItems2([...checkedItemsFood, includesName]);
      } else {
        // filter regresa una copia del arreglo original, pero ahora sin el expereinceName que indique
        const result = checkedItemsFood.filter(
          (checkedItemsFood) => checkedItemsFood !== includesName
        );
        // actualizamos al arreglo original checkedItems con el arreglo de filter
        setCheckedItems2(result);
      }
    } else if (route === "whats-included-transport") {
      if (checkea === false) {
        setCheckedItems3([...checkedItemsTransport, includesName]);
      } else {
        // filter regresa una copia del arreglo original, pero ahora sin el expereinceName que indique
        const result = checkedItemsTransport.filter(
          (checkedItemsTransport) => checkedItemsTransport !== includesName
        );
        // actualizamos al arreglo original checkedItems con el arreglo de filter
        setCheckedItems3(result);
      }
    } else if (route === "whats-included-accessibility") {
      if (checkea === false) {
        setCheckedItems4([...checkedItemsAccessibility, includesName]);
      } else {
        // filter regresa una copia del arreglo original, pero ahora sin el expereinceName que indique
        const result = checkedItemsAccessibility.filter(
          (checkedItemsAccessibility) =>
            checkedItemsAccessibility !== includesName
        );
        // actualizamos al arreglo original checkedItems con el arreglo de filter
        setCheckedItems4(result);
      }
    }
  };

  useEffect(() => {
    if (status === "succeeded") {
      if (tour.whatsIncluded !== undefined) {
        setCheckedItems1(tour.whatsIncluded.general);
        setCheckedItems2(tour.whatsIncluded.food);
        setCheckedItems3(tour.whatsIncluded.transport);
        setCheckedItems4(tour.whatsIncluded.accessibility);
      }
    }
  }, [status]);

  useEffect(() => {
    dispatch(
      changeState({
        whatsIncluded: {
          ...tour.whatsIncluded,
          general: checkedItemsGeneral,
          food: checkedItemsFood,
          transport: checkedItemsTransport,
          accessibility: checkedItemsAccessibility,
        },
      })
    );
  }, [
    checkedItemsGeneral,
    checkedItemsFood,
    checkedItemsTransport,
    checkedItemsAccessibility,
  ]);

  console.log("General", checkedItemsGeneral);
  console.log("Food", checkedItemsFood);
  console.log("transport", checkedItemsTransport);
  console.log("Accesibility", checkedItemsAccessibility);

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
              What's included {"/ " + name}
            </Text>
            <Heading fontSize={Responsive.fontSizeResponsiveBody}>
              {" "}
              Select what's included with your tour{" "}
            </Heading>
          </Stack>

          <SimpleGrid
            h="80%"
            columns={[1, 1, 2, 2, 3]}
            spacing={15}
            paddingTop="30px"
            alignSelf={"center"}
            fontSize={Responsive.fontSizeResponsiveHead}
          >
            {included.map((includes: string) => (
              <React.Fragment>
                {principal.includes(includes) ? (
                  <CustomCheckbox
                    // Llamando a función hijo CustomCheckbox, se le pasa el arreglo de experiences
                    {...{
                      value: `${includes}`,
                      ruta: `${route}`,
                      isChecked: true,
                    }}
                    // Función que en el Padre se llama handleCheckedItems, se pasa como onChange
                    onChange={() => handleCheckedItems(includes, true)}
                  />
                ) : (
                  <CustomCheckbox
                    // Llamando a función hijo CustomCheckbox, se le pasa el arreglo de experiences
                    {...{
                      value: `${includes}`,
                      ruta: `${route}`,
                      isChecked: false,
                    }}
                    // Función que en el Padre se llama handleCheckedItems, se pasa como onChange
                    onChange={() => handleCheckedItems(includes, false)}
                  />
                )}
              </React.Fragment>
            ))}
          </SimpleGrid>
        </Box>
      ) : (
        <Skeleton w="62%" h="75%" p={10} borderRadius="10px" />
      )}
    </React.Fragment>
  );
};

export default WhatsIncluded;
