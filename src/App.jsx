import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feed from './Components/Feed'
import Navbar from './Components/Navbar/Navbar'
import SearchFeed from './Components/SearchFeed'
import VideoDetail from './Components/VideoDetail'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path='/video/:id' element={<VideoDetail/>}/>
        <Route path='/search/:searchInput' element={<SearchFeed/>}/>
      </Routes>
    </>
  )
}

export default App