import { Button } from '@mui/material';
import React from 'react'

const Home = () => {

  return (
    <>
    <Button sx={{backgroundColor:"primary.darker", "&:hover": {backgroundColor: "#d87165"}}} variant='contained'>hola</Button>
    </>
  )
}

export default Home;