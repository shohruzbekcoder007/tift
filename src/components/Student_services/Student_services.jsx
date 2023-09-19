import React from 'react'
import { ContentWrapper } from '../../global_styles/styles'
import { BoxFooter, BoxFooterText } from '../../global_styles/styles'
import { Button, Pagination, Paper, Typography } from '@mui/material'
import { ThesisBody, ThesisHeader, ThesisHeaderRight } from './styles'
import CustomizedInput from '../CustomizedInput'
import PageSelector from '../PageSelector'
import DiplomaTable from '../DiplomaTable'
import Modal from '@mui/material/Modal'
import AllSelectFullWidth from '../AllSelectFullWidth'
import { ModalBox, ModalButtons, ModalHeader, ModalSelectWrapper } from '../../global_styles/styles'
import CustomizedInputSimple from '../CustomizedInputSimple'
import ServicesTable from '../ServicesTable/ServicesTable'
export default function Student_services() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const chageRowHadler = (val) => {
    console.log(val)
  }

  const chageSearch = (val) => {
    console.log(val)
  }

  const chagePageHandle = (_, value) => {
    console.log(value)
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
            <CustomizedInput callback_func={chageSearch} />
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
              // onClick={handleOpen}
            >
              Ariza berish
            </Button>
          </ThesisHeaderRight>
        </ThesisHeader>
        <ThesisBody>
          <ServicesTable />
        </ThesisBody>
        {/* <BoxFooter>
          <BoxFooterText>{`Jami 3 ta, 1 dan 3 gachasi ko'rsatilmoqda`}</BoxFooterText>
          <Pagination count={10} shape="rounded" color="primary" onChange={chagePageHandle} />
        </BoxFooter> */}
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
                Ariza Berish
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
              Turi                        </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => console.log(val)}
              selectOptions={[{
                name: "O'qish joyidan malumotnoma",
                value: "O'qish joyidan malumotnoma",
              }]}
            />
          </ModalSelectWrapper>
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
              Qayerga?
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => console.log(val)}
              selectOptions={[{
                name: "Tanlang",
                value: "Tanlang",
              }]}
            />
          </ModalSelectWrapper>

          <ModalButtons>
            <Button
              sx={{ width: "50%", textTransform: "none", borderRadius: "10px" }}
              variant="outlined"
              onClick={handleClose}
            >
              Bekor qilish
            </Button>
            <Button
              sx={{ width: "50%", textTransform: "none", borderRadius: "10px", boxShadow: "none" }}
              variant="contained"
            >
              Saqlash
            </Button>
          </ModalButtons>
        </ModalBox>
      </Modal>
    </ContentWrapper>
  )
}
