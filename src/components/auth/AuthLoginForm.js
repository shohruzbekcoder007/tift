import { useState } from 'react';
// form
// import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Link, Stack, Alert, IconButton, InputAdornment, TextField } from '@mui/material';
// auth
// components
// import FormProvider from '../../components/hook-form';
import { LoadingButton } from '@mui/lab';

// ----------------------------------------------------------------------

export default function AuthLoginForm() {

  // const [showPassword, setShowPassword] = useState(false);

  // const LoginSchema = Yup.object().shape({
  //   email: Yup.string().required('Email is required').email('Email must be a valid email address'),
  //   password: Yup.string().required('Password is required'),
  // });

  // const defaultValues = {
  //   email: 'demo@minimals.cc',
  //   password: 'demo1234',
  // };

  // const methods = useForm({
  //   resolver: yupResolver(LoginSchema),
  //   defaultValues,
  // });

  // const {
  //   reset,
  //   setError,
  //   handleSubmit,
  //   formState: { errors, isSubmitting, isSubmitSuccessful },
  // } = methods;

  // const onSubmit = async (data) => {
  //   try {
  //     await login(data.email, data.password);
  //   } catch (error) {
  //     console.error(error);

  //     reset();

  //     setError('afterSubmit', {
  //       ...error,
  //       message: error.message || error,
  //     });
  //   }
  // };

  return (
    <  >
      <Stack spacing={3}>
        <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="username"
            type="text"
            id="password"
            autoComplete="current-username" />

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
      </Stack>

      <Stack alignItems="flex-end" sx={{ my: 2 }}>
        <Link variant="body2" color="inherit" underline="always">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        // loading={isSubmitSuccessful || isSubmitting}
        sx={{
          bgcolor: 'text.primary',
          color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
          '&:hover': {
            bgcolor: 'text.primary',
            color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
          },
        }}
      >
        Login
      </LoadingButton>
    </>
  );
}
