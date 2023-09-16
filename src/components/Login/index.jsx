import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
// import Box from '@mui/material/Box'
// import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useNavigate } from "react-router-dom"
import { token_url, user_me } from '../../utils/API_urls'
import { getRole, getToken } from './requests'
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/action/userActions'
import { getRole as getRoleUser } from '../../utils/getRole'
import { LoaderWrapper } from './styles'
import { CircularProgress, Snackbar } from '@mui/material'
import MuiAlert from '@mui/material/Alert';

// @mui
// import { Alert, Tooltip, Stack, Typography, Link, Box } from '@mui/material';
// auth
// layouts
//
// import AuthLoginForm from '../auth/AuthLoginForm';
// import LoginLayout from '../layouts/LoginLayout';

// ----------------------------------------------------------------------

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
//       navigate(`/${user_role}/users`)
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
//     <LoginLayout/>
//   );
// }





// @mui
import { Alert, Tooltip, Stack, Typography, Link, Box } from '@mui/material';
// auth
// layouts
//
// import AuthLoginForm from '../auth/AuthLoginForm';
import LoginLayout from '../layouts/LoginLayout';
import SignInSide from '../SignInSide';

// ----------------------------------------------------------------------

export default function Login() {

  return (
    <LoginLayout>
      <SignInSide/>
    </LoginLayout>
  );
}
