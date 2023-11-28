import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// api_key=live_OJEpgxCqXW6ABfmA3CChKQF2SpSPdEZNDdQZIV23AIgR6H3OHMd4n8wc5lPQJKmx
const DOGS_API_KEY = 'live_OJEpgxCqXW6ABfmA3CChKQF2SpSPdEZNDdQZIV23AIgR6H3OHMd4n8wc5lPQJKmx'

interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  }
}

export const apiDogsSlice = createApi({
  reducerPath: 'api',  //to say that where we keep/put the state data,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thedogapi.com/v1",
    prepareHeaders(headers) {
      headers.set('x-api-day', DOGS_API_KEY); // x-api-day is required from this api, based on their docs

      return headers;
    }
  }),
  endpoints(builder) {
    return {
      fetchBreads: builder.query<Breed[], number|void>({
        query(limit = 10){
          return `/breeds?limit=${limit}`;
        },
      }),
    };
  }
})

export const { useFetchBreadsQuery } = apiDogsSlice
