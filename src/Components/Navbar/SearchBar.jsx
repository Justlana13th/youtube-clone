import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

  const [inputSearch, setInputSearch] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputSearch);
    navigate(`/search/${inputSearch}`);
    setInputSearch('');
  }

  return (
    <form className='relative' onSubmit={submitHandler}>
        <input onChange={(e) => {setInputSearch(e.target.value)}} value={inputSearch} placeholder='Search' type="text" className='py-1 px-2 text-sm rounded-full outline-none w-50 sm:w-80' style={{borderWidth: "1px"}}/>
        <button type='submit'>
            <MagnifyingGlassIcon className='h-6 text-gray-400 absolute top-0.5 right-3'/>
        </button>
    </form>
  )
}

export default SearchBar