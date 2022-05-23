import { IQuestion } from "./accesibilityReducer";

const faqs: {
    faqs: IQuestion[]
} = {
    faqs: [
        {
            question:"",
            awnser: "",
        }
    ]
}

const faqsReducer = (
    state = faqs,
    action:any,
) => {
    switch(action.type) {
        case 'FAQS': {
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

export default faqsReducer