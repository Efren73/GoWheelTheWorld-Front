import * as React from "react"
import {useNavigate, useLocation} from 'react-router-dom'
import {
    Button,
    Box, 
    Text,
    VStack,
    HStack,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Heading,
    Flex,
  } from "@chakra-ui/react"
  import { Responsive } from "../../components/generalTypes";


  import { ArrowDownIcon } from '@chakra-ui/icons'
  import { Image } from '@chakra-ui/react'

  import TopMenu from "../../components/TopMenu/topMenu.component"

  import {useState, useEffect} from 'react'
  import axios from 'axios'

  import { Assistance, Equipment } from "../../components";
  import { useAuthState } from "react-firebase-hooks/auth";
  import { auth } from "../../firebase/firebase-auth";
export function AdminSummary():any{

    
    const scroll = useLocation();
    const link: string[] = scroll.pathname.split("/");
    const section: string = link[link.length - 1];
    const [tour, setTour] = useState<any>('');
    const [status, setStatus] =useState<any>('idle')

    const url = `https://api-things-to-do.herokuapp.com/admin/one-tour/${section}`;
    
    useEffect(() => {
        console.log("Entrando a use Effect")
        setStatus('Loading')
        axios.get(url)
        .then((result) => {
          console.log(result.data);
          setTour(result.data);
          setStatus('Ready')
        })
        .catch((error) => {
          console.log(error);
          setStatus('Error')
        });
    }, []);

    console.log(tour)

    let navigate = useNavigate()  

    const [user, loading, error] = useAuthState(auth)

    useEffect(() => {
        if(user && !loading){
          axios.get(`https://api-things-to-do.herokuapp.com/tour-operator/info/${user.uid}`)
          .then(result =>{
            navigate(`/tour-operator/${user.uid}`)
          })
          .catch(error => {
            if(error.response.data.document === "No document"){
              axios.get(`https://api-things-to-do.herokuapp.com/admin/info/${user.uid}`)
              .then(result => {
              })
              .catch(error => {
                console.log(error)
              })
            }
          })
        }
        else if(!loading && !user){
            navigate("/")
        }
      },[user, loading])


    function Change():void {
        navigate (`/admin/${user?.uid}`)
    }
    function restrictions(){
        if(tour.intinerary !== undefined && tour.intinerary.restrictions !== undefined){
            return(
                tour.intinerary.restrictions.map((value: string) => (
                    <Text fontSize={Responsive.fontSizeResponsiveHead}>{value}</Text> 
            ))) 
        }
    }

    function Stops(){
        if(tour.intinerary !== undefined && tour.intinerary.stops !== undefined){
            return(
                tour.intinerary.stops.map((value: any, index: number) => (
                    <React.Fragment>
                        <Text fontSize={Responsive.fontSizeResponsiveHead}><b>Stop {index +1}</b></Text>
                        <Text>Stop Name: {value.stopName !== undefined
                            ? value.stopName
                            : "No stop name yet"}</Text>
                        <Text>Duration: {value.hours !== undefined &&
                            value.minutes
                            ? `${value.hours} hours and ${value.minutes} minutes`
                            : "No stop name yet" }</Text>
                    </React.Fragment>
                    
            ))) 
        }
        else{
            return(
                <Text>No info here</Text>
            )
        }
    }

    function whatsGeneral(){
        if(tour.whatsIncluded !== undefined && tour.whatsIncluded.general !== undefined){
            return(
                tour.whatsIncluded.general.map((value: string) => (
                    <Text fontSize={Responsive.fontSizeResponsiveHead}>{value}</Text> 
            ))) 
        }
        else{
            return(
                <Text>No info here</Text>
            )
        }
    }
    function whatsFood(){
        if(tour.whatsIncluded !== undefined && tour.whatsIncluded.food !== undefined){
            return(
                tour.whatsIncluded.food.map((value: string) => (
                    <Text fontSize={Responsive.fontSizeResponsiveHead}>{value}</Text> 
            ))) 
        }
        else{
            return(
                <Text>No info here</Text>
            )
        }
    }
    function whatsTransport(){
        if(tour.whatsIncluded !== undefined && tour.whatsIncluded.transport !== undefined){
            return(
                tour.whatsIncluded.transport.map((value: string) => (
                    <Text fontSize={Responsive.fontSizeResponsiveHead}>{value}</Text> 
            ))) 
        }
        else{
            return(
                <Text>No info here</Text>
            )
        }
    }
    function whatsAccess(){
        if(tour.whatsIncluded !== undefined && tour.whatsIncluded.accessibility !== undefined){
            return(
                tour.whatsIncluded.accessibility.map((value: string) => (
                    <Text fontSize={Responsive.fontSizeResponsiveHead}>{value}</Text> 
            ))) 
        }
        else{
            return(
                <Text>No info here</Text>
            )
        }
    }

    function showGroupPrivate() {
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

    function Assistance(){
        if(tour.accessibility !== undefined && tour.accessibility.assistance !== undefined){
            return(
                tour.accessibility.assistance.map((value: any) => (
                    <Text fontSize={Responsive.fontSizeResponsiveHead}>{value.question}? {value.answer}</Text>
                    
            ))) 
        }
        else{
            return(
                <Text>No info here</Text>
            )
        }
    }

    function Transportation(){
        if(tour.accessibility !== undefined && tour.accessibility.transportation !== undefined){
            return(
                tour.accessibility.transportation.map((value: any) => (
                    <Text fontSize={Responsive.fontSizeResponsiveHead}>{value.question}? {value.answer}</Text>
                    
            ))) 
        }
        else{
            return(
                <Text>No info here</Text>
            )
        }
    }

    function Places(){
        if(tour.accessibility !== undefined && tour.accessibility.places !== undefined){
            return(
                tour.accessibility.places.map((value: any) => (
                    <Text fontSize={Responsive.fontSizeResponsiveHead}>{value.question}? {value.answer}</Text>
                    
            ))) 
        }
        else{
            return(
                <Text>No info here</Text>
            )
        }
    }

    function Restrooms(){
        if(tour.accessibility !== undefined && tour.accessibility.restrooms !== undefined){
            return(
                tour.accessibility.restrooms.map((value: any) => (
                    <Text fontSize={Responsive.fontSizeResponsiveHead}>{value.question}? {value.answer}</Text>
                    
            ))) 
        }
        else{
            return(
                <Text>No info here</Text>
            )
        }
    }

    function Equipment(){
        if(tour.accessibility !== undefined && tour.accessibility.equipment !== undefined){
            return(
                tour.accessibility.equipment.map((value: any) => (
                    <Text fontSize={Responsive.fontSizeResponsiveHead}>{value.question}? {value.answer}</Text>
                    
            ))) 
        }
        else{
            return(
                <Text>No info here</Text>
            )
        }
    }

    function Faqs(){
        if(tour.faqs !== undefined){
            return(
                <ul>
                    {tour.faqs.map((value: any, index: number) => (
                        <React.Fragment>
                            <Text><b>Question {index+1}</b></Text>
                            <li >
                                <Text>{value.question}</Text>
                                <Text>{value.answer}</Text> 
                            </li>
                        </React.Fragment>  
            ))}
                </ul>
            ) 
        }
        else{
            return(
                <Text>No info here</Text>
            )
        }
    }

    function ChildPolicy(){
        if(tour.childrenPolicy !== undefined){
            if(tour.childrenPolicy.childrenAllowed === true){
                return(
                    <React.Fragment>
                        <Text fontSize={Responsive.fontSizeResponsiveHead}>
                            <b>Children age permited: </b> 
                            {tour.childrenPolicy.childrenAge !== undefined 
                                ? `${tour.childrenPolicy.childrenAge}`
                                : "No info yet"}
                        </Text>
                        <Text fontSize={Responsive.fontSizeResponsiveHead}>
                            <b>Children age pay: </b> 
                            {tour.childrenPolicy.price !== undefined 
                                ? `${tour.childrenPolicy.childrenAgePay}`
                                : "No info yet"}
                        </Text>
                        <Text fontSize={Responsive.fontSizeResponsiveHead}>
                            <b>Children minimum height: </b> 
                            {tour.childrenPolicy.price !== undefined 
                                ? `${tour.childrenPolicy.childrenHeight}`
                                : "No info yet"}
                        </Text>
                    </React.Fragment>
                ) 
            }
            else{
                return(
                    <Text fontSize={Responsive.fontSizeResponsiveHead}>Children are not allowed for this tour</Text>
                )
            }
            
        }
        else{
            return(
                <Text>No info here</Text>
            )
        }
    }
        
    if(status === "Ready"){
        return (
            <React.Fragment>
                 <Flex h="100vh">
                    <VStack w="full" h="full">
                        <TopMenu />
        
                        <HStack direction={['column', 'row']} justifyContent="space-between" w="80%" >
        
                            <Box justifyContent="flex-start" paddingBottom={3} >
                                <Heading as='h2' >
                                    Tour Summary
                                </Heading>
                                <Text fontSize='2xl'>Summary of the tour divided by categories</Text>
        
                                <Text p={1} fontSize='md' color='gray.500'>{tour.basicInformation.tourName}; {tour.tourOperatorCountry}, Mapped by: {tour.tourOperatorName} on 11/11/10  </Text>
                            </Box>
        
                            <Box w='15%'>
                                <Image w="50%" src='https://icon-library.com/images/completed-icon/completed-icon-6.jpg' />    
                            </Box>
                        </HStack>
        
                        <Accordion defaultIndex={[0]} allowMultiple w="80%" >
        
                        <AccordionItem p={4}>
                            <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                Basic Information
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                
                                <Text fontSize={Responsive.fontSizeResponsiveHead}>
                                    <b>Tour Name: </b> 
                                    {tour.basicInformation.tourName !== undefined &&
                                    tour.basicInformation.tourName !== ""
                                    ? tour.basicInformation.tourName 
                                    : "No tour name yet"}
                                </Text>
        
                                <Text fontSize={Responsive.fontSizeResponsiveHead}>
                                    <b>Duration: </b> 
                                    {tour.basicInformation.duration.hours !== "" &&
                                    tour.basicInformation.duration.minutes !== ""
                                    ? tour.basicInformation.duration.hours +
                                    " hours and " +
                                    tour.basicInformation.duration.minutes +
                                    " minutes"
                                    : "Duration"}
                                </Text>
        
                                <Text fontSize={Responsive.fontSizeResponsiveHead}>
                                    <b>Type of activity: </b> 
                                    {tour.basicInformation.typeOfActivity !== undefined
                                    ? tour.basicInformation.typeOfActivity + ""
                                    : "No type of tour"}
                                </Text>
        
                                <Text fontSize={Responsive.fontSizeResponsiveHead}>
                                    <b>Private or group tour? </b> 
                                    {showGroupPrivate()}
                                </Text>
        
                                <Text fontSize={Responsive.fontSizeResponsiveHead}>
                                    <b>Number of traveleres: </b> 
                                    {tour.basicInformation.numberMaxTravelers !== undefined &&
                                    tour.basicInformation.numberMinTravelers !== undefined
                                        ? `Minimum: ${tour.basicInformation.numberMinTravelers} / Maximum: ${tour.basicInformation.numberMaxTravelers}`
                                        : "No number of traveleres"}
                                </Text>
        
                                <Text fontSize={Responsive.fontSizeResponsiveHead}>
                                    <b>Price: </b> 
                                    {tour.basicInformation.price !== undefined 
                                        ? `${tour.basicInformation.price} USD`
                                        : "No price yet"}
                                </Text>
        
                                <Text fontSize={Responsive.fontSizeResponsiveHead}>
                                    <b>Document related to the price: </b> 
                                    {tour.basicInformation.link !== undefined 
                                        ? `${tour.basicInformation.link}`
                                        : "No document "}
                                </Text>
        
                                <Text fontSize={Responsive.fontSizeResponsiveHead}>
                                    <b>Link: </b> 
                                    {tour.basicInformation.link !== undefined 
                                        ? `${tour.basicInformation.link}`
                                        : "No link yet"}
                                </Text>
        
                                <Text fontSize={Responsive.fontSizeResponsiveHead}>
                                    <b>Photos: </b> 
                                    {tour.basicInformation.link !== undefined 
                                        ? `${tour.basicInformation.link}`
                                        : "No link yet"}
                                </Text>
        
                                <Text fontSize={Responsive.fontSizeResponsiveHead}>
                                    <b>Description: </b> 
                                    {tour.basicInformation.description !== undefined 
                                        ? `${tour.basicInformation.description}`
                                        : "No description yet"}
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
        
                        <AccordionItem p={4}>
                            <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                Itinerary
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                
                                <Text fontSize={Responsive.fontSizeResponsiveHead}>
                                    <b>Meeting point: </b> 
                                    {tour.intinerary !== undefined &&
                                    tour.intinerary.meetPoint !== undefined
                                    
                                    ? tour.intinerary.meetPoint 
                                    : "No meet point yet"}
                                </Text>
        
                                <Text fontSize={Responsive.fontSizeResponsiveHead}>
                                    <b>End point: </b> 
                                    {tour.intinerary !== undefined &&
                                    tour.intinerary.endPoint !== undefined
                                    ? tour.intinerary.endPoint 
                                    : "No end point yet"}
                                </Text>
        
                                <Text fontSize={Responsive.fontSizeResponsiveHead}>
                                    <b>Languages: </b> 
                                    {
                                    tour.intinerary !== undefined && 
                                    tour.intinerary.languages !== undefined
                                    ? tour.intinerary.languages + ""
                                    : "No languages yet"}
                                </Text>
                                
                                <Text fontSize={Responsive.fontSizeResponsiveHead}>
                                    <b>Restrictions: </b> 
                                </Text>
                                    {restrictions()}
        
                                <Text fontSize={Responsive.fontSizeResponsiveHead}>
                                    <b>Stops: </b> 
                                    {Stops()}
                                </Text>
                                
        
                            </AccordionPanel>
                        </AccordionItem>
                        
                        <AccordionItem p={4}>
                            <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                What's included?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                
                                <Text fontSize={Responsive.fontSizeResponsiveHead}>
                                    <b>General: </b> 
                                    {whatsGeneral()}
                                </Text>
                                
                                <Text fontSize={Responsive.fontSizeResponsiveHead}>
                                    <b>Food: </b> 
                                    {whatsFood()}
                                </Text>
                                <Text fontSize={Responsive.fontSizeResponsiveHead}>
                                    <b>Transport: </b> 
                                    {whatsTransport()}
                                </Text>
                                <Text fontSize={Responsive.fontSizeResponsiveHead}>
                                    <b>Accessibility: </b> 
                                    {whatsAccess()}
                                </Text>
                                
        
                            </AccordionPanel>
                        </AccordionItem>
        
                        <AccordionItem p={4}>
                            <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                Accessibility
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                
                                <Text fontSize={Responsive.fontSizeResponsiveHead}>
                                    <b>Assistance: </b> 
                                    {Assistance()}
                                </Text>
                                
                                <Text fontSize={Responsive.fontSizeResponsiveHead}>
                                    <b>Transportation: </b> 
                                    {Transportation()}
                                </Text>
                                <Text fontSize={Responsive.fontSizeResponsiveHead}>
                                    <b>Restrooms: </b> 
                                    {Restrooms()}
                                </Text>
                                <Text fontSize={Responsive.fontSizeResponsiveHead}>
                                    <b>Places: </b> 
                                    {Places()}
                                </Text>
                                <Text fontSize={Responsive.fontSizeResponsiveHead}>
                                    <b>Equipment: </b> 
                                    {Equipment()}
                                </Text>
                                
        
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem p={4}>
                            <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                Frequently asked questions
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                
                                <Text fontSize={Responsive.fontSizeResponsiveHead}>
                                    {Faqs()}
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem p={4}>
                            <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                Children Policy
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text fontSize={Responsive.fontSizeResponsiveHead}>
                                    {ChildPolicy()}
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem p={4}>
                            <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                Cancellation Policy
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Text fontSize={Responsive.fontSizeResponsiveHead}>
                                    {
                                         tour.cancellationPolicy !== undefined
                                            ? tour.cancellationPolicy
                                            : "No cancellation Policy yet"
                                    }
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        </Accordion>
        
        
        
                        <HStack w={"full"} h={"full"} justifyContent="space-around" paddingBottom={5}>
        
                            <Button size='lg'
                                                    fontSize="20px"
                                                    borderRadius={10}
                                                    bg="#3F6FE4"
                                                    color="white"
                                                    onClick={Change}> Back </Button>
        
                        </HStack>
        
                    </VStack>
                </Flex>
        
            
            </React.Fragment>
          )
    }
    else if(status === "Loading"){
        return(
            <div>Loading</div>
        )
    }
}
export default AdminSummary
  
