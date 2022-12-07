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
        prepareHeader: (headers) => {
            headers.set( "Content-Type", "Application/json" );
            return headers;
        },
    }),
    endpoints: ( builder ) => ({ 
        // all endpoints go here
        getGenreSongs: builder.query({ query: () => "/genre/:1/songs" }),
     })
});

export const { 
    useGetGenreSongsQuery,
} = shazamCoreApi;