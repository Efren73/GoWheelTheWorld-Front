import * as React from "react";
import {
  Text,
  Stack,
  SimpleGrid,
  Box,
  useCheckbox,
  chakra,
  Heading,
  Skeleton,
} from "@chakra-ui/react";
import { Responsive } from "../generalTypes";
import { useState, useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  fetchTours,
  selectAllTours,
  getTourStatus,
  changeState,
  changeAreaEdited,
} from "../../reducers/appSlice";

function CustomCheckbox(props: any) {
  const { getCheckboxProps, getInputProps, getLabelProps } = useCheckbox(props);

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

const Languages: React.FC = () => {
  const dispatch = useAppDispatch();
  const tour = useAppSelector(selectAllTours);
  const status = useAppSelector(getTourStatus);

  useEffect(() => {
    dispatch(fetchTours());
    dispatch(changeAreaEdited('ITINERARY'))
  }, []);

  // Arreglo de strings para guardar los checkboxes seleccionados
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const languages: string[] = [
    "English",
    "Spanish",
    "French",
    "German",
    "Italian",
    "Portuguese",
    "Russian",
    "Mandarin",
    "Japanese",
  ];

  const handleCheckedItems = (languageName: string, checkea: boolean) => {
    // Agregando el nombre de el lenguaje que se selccionó en el hijo CustomCheckbox
    if (checkea === false) {
      setCheckedItems([...checkedItems, languageName]);
    } else {
      // filter regresa una copia del arreglo original, pero ahora sin el languageName que indique
      const result = checkedItems.filter(
        (checkedItems) => checkedItems !== languageName
      );
      // actualizamos al arreglo original checkedItems con el arreglo de filter
      setCheckedItems(result);
    }
  };

  console.log(checkedItems);

  useEffect(() => {
    dispatch(
      changeState({
        intinerary: {
          ...tour.intinerary,
          languages: checkedItems,
        },
      })
    );
  }, [checkedItems]);

  useEffect(() => {
    if (status === "succeeded") {
      if (
        tour.intinerary !== undefined &&
        tour.intinerary.languages !== undefined
      )
        setCheckedItems(tour.intinerary.languages);
    }
  }, [status]);

  console.log("checkedItems", checkedItems);

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
              Itinerary / Languages
            </Text>
            <Heading fontSize={Responsive.fontSizeResponsiveBody}>
              Select the spoken languages on this tours
            </Heading>
          </Stack>

          <SimpleGrid
            columns={[1, 1, 1, 2, 3]}
            spacing={15}
            justifyItems="center"
            paddingTop="30px"
            h="80%"
            overflowY="auto"
            fontSize={Responsive.fontSizeResponsiveHead}
          >
            {languages.map((language: string) => (
              <React.Fragment>
                {checkedItems.includes(language) ? (
                  <CustomCheckbox
                    // Llamando a función hijo CustomCheckbox, se le pasa el arreglo de experiences
                    {...{ value: `${language}`, isChecked: true }}
                    // Función que en el Padre se llama handleCheckedItems, se pasa como onChange
                    onChange={() => handleCheckedItems(language, true)}
                  />
                ) : (
                  <CustomCheckbox
                    {...{ value: `${language}`, isChecked: false }}
                    onChange={() => handleCheckedItems(language, false)}
                  />
                )}
              </React.Fragment>
            ))}
          </SimpleGrid>
        </Box>
      ) : (
        <Skeleton w="65%" h="75%" p={10} borderRadius="10px" />
      )}
    </React.Fragment>
  );
};
export default Languages;
