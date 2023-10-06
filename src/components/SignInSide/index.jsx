import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { LoaderWrapper, LoginLogo } from './styles';
import { CircularProgress, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, Snackbar, Typography } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import token_url, { user_me } from '../../utils/API_urls'
import { getRole, getToken } from './requests'
import { setUser } from '../../redux/action/userActions'
import { getRole as getRoleUser } from '../../utils/getRole'
import VideoPlayer from "react-background-video-player";
import login_pahe_img from '../../imgs/tift.gif'
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
// import zIndex from '@mui/material/styles/zIndex';

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
        right: "10px",
        float: 'left'
      }}
    >
      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5, display: "flex", justifyContent: "center", width: "250px", alignItems: "center", }}>
        <a href="https://www.ictacademy.uz/" target="_blank">
          <img style={{ width: "60px", height: "60px", margin: "0.5rem 0.5rem 0 0" }} src={require('../../imgs/OWNERS_LOGO.png')} alt="main logo" />
        </a>
        <p>{' tomonidan ishlab chiqildi'}</p>
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
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  const successfulFunctionGetToken = (response) => {
    sessionStorage.setItem('access_token', response.data.access)
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
    } else if (user_role == "student") {
      navigate(`/${user_role}/personalplan`)
    }
    else {
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

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      {pageLoading ? <LoadingPage /> : <></>}
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {haveatoken ? <p>Foydalanuvchi topilmadi</p> : <p>Login yoki password noto'g'ri kiritildi</p>}
        </Alert>
      </Snackbar>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          // backgroundImage: `url(${login_pahe_img})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: "relative",
          '@media screen and (max-width: 456px)': {
            display: 'none'
          },
        }}
      >
        <VideoPlayer
          className="video"
          src={login_pahe_img}
          autoPlay={true}
          muted={true}
          loop={false}
        />

      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            //   my: 8,
            //   mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: "100vh",
            padding: "20px",
            zIndex: 1
          }}
          style={{ zIndex: 1 }}
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
              // label="User name"
              placeholder='Username'
              name="username"
              autoComplete="username"
              autoFocus
            />
            {/* <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        /> */}
            {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
            <OutlinedInput
              id="password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              name="password"
              placeholder='Password'
              margin="normal"
              required
              fullWidth
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
            <Typography variant="body2" color="text.secondary" align="center">
              <a href="https://t.me/creditsystembot">Telegram bot</a>
            </Typography>
            <Copyright />
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}