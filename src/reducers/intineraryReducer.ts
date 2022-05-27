import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';

type IStops = {

    stopDuration: string|null;
    stopName: string|null;
}

export interface intinerary 
{
    endPoint: string|null;
    languages: string[]|null;
    meetPoint: string|null;
    restrictions: string[]|null;
    stops: IStops|null;
    
}

const initialState: intinerary = {

    endPoint: null,
    languages:null,
    meetPoint: null,
    restrictions:null,
    stops:{
        stopDuration:null,
        stopName:null
    }
}

export const intinerary = createSlice({
    name: 'intinerary',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      endPoint: (state, action:PayloadAction<string>) => {
        state.endPoint = action.payload;
      },

      languages: (state, action:PayloadAction<string[]>) => {
        state.languages = action.payload;
      },
      meetPoint: (state, action: PayloadAction<string>) => {
        state.meetPoint = action.payload;
      },

      restrictions: (state, action:PayloadAction<string[]>) => {
        state.restrictions = action.payload;
      },

      stops: (state, action:PayloadAction<IStops>) => {
        state.stops = action.payload;
      },

      
    },
});

export const {endPoint,languages,meetPoint,restrictions,stops}= intinerary.actions;
export default intinerary.reducer