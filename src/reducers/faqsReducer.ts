import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';
import { IQuestion } from "./accesibilityReducer";

export interface  faqs {
    faqs: IQuestion[] |null;
}  

const initialState: faqs = {
    faqs: [
        {
            question:null,
            awnser: null,
        }
    ]
};


export const faqs = createSlice({
    name: 'faqs',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      faqsR: (state, action:PayloadAction<IQuestion[]>) => {
        state.faqs = action.payload;
      },
    },
});

export const {faqsR} = faqs.actions
export default faqs.reducer;