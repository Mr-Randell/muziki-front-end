import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";

const Discover = () => {
  return (
    <div className="flex flex-col">

    <div className="flex flex-wrap sm:justify-start justify-center gap-8">
      {[1,2,3,4,5,6,7,9,10].map((song,i) =>(
        <SongCard
        key ={song.key}
        song={song}
        i={i}
        />
      ))}

    </div>
      
    </div>
  )
}

export default Discover
