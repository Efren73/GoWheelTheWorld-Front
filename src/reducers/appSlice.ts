import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';
import { useAppSelector, useAppDispatch } from '../app/hooks';

import axios from "axios";

export interface  basicInformation 
{
    tour: {},
    /*tourName: string | null;
    id: number;
    duration: string | null;
    typeOfActivity: string[] | null;
    privateTour: boolean | null;
    document: string | null;
    description: string | null;
    groupTour: boolean | null;
    numberMaxTravelers: number | null;
    numberMinTravelers: number | null;
    photos: string | null;
    link: string | null;*/
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    url: string
} 
const initialState: basicInformation = {
    tour: {},
    /*tourName: null,
    id: 1,
    duration: null,
    typeOfActivity: null,
    privateTour: null,
    document: null,
    description: null,
    groupTour: null,
    numberMaxTravelers: null,
    numberMinTravelers: null,
    photos: null,
    link: null,*/
    status: 'idle',
    url : ""
};

export const fetchTours = createAsyncThunk('tour/fetchTours', async () => {
  const response = await axios.get()
  return response.data
})

export const updateTour = createAsyncThunk('tour/updateTour', async (initialPost:any) => {
  console.log(initialPost)
  const response = await axios.put(, initialPost)
  return response.data
})


export const appSlice = createSlice({
    name: 'Tour',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      changeState : (state, action:PayloadAction<any>) => {
        state.tour = {
          ...state.tour,
         ...action.payload
        }    
    },
    changeUrl : (state, action:PayloadAction<string>) => {
      state.url = action.payload
  },

  },

    extraReducers: (builder) => {
      builder
        .addCase(fetchTours.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchTours.fulfilled, (state, action) => {
          state.status = 'succeeded'
          state.tour = action.payload
          state.url = state.url

        })
        .addCase(fetchTours.rejected, (state) => {
          state.status = 'failed';
        })

        .addCase(updateTour.fulfilled, (state, action) => {
           state.tour = {
           ...state.tour,
          ...action.payload
         }    
      });
    },
});

export const { changeState, changeUrl } = appSlice.actions;
export const selectAllTours = (state:any) => state.appSlice.tour;
export const getTourStatus = (state: any) => state.appSlice.status;


//export const tourName = (state: RootState) => state.tourN.tourName;

export default appSlice.reducer;