import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import  basicInformationReducer  from '../reducers/appSlice';



export const store = configureStore({
  reducer: {
    appSlice: basicInformationReducer,
    //accesibility: accesibilityReducer,
    //childrenPolicy: childrenPolicyReducer,
    //faqs: faqsReducer,
    //intinerary:  intineraryReducer,
    //whatsIncluded: whatsIncludedReducer
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

