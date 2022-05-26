import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';
export interface  basicInformation 
{
    tourName: string | null;
    duration: string | null;
    typeOfActivity: string[] | null;
    privateTour: boolean | null;
    document: string | null;
    description: string | null;
    groupTour: boolean | null;
    numberMaxTravelers: number | null;
    numberMinTravelers: number | null;
    photos: string | null;
    link: string | null;

} 
const initialState: basicInformation = {
    tourName: null,
    duration: null,
    typeOfActivity: null,
    privateTour: null,
    document: null,
    description: null,
    groupTour: null,
    numberMaxTravelers: null,
    numberMinTravelers: null,
    photos: null,
    link: null
};

export const basicInformation = createSlice({
    name: 'basicInformation',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      tourName: (state, action:PayloadAction<string>) => {
        state.tourName = action.payload;
      },

      duration: (state, action:PayloadAction<string>) => {
        state.duration = action.payload;
      },
      typeOfActivity: (state, action: PayloadAction<string[]>) => {
        state.typeOfActivity = action.payload;
      },

      privateTour: (state, action:PayloadAction<boolean>) => {
        state.privateTour = action.payload;
      },

      docuemnt: (state, action:PayloadAction<string>) => {
        state.document = action.payload;
      },

      description: (state, action:PayloadAction<string>) => {
        state.description = action.payload;
      },

      groupTour: (state, action:PayloadAction<boolean>) => {
        state.groupTour = action.payload;
      },

      numberMaxTravelers: (state, action:PayloadAction<number>) => {
        state.numberMaxTravelers = action.payload;
      },

      numberMinTravelers: (state, action:PayloadAction<number>) => {
        state.numberMinTravelers = action.payload;
      },

      photos: (state, action:PayloadAction<string>) => {
        state.photos = action.payload;
      },

      link: (state, action:PayloadAction<string>) => {
        state.link = action.payload;
      },
    },
});

export const { tourName, duration, typeOfActivity, privateTour, docuemnt, description, groupTour, numberMaxTravelers, numberMinTravelers, photos, link  } = basicInformation.actions;
//export const tourName = (state: RootState) => state.tourN.tourName;


export default basicInformation.reducer;