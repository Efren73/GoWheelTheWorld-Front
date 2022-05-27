import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';
export type {IQuestion}

type IQuestion = {
    question: string | null;
    awnser: boolean | string | null;
}

export interface accesibility {
    assistance: IQuestion[] |null;
    equipment: IQuestion[] | null;
    places: IQuestion[] | null;
    restrooms: IQuestion[] |null;
    transportation: IQuestion[] | null;

} 
const initialState: accesibility ={
    assistance: [],
    equipment: [
        {
            question:null,
            awnser: null,
        },
    ],
    places: [
        {
            question:null,
            awnser: null,
        },
    ],
    restrooms: [
        {
            question:null,
            awnser: null,
        },
    ],
    transportation: [
        {
            question:null,
            awnser: null,
        },
    ],

}

export const accesibility = createSlice({
    name: 'accesibility',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      assistance: (state, action:PayloadAction<IQuestion[]>) => {
        state.assistance = action.payload;
      },

      equipment: (state, action:PayloadAction<IQuestion[]>) => {
        state.equipment = action.payload;
      },
      places: (state, action: PayloadAction<IQuestion[]>) => {
        state.places = action.payload;
      },

      restrooms: (state, action:PayloadAction<IQuestion[]>) => {
        state.restrooms = action.payload;
      },

      transportation: (state, action:PayloadAction<IQuestion[]>) => {
        state.transportation = action.payload;
      },

    },
});

export const {assistance,equipment,places,restrooms,transportation} = accesibility.actions;

export default accesibility.reducer;