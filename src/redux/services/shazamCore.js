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
        getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
        getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
        getSongDetails: builder.query({ query: ( song_id ) => `/tracks/details/${song_id}` }),
        getSongRelated: builder.query({ query: ( song_id ) => `/tracks/related/${song_id}` }),
        getArtistDetails: builder.query({ query: ( artistId ) => `/artist/details/${artistId}` }),
    }),
});

export const { 
    useGetSongsQuery,
    useGetSongsByCountryQuery,
    useGetSongsBySearchQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
} = shazamCoreApi;