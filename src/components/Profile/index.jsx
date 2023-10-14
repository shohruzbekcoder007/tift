import React, { useState } from 'react'
import { ContentWrapper } from '../../global_styles/styles'
import { PasswordInput, ProfileButton, ProfileButtonGroup, ProfileLogOut, ProfileWrapper, ProfileWrapperSubtitle, ProfileWrapperTitle, SelectCard } from './style'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from '../../redux/action/languageActions'
import { useNavigate } from "react-router-dom";
import { logoutRequest } from './requests';
import { change_password, logout } from '../../utils/API_urls';
import { setUser } from '../../redux/action/userActions';
import { setPasswordUser } from '../AdminList/Users/requests';
import MuiAlert from '@mui/material/Alert';
import listLanguage from './language.json'

export default function Profile() {
  
  const navigate = useNavigate();
  
  const dispatch = useDispatch()

  const language = useSelector(state => state.language)
  const {id} = useSelector(state => state.user)
  const [Lang, setLang] = useState(language);
  const [OldPass, setOldPass] = useState('');
  const [NewPass1, setNewPass1] = useState('');
  const [NewPass2, setNewPass2] = useState('');
  const [openAlert, setOpenAlert] = useState(false)
  const [changed, serChanged] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const handleCloseAlert = () => setOpenAlert(false);

  const handleChange = (event) => {
    setLang(event.target.value);
    dispatch(setLanguage(event.target.value))
  };

  const ClearInput = () => {
    setOldPass('')
    setNewPass1('')
    setNewPass2('')
  } 

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
  const anchorOrigin1 = {
    vertical: 'bottom',
    horizontal: "right"
  }
  
  const anchorOrigin2 = {
    vertical: 'bottom',
    horizontal: "left"
  }
  const handleLogOut = (_) => {
    logoutRequest(logout, {
      refresh_token: sessionStorage.getItem('refresh_token')
    }, (response) => {
      if (response.status == 205) {
        sessionStorage.removeItem('refresh_token')
        sessionStorage.removeItem('access_token')
        navigate("/");
        dispatch(setUser(null))
      }
    }, (error) => {
      console.log(error)
    })
  }

  const handleChangePass = (_) => {
      setPasswordUser(`${change_password}${id}/`, {
        old_password: OldPass,
        new_password1: NewPass1,
        new_password2: NewPass2
      }, (response) => {
        setOldPass('')
        setNewPass1('')
        setNewPass2('')
        serChanged(true)
        setOpenAlert(true)
        setAlertMessage("Parol yangilandi")
      }, (error) => {
        serChanged(false)
        setOpenAlert(true)
        let msg = ``
        if (error.response.data.detail) {
          msg = msg + " " + error.response.data.detail
        }
        if (error.response.data.new_password1) {
          msg = msg + " " + error.response.data.new_password1[0]
        }
        if (error.response.data.new_password2) {
          msg = msg + " " + error.response.data.new_password2[0]
        }
        if (error.response.data.old_password) {
          msg = msg + " " + error.response.data.old_password[0]
        }
        if (error.response.data.non_field_errors) {
          msg = msg + " " + error.response.data.non_field_errors[0]
        }
        setAlertMessage(msg)
      })
  }
  
  return (
    <ContentWrapper>
      <div className="">
        <ProfileWrapper>
          <ProfileWrapperTitle>
            {listLanguage.ChangingLang[language]}
          </ProfileWrapperTitle>

          <FormControl fullWidth style={{ margin: '1rem 0', backgroundColor: "#F6F6F6", border: '0 0 0 0 ', marginBottom: '2rem' }}>
            <InputLabel id="demo-simple-select-label">{listLanguage.Lang[language]}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Lang}
              label={listLanguage.Lang[language]}
              onChange={handleChange}>
              <MenuItem selected value={"uz"}>O'zbekcha</MenuItem>
              <MenuItem value={"ru"}>Русский</MenuItem>
              <MenuItem value={"eng"}>English</MenuItem>
            </Select>
          </FormControl>

          <ProfileWrapperTitle>
          {listLanguage.ChangingPassword[language]}
          </ProfileWrapperTitle>
          <ProfileWrapperSubtitle>
          {listLanguage.OldPassword[language]}
          </ProfileWrapperSubtitle>
          <PasswordInput value={OldPass} onInput={(e) => {setOldPass(e.target.value)}} placeholder='Eski parolni kiriting' type='password' />
          <ProfileWrapperSubtitle>
          {listLanguage.NewPassword[language]}
          </ProfileWrapperSubtitle>
          <PasswordInput value={NewPass1} onInput={(e) => {setNewPass1(e.target.value)}} placeholder='Yangi parolni kiriting' type='password' />
          <ProfileWrapperSubtitle>
          {listLanguage.ConfirmNewPassword[language]}
          </ProfileWrapperSubtitle>
          <PasswordInput value={NewPass2} onInput={(e) => {setNewPass2(e.target.value)}} placeholder='Yangi parolni kiriting' type='password' />
          <ProfileButtonGroup>
            <ProfileButton onClick={(_) => {ClearInput()}}>
            {listLanguage.Cancel[language]}
            </ProfileButton>
            <Button
            onClick={handleChangePass}
              variant="contained"
              sx={{
                textTransform: "capitalize",
                boxShadow: "none",
                padding: "15px 70px",
                borderRadius: "10px",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "17px",
                '@media screen and (max-width: 456px)': {
                  width: '45%'
                },
              }}
            >
               {listLanguage.Save[language]}
            </Button>
          </ProfileButtonGroup>
        </ProfileWrapper>
        <ProfileLogOut
          onClick={handleLogOut}
        >
          <svg style={{ margin: '0 1rem 0 0' }} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_15_21159)">
              <path d="M19.0229 7.64343L15.7904 4.41093C15.6332 4.25913 15.4227 4.17513 15.2042 4.17703C14.9858 4.17893 14.7767 4.26657 14.6222 4.42108C14.4677 4.57559 14.3801 4.7846 14.3782 5.00309C14.3763 5.22159 14.4603 5.43209 14.6121 5.58926L17.8446 8.82176C17.9406 8.9197 18.0246 9.02882 18.0946 9.14676C18.0821 9.14676 18.0721 9.1401 18.0596 9.1401L4.98958 9.16676C4.76857 9.16676 4.55661 9.25456 4.40033 9.41084C4.24405 9.56712 4.15625 9.77908 4.15625 10.0001C4.15625 10.2211 4.24405 10.4331 4.40033 10.5894C4.55661 10.7456 4.76857 10.8334 4.98958 10.8334L18.0546 10.8068C18.0779 10.8068 18.0971 10.7951 18.1196 10.7934C18.0457 10.9344 17.9519 11.064 17.8412 11.1784L14.6088 14.4109C14.5292 14.4878 14.4657 14.5798 14.422 14.6814C14.3783 14.7831 14.3553 14.8924 14.3544 15.0031C14.3534 15.1137 14.3745 15.2235 14.4164 15.3259C14.4583 15.4283 14.5202 15.5213 14.5984 15.5996C14.6767 15.6778 14.7697 15.7397 14.8721 15.7816C14.9745 15.8235 15.0843 15.8446 15.1949 15.8436C15.3056 15.8427 15.4149 15.8197 15.5166 15.776C15.6183 15.7323 15.7102 15.6689 15.7871 15.5893L19.0196 12.3568C19.6445 11.7317 19.9955 10.884 19.9955 10.0001C19.9955 9.11621 19.6445 8.26852 19.0196 7.64343H19.0229Z" fill="#F41B35" />
              <path d="M5.83333 18.3333H4.16667C3.50363 18.3333 2.86774 18.0699 2.3989 17.6011C1.93006 17.1323 1.66667 16.4964 1.66667 15.8333V4.16667C1.66667 3.50363 1.93006 2.86774 2.3989 2.3989C2.86774 1.93006 3.50363 1.66667 4.16667 1.66667H5.83333C6.05435 1.66667 6.26631 1.57887 6.42259 1.42259C6.57887 1.26631 6.66667 1.05435 6.66667 0.833333C6.66667 0.61232 6.57887 0.400358 6.42259 0.244078C6.26631 0.0877974 6.05435 0 5.83333 0L4.16667 0C3.062 0.00132321 2.00296 0.440735 1.22185 1.22185C0.440735 2.00296 0.00132321 3.062 0 4.16667L0 15.8333C0.00132321 16.938 0.440735 17.997 1.22185 18.7782C2.00296 19.5593 3.062 19.9987 4.16667 20H5.83333C6.05435 20 6.26631 19.9122 6.42259 19.7559C6.57887 19.5996 6.66667 19.3877 6.66667 19.1667C6.66667 18.9457 6.57887 18.7337 6.42259 18.5774C6.26631 18.4211 6.05435 18.3333 5.83333 18.3333Z" fill="#F41B35" />
            </g>
            <defs>
              <clipPath id="clip0_15_21159">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p style={{ color: '#F41B35' }}> {listLanguage.Back[language]}</p>
        </ProfileLogOut>
      </div>
      <Snackbar open={openAlert} anchorOrigin={changed ? anchorOrigin1 : anchorOrigin2} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity={changed ? "success" : "error"} sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </ContentWrapper>

  )
}
