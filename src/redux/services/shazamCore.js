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
        getSongs: builder.query({ query: () => "/charts/world" }),
        getSongDetails: builder.query({ query: ( songid ) => `/tracks/details?track_id=${songid}` }),
        getSongRelated: builder.query({ query: ( songid ) => `/tracks/related?track_id=${songid}` }),
        getArtistDetails: builder.query({ query: ( artistId ) => `/artist/details?artist_id=${artitId}` }),
    }),
});

export const { 
    useGetSongsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
} = shazamCoreApi;