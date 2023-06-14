import { useState } from 'react'
import './App.css'
import ListingPage from './Components/Listing'
import { Box } from '@chakra-ui/react'

function App() {

  return (
    <Box width={'90%'} margin={"auto"} color={"white"} position={'relative'}>
        <ListingPage/>
    </Box>
  )
}

export default App
