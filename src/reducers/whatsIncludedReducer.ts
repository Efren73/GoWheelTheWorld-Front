type Iaccesibility = {

    assistants: boolean;
    equipmentRental: boolean;
    instructors: boolean
}

type Ifood = {

    alcoholicBeverages: boolean;
    breakfast: boolean;
    dinner: boolean;
    lunch: boolean;
    snacks: boolean;
    softDrinks: boolean;
}

type Igeneral = {

    admission: boolean; 
    audioGuides: boolean;
    gratuities: boolean;
    insurance: boolean;
    parkEntrance: boolean;
    tourGuides: boolean;
    touristCityTaxes: boolean;
}

type Itransport = {

    accessibleTransportation: boolean;
    goundTransportation: boolean;
    parking: boolean;
    professionalDriver: boolean;
}

const whatsIncluded :
{
    accesibility: Iaccesibility;
    food: Ifood;
    general: Igeneral;
    transport: Itransport;

} = {

    accesibility: {
        assistants: false,
        equipmentRental: false,
        instructors: false  
    },

    food: {
        alcoholicBeverages: false,
        breakfast: false,
        dinner: false,
        lunch: false,
        snacks: false,
        softDrinks: false,
    },

    general: {
        admission: false,
        audioGuides: false,
        gratuities: false,
        insurance: false,
        parkEntrance: false,
        tourGuides: false,
        touristCityTaxes: false,

    },

    transport:{
        accessibleTransportation: false,
        goundTransportation: false,
        parking: false,
        professionalDriver: false,

    },
}

const whatsIncludedReducer = (
    state = whatsIncluded,
    action:any,
) => {
    switch(action.type) {
        case 'ACCESSIBILITY': {
            console.log(state)
            return {
                state,
            }
        }

        case 'FOOD': {
            //navigate(`/tour-operator/1/tour-completed/1/${action.payload}`)
            return {
                //...state.get(action.payload),
                ...state
                
            }
        }

        case 'GENERAL': {
            //navigate(`/tour-operator/1/tour-completed/1/${action.payload}`)
            return {
                //...state.get(action.payload),
                ...state
                
            }
        }

        case 'TRANSPORT': {
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

export default whatsIncludedReducer