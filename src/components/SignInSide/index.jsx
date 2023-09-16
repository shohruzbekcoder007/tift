import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { LoaderWrapper, LoginLogo } from './styles';
import { CircularProgress, Snackbar, Typography } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { token_url, user_me } from '../../utils/API_urls'
import { getRole, getToken } from './requests'
import { setUser } from '../../redux/action/userActions'
import { getRole as getRoleUser } from '../../utils/getRole'

const LoadingPage = () => {
  return (
    <LoaderWrapper>
      <CircularProgress color="success" />
    </LoaderWrapper>
  )
}

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Copyright(props) {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: "10px",
        right: "10px"
      }}
    >
      <Typography variant="body2" color="text.secondary" align="center" {...props}>

        <a href="https://www.ictacademy.uz/" target="_blank">
          © ICT JOBS
        </a>{' tomonidan ishlab chiqildi'}
      </Typography>
    </Box>
  );
}

export default function SignInSide() {

  let navigate = useNavigate()
  const dispatch = useDispatch()
  const [pageLoading, setPageLoading] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)
  const [haveatoken, setHaveatoken] = useState(false)
  const user = useSelector(state => state.user)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  const successfulFunctionGetToken = (response) => {
    sessionStorage.setItem('access_token', response.data.access)
    sessionStorage.setItem('refresh_token', response.data.refresh)
    setHaveatoken(true)
    getRole(user_me, successfulFunctionGetRole, errorFunctionGetRole)
  }

  const errorFunctionGetToken = (error) => {
    // console.log({ errorMessage: error.toString() });
    // console.error("There was an error!", error);
    setPageLoading(false)
    setOpenAlert(true)
  }

  const successfulFunctionGetRole = (response) => {
    dispatch(setUser(response.data))
    const user_role = getRoleUser(response.data)
    setPageLoading(false)
    if (user_role == "admin") {
      navigate(`/${user_role}/users`)
    } else {
      navigate(`/${user_role}/dashboard`)
    }
  }

  const errorFunctionGetRole = (error) => {
    // console.log({ errorMessage: error.toString() });
    // console.error("There was an error!", error);
    setPageLoading(false)
    setOpenAlert(true)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    getToken(token_url, {
      username: data.get('username'),
      password: data.get('password'),
    }, successfulFunctionGetToken, errorFunctionGetToken)
    setPageLoading(true)
  }

  useEffect(() => {
    getRole(user_me, successfulFunctionGetRole, errorFunctionGetRole)
  },[])

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      {pageLoading ? <LoadingPage /> : <></>}
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {haveatoken ? <p>Foydalanuvchi topilmadi</p> : <p>Login yoki password noto'g'ri kiritildi</p>}
        </Alert>
      </Snackbar>
        <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square>
          <Box
            sx={{
            //   my: 8,
            //   mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: "100vh",
            padding: "20px"
          }}
        >
          <LoginLogo>
            <img src={require('../../imgs/main_logo.png')} alt="main logo" />
          </LoginLogo>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
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
              sx={{ mt: 3, mb: 2 , p: "10px 0 "}}
            >
              Tizimga Kirish
            </Button>
            <Typography variant="body2" color="text.secondary" align="center">
              Savol va takliflar uchun: <a href="https://t.me/creditsystembot">Bog'laning</a>
            </Typography>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>

      
    </Grid>
  );
}