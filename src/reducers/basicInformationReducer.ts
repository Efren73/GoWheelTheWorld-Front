const basicInformation :
{
    tourName: string;
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
    tourName: "",
    duration: "",
    typeOfActivity: ["",""],
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
                
            }
        }

        case 'DURANTION': {
            //navigate(`/tour-operator/1/tour-completed/1/${action.payload}`)
            return {
                //...state.get(action.payload),
                ...state
                
            }
        }

        case 'TYPEOFACTIVITY': {
            //navigate(`/tour-operator/1/tour-completed/1/${action.payload}`)
            return {
                //...state.get(action.payload),
                ...state
                
            }
        }

        case 'PRIVATETOUR': {
            //navigate(`/tour-operator/1/tour-completed/1/${action.payload}`)
            return {
                //...state.get(action.payload),
                ...state
                
            }
        }

        case 'PRIVATETOUR': {
            //navigate(`/tour-operator/1/tour-completed/1/${action.payload}`)
            return {
                //...state.get(action.payload),
                ...state
                
            }
        }

        case 'PRIVATETOUR': {
            //navigate(`/tour-operator/1/tour-completed/1/${action.payload}`)
            return {
                //...state.get(action.payload),
                ...state
                
            }
        }
        case 'PRIVATETOUR': {
            //navigate(`/tour-operator/1/tour-completed/1/${action.payload}`)
            return {
                //...state.get(action.payload),
                ...state
                
            }
        }
        case 'PRIVATETOUR': {
            //navigate(`/tour-operator/1/tour-completed/1/${action.payload}`)
            return {
                //...state.get(action.payload),
                ...state
                
            }
        }
        case 'PRIVATETOUR': {
            //navigate(`/tour-operator/1/tour-completed/1/${action.payload}`)
            return {
                //...state.get(action.payload),
                ...state
                
            }
        }
        case 'PRIVATETOUR': {
            //navigate(`/tour-operator/1/tour-completed/1/${action.payload}`)
            return {
                //...state.get(action.payload),
                ...state
                
            }
        }
        case 'PRIVATETOUR': {
            //navigate(`/tour-operator/1/tour-completed/1/${action.payload}`)
            return {
                //...state.get(action.payload),
                ...state
                
            }
        }
        case 'PRIVATETOUR': {
            //navigate(`/tour-operator/1/tour-completed/1/${action.payload}`)
            return {
                //...state.get(action.payload),
                ...state
                
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
};

export default basicInformationReducer