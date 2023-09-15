import PropTypes from 'prop-types';
import { Typography, Stack, Box } from '@mui/material';
import { StyledRoot, StyledSectionBg, StyledSection, StyledContent } from './styles';
import login_pahe_img from '../../imgs/Login_Right.png' 

// ----------------------------------------------------------------------

LoginLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  illustration: PropTypes.string,
};

export default function LoginLayout({ children }) {
  return (
    <StyledRoot >
      <Box
        sx={{
          zIndex: 9,
          position: 'absolute',
          mt: { xs: 1.5, md: 5 },
          ml: { xs: 2, md: 5 },
        }}
      />

      <StyledSection
        sx={{
          backgroundColor: '#eeeeee47'
        }}
      >
        <Typography variant="h3" sx={{ mb: 10, maxWidth: 480, textAlign: 'center' }}>
          { 'Hi, Welcome back'}
        </Typography>

        <img
          disabledEffect
          visibleByDefault
          alt="auth"
          src={login_pahe_img}
          sx={{ maxWidth: 720 }}
        />

        <StyledSectionBg />
      </StyledSection>

      <StyledContent>
        <Stack sx={{ width: 1 }}> {children} </Stack>
      </StyledContent>
    </StyledRoot>
  );
}
