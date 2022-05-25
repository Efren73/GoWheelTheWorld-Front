export type {IQuestion}

type IQuestion = {
    question: string;
    awnser: boolean | string;
}

const accesibility : {
    assistance: IQuestion[];
    equipment: IQuestion[];
    places: IQuestion[];
    restrooms: IQuestion[];
    transportation: IQuestion[];

} = {
    assistance: [],
    equipment: [
        {
            question:"",
            awnser: true,
        },
    ],
    places: [
        {
            question:"",
            awnser: true,
        },
    ],
    restrooms: [
        {
            question:"",
            awnser: true,
        },
    ],
    transportation: [
        {
            question:"",
            awnser: true,
        },
    ],

}

const accesibilityReducer = (
    state = accesibility,
    action:any,
) => {
    switch(action.type) {
        case 'ASSISTANCE': {
            return {
                
            }
        }

        case 'EQUIPMENT': {
            return {
                
            }
        }

        case 'PLACES': {
            return {
                
            }
        }

        case 'RESTROOMS': {
            return {
                
            }
        }

        case 'TRANSPORTATION': {
            return {
                
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
};

export default accesibilityReducer