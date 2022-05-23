export{}

const childrenPolicy: {
    childrenAge:number;
    childrenAgePay: number;
    childrenAllowed: boolean;
    childrenHeight: number;
} = {
    childrenAge:0,
    childrenAgePay:3,
    childrenAllowed: true,
    childrenHeight: 1
}


const childrenPolicyReducer = (
    state = childrenPolicy,
    action:any,
) => {
    switch(action.type) {
        case 'CHILDRENAGE': {
            return {
                
            }
        }

        case 'CHILDRENAGEPAY': {
            //navigate(`/tour-operator/1/tour-completed/1/${action.payload}`)
            return {
                //...state.get(action.payload),
                ...state
                
            }
        }

        case 'CHILDRENALLOWED': {
            //navigate(`/tour-operator/1/tour-completed/1/${action.payload}`)
            return {
                //...state.get(action.payload),
                ...state
                
            }
        }

        case 'CHILDRENHEIGHT': {
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

export default childrenPolicyReducer