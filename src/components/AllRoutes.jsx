import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SearchResult from './SearchResult'
import Feed from './Feed'
import VideoDetails from './VideoDetails'

const AllRoutes = () => {
  return (
     <Routes>
        <Route path='/' exact  element={<Feed/>}/>
        <Route path='/searchResult/:searchquery' element={<SearchResult/>}/>
        <Route path='/video/:id' element={<VideoDetails/>}/>
     </Routes>
     
     
  )
}

export default AllRoutes
