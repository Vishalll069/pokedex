import { useState } from 'react'
import './App.css'
import ListingPage from './Components/Listing'
import { Box } from '@chakra-ui/react'
import { Navbar } from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import SearchPage from './Components/SearchPage'
import { DetailsPage } from './Components/DetailsPage'
import { BookmarkPage } from './Components/BookmarkPage'

function App() {

  return (
    <Box color={"white"} position={'relative'}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ListingPage/>} />
        <Route path='/bookmarks' element={<BookmarkPage/>} />
        <Route path='/search' element={<SearchPage/>} />
        <Route path='/pokemon/:name' element={<DetailsPage/>} />
      </Routes>
    </Box>
  )
}

export default App
