import React from 'react'
import { Link } from 'react-router-dom'
import {logo} from '../../Utils/utility'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div className='bg-white w-screen flex px-4 justify-between items-center sticky top-0'>
        <Link to={'/'}>
            <img src={logo} alt="logo" className='h-10'/>
        </Link>
        <SearchBar/>
    </div>
  )
}

export default Navbar