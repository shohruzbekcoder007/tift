import React from 'react'
import { BoxBody, BoxFooter, BoxFooterText, BoxHeader, ClassScheduleTableWrapper, ContentWrapper } from
  '../../global_styles/styles'
import { TableTHHeader } from '../DiplomaTable'
import { Pagination, Paper, Typography } from '@mui/material'
import PageSelector from '../PageSelector'
import CustomizedInput from '../CustomizedInput'
import AllSelect from '../AllSelect'
import Button from '@mui/material/Button'
import { ModalBox, ModalButtons, ModalHeader, ModalSelectWrapper } from '../../global_styles/styles'
import Modal from '@mui/material/Modal'
import AllSelectFullWidth from '../AllSelectFullWidth'
import listLanguage from '../Attend/language.json'

export default function Final() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <ContentWrapper>

      <Paper elevation={0} sx={{
        width: '100%',
        padding: "20px",
        borderRadius: "10px"
      }}>
        <BoxHeader>
          <PageSelector chageValueFunction={(val) => {
            console.log(val)
          }} />
          <div style={{ display: 'flex', flexWrap: 'wrap', width: "70%", justifyContent: "space-between" }}>
            <div onClick={handleOpen} style={{display: 'flex', alignItems: 'center', cursor: "pointer"}}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_78_20514)">
                  <path
                    d="M12.6667 0H3.33333C1.49533 0 0 1.49533 0 3.33333V12.6667C0 14.5047 1.49533 16 3.33333 16H11.0973C11.9553 16 12.762 15.666 13.3687 15.0593L15.0593 13.3687C15.6573 12.7713 16 11.9427 16 11.0973V3.33333C16 1.49533 14.5047 0 12.6667 0ZM1.33333 12.6667V3.33333C1.33333 2.23067 2.23067 1.33333 3.33333 1.33333H12.6667C13.7693 1.33333 14.6667 2.23067 14.6667 3.33333V10H12C10.8973 10 10 10.8973 10 12V14.6667H3.33333C2.23067 14.6667 1.33333 13.7693 1.33333 12.6667ZM12.426 14.1167C12.1273 14.4153 11.746 14.6 11.3333 14.6513V12C11.3333 11.632 11.6327 11.3333 12 11.3333H14.6507C14.598 11.7433 14.41 12.132 14.116 12.426L12.426 14.1167ZM3.33333 4.33333C3.33333 3.78133 3.78133 3.33333 4.33333 3.33333C4.88533 3.33333 5.33333 3.78133 5.33333 4.33333C5.33333 4.88533 4.88533 5.33333 4.33333 5.33333C3.78133 5.33333 3.33333 4.88533 3.33333 4.33333ZM5.33333 8C5.33333 8.552 4.88533 9 4.33333 9C3.78133 9 3.33333 8.552 3.33333 8C3.33333 7.448 3.78133 7 4.33333 7C4.88533 7 5.33333 7.448 5.33333 8ZM5.33333 11.6667C5.33333 12.2187 4.88533 12.6667 4.33333 12.6667C3.78133 12.6667 3.33333 12.2187 3.33333 11.6667C3.33333 11.1147 3.78133 10.6667 4.33333 10.6667C4.88533 10.6667 5.33333 11.1147 5.33333 11.6667Z"
                    fill="#1A1818" />
                </g>
                <defs>
                  <clipPath id="clip0_78_20514">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p style={{ margin: '0 0.5rem' }}>Qoidalar</p>
            </div>
            <AllSelect chageValueFunction={val => { console.log(val) }}
              selectOptions={[
                {
                  value: "1",
                  name: "2022-2023 Ikkinchi semestr uchun qayta o’qish"
                },
                {
                  value: "2",
                  name: "2021-2022 Ikkinchi semestr uchun qayta o’qish"
                },
                {
                  value: "3",
                  name: "2020-2021 Ikkinchi semestr uchun qayta o’qish"
                }
              ]}
            />
            <CustomizedInput callback_func={(val) => { console.log(val) }} />
          </div>
        </BoxHeader>
        <BoxBody>
          <ClassScheduleTableWrapper>
            <table>
              <thead>
                <tr>
                  <TableTHHeader text={"Mavzu"} iconc={null} />
                  <TableTHHeader text={"Rahbat"} iconc={null} />
                  <TableTHHeader text={"Taqdimot"} iconc={null} />
                  <TableTHHeader text={"Diplom ishi"} iconc={null} />
                  <TableTHHeader text={"Qo’shimcha"} iconc={null} />
                  <TableTHHeader text={"Olingan baho"} iconc={null} />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th colSpan={8} align='center'>Ma’lumot yo’q</th>
                </tr>
              </tbody>
            </table>
          </ClassScheduleTableWrapper>
        </BoxBody>
        <BoxFooter>
          <BoxFooterText>{`Jami 3 ta, 1 dan 3 gachasi ko'rsatilmoqda`}</BoxFooterText>
          <Pagination count={10} shape="rounded" color="primary" onChange={(_, value) => { console.log(value) }} />
        </BoxFooter>
      </Paper>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <ModalBox>
          <ModalHeader>
            <Typography
              id="keep-mounted-modal-title"
              variant="h6"
              component="h4"
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#000"
              }}
            >
              {listLanguage.clearance['ru']}
            </Typography>
            <span
              onClick={handleClose}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.0037 6.00006C17.8162 5.81259 17.5619 5.70728 17.2967 5.70728C17.0316 5.70728 16.7773 5.81259 16.5897 6.00006L12.0037 10.5861L7.41772 6.00006C7.2302 5.81259 6.97589 5.70728 6.71072 5.70728C6.44556 5.70728 6.19125 5.81259 6.00372 6.00006C5.81625 6.18759 5.71094 6.4419 5.71094 6.70706C5.71094 6.97223 5.81625 7.22653 6.00372 7.41406L10.5897 12.0001L6.00372 16.5861C5.81625 16.7736 5.71094 17.0279 5.71094 17.2931C5.71094 17.5582 5.81625 17.8125 6.00372 18.0001C6.19125 18.1875 6.44556 18.2928 6.71072 18.2928C6.97589 18.2928 7.2302 18.1875 7.41772 18.0001L12.0037 13.4141L16.5897 18.0001C16.7773 18.1875 17.0316 18.2928 17.2967 18.2928C17.5619 18.2928 17.8162 18.1875 18.0037 18.0001C18.1912 17.8125 18.2965 17.5582 18.2965 17.2931C18.2965 17.0279 18.1912 16.7736 18.0037 16.5861L13.4177 12.0001L18.0037 7.41406C18.1912 7.22653 18.2965 6.97223 18.2965 6.70706C18.2965 6.4419 18.1912 6.18759 18.0037 6.00006Z" fill="black" />
              </svg>
            </span>
          </ModalHeader>
          <Typography
            id="keep-mounted-modal-description"
            sx={{
              mt: "20px",
              bgcolor: "#F6F6F6",
              padding: "10px",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "150%",
              color: "#1A1818",
              mb: "20px"
            }}
          >
            {listLanguage.ClearanceText['ru']}

          </Typography>
        </ModalBox>
      </Modal>
    </ContentWrapper>
  )
}