import React, {useState} from 'react'
import { Helmet } from 'react-helmet';
import axios  from 'axios'
import {
  Box,
  Button,
  TextField,
  Typography,
  Link
} from '@material-ui/core';


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChangeSenha = (event) => {
    setPassword(event.target.value)

  }
  const onChangeEmail = (event) => {
    setEmail(event.target.value)

  }

  const submitForm = async (event) => {
    event.preventDefault()
    if ( email && password ){
      const result = await axios.post("https://run.mocky.io/v3/001a846b-e5df-4fb7-8054-38fe9cd9645e", {email, password})
      console.log(result)
      if (result.status === 200){
        const {data:{userName}} = result  
        localStorage.setItem('userName', userName )
        window.location="https://pagar.me/"
      }
    }
  }


  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <form
        onSubmit={submitForm}
        style={{
          'backgroundColor': 'background.default',
          'display': 'flex',
          'position': 'relative',
          'flexDirection': 'column',
          'height': '100%',
          'widht':'100vw',
          'justifyContent': 'center'
        }}
      >
        <Box
          sx={{
            backgroundColor: 'background.default',
            display: 'inline-grid',
            flexDirection: 'column',
            widht:'100vw',
            justifyContent: 'center',
          }}
        >
          <Typography
            sx={{
              color:'color.primary',
              textTransform:'uppercase',
              textAlign: 'center',
              marginBottom: '20px'
            }}
            variant="h4"
          >
            Acessar minha conta
          </Typography>
          <TextField
            sx={{
              width:'400px',
              '&:hover': {
                color: 'rgb(101, 163, 0)',
              },
            }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            placeholder="exemplo@email.com" 
            onChange={onChangeEmail}
          />
          <TextField
            sx={{
              marginTop:'20px',
              '&:hover': {
                borderColor: 'rgb(101, 163, 0)',
              },
            }}
            label="Senha"
            variant="outlined"
            placeholder="********"
            onChange={onChangeSenha}
            multiline
          />
          <Link>
            <Typography
              variant="h6"             
              sx={{
                color:'color.primary',
                top: '10px',
                '&:hover': {
                  color: 'rgb(101, 163, 0)',
                },
                cursor: 'pointer'

              }}
            >
              Esqueci minha senha
            </Typography>
          </Link>
          <Button 
          sx={{
            marginTop:'30px',
            backgroundColor:'rgb(101, 163, 0)',
            height: '40px',
            color: 'text.tertiary',
            '&:focus': {
              backgroundColor: 'rgb(101, 163, 0)',
            },
            '&:hover': {
              backgroundColor: 'rgb(139, 214, 0)',
            }
          }}
          variant="contained"
          type="submit" 
          >
            Entrar
          </Button>
        </Box>
      </form>

    </>
  );
};

export default Login;
