import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';
export interface childrenPolicy {
    childrenAge:number|null;
    childrenAgePay: number|null;
    childrenAllowed: boolean|null;
    childrenHeight: number|null;
}  

const initialState: childrenPolicy={
    childrenAge:null,
    childrenAgePay:null,
    childrenAllowed: null,
    childrenHeight: null
}

export const childrenPolicy = createSlice({
    name: 'childrenPolicy',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      childrenAge: (state, action:PayloadAction<number>) => {
        state.childrenAge = action.payload;
      },

      childrenAgePay: (state, action:PayloadAction<number>) => {
        state.childrenAgePay = action.payload;
      },
      childrenAllowed: (state, action: PayloadAction<boolean>) => {
        state.childrenAllowed = action.payload;
      },

      childrenHeight: (state, action:PayloadAction<number>) => {
        state.childrenHeight = action.payload;
      },

    },
});

export const {childrenAge,childrenAllowed,childrenHeight,childrenAgePay} = childrenPolicy.actions;
export default childrenPolicy.reducer;