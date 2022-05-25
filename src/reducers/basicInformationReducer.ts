const basicInformation :
{
    tourName: string | null;
    duration: string;
    typeOfActivity: string[];
    privateTour: boolean;
    document: string;
    description: string;
    groupTour: boolean;
    numberMaxTravelers: number;
    numberMinTravelers: number;
    photos: string;
    link: string;

} = {
    tourName: null,
    duration: "",
    typeOfActivity: [""],
    privateTour: false,
    document: "",
    description: "",
    groupTour: false,
    numberMaxTravelers: 10,
    numberMinTravelers: 1,
    photos: "",
    link: ""
} 

const basicInformationReducer = (
    state = basicInformation,
    action:any,
) => {
    switch(action.type) {
        case 'TOURNAME': {
            return {
                ...state,
                tourName:
                action.payload,    
            }
        }

        case 'DURANTION': {
            return {
                ...state,
                duration:
                action.payload,   
            }
        }

        case 'TYPEOFACTIVITY': {
            return {
                ...state,
                typeOfActivity: [
                    action.payload
                ]
            }
        }

        case 'PRIVATETOUR': {
            return {
                ...state,
                privateTour:
                action.payload,  
            }
        }

        case 'DOCUMENT': {
            return {
                ...state,
                document:
                action.payload,  
            }
        }

        case 'GROUPTOUR': {
            return {
                ...state,
                groupTour:
                action.payload,  
            }
        }

        case 'DESCRIPTION': {
            return {
                ...state,
                description:
                action.payload,  
            }
        }
        case 'NUMBERMAXTRAVELERES': {
            return {
                ...state,
                numberMaxTravelers:
                action.payload,  
            }
        }
        case 'NUMBERMINTRAVELERS': {
            return {
                ...state,
                numberMinTravelers:
                action.payload,   
            }
        }
        case 'PHOTOS': {
            return {
                ...state,
                photos:
                action.payload,    
            }
        }
        case 'TOURLINK': {
            return {
                ...state,
                tourLink:
                action.payload, 
            }
        }

        default: {
            return {
                ...state,
         }
        }
    }
};

export default basicInformationReducer