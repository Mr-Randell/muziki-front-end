import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import FiSearch from "react-icons/fi"



const SearchBar = () => {

  const navigate =useNavigate();
  const [searchTerm, setSearchTerm]= useState('');


  const handleSubmit =(e)=>{
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };


  return (
    <form onSubmit={handleSubmit} autoComplete ="off" className="p-2 text-gray-400 focus-within:text-gray-600">
      <label htmlFor="search-field" className="sr-only">
        Search all files 
      </label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch aria-hidden="true" className="w-5 h-5 ml-4" />
        

      </div>


    </form>
  
  )
}

export default SearchBar
