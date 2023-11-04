import React from 'react'
import { CssBaseline,Grid } from '@mui/material'
import Maps from './components/Maps'
import TrendingVideos from '../app/trending/page'




export default function Home() {
  return (
   <>
    <CssBaseline />
    <Grid container spacing ={3}  style={{width:'101vw'}}>
      
      <Grid 
      sx={{
        width: '100%',
        height: '102vh',
        marginTop: '10px',
        backgroundColor: '#F5FCCD',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '10px',
        
      }}
      >
        <Maps/>
     
      </Grid>
      <Grid>
      <TrendingVideos/>
      </Grid>
    
      

     

    </Grid>
    
   </>
  )
}
