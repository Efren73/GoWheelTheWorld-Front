import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
/*
export const basicInformationAPI = createApi({
    reducerPath: 'basicInformationAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/tour-operator'
    }),

    endpoints: (builder) => ({
        getTour: builder.query<, string>({
            query: (idTour) => ({ url: `/one-tour/${idTour}` })
        })
    })
});

export const useGetTourQuery = basicInformationAPI.endpoints.getTour.useQuery;*/

/*
export const apiUpdateTour = createAsyncThunk (
    'basicInformation/tourName/apiUpdateTour', (payload) => {
    return axios.put(`http://localhost:3000/update-tour/XVecq3ljaGtPSd9vn4YC`, payload);
  })

export function apiGetAllTours(payload) {
    const fetchData = async () => {
        try {
            const url = `http://localhost:3000/all-tours/${payload.id}`;
            const response = await fetch(url);
            const json = await response.json();
            const data = {
                name: json.name,
                exp: json.base_experience,
                photo: json.sprites.front_default,
            };
        } catch (error) {
            console.log('error', error);
        }
    };
    return fetchData;
}

export function apiUpdateTour(payload) {
    const fetchData = async () => {
        try {
            const url = `http://localhost:3000/tour-operator/update-tour/${payload.id}`;
            const response = await fetch(url);
            const json = await response.json();
            const data = {
                payload,
            };
        } catch (error) {
            console.log('error', error);
        }
    };
    return fetchData;
}

const fetchBasicInformation = createAsyncThunk(
    'basicInformation/tourName',
    // Declare the type your function argument here:
    async (tourID: string) => {
      const response = await fetch(`http://localhost:3000/all-tours/${tourID}`)
      // Inferred return type: Promise<MyData>
      return (await response.json());
    }
  )*/

/*
const fetchBasicInformation = createAsyncThunk(
    'basicInformation/tourName',
    async (tourID: string, thunkAPI) => {
        const response = await fetch(`http://localhost:3000/all-tours/${tourID}`);
        return (await response.json());
    }
)

const fetchBasicInformation = createAsyncThunk(
    'basicInformation/tourName', () => {
    return axios
        .get(`http://localhost:3000/update-tour/LwCvn4yfT91Y4ekEaGlh`)
        .then((response: any) => response.data.map((tour: any) => tour.id))
    }
)*/


// /** Create one faq */
// export function apiCreateFaq(payload) {
//     return axios.post(`/questions`, payload);
// }

// /** Update one faq */
// export function apiUpdateFaq(payload) {
//     return axios.put(`/questions/${payload.id}`, payload);
// }

// /** Delete one faq */
// export function apiRemoveFaq(faqId) {
//     return axios.delete(`/questions/${faqId}`);
// }