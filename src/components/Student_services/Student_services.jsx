import React, { useState } from 'react'
import { ContentWrapper } from '../../global_styles/styles'
import { BoxFooter, BoxFooterText } from '../../global_styles/styles'
import { Button, Pagination, Paper, Snackbar, Typography } from '@mui/material'
import { ThesisBody, ThesisHeader, ThesisHeaderRight } from './styles'
import CustomizedInput from '../CustomizedInput'
import PageSelector from '../PageSelector'
import DiplomaTable from '../DiplomaTable'
import Modal from '@mui/material/Modal'
import AllSelectFullWidth from '../AllSelectFullWidth'
import { ModalBox, ModalButtons, ModalHeader, ModalSelectWrapper } from '../../global_styles/styles'
import CustomizedInputSimple from '../CustomizedInputSimple'
import ServicesTable from '../ServicesTable/ServicesTable'
import { useSelector } from 'react-redux'
import listLanguage from './language.json'
import { useMemo } from 'react'
import { postStudentInformation } from './request'
import { student_doc } from '../../utils/API_urls'
import MuiAlert from '@mui/material/Alert'

export default function Student_services() {
  const [open, setOpen] = React.useState(false);
  const [ListSelect, setListSelect] = React.useState(null);
  const [JobInput, setJobInput] = React.useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [changeUser, setChangeUser] = useState(null)
  const [openAlert, setOpenAlert] = useState(false)
  const [changed, serChanged] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const handleCloseAlert = () => setOpenAlert(false);

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

  const chageRowHadler = (val) => {
    console.log(val)
  }

  const chageSearch = (val) => {
    console.log(val)
  }

  const chagePageHandle = (_, value) => {
    console.log(value)
  }

  // lang
  const language = useSelector(state => state.language)
  const List = useMemo(() => {
    return [{
      name: "Ma'lumotnoma",
      value: "information"
    },
    {
      name: "Chaqiruv xati",
      value: "invitation"
    }]
  }, [])

  const handleClick = (_) => {
    postStudentInformation(student_doc, {
      type: ListSelect,
      job: ListSelect != 'information' ? JobInput : ""
    }, (response) => {
      setOpen(false)
      setOpenAlert(true)
      serChanged(true)
      setAlertMessage("Ariza yuborildi")
    }, (error) => {
      console.log(error);

      let msg = ``
      if (error.response.data.message) {
        msg = error.response.data.message
      }
      setOpen(false)
      setOpenAlert(true)
      serChanged(false)
      setAlertMessage(msg)
    })
  }

  return (
    <ContentWrapper>
      <Paper
        elevation={0}
        sx={{
          width: '100%',
          padding: "20px",
          borderRadius: "10px"
        }}
      >
        <ThesisHeader>
          <PageSelector chageValueFunction={chageRowHadler} />
          <ThesisHeaderRight >
            <CustomizedInput  callback_func={chageSearch} />
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                boxShadow: "none",
                padding: "12px 70px",
                borderRadius: "10px",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "17px"
              }}
              onClick={handleOpen}
            >
              {listLanguage.Apply[language]}
            </Button>
          </ThesisHeaderRight>
        </ThesisHeader>
        <ThesisBody>
          <ServicesTable />
        </ThesisBody>

      </Paper>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <ModalBox>
          <div style={{ marginBottom: '20px' }}>
            <ModalHeader>
              <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="h4"
                sx={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#000",
                }}
              >
                {listLanguage.Application[language]}
              </Typography>
              <span
                onClick={handleClose}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.0037 6.00006C17.8162 5.81259 17.5619 5.70728 17.2967 5.70728C17.0316 5.70728 16.7773 5.81259 16.5897 6.00006L12.0037 10.5861L7.41772 6.00006C7.2302 5.81259 6.97589 5.70728 6.71072 5.70728C6.44556 5.70728 6.19125 5.81259 6.00372 6.00006C5.81625 6.18759 5.71094 6.4419 5.71094 6.70706C5.71094 6.97223 5.81625 7.22653 6.00372 7.41406L10.5897 12.0001L6.00372 16.5861C5.81625 16.7736 5.71094 17.0279 5.71094 17.2931C5.71094 17.5582 5.81625 17.8125 6.00372 18.0001C6.19125 18.1875 6.44556 18.2928 6.71072 18.2928C6.97589 18.2928 7.2302 18.1875 7.41772 18.0001L12.0037 13.4141L16.5897 18.0001C16.7773 18.1875 17.0316 18.2928 17.2967 18.2928C17.5619 18.2928 17.8162 18.1875 18.0037 18.0001C18.1912 17.8125 18.2965 17.5582 18.2965 17.2931C18.2965 17.0279 18.1912 16.7736 18.0037 16.5861L13.4177 12.0001L18.0037 7.41406C18.1912 7.22653 18.2965 6.97223 18.2965 6.70706C18.2965 6.4419 18.1912 6.18759 18.0037 6.00006Z" fill="black" />
                </svg>
              </span>
            </ModalHeader>
          </div>
          <ModalSelectWrapper>
            <Typography
              id="keep-mounted-modal-title"
              variant="h6"
              component="h4"
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#000",
                mb: "10px"
              }}
            >
             {listLanguage.Type[language]}                       
              </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => setListSelect(val)}
              selectOptions={List}
            />
          </ModalSelectWrapper>
          {
            ListSelect == 'invitation' && <ModalSelectWrapper>
            <Typography
              id="keep-mounted-modal-title"
              variant="h6"
              component="h4"
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#000",
                mb: "10px"
              }}
            >
              {listLanguage.Where[language]}
            </Typography>
            <CustomizedInputSimple callback_func={(val) => {setJobInput(val)}} placeholder="Kiriting" />
          </ModalSelectWrapper>
          }

          <ModalButtons>
            <Button
              sx={{ width: "50%", textTransform: "none", borderRadius: "10px" }}
              variant="outlined"
              onClick={handleClose}
            >
              {listLanguage.Cancel[language]}
            </Button>
            <Button
              sx={{ width: "50%", textTransform: "none", borderRadius: "10px", boxShadow: "none" }}
              variant="contained"
              onClick={handleClick}
            >
              {listLanguage.Save[language]}
            </Button>
          </ModalButtons>
        </ModalBox>
      </Modal>
      <Snackbar open={openAlert} anchorOrigin={changed ? anchorOrigin1 : anchorOrigin2} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity={changed ? "success" : "error"} sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </ContentWrapper>
  )
}
