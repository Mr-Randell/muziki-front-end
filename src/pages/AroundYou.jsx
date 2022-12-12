import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { setActiveSong } from '../redux/features/playerSlice';

const AroundYou = () => {
  useState [country, setCountry] = useState("");
  useState [loading, setLoading] = useState(true);
  const { setActiveSong, isPlaying } = useSelector( (state) => state.player );

  console.log(country);

  useEffect( () => { 
    // at_btRwPZOzde0xOe16hEoQXuyLnIWRA
    axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_btRwPZOzde0xOe16hEoQXuyLnIWRA`)
    .then( (res) => setCountry( res?.data?.location?.country ) )
    .catch( (err) => console.log(err) )
    .finally( () => setLoading(false) );
  }, [country] );

  if (isFetching && loading) return <Loader title="Loading Songs around you..." />;

  if (error && country !== '') return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Around you <span className="font-black">{country}</span></h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default AroundYou
