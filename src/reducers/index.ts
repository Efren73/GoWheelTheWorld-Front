import {combineReducers} from 'redux';


import basicInformationReducer from './appSlice';


const rootReducer = combineReducers({
    basicInformation: basicInformationReducer,
});

export default rootReducer;