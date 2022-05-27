import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import  basicInformationReducer  from '../reducers/basicInformationReducer';
import  childrenPolicyReducer  from '../reducers/childrenPolicyReducer';
import  faqsReducer  from '../reducers/faqsReducer';
import  intineraryReducer  from '../reducers/intineraryReducer';
import  whatsIncludedReducer  from '../reducers/whatsIncludedReducer';
import  accesibilityReducer  from '../reducers/accesibilityReducer';


export const store = configureStore({
  reducer: {
    basicInformation: basicInformationReducer,
    accesibility: accesibilityReducer,
    childrenPolicy: childrenPolicyReducer,
    faqs: faqsReducer,
    intinerary:  intineraryReducer,
    whatsIncluded: whatsIncludedReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

