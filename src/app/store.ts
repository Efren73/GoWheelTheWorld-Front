import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import basicInformationReducer  from '../reducers/basicInformationReducer';
import childrenPolicyReducer  from '../reducers/childrenPolicyReducer';
import faqsReducer  from '../reducers/faqsReducer';
import intineraryReducer  from '../reducers/intineraryReducer';
import whatsIncludedReducer  from '../reducers/whatsIncludedReducer';
import accesibilityReducer  from '../reducers/accesibilityReducer';


export const store = configureStore({
  reducer: {
    basicInformation: basicInformationReducer,
    accesibility: accesibilityReducer,
    childrenPolicy: childrenPolicyReducer,
    faqs: faqsReducer,
    intinerary:  intineraryReducer,
    whatsIncluded: whatsIncludedReducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

