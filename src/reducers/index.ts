import {combineReducers} from 'redux';

import intineraryReducer from './intineraryReducer'
import  accesibilityReducer  from './accesibilityReducer';
import basicInformationReducer from './basicInformationReducer';
import childrenPolicyReducer from './childrenPolicyReducer';
import faqsReducer from './faqsReducer';
import whatsIncludedReducer from './whatsIncludedReducer';

const rootReducer = combineReducers({
    intinerary: intineraryReducer,
    accesibility: accesibilityReducer,
    basicInformation: basicInformationReducer,
    childrenPolicy: childrenPolicyReducer,
    faqs: faqsReducer,
    whatsIncluded: whatsIncludedReducer
});

export default rootReducer;