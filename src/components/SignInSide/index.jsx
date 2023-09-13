// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import { LoaderWrapper, LoginLogo } from './styles';
// import { CircularProgress, Snackbar, Typography } from '@mui/material';
// import MuiAlert from '@mui/material/Alert';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { token_url, user_me } from '../../utils/API_urls'
// import { getRole, getToken } from './requests'
// import { setUser } from '../../redux/action/userActions'
// import { getRole as getRoleUser } from '../../utils/getRole'
// import login_pahe_img from '../../imgs/login_pahe_img.jpg' 

// const LoadingPage = () => {
//     return (
//       <LoaderWrapper>
//         <CircularProgress color="success" />
//       </LoaderWrapper>
//     )
//   }
  
//   const Alert = React.forwardRef(function Alert(props, ref) {
//     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
//   });

//   function Copyright(props) {
//     return (
//         <Box
//             sx={{
//                 position: 'absolute',
//                 bottom: "10px",
//                 right: "10px"
//             }}
//         >
//             <Typography variant="body2" color="text.secondary" align="center" {...props}>
                
//                 <a href="https://www.ictacademy.uz/" target="_blank">
//                 © ICT JOBS
//                 </a>{' tomonidan ishlab chiqildi'}
//             </Typography>
//         </Box>
//     );
//   }

// export default function SignInSide() {

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
//     sessionStorage.setItem('refresh_token', response.data.refresh)
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
//     if (user_role == "admin") {
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
//       <Grid container component="main" sx={{ height: '100vh' }}>
//         <CssBaseline />
//         {pageLoading?<LoadingPage/>:<></>}
//       <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
//         <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
//           {haveatoken?<p>Foydalanuvchi topilmadi</p>:<p>Login yoki password noto'g'ri kiritildi</p>}
//         </Alert>
//       </Snackbar>
//         <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             backgroundImage: `url(${login_pahe_img})`,
//             backgroundRepeat: 'no-repeat',
//             backgroundColor: (t) =>
//               t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Box
//             sx={{
//             //   my: 8,
//             //   mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               justifyContent: 'center',
//               height: "100vh",
//               padding: "20px"
//             }}
//           >
//             <LoginLogo>
//               <img src={require('../../imgs/main_logo.png')} alt="main logo" />
//             </LoginLogo>
//             <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
//           <Typography variant="body2" color="text.secondary" align="center">
//                 Admin:  (90) 037 68 09 , (90) 037 68 09
//             </Typography>
//           <Copyright sx={{ mt: 5 }} />
//         </Box>
//           </Box>
//         </Grid>
//       </Grid>
//   );
// }






// @mui
import { Alert, Tooltip, Stack, Typography, Link, Box } from '@mui/material';
// auth
// layouts
//
import AuthLoginForm from '../auth/AuthLoginForm';
import LoginLayout from '../layouts/LoginLayout';
import login_pahe_img from '../../imgs/login_pahe_img.jpg' 

// ----------------------------------------------------------------------

export default function Login() {

  return (
    <LoginLayout>
      <Stack spacing={2} sx={{ mb: 5, position: 'relative', }}>
        <Typography variant="h4">Sign in to Minimal</Typography>

        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">New user?</Typography>

          <Link variant="subtitle2">Create an account</Link>
        </Stack>

        {/* <Tooltip title={''} placement="left">
          <Box
            component="img"
            alt={''}
            src={`${login_pahe_img}`}
            sx={{ width: 32, height: 32, position: 'absolute', right: 0 }}
          />
        </Tooltip> */}
      </Stack>

      <Alert severity="info" sx={{ mb: 3 }}>
        Use email : <strong>demo@minimals.cc</strong> / password :<strong> demo1234</strong>
      </Alert>

      <AuthLoginForm />

    </LoginLayout>
  );
}
