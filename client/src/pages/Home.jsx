import React from 'react'
import { Box, Typography } from '@mui/material'
import UserMenu from '../components/UserMenu'


const Home = () => {

  return (
    <>
      <Typography variant='h4' sx={{ mb: '20px' }}>Note App</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'right', mb: '10px' }}>
        <UserMenu />
      </Box>
    </>
  )
}

export default Home
