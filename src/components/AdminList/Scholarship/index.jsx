import React, { useState } from 'react'
import { BoxBody, BoxFooter, BoxFooterText, BoxHeader, ClassScheduleTableWrapper, ContentWrapper } from '../../../global_styles/styles'
import { Pagination, Paper, Typography } from '@mui/material'
import PageSelector from '../../PageSelector'
import CustomizedInput from '../../CustomizedInput'
import { TableTHHeader } from '../../DiplomaTable'
import Button from '@mui/material/Button'
import { AttendSearchButton } from './styles'
import { ModalBox, ModalButtons, ModalHeader, ModalSelectWrapper } from '../../../global_styles/styles'
import Modal from '@mui/material/Modal'
import AllSelectFullWidth from '../../AllSelectFullWidth'
import CustomizedInputSimple from '../../CustomizedInputSimple'
import { InputsWrapper } from '../../CourseManagement/styles'
import { MuiFileInput } from 'mui-file-input'

export default function Scholarship() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const [file, setFile] = useState(null);

  const setFileHandler = (newValue, info) => {
    setFile(newValue)
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

        <BoxHeader>
          <InputsWrapper>
            <AllSelectFullWidth
              chageValueFunction={val => console.log(val)}
              selectOptions={[{
                name: "Bakalavr",
                value: 12,
              }]}
            />
            <AllSelectFullWidth
              chageValueFunction={val => console.log(val)}
              selectOptions={[{
                name: "Ma'lumotlar tuzilmalari va algoritmlari",
                value: 12,
              }]}
            />
            <AllSelectFullWidth
              chageValueFunction={val => console.log(val)}
              selectOptions={[{
                name: "2022-2023 birinchi semestr",
                value: 12,
              }]}
            />
          </InputsWrapper>
        </BoxHeader>
        <BoxHeader>
          <PageSelector chageValueFunction={(val) => {
            console.log(val)
          }} />
          <AttendSearchButton>
            <CustomizedInput callback_func={(val) => { console.log(val) }} />
          </AttendSearchButton>
        </BoxHeader>

        <BoxBody>
          <ClassScheduleTableWrapper>
            <table>
              <thead>
                <tr>
                  <TableTHHeader
                    text="ID"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="Название"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="Приказ"
                    iconc={null}
                  />
                </tr>
              </thead>
              <tbody>
                {
                  [1, 2, 3, 4, 5, 6,].map((item,index) => {
                    return (
                      <tr key={index}>
                        <th>1234</th>
                        <th>1-курс (Бюджетники)</th>
                        <th>
                          <Button
                            variant="contained"
                            sx={{
                              borderRadius: "10px",
                              textTransform: "capitalize",
                              boxShadow: "none",
                              padding: "6px 12px",
                            }}
                            startIcon={<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_78_21787)">
                                <path d="M7.08614 12.0813C7.27187 12.2672 7.4924 12.4146 7.73514 12.5152C7.97787 12.6158 8.23805 12.6676 8.5008 12.6676C8.76355 12.6676 9.02373 12.6158 9.26647 12.5152C9.5092 12.4146 9.72973 12.2672 9.91547 12.0813L12.0561 9.94067C12.1709 9.81373 12.2325 9.64752 12.2281 9.47644C12.2237 9.30536 12.1537 9.14253 12.0325 9.02165C11.9114 8.90077 11.7484 8.8311 11.5773 8.82707C11.4062 8.82304 11.2402 8.88496 11.1135 9L9.1628 10.9513L9.16747 0.666667C9.16747 0.489856 9.09723 0.320286 8.97221 0.195262C8.84718 0.0702379 8.67761 0 8.5008 0C8.32399 0 8.15442 0.0702379 8.0294 0.195262C7.90437 0.320286 7.83414 0.489856 7.83414 0.666667L7.82814 10.9387L5.88814 9C5.76304 8.875 5.59341 8.8048 5.41657 8.80487C5.23972 8.80493 5.07014 8.87524 4.94514 9.00033C4.82013 9.12543 4.74994 9.29506 4.75 9.4719C4.75006 9.64875 4.82037 9.81833 4.94547 9.94333L7.08614 12.0813Z" fill="white" />
                                <path d="M15.8333 10.6665C15.6565 10.6665 15.487 10.7367 15.3619 10.8618C15.2369 10.9868 15.1667 11.1564 15.1667 11.3332V13.9998C15.1667 14.1766 15.0964 14.3462 14.9714 14.4712C14.8464 14.5963 14.6768 14.6665 14.5 14.6665H2.5C2.32319 14.6665 2.15362 14.5963 2.0286 14.4712C1.90357 14.3462 1.83333 14.1766 1.83333 13.9998V11.3332C1.83333 11.1564 1.7631 10.9868 1.63807 10.8618C1.51305 10.7367 1.34348 10.6665 1.16667 10.6665C0.989856 10.6665 0.820286 10.7367 0.695262 10.8618C0.570238 10.9868 0.5 11.1564 0.5 11.3332L0.5 13.9998C0.5 14.5303 0.710714 15.039 1.08579 15.4141C1.46086 15.7891 1.96957 15.9998 2.5 15.9998H14.5C15.0304 15.9998 15.5391 15.7891 15.9142 15.4141C16.2893 15.039 16.5 14.5303 16.5 13.9998V11.3332C16.5 11.1564 16.4298 10.9868 16.3047 10.8618C16.1797 10.7367 16.0101 10.6665 15.8333 10.6665Z" fill="white" />
                              </g>
                              <defs>
                                <clipPath id="clip0_78_21787">
                                  <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                                </clipPath>
                              </defs>
                            </svg>
                            }
                          >
                            Yuklash                                                   </Button>
                        </th>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </ClassScheduleTableWrapper>
        </BoxBody>
        <BoxFooter>
          <BoxFooterText>{`Jami 3 ta, 1 dan 3 gachasi ko'rsatilmoqda`}</BoxFooterText>
          <Pagination count={10} shape="rounded" color="primary" onChange={(_, value) => { console.log(value) }} />
        </BoxFooter>

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
                УВЕЛИЧИТЬ РАЗМЕР ПОТОКА                            </Typography>
              <span
                onClick={handleClose}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.0037 6.00006C17.8162 5.81259 17.5619 5.70728 17.2967 5.70728C17.0316 5.70728 16.7773 5.81259 16.5897 6.00006L12.0037 10.5861L7.41772 6.00006C7.2302 5.81259 6.97589 5.70728 6.71072 5.70728C6.44556 5.70728 6.19125 5.81259 6.00372 6.00006C5.81625 6.18759 5.71094 6.4419 5.71094 6.70706C5.71094 6.97223 5.81625 7.22653 6.00372 7.41406L10.5897 12.0001L6.00372 16.5861C5.81625 16.7736 5.71094 17.0279 5.71094 17.2931C5.71094 17.5582 5.81625 17.8125 6.00372 18.0001C6.19125 18.1875 6.44556 18.2928 6.71072 18.2928C6.97589 18.2928 7.2302 18.1875 7.41772 18.0001L12.0037 13.4141L16.5897 18.0001C16.7773 18.1875 17.0316 18.2928 17.2967 18.2928C17.5619 18.2928 17.8162 18.1875 18.0037 18.0001C18.1912 17.8125 18.2965 17.5582 18.2965 17.2931C18.2965 17.0279 18.1912 16.7736 18.0037 16.5861L13.4177 12.0001L18.0037 7.41406C18.1912 7.22653 18.2965 6.97223 18.2965 6.70706C18.2965 6.4419 18.1912 6.18759 18.0037 6.00006Z" fill="black" />
                </svg>
              </span>
            </ModalHeader>
            <ModalSelectWrapper>
              <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="h4"
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#000",
                  m: "20px 0 10px 0"
                }}
              >
                Predmet kodi                         </Typography>
              <CustomizedInputSimple callback_func={(val) => { console.log(val) }} placeholder="HSM100144" />

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
                Til                        </Typography>
              <AllSelectFullWidth
                chageValueFunction={val => console.log(val)}
                selectOptions={[{
                  name: "RU",
                  value: 12,
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
                Qancha qo'shish kerak?                            </Typography>
              <CustomizedInputSimple callback_func={(val) => { console.log(val) }} placeholder="" />
            </ModalSelectWrapper>

            <ModalButtons>
              <Button
                sx={{ width: "50%", textTransform: "none" }}
                variant="outlined"
                onClick={handleClose}
              >
                Bekor qilish
              </Button>
              <Button
                sx={{ width: "50%", textTransform: "none", boxShadow: "none" }}
                variant="contained"
              >
                Saqlash
              </Button>
            </ModalButtons>
          </ModalBox>
        </Modal>


        <Modal
          keepMounted
          open={open2}
          onClose={handleClose2}
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
                Qo’shish
              </Typography>
              <span
                onClick={handleClose2}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.0037 6.00006C17.8162 5.81259 17.5619 5.70728 17.2967 5.70728C17.0316 5.70728 16.7773 5.81259 16.5897 6.00006L12.0037 10.5861L7.41772 6.00006C7.2302 5.81259 6.97589 5.70728 6.71072 5.70728C6.44556 5.70728 6.19125 5.81259 6.00372 6.00006C5.81625 6.18759 5.71094 6.4419 5.71094 6.70706C5.71094 6.97223 5.81625 7.22653 6.00372 7.41406L10.5897 12.0001L6.00372 16.5861C5.81625 16.7736 5.71094 17.0279 5.71094 17.2931C5.71094 17.5582 5.81625 17.8125 6.00372 18.0001C6.19125 18.1875 6.44556 18.2928 6.71072 18.2928C6.97589 18.2928 7.2302 18.1875 7.41772 18.0001L12.0037 13.4141L16.5897 18.0001C16.7773 18.1875 17.0316 18.2928 17.2967 18.2928C17.5619 18.2928 17.8162 18.1875 18.0037 18.0001C18.1912 17.8125 18.2965 17.5582 18.2965 17.2931C18.2965 17.0279 18.1912 16.7736 18.0037 16.5861L13.4177 12.0001L18.0037 7.41406C18.1912 7.22653 18.2965 6.97223 18.2965 6.70706C18.2965 6.4419 18.1912 6.18759 18.0037 6.00006Z" fill="black" />
                </svg>
              </span>
            </ModalHeader>
            <ModalSelectWrapper>
              <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="h4"
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#000",
                  m: "20px 0 10px 0"
                }}
              >
                Predmet                         </Typography>
              <AllSelectFullWidth
                chageValueFunction={val => console.log(val)}
                selectOptions={[{
                  name: "O’zbek/Rus tili",
                  value: 12,
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
                Til                        </Typography>
              <AllSelectFullWidth
                chageValueFunction={val => console.log(val)}
                selectOptions={[{
                  name: "RU",
                  value: 12,
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
                Guruh                         </Typography>
              <CustomizedInputSimple callback_func={(val) => { console.log(val) }} placeholder="" />
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
                Разделение потока на практику                        </Typography>
              <AllSelectFullWidth
                chageValueFunction={val => console.log(val)}
                selectOptions={[{
                  name: "0",
                  value: 12,
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
                Разделение потока на лаборатории                        </Typography>
              <AllSelectFullWidth
                chageValueFunction={val => console.log(val)}
                selectOptions={[{
                  name: "0",
                  value: 12,
                }]}
              />


            </ModalSelectWrapper>

            <ModalButtons>
              <Button
                sx={{ width: "50%", textTransform: "none" }}
                variant="outlined"
                onClick={handleClose2}
              >
                Bekor qilish
              </Button>
              <Button
                sx={{ width: "50%", textTransform: "none", boxShadow: "none" }}
                variant="contained"
              >
                Saqlash
              </Button>
            </ModalButtons>
          </ModalBox>
        </Modal>
      </Paper>
    </ContentWrapper>
  )
}
