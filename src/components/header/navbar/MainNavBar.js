import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core';
import Logo from '../../../utils/Logo';
import {
  Box,
  Button,
  Container
} from '@material-ui/core';



const MainNavbar = (props) => {
  const buttons = ["Sobre","Soluções","Developers","Suporte"]

  return(
    <AppBar
    elevation={0}
    {...props}
    >
      <Toolbar sx={{ height: 64 }}>
        <Box display='contents' position='relative'>
          <Logo />
          <Box sx={{position: 'absolute', left:'55%'}}>
          { buttons.map((buttonText, index) => {
              return <Button 
              sx={{
                color: 'color.primary',
                '&:hover':{
                  color:'color.primary',
                  borderWidth: '0px 0px 2px 0px',
                  borderColor: 'rgb(101, 163, 0)',
                  borderStyle: 'solid',
                  borderRadius:'0px',
                }
              }} 
              key={index+5} 
              disableElevation
              >
                        <p style={{textTransform:"capitalize", display:"inline-block"}}>{buttonText}</p>
                    </Button>
              }
            )}

          </Box>
          <Button sx={{
            color:'white',
            border: '3px solid rgb(101, 163, 0)', 
            backgroundColor: 'rgb(101, 163, 0)', 
            position: 'absolute', 
            left:'80%',
            '&:hover':{
              color:'green', 
              border: '3px solid rgb(101, 163, 0)'

            }
            }}>
            <p style={{
              textTransform:"Uppercase", 
              display:"inline-block"
              }}>
                Quero Usar
            </p>
          </Button>
          <Button sx={{
            width:'120px',
            color:'green', 
            border: '3px solid rgb(101, 163, 0)', 
            position: 'absolute', 
            left:'90%',
            '&:hover':{
              color:'white',
              border: '3px solid rgb(101, 163, 0)', 
              backgroundColor: 'rgb(101, 163, 0)', 
            }
            }}>
            <p style={{textTransform:"Uppercase", display:"inline-block"}}>Login</p>
          </Button> 
        </Box>
      </Toolbar>
    </AppBar>
  )
};

export default MainNavbar;