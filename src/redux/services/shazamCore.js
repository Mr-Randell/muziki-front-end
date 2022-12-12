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
        getSongDetails: builder.query({ query: ( song_id ) => `/tracks/details/${song_id}` }),
        getSongRelated: builder.query({ query: ( song_id ) => `/tracks/related?track_id=${song_id}` }),
        getArtistDetails: builder.query({ query: ( artistId ) => `/artist/details?artist_id=${artistId}` }),
    }),
});

export const { 
    useGetSongsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
} = shazamCoreApi;