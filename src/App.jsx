import { useState } from 'react'
import './App.css'
import ListingPage from './Components/Listing'
import { Box } from '@chakra-ui/react'
import { Navbar } from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import SearchPage from './Components/SearchPage'
import { DetailsPage } from './Components/DetailsPage'

function App() {

  return (
    <Box color={"white"} position={'relative'}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ListingPage/>} />
        <Route path='/about' element={<h1>about</h1>} />
        <Route path='/search' element={<SearchPage/>} />
        <Route path='/pokemon/:name' element={<DetailsPage/>} />
      </Routes>
    </Box>
  )
}

export default App
