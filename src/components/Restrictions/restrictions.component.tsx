import * as React from "react";
import {
  Text,
  Stack,
  Checkbox,
  Box,
  Heading,
  useCheckbox,
  chakra,
  Skeleton,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { Responsive } from "../generalTypes";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  fetchTours,
  updateTour,
  selectAllTours,
  getTourStatus,
  changeState,
} from "../../reducers/appSlice";

function CustomCheckbox(props: any) {
  const { state, getCheckboxProps, getInputProps, getLabelProps } =
    useCheckbox(props);

  // Arreglo de strings para guardar los checkboxes seleccionados
  const [checkedItems, setCheckedItems] = useState<boolean>(props.isChecked);

  //console.log(state)
  return (
    <chakra.label display="flex" cursor="pointer" {...getCheckboxProps()}>
      <Checkbox
        marginRight={3}
        borderColor={"#3F6FE4"}
        onChange={(e: any) => {
          setCheckedItems(!checkedItems);
          props.onChange(props.value, checkedItems);
        }}
        isChecked={props.isChecked}
        //isDisabled={props.isChecked}
      ></Checkbox>

      <input {...getInputProps()} hidden />
      <Text {...getLabelProps()}>{props.value}</Text>
    </chakra.label>
  );
}

const Restrictions: React.FC = () => {
  const dispatch = useAppDispatch();
  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const tour = useAppSelector(selectAllTours);
  const status = useAppSelector(getTourStatus);

  useEffect(() => {
    dispatch(fetchTours());
  }, []);

  // Arreglo de strings para guardar los checkboxes seleccionados
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const restrictions: string[] = [
    "This tour is not recommended for people with a heart condition",
    "This tour is not recommended for pregnant travelers",
    "This tour is not recommended for people with dietary restrictions",
    "Special dietary needs and restrictions can be accommodated with prior notice",
    "This tour is not recommended for travelers using a power wheelchair",
    "Travelers must be willing to self-transfer manually or be helped to do so,  in order to take part in this tour",
    "There is no restriction of any kind regarding this tour",
    "Select all",
  ];

  const handleCheckedItems = (restrictionName: string, checkea: boolean) => {
    // Agregando el nombre de el lenguaje que se selccionó en el hijo CustomCheckbox
    if (checkea === false) {
      // AGREGA
      if (
        restrictionName ==
        "There is no restriction of any kind regarding this tour"
      ) {
        // NO
        setCheckedItems([restrictionName]);
      } else if (restrictionName == "Select all") {
        // All
        const result = restrictions.filter(
          (restrictions) =>
            restrictions !=
            "There is no restriction of any kind regarding this tour"
        );
        setCheckedItems(result);
      } else {
        // CUALQUIER OTRO
        const result = checkedItems.filter(
          (restrictions) =>
            restrictions !=
            "There is no restriction of any kind regarding this tour"
        );
        setCheckedItems([...result, restrictionName]);
      }
    } else {
      // ELIMINA
      if (restrictionName == "Select all") {
        // All
        const result: string[] = [];
        setCheckedItems(result); // Deja vacío el arreglo
      } else {
        // filter regresa una copia del arreglo original, pero ahora sin el languageName que indique
        const result = checkedItems.filter(
          (checkedItems) =>
            checkedItems != restrictionName && checkedItems != "Select all"
        );
        // actualizamos al arreglo original checkedItems con el arreglo de filter
        setCheckedItems(result);
      }
    }
  };
  // console.log(checkedItems.length)
  if (checkedItems.length == 6) {
    // Trae todas las respuestas
    setCheckedItems([...checkedItems, "Select all"]);
  }

  useEffect(() => {
    dispatch(
      changeState({
        intinerary: {
          ...tour.intinerary,
          restrictions: checkedItems,
        },
      })
    );
  }, [checkedItems]);

  useEffect(() => {
    if (status === "succeeded") {
      if (
        tour.intinerary != undefined &&
        tour.intinerary.restrictions != undefined
      )
        setCheckedItems(tour.intinerary.restrictions);
    }
  }, [status]);

  console.log("checkedItems", checkedItems);

  return (
    <React.Fragment>
      {status === "succeeded" ?
        (
          <Box boxShadow="md" w="65%" p={10} background="#F8F9F9" borderRadius="10px">
            <Stack spacing={2}>
              <Text fontSize={Responsive.fontSizeResponsiveHead} color="#3F6FE4">
                Itinerary / Restrictions
              </Text>
              <Heading fontSize={Responsive.fontSizeResponsiveBody}>
                Select the restrictions on this tour
              </Heading>
            </Stack>

            <Stack pl={6} mt={1} spacing={2}>
              {restrictions.map((restriction: string) => (
                <React.Fragment>
                  {checkedItems.includes(restriction) ? ( //GET REGRESA ALGO
                    <CustomCheckbox
                      {...{
                        value: `${restriction}`,
                        isChecked: true,
                        isDisabled: false,
                      }}
                      onChange={() => handleCheckedItems(restriction, true)}
                    />
                  ) : (
                    // GET NO REGRESA NADA
                    <CustomCheckbox
                      {...{
                        value: `${restriction}`,
                        isChecked: false,
                        isDisabled: false,
                      }}
                      onChange={() => handleCheckedItems(restriction, false)}
                    />
                  )}
                </React.Fragment>
              ))}
            </Stack>
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
export default Restrictions;
