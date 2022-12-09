import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({ 
    reducerPath: "shazamCoreApi",
    baseQuery: fetchBaseQuery({     
        baseUrl: "http://localhost:3000",
        prepareHeaders: (headers) => {
            headers.set( "Content-Type", "application/json" );
            return headers;
        },
    }),
    endpoints: ( builder ) => ({ 
        // all endpoints go here
        getSongs: builder.query({ query: () => "/songs" }),
    }),
});

export const { 
    useGetSongsQuery,
} = shazamCoreApi;