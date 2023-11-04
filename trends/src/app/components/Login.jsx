import { Paper,Grid,Avatar,TextField,Button } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import React from 'react'
import Link from '@mui/material/Link';

const Login = () => {
  return (
    <>
    <Grid>

        <Paper
        sx={{
         
          display: 'flex',
          flexDirection: 'column',
          height: '70vh',
          padding: '20px',
          width: '30vw',
          margin: 'auto',
        }}  
        
        >
            <Grid
            align="center"
            >

            <Avatar sx={{
                bgcolor: deepOrange[500],
                }}>T</Avatar>
            <h2>SignIn</h2>

            </Grid>

            <TextField
            label="Username"
            placeholder="Enter Username"
            required
            />
            
            <TextField
            sx={{
                marginTop: '20px',
            }}
            label="Password"
            placeholder="Enter Password"
            type='password'
            required
            />

            <Link
            href='/'
            >

            <Button
            type='submit'
            color='primary'

            sx={
                {
                    marginTop: '20px',
                    
                }
            }
           
              
            fullWidth
            >
                SignIn
            </Button>
            </Link>

       

           
           
        </Paper>
       

    </Grid>
        
        
    </>
    
  )
}

export default Login