// import React, { useState } from 'react'
// import Avatar from '@mui/material/Avatar'
// import Button from '@mui/material/Button'
// import CssBaseline from '@mui/material/CssBaseline'
// import TextField from '@mui/material/TextField'
// import Box from '@mui/material/Box'
// import Typography from '@mui/material/Typography'
// import Container from '@mui/material/Container'
// import { useNavigate } from "react-router-dom"
// import { token_url, user_me } from '../../utils/API_urls'
// import { getRole, getToken } from './requests'
// import { useDispatch } from 'react-redux'
// import { setUser } from '../../redux/action/userActions'
// import { getRole as getRoleUser } from '../../utils/getRole'
// import { LoaderWrapper } from './styles'
// import { CircularProgress, Snackbar } from '@mui/material'
// import MuiAlert from '@mui/material/Alert';

// const LoadingPage = () => {
//   return (
//     <LoaderWrapper>
//       <CircularProgress color="success" />
//     </LoaderWrapper>
//   )
// }

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

// export default function Login() {

//   let navigate = useNavigate()
//   const dispatch = useDispatch()
//   const [pageLoading, setPageLoading] = useState(false)
//   const [openAlert, setOpenAlert] = useState(false)
//   const [haveatoken, setHaveatoken] = useState(false)

//   const handleClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }

//     setOpenAlert(false);
//   };

//   const successfulFunctionGetToken = (response) => {
//     sessionStorage.setItem('access_token', response.data.access)
//     setHaveatoken(true)
//     getRole(user_me, successfulFunctionGetRole, errorFunctionGetRole)
//   }

//   const errorFunctionGetToken = (error) => {
//     // console.log({ errorMessage: error.toString() });
//     // console.error("There was an error!", error);
//     setPageLoading(false)
//     setOpenAlert(true)
//   }

//   const successfulFunctionGetRole = (response) => {
//     dispatch(setUser(response.data))
//     const user_role = getRoleUser(response.data)
//     setPageLoading(false)
//     if (user_role === "admin") {
//       navigate(`/${user_role}/variables`)
//     }else {
//       navigate(`/${user_role}/dashboard`)
//     }
//   }

//   const errorFunctionGetRole = (error) => {
//     // console.log({ errorMessage: error.toString() });
//     // console.error("There was an error!", error);
//     setPageLoading(false)
//     setOpenAlert(true)
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     getToken(token_url, {
//       username: data.get('username'),
//       password: data.get('password'),
//     }, successfulFunctionGetToken, errorFunctionGetToken)
//     setPageLoading(true)
//   }

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       {pageLoading?<LoadingPage/>:<></>}
//       <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
//         <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
//           {haveatoken?<p>Foydalanuvchi topilmadi</p>:<p>Login yoki password noto'g'ri kiritildi</p>}
//         </Alert>
//       </Snackbar>
//       <Box
//         sx={{
//           marginTop: 8,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <Avatar sx={{ m: 1, bgcolor: 'secondary.main', fill: "#fff", p: 1 }}>
//           <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LockOutlinedIcon"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></svg>
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Kirish
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="username"
//             label="User name"
//             name="username"
//             autoComplete="username"
//             autoFocus
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Tizimga Kirish
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );

// }





// @mui
import { Alert, Tooltip, Stack, Typography, Link, Box } from '@mui/material';
// auth
// layouts
//
import AuthLoginForm from '../auth/AuthLoginForm';
import LoginLayout from '../layouts/LoginLayout';

// ----------------------------------------------------------------------

export default function Login() {

  let navigate = useNavigate()
  const dispatch = useDispatch()
  const [pageLoading, setPageLoading] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)
  const [haveatoken, setHaveatoken] = useState(false)

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
    if (user_role === "admin") {
      navigate(`/${user_role}/users`)
    }else {
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
    <LoginLayout/>
  );
}
