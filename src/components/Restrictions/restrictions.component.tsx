import * as React from "react"
import {
  Text,
  Stack,
  Checkbox,
  Box,
  Heading,
} from "@chakra-ui/react"

import { useState } from "react"
import { Responsive } from "../generalTypes";
function DisableCheckbox() {

  const restrictions: string[] = [
    'This tour is not recommended for people with a heart condition',
    'This tour is not recommended for pregnant travelers',
    'This tour is not recommended for people with dietary restrictions',
    'Special dietary needs and restrictions can be accommodated with prior notice',
    'This tour is not recommended for travelers using a power wheelchair',
    'Travelers must be willing to self-transfer manually or be helped to do so,  in order to take part in this tour',
    'There is no restriction of any kind regarding this tour',
    'Select all'
  ];

  // controla el Checkbox independiente
  const [noRestrictCheck, setCheckNo] = useState(false)
  const [allRestrictCheck, setCheckAll] = useState(false)

  // Arreglo de checkboxes
  const [checkedItems, setCheckedItems] = useState([false, false, false, false, false, false])

  // Arreglo de strings para guardar los checkboxes seleccionados
  const [arrayItems, setArrayItems] = useState<string[]>([])

  // Funcion para guardar los checkbox seleccionado
  function Save(checkea:Boolean, i:number) {
    //console.log('checkea', checkea)
    if(checkea == false){ // Agrega
      if(restrictions[i] == 'There is no restriction of any kind regarding this tour') { // NO
        setArrayItems([restrictions[i]])
      } else if (restrictions[i] == 'Select all'){ // All
        setArrayItems([restrictions[0], restrictions[1], restrictions[2], restrictions[3], restrictions[4], restrictions[5]])
      } else {
        for(let x=0; x<restrictions.length; x++) {
          if(arrayItems[x] != restrictions[i]) { // Si no existe
            setArrayItems([...arrayItems, restrictions[i]]) // Agrega
          } else{
            setArrayItems([...arrayItems]) // Mánten
          }
        }
        
      }
    }
    else { // Elimina
      if (restrictions[i] == 'Select all'){ // All
        const result: string[] = []; 
        setArrayItems(result) // Deja vacío el arreglo
      } else{
        // filter regresa una copia del arreglo original, pero ahora sin el restrictions que indique
        const result = arrayItems.filter(arrayItem => arrayItem != restrictions[i])
        // actualizamos al arreglo original checkedItems con el arreglo de filter
        setArrayItems(result)
      }
    }
    
  }
  console.log(arrayItems)

  return (
    <>
      <Stack pl={6} mt={1} spacing={2}>
        <Checkbox borderColor={'#3F6FE4'}
        onChange={(e: any) => {
          setCheckedItems([!checkedItems[0], checkedItems[1], checkedItems[2], checkedItems[3], checkedItems[4], checkedItems[5]])
          Save(checkedItems[0], 0)
        }}
        
          isChecked={checkedItems[0]}
          isDisabled={noRestrictCheck}
        >
          {restrictions[0]}
        </Checkbox>
        <Checkbox borderColor={'#3F6FE4'}
        onChange={(e: any) => {
          setCheckedItems([checkedItems[0], !checkedItems[1], checkedItems[2], checkedItems[3], checkedItems[4], checkedItems[5]])
          Save(checkedItems[1], 1)
        }}
          isChecked={checkedItems[1]}
          isDisabled={noRestrictCheck}
        >
          {restrictions[1]}
        </Checkbox>
        <Checkbox borderColor={'#3F6FE4'}
        onChange={(e: any) => {
          setCheckedItems([checkedItems[0], checkedItems[1], !checkedItems[2], checkedItems[3], checkedItems[4], checkedItems[5]])
          Save(checkedItems[2], 2)
        }}
          isChecked={checkedItems[2]}
          isDisabled={noRestrictCheck}
        >
          {restrictions[2]}
        </Checkbox>
        <Checkbox borderColor={'#3F6FE4'}
        onChange={(e: any) => {
          setCheckedItems([checkedItems[0], checkedItems[1], checkedItems[2], !checkedItems[3], checkedItems[4], checkedItems[5]])
          Save(checkedItems[3], 3)
        }}
          isChecked={checkedItems[3]}
          isDisabled={noRestrictCheck}
        >
          {restrictions[3]}
        </Checkbox>
        <Checkbox borderColor={'#3F6FE4'}
          onChange={(e: any) => {
            setCheckedItems([checkedItems[0], checkedItems[1], checkedItems[2], checkedItems[3], !checkedItems[4], checkedItems[5]])
            Save(checkedItems[4], 4)
          }}
          isChecked={checkedItems[4]}
          isDisabled={noRestrictCheck}
        >
          {restrictions[4]}
        </Checkbox>
        <Checkbox borderColor={'#3F6FE4'}
        onChange={(e: any) => {
          setCheckedItems([checkedItems[0], checkedItems[1], checkedItems[2], checkedItems[3], checkedItems[4], !checkedItems[5]])
          Save(checkedItems[5], 5)
        }}
          isChecked={checkedItems[5]}
          isDisabled={noRestrictCheck}
        >
          {restrictions[5]}
        </Checkbox>
        <Checkbox borderColor={'#3F6FE4'}
          onChange={(e: any) => {
            setCheckNo(!noRestrictCheck)
            Save(noRestrictCheck, 6)
          }}

          isChecked={noRestrictCheck}
          isDisabled={checkedItems.some(Boolean)}
        >
          {restrictions[6]}
        </Checkbox>
        <Checkbox borderColor={'#3F6FE4'}
          onChange={(e: any) => {
            setCheckedItems([e.target.checked, e.target.checked, e.target.checked, e.target.checked, e.target.checked, e.target.checked])
            setCheckAll(!allRestrictCheck)

            if(checkedItems.every(Boolean)){
              Save(true, 7)
            } else {
              Save(false, 7)
            }
            
          }}

          isChecked={checkedItems.every(Boolean)}
          isDisabled={noRestrictCheck}
        >
          {restrictions[7]}
        </Checkbox>
        
      </Stack>
    </>
  )
}

/* RESPONSIVE -------------------------------------------------------*/


const Restrictions: React.FC = () => {
  return(
    <Box boxShadow='2xl'
      w="65%" 
      p={10}
      background="#EBE9E9"
      borderRadius="10px">
      
      <Stack spacing={2}>
        <Text fontSize={Responsive.fontSizeResponsiveHead} color='#3F6FE4'> Itinerary / Restrictions </Text>
        <Heading fontSize={Responsive.fontSizeResponsiveBody}> Select the restrictions on this tour </Heading>
      </Stack>
      
        <Stack spacing={5} direction='column'>
          {DisableCheckbox()}
        </Stack>
      
    </Box>
  )
}
export default Restrictions;