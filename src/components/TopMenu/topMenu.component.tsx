import * as React from "react";
import { useNavigate } from 'react-router-dom';

import {
    Box,
    HStack,
    Spacer,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
  } from "@chakra-ui/react";
import { Avatar} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { ITopMenu } from "./topMenu.types";
import logo from './logo.jpg';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Responsive } from "../generalTypes";

function TopMenu(props: ITopMenu): JSX.Element {

    let navigate = useNavigate()

    function Change() {
        navigate (`/admin/Settings`)
    }

    return (
        <React.Fragment>
            <Box bg="black" w='100%' height="15%" color="white">
                <HStack paddingLeft={'7%'} paddingRight={'7%'} h="100%" w="100%" >
                    <Image height={{base: '50%', lg: "70%", md: "70%", sm: '60%'}} src={logo} />
                    <Spacer />
                    <Text onClick={Change} fontSize={{ base: '13px', md: '15px', lg: '20px', sm: '13px'}}>
                        Welcome, Carlos! 
                    </Text>
                    <Menu>
                        <MenuButton as={IconButton}
                                    icon={<Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence'  />}
                                    colorScheme='white' 
                                    fontSize='30px'
                                    />
                        <MenuList color='black'>
                            <MenuItem fontSize={Responsive.fontSizeResponsiveBody} onClick={Change}>Profile</MenuItem>
                            <MenuItem fontSize={Responsive.fontSizeResponsiveBody}>Log out</MenuItem>
                        </MenuList>
                    </Menu>
                </HStack>
            </Box>
        </React.Fragment>
    )
}

export default TopMenu;