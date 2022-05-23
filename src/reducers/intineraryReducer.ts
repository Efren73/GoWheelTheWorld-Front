type IStops = {

    stopDuration: string;
    stopName: string;
}

const intinerary : 
{
    endPoint: string;
    languages: string[];
    meetPoint: string;
    restrictions: string[];
    stops: IStops;
    
} = {

    endPoint:"",
    languages:[""],
    meetPoint: "",
    restrictions:[""],
    stops:{
        stopDuration:"",
        stopName:""
    }
}

const intineraryReducer = (
    state = intinerary,
    action:any,
) => {
    switch(action.type) {
        case 'ENDPOINT': {
            console.log(state)
            return {
                state,
            }
        }

        case 'LANGUAGES': {
            //navigate(`/tour-operator/1/tour-completed/1/${action.payload}`)
            return {
                //...state.get(action.payload),
                ...state
                
            }
        }

        case 'MEETPOINT': {
            //navigate(`/tour-operator/1/tour-completed/1/${action.payload}`)
            return {
                //...state.get(action.payload),
                ...state
                
            }
        }

        case 'RESTRICTIONS': {
            //navigate(`/tour-operator/1/tour-completed/1/${action.payload}`)
            return {
                //...state.get(action.payload),
                ...state
                
            }
        }

        case 'STOPS': {
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

export default intineraryReducer