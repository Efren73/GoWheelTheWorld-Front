import { useToast } from "@chakra-ui/react";

export const Responsive = {
    fontSizeResponsiveHead : { base:'40px', xsm:'15px', sm:'20px', md:'25px', lg:'30px'},
	fontSizeResponsiveBody : { base:'30px', xsm:'10px', sm:'15px', md:'20px', lg:'25px'}
}

export function ToastWarning() {
    const toast = useToast();
    toast({
      title: "Out of range!",
      description: "The value is out of range.",
      status: "warning",
      duration: 4000,
      isClosable: true,
    });
  }