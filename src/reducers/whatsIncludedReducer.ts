import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';
type Iaccesibility = {

    assistants: boolean|null;
    equipmentRental: boolean|null;
    instructors: boolean|null
}

type Ifood = {

    alcoholicBeverages: boolean|null;
    breakfast: boolean|null;
    dinner: boolean|null;
    lunch: boolean|null;
    snacks: boolean|null;
    softDrinks: boolean|null;
}

type Igeneral = {

    admission: boolean|null; 
    audioGuides: boolean|null;
    gratuities: boolean|null;
    insurance: boolean|null;
    parkEntrance: boolean|null;
    tourGuides: boolean|null;
    touristCityTaxes: boolean|null;
}

type Itransport = {

    accessibleTransportation: boolean|null;
    goundTransportation: boolean|null;
    parking: boolean|null;
    professionalDriver: boolean|null;
}

export interface whatsIncluded 
{
    accesibility: Iaccesibility|null;
    food: Ifood|null;
    general: Igeneral|null;
    transport: Itransport|null;

} 
const initialState: whatsIncluded ={

    accesibility: {
        assistants: null,
        equipmentRental: null,
        instructors: null  
    },

    food: {
        alcoholicBeverages: null,
        breakfast: null,
        dinner: null,
        lunch: null,
        snacks: null,
        softDrinks: null,
    },

    general: {
        admission: null,
        audioGuides: null,
        gratuities: null,
        insurance: null,
        parkEntrance: null,
        tourGuides: null,
        touristCityTaxes: null,

    },

    transport:{
        accessibleTransportation: null,
        goundTransportation: null,
        parking: null,
        professionalDriver: null,

    },
}

export const whatsIncluded = createSlice({
    name: 'whatsInclude',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      accesibility: (state, action:PayloadAction<Iaccesibility>) => {
        state.accesibility = action.payload;
      },

      food: (state, action:PayloadAction<Ifood>) => {
        state.food = action.payload;
      },
      general: (state, action: PayloadAction<Igeneral>) => {
        state.general = action.payload;
      },

      transport: (state, action:PayloadAction<Itransport>) => {
        state.transport = action.payload;
      },

      
    },
});

export const {accesibility,food,general,transport} = whatsIncluded.actions;

export default whatsIncluded.reducer