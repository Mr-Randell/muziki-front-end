import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetGenreSongsQuery } from "../redux/services/shazamCore";

const Discover = () => {
    const { data, isFetching, error } = useGetGenreSongsQuery;
    const genreTitle = "Pop";
    const dispatch=useDispatch();
    const{ activeSong,isPlaying } =useSelector((state)=>state.player);


    <div className="flex flex-wrap sm:justify-start justify-center gap-8">
      {[1,2,3,4,5,6,7,9,10].map((song,i ) =>(
        <SongCard
        key ={song.key}
        song={song}
        isPlaying={isPlaying}
        activeSong={activeSong}
        i={i}
       // data ={data}
        />
      ))}

    if (isFetching) return <Loader title="Loading Songs..." />;
    if (error) return <Error />;

    // console.log(data);
  return (
    // latest code content for Discover
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
            Discover {genreTitle}
        </h2>
        <select
        onChange={ () => {} }
        value=""
        className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
            { genres.map( ( genre ) => <option key={ genre.value } value={ genre.value }>{ genre.title }</option> ) }
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8 text-white">
        {/* add in 'data?' instead of the dummy array data after endpoint has been confirmed */}
        { data?.map( ( song, i ) => ( 
            <SongCard 
                key={ song.key }
                song={ song }
                isPlaying={isPlaying}
                activeSong={activeSong}
                i={ i }
            />
         ) ) }
      </div>
    </div>
  )
}

export default Discover
