import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const options = {  
//     method: "GET",
//     headers: {
//         "Content-Type": "Application/json"
//     }
// };

// fetch("http://localhost:3000/genre/:1/songs", options)
// .then(( response ) => response.json())
// .then(( response ) => console.log(response))
// .catch(( err ) => console.log(err));

export const shazamCoreApi = createApi({ 
    reducerPath: "shazamCoreApi",
    baseQuery: fetchBaseQuery({     
        baseUrl: "http://localhost:3000",
        // baseUrl: "https://shazam-core.p.rapidapi.com/v1",
        prepareHeaders: (headers) => {
            headers.set( "Content-Type", "application/json" );
            // headers.set( "X-RapidAPI-Key", "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA" );
            return headers;
        },
    }),
    endpoints: ( builder ) => ({ 
        // all endpoints go here
        getSongs: builder.query({ query: () => "/songs" }),
        getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
        // getTopCharts: builder.query({ query: () => "/charts/world" }),
    }),
});

export const { 
    useGetSongsQuery,
    useGetSongsBySearchQuery,
    // useGetTopChartsQuery,
} = shazamCoreApi;