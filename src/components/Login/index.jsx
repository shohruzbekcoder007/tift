import * as React from 'react' 
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useNavigate } from "react-router-dom"
import axios, { headerConfig } from '../../utils/baseUrl'
import { token_url, user_me } from '../../utils/API_urls'

const getToken = (url, data, successfulFunction, errorFunction) => {
  axios.post(
    url,
    data
  )
  .then((response) => {
    successfulFunction(response)
  })
  .catch((error) => {
    errorFunction(error)
    
  });
}

const getRole = (url, successfulFunction, errorFunction) => {
  axios.get(url, {
    headers: headerConfig(),
  }).then(response => {
    successfulFunction(response.data)
  }).catch((error) => {
    errorFunction(error)
  })
}

export default function Login() {

  let navigate = useNavigate()

  const successfulFunctionGetToken = (response) => {
    sessionStorage.setItem('access_token',response.data.access)
    getRole(user_me, successfulFunctionGetRole, errorFunctionGetRole)
  }

  const errorFunctionGetToken = (error) => {
    console.log({ errorMessage: error.toString() });
    console.error("There was an error!", error);
  }

  const successfulFunctionGetRole = (response) => {
    if(response.role){
      if(response.role[0] === "student"){
        navigate('/student/dashboard')
      }
    }
  }

  const errorFunctionGetRole = (error) => {
    console.log({ errorMessage: error.toString() });
    console.error("There was an error!", error);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    getToken(token_url, {
      username: data.get('username'),
      password: data.get('password'),
    }, successfulFunctionGetToken, errorFunctionGetToken)
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main', fill: "#fff", p: 1 }}>
          <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LockOutlinedIcon"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></svg>
          </Avatar>
          <Typography component="h1" variant="h5">
            Kirish
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="User name"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Tizimga Kirish
            </Button>
          </Box>
        </Box>
      </Container>
  );
}