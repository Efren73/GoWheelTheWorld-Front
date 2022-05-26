import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import  basicInformation  from '../reducers/basicInformationReducer';

export const store = configureStore({
  reducer: {
    basicInfo: basicInformation,
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

