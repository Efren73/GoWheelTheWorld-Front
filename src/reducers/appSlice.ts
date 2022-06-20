import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from "axios";


let url = '';
let url2 = '';

export const links = ((data: any) =>{
  url = `https://api-things-to-do.herokuapp.com/tour-operator/one-tour/${data}`
  url2 =`https://api-things-to-do.herokuapp.com/tour-operator/update-tour/${data}`
})

export interface  basicInformation 
{
    tour: {},
    areaEdited: string,
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
} 
const initialState: basicInformation = {
    tour: {},
    areaEdited: '',
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
};

export const fetchTours = createAsyncThunk('tour/fetchTours', async () => {
  const response = await axios.get(url)
  return response.data
})

export const updateTour = createAsyncThunk('tour/updateTour', async (initialPost:any) => {
  console.log(initialPost)
  const response = await axios.put(url2, initialPost)
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
      changeAreaEdited: (state, action: PayloadAction<any>) => {
        state.areaEdited = action.payload
      }
  },

    extraReducers: (builder) => {
      builder
        .addCase(fetchTours.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchTours.fulfilled, (state, action) => {
          state.status = 'succeeded'
          state.tour = action.payload

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

export const { changeState, changeAreaEdited } = appSlice.actions;
export const selectAllTours = (state:any) => state.appSlice.tour;
export const getTourStatus = (state: any) => state.appSlice.status;
export const selectAreaEdited = (state: any) => state.appSlice.areaEdited;

//export const tourName = (state: RootState) => state.tourN.tourName;

export default appSlice.reducer;