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
import { useLocation } from "react-router-dom";
import { Responsive } from "../generalTypes";
import {logout, auth} from "../../firebase/firebase-auth"
import {useAuthState} from "react-firebase-hooks/auth"
import {useEffect} from 'react'
import axios from "axios";
function TopMenu(props: ITopMenu): JSX.Element {
    const location = useLocation();
    let navigate = useNavigate()
    const link: string[] = location.pathname.split("/");
    const idUser: string = link[2];

    const [userName, setUserName] = React.useState('')

    //console.log('link---------->', link[1]);
    var url: string;
    if(link[1] === "admin"){
        url = `https://api-things-to-do.herokuapp.com/admin/info/${idUser}`
        axios.get(url)
        .then(res => {
            //console.log(res.data)
            setUserName(res.data.fullName)
        })
        .catch(error => {
            console.log(error)
        })
    }
    else if(link[1] === "tour-operator"){
        url = `https://api-things-to-do.herokuapp.com/tour-operator/info/${idUser}`
        axios.get(url)
        .then(res => {
            //console.log(res.data)
            setUserName(res.data.fullName)
        })
        .catch(error => {
            console.log(error)
        })
    }

    

    function Change() {
        if(link[1] === 'admin') navigate(`/admin/${idUser}/Settings`)
        else if(link[1] === 'tour-operator') navigate(`/tour-operator/${idUser}/Settings`)
    }
    const [user, loading, error] = useAuthState(auth)

    console.log(user)
    useEffect(() =>{
        if(!loading && !user){
          navigate("/")
        }
      },[user, loading])
    async function exit(){
        try {
            await logout()
        } catch (error) {
            console.log(error)
        } 
        
    }

    

    return (
        <React.Fragment>
            <Box bg="black" w='full' h='15%'
             color="white">
                <HStack paddingLeft={'7%'} paddingRight={'7%'} h="100%" w="100%" >
                    <Image height={{base: '50%', lg: "70%", md: "70%", sm: '60%'}} src={logo} />
                    <Spacer />
                    <Text fontSize={{ base: '13px', md: '15px', lg: '20px', sm: '13px'}}>
                        Welcome, {userName}! 
                    </Text>
                    <Menu>
                        <MenuButton as={IconButton}
                                    icon={<Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence'  />}
                                    colorScheme='white' 
                                    fontSize='30px'
                                    />
                        <MenuList color='black'>
                            <MenuItem fontSize={Responsive.fontSizeResponsiveBody} onClick={Change}>Profile</MenuItem>
                            <MenuItem fontSize={Responsive.fontSizeResponsiveBody} onClick={exit}>Log out</MenuItem>
                        </MenuList>
                    </Menu>
                </HStack>
            </Box>
        </React.Fragment>
    )
}

export default TopMenu;