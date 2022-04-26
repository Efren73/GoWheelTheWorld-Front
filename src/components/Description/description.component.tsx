import * as React from "react"
import { useState } from "react"
import {
    Text,
    HStack,
    Box,
    ChakraProvider,
    Button,
    Stack,
    Textarea,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure
} from "@chakra-ui/react"

const Description: React.FC = () => {
    //Elementos utilizados para limitar el numero de caracteres
    let [value, setValue] = useState('')
    let [characters, setCharacters] = useState(0)
    let inputValue: any;

    let handleInputChange = (e: any) => {
        inputValue = e.target.value

        if(inputValue.length<=1600){
            setValue(inputValue)
            setCharacters(inputValue.length)
        }
    }

    // Control de input para el link
    let [value1, setValue1] = useState('')
    let inputValue1: any;

    let handleInputLink = (e: any) => {
        inputValue1 = e.target.value
        setValue1(inputValue1)
    }

    //Elementos utilizados para la ventana modal
    const { isOpen, onOpen, onClose } = useDisclosure()

    //Array en donde se guardan los ejemplos de descripciones
    const descriptionExamples: string[]=[
        'This accessible, 3-hour tour of downtown Manhattan is led by a knowledgeable local guide who will show you some of the highlights and hidden gems of the Big Apple. You will meet your guide at City Hall and explore the city together. Some of the travel between stops will take place on the subway; metro cards are not provided but your guide can help you to purchase one, if necessary. After a brief tour of City Hall Park, you will catch a glimpse of the Statue of Liberty before heading to Wall Street, in the heart of the Financial District. Here, you can admire the Charging Bull statue, a symbol of financial optimism and prosperity. This is a popular photo stop and your guide can snap pictures of you next to the 3.4 meter tall (11 feet) bull. The tour will also include other famous landmarks in the Financial District such as the New York Stock Exchange and Federal Hall. The tour will then move on to Trinity Church and Saint Paul’s Chapel, both of which are recognized as historic New York monuments. You will also get a chance to visit the World Trade Center Memorial, commemorating the victims of the 9/11 terror attack. Throughout the tour, your guide will tell you about the history of Manhattan and can answer your questions and give you tips on other places to visit or restaurants to try out in the city. The ground is mostly level and smooth so you can navigate independently, but your guide will be available to assist you as necessary. The tour will end in the Five Points neighborhood in Chinatown, where you can go off and explore other areas of the city at your own pace.',

        'Make your way to Rio Secreto. There, you will watch a short introduction video, presenting you with the caves and the safety measures. After a 10-minute ride through the jungle, onboard an accessible van, you will get next to the cave entrance, where the changing rooms and lockers are located. You will get into your wetsuit and transfer to a Joelette trekking wheelchair before the tour starts. Assistance will be provided, and you own wheelchair will be safely kept in the lockers. You will then make your way to the wet cave entrance during a short hike. As you get into the water, you will discover an unsuspected underwater network of rivers and narrow caves. Stalactites and stalagmites will make you feel like in a glass museum. Your guide will tell you more about the geological history of the Earth, as you move around the breathtaking rock formations and discover several chambers. Visitors will be able to swim at certain spots along the way. The tour provides a truly unique, epic atmosphere as you explore the cave in darkness, only lit up by your headlight. As the water is cold, travelers will spend no more than an hour in the wet cave.',

        'This bus tour of Miami brings together some of the city\'s best tourist highlights and takes place on a bus with a transparent roof, so you can admire the great views whilst being protected from the elements. Drivers are available to help people with reduced mobility to transfer into the bus and there is space to store one manual wheelchair onboard. Service animals are also welcome on this tour. The tour lasts for approximately 3 hours and has 3 pick-up/drop-off points, plus an extended stop in Little Havana and in Wynwood. Each meeting point is easy to find and is located close to a parking lot. You’ll get a chance to see the South Beach area of Miami, with its famous Art Deco-style buildings, and then you’ll cruise through downtown Miami. Next is Little Havana, the neighborhood where many Cuban migrants settled, and you’ll have approximately 20 minutes here if you wish to get off the bus and explore. Afterwards, you will head to Wynwood, the trendiest art district which is home to Wynwood Wall, a place to see the best urban street art. This stop is slightly longer, giving you time to explore the district by yourself, if you wish. The tour will then loop through to chic Miami Design District before returning to the first meeting point. The tour bus does not have accessible bathroom facilities, but the drivers are very familiar with the city and can recommend accessible public bathroom facilities in cafes or restaurants that are close to the stop-off points in Little Havana and Wynwood.'
    ];

    return(
    <ChakraProvider>
        <Box
        boxShadow='2xl'
        w="65%" 
        h="full"
        p={10}
        background="#EBE9E9"
        borderRadius="10px">
  
            <Stack spacing={2}>
                <Text fontSize='20px' color='#3F6FE4'>Basic Information / Description</Text>
                <Text fontSize='35px'> Please share the link to your website or any 
                                       another platform where the tour/activity is displayed</Text>
                <Box w='full'>
                    <Textarea 
                        placeholder="Link"
                        background='#fff'
                        onChange={handleInputLink}
                        value = {value1}
                        />
                </Box>
                <Text fontSize='35px'>Description of the tour / activity</Text>
                <Box w='full'>
                    <Textarea 
                        placeholder="Description of the tour"
                        background='#fff'
                        onChange={handleInputChange}
                        value = {value}
                        />
                    <HStack justifyContent='space-between' color='#2F6FE4' >
                        <Text>{characters}/1600</Text>
                        <Button variant="link" onClick={onOpen}>
                            <Text color='#2F6FE4' as='u'>Show examples</Text>
                        </Button>
                    </HStack>
                </Box>
            </Stack>
        </Box >

        <Modal onClose={onClose} size='xl' isOpen={isOpen} scrollBehavior='inside'>
            <ModalOverlay />
            <ModalContent background='#EBE9E9'>
            <ModalHeader color='#3F6FE4'>Examples</ModalHeader>
            <ModalBody>
                {
                    descriptionExamples.map((descript) => (
                        <Stack marginBottom='10px'paddingBottom='10px' borderBottom='2px solid #3F6FE4'>
                            <Text fontSize='16px'>{descript}</Text>
                        </Stack>
                    ))
                }
            </ModalBody>
            <ModalFooter>
                <Button onClick={onClose}>Close</Button>
            </ModalFooter>
            </ModalContent>
      </Modal>
    </ChakraProvider>
    )
}
export default Description;