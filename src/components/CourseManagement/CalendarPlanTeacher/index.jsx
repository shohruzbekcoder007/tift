import React, { useState } from 'react'
import { BoxBody, BoxFooter, BoxFooterText, BoxHeader, ClassScheduleTableWrapper, ModalBox, ModalButtons, ModalHeader, ModalSelectWrapper } from '../../../global_styles/styles'
import { Pagination, Paper, Typography } from '@mui/material'
import PageSelector from '../../PageSelector'
import CustomizedInput from '../../CustomizedInput'
import { TableTHHeader } from '../../DiplomaTable'
import Button from '@mui/material/Button'
import AllSelect from '../../AllSelect'
import CustomizedInputSimple from '../../CustomizedInputSimple'
import { InputsWrapper } from '../styles'
import listLanguage from '../language.json'
import { Link } from 'react-router-dom'
import AllSelectFullWidth from '../../AllSelectFullWidth'
import { MuiFileInput } from 'mui-file-input'
import Modal from '@mui/material/Modal'

export default function CalendarPlanTeacher() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [file, setFile] = useState(null);

  const setFileHandler = (newValue, info) => {
      setFile(newValue)
  }

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          width: '100%',
          padding: "20px",
          borderRadius: "10px"
        }}
      >
        <BoxHeader>
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
          DT loyihalarini boshqarish - Taqvim rejasi (UZL)
        </Typography>
        </BoxHeader>
        <BoxHeader>
          <AllSelect
            chageValueFunction={val => { console.log(val) }}
            selectOptions={[
              {
                value: "1",
                name: "Leksiya"
              },
            ]}
          />
        </BoxHeader>
        <BoxHeader>
          <PageSelector chageValueFunction={(val) => {
            console.log(val)
          }} />
          <CustomizedInput callback_func={(val) => { console.log(val) }} />
        </BoxHeader>
        {/* <BoxHeader>
          <InputsWrapper>
            <CustomizedInputSimple callback_func={(val) => { console.log(val) }} placeholder="" />
            <CustomizedInputSimple callback_func={(val) => { console.log(val) }} placeholder="" />
            <CustomizedInputSimple callback_func={(val) => { console.log(val) }} placeholder="" />
          </InputsWrapper>
        </BoxHeader> */}
        <BoxBody>
          <ClassScheduleTableWrapper>
            <table>
              <thead>
                <tr>
                  <TableTHHeader
                    text="Номер"
                    iconc={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_78_23314)">
                        <path d="M16.0008 0.666667C16.0008 1.03533 15.7021 1.33333 15.3341 1.33333H6.66746C6.29946 1.33333 6.00079 1.03533 6.00079 0.666667C6.00079 0.298 6.29946 0 6.66746 0H15.3341C15.7021 0 16.0008 0.298 16.0008 0.666667ZM13.3341 3.33333H6.66746C6.29946 3.33333 6.00079 3.63133 6.00079 4C6.00079 4.36867 6.29946 4.66667 6.66746 4.66667H13.3341C13.7021 4.66667 14.0008 4.36867 14.0008 4C14.0008 3.63133 13.7021 3.33333 13.3341 3.33333ZM11.3341 6.66667H6.66746C6.29946 6.66667 6.00079 6.96467 6.00079 7.33333C6.00079 7.702 6.29946 8 6.66746 8H11.3341C11.7021 8 12.0008 7.702 12.0008 7.33333C12.0008 6.96467 11.7021 6.66667 11.3341 6.66667ZM9.33412 10H6.66746C6.29946 10 6.00079 10.298 6.00079 10.6667C6.00079 11.0353 6.29946 11.3333 6.66746 11.3333H9.33412C9.70212 11.3333 10.0008 11.0353 10.0008 10.6667C10.0008 10.298 9.70212 10 9.33412 10ZM5.13879 12.862L4.00079 14V0.666667C4.00079 0.298 3.70212 0 3.33412 0C2.96612 0 2.66746 0.298 2.66746 0.666667V14L1.52879 12.8613C1.26812 12.6007 0.846792 12.6007 0.586125 12.8613C0.325458 13.122 0.325458 13.5433 0.586125 13.804L2.39079 15.6087C2.65079 15.8687 2.99212 15.9987 3.33412 15.9987C3.67612 15.9987 4.01679 15.8687 4.27679 15.6087L6.08146 13.804C6.34212 13.5433 6.34212 13.122 6.08146 12.8613C5.82079 12.6007 5.39946 12.6013 5.13879 12.862Z" fill="#B8B8B8" />
                      </g>
                      <defs>
                        <clipPath id="clip0_78_23314">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>}
                  />
                  <TableTHHeader
                    text="План"
                    iconc={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_78_23319)">
                        <path d="M5.33365 15.3334L5.33365 1.78741L5.34365 1.79674L6.86699 3.29274C6.92848 3.3582 7.00257 3.41056 7.08481 3.44667C7.16704 3.48279 7.25572 3.50191 7.34553 3.5029C7.43534 3.50389 7.52442 3.48672 7.60743 3.45242C7.69044 3.41813 7.76566 3.36741 7.82859 3.30332C7.89151 3.23923 7.94083 3.16309 7.97359 3.07946C8.00636 2.99584 8.02188 2.90645 8.01924 2.81668C8.0166 2.7269 7.99585 2.63858 7.95823 2.55703C7.92061 2.47547 7.8669 2.40236 7.80032 2.34208L6.28232 0.849411C6.17365 0.740744 6.00699 0.588744 5.83165 0.433411C5.51624 0.154465 5.10971 0.000488154 4.68865 0.000488136C4.26759 0.000488117 3.86106 0.154465 3.54565 0.433411C3.37099 0.588744 3.20432 0.740744 3.09899 0.845411L1.57632 2.34208C1.45845 2.46754 1.39368 2.63374 1.39557 2.80588C1.39746 2.97802 1.46587 3.14275 1.58648 3.2656C1.70708 3.38844 1.87053 3.45987 2.0426 3.46493C2.21468 3.46999 2.38204 3.40829 2.50965 3.29274L4.00032 1.82941L4.00032 15.3334C4.00032 15.5102 4.07056 15.6798 4.19558 15.8048C4.3206 15.9298 4.49017 16.0001 4.66699 16.0001C4.8438 16.0001 5.01337 15.9298 5.13839 15.8048C5.26341 15.6798 5.33365 15.5102 5.33365 15.3334Z" fill="#B8B8B8" />
                        <path d="M10.6677 0.666667L10.6676 14.17L9.17898 12.7073C9.11749 12.6419 9.0434 12.5895 8.96116 12.5534C8.87893 12.5173 8.79025 12.4982 8.70044 12.4972C8.61063 12.4962 8.52154 12.5134 8.43854 12.5477C8.35553 12.582 8.2803 12.6327 8.21738 12.6968C8.15446 12.7608 8.10514 12.837 8.07238 12.9206C8.03961 13.0042 8.02408 13.0936 8.02672 13.1834C8.02936 13.2732 8.05012 13.3615 8.08774 13.4431C8.12536 13.5246 8.17907 13.5977 8.24565 13.658L9.76498 15.1507C9.87365 15.2593 10.0403 15.4113 10.215 15.5667C10.5304 15.8456 10.9369 15.9996 11.358 15.9996C11.779 15.9996 12.1856 15.8456 12.501 15.5667C12.6763 15.4113 12.843 15.2593 12.9476 15.1547L14.4676 13.658C14.5855 13.5325 14.6503 13.3663 14.6484 13.1942C14.6465 13.0221 14.5781 12.8573 14.4575 12.7345C14.3369 12.6116 14.1734 12.5402 14.0014 12.5352C13.8293 12.5301 13.6619 12.5918 13.5343 12.7073L12.0076 14.208L12.001 14.2133L12.001 0.666667C12.001 0.489856 11.9307 0.320286 11.8057 0.195262C11.6807 0.0702378 11.5111 -1.37136e-07 11.3343 -1.44865e-07C11.1575 -1.52593e-07 10.9879 0.0702378 10.8629 0.195262C10.7379 0.320286 10.6677 0.489856 10.6677 0.666667Z" fill="#B8B8B8" />
                      </g>
                      <defs>
                        <clipPath id="clip0_78_23319">
                          <rect width="16" height="16" fill="white" transform="translate(16) rotate(90)" />
                        </clipPath>
                      </defs>
                    </svg>
                    }
                  />
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  [1, 2].map((elem, index) => {
                    return (
                      <tr key={index}>
                        <th>1</th>
                        <th>Dasturiy taʼminot loyihalarini boshqarishga kirish</th>
                        <th>
                            <Button
                              variant="contained"
                              sx={{
                                borderRadius: "10px",
                                textTransform: "capitalize",
                                boxShadow: "none",
                                padding: "6px 12px",
                                marginRight: "20px"
                              }}
                              onClick={handleOpen}
                              startIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.332 9.33335C10.332 9.51016 10.2618 9.67973 10.1368 9.80475C10.0117 9.92978 9.84218 10 9.66537 10H4.33203C4.15522 10 3.98565 9.92978 3.86063 9.80475C3.7356 9.67973 3.66536 9.51016 3.66536 9.33335C3.66536 9.15654 3.7356 8.98697 3.86063 8.86194C3.98565 8.73692 4.15522 8.66668 4.33203 8.66668H9.66537C9.84218 8.66668 10.0117 8.73692 10.1368 8.86194C10.2618 8.98697 10.332 9.15654 10.332 9.33335ZM7.66536 11.3333H4.33203C4.15522 11.3333 3.98565 11.4036 3.86063 11.5286C3.7356 11.6536 3.66536 11.8232 3.66536 12C3.66536 12.1768 3.7356 12.3464 3.86063 12.4714C3.98565 12.5964 4.15522 12.6667 4.33203 12.6667H7.66536C7.84218 12.6667 8.01174 12.5964 8.13677 12.4714C8.26179 12.3464 8.33203 12.1768 8.33203 12C8.33203 11.8232 8.26179 11.6536 8.13677 11.5286C8.01174 11.4036 7.84218 11.3333 7.66536 11.3333ZM13.6654 6.99002V12.6667C13.6643 13.5504 13.3128 14.3976 12.6879 15.0225C12.063 15.6474 11.2158 15.999 10.332 16H3.66536C2.78163 15.999 1.9344 15.6474 1.30951 15.0225C0.684619 14.3976 0.33309 13.5504 0.332031 12.6667V3.33335C0.33309 2.44962 0.684619 1.60239 1.30951 0.977495C1.9344 0.352603 2.78163 0.00107394 3.66536 1.53658e-05H6.67536C7.28844 -0.00156258 7.89575 0.118407 8.46218 0.352988C9.02861 0.587569 9.54292 0.932107 9.97536 1.36668L12.298 3.69068C12.7329 4.12284 13.0776 4.63699 13.3123 5.20333C13.547 5.76968 13.667 6.37696 13.6654 6.99002ZM9.0327 2.30935C8.82289 2.10612 8.58732 1.9313 8.33203 1.78935V4.66668C8.33203 4.84349 8.40227 5.01306 8.52729 5.13809C8.65232 5.26311 8.82189 5.33335 8.9987 5.33335H11.876C11.734 5.07814 11.5589 4.84278 11.3554 4.63335L9.0327 2.30935ZM12.332 6.99002C12.332 6.88002 12.3107 6.77468 12.3007 6.66668H8.9987C8.46827 6.66668 7.95956 6.45597 7.58448 6.0809C7.20941 5.70582 6.9987 5.19711 6.9987 4.66668V1.36468C6.8907 1.35468 6.7847 1.33335 6.67536 1.33335H3.66536C3.13493 1.33335 2.62622 1.54406 2.25115 1.91914C1.87608 2.29421 1.66536 2.80292 1.66536 3.33335V12.6667C1.66536 13.1971 1.87608 13.7058 2.25115 14.0809C2.62622 14.456 3.13493 14.6667 3.66536 14.6667H10.332C10.8625 14.6667 11.3712 14.456 11.7462 14.0809C12.1213 13.7058 12.332 13.1971 12.332 12.6667V6.99002Z" fill="white"/>
                              </svg>
                              }
                            >
                             Добавить учебный материал
                            </Button>
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
                Qo’shish                            </Typography>
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
               Turi                         </Typography>
               <AllSelectFullWidth
                chageValueFunction={val => console.log(val)}
                selectOptions={[{
                  name: "name",
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
                File
              </Typography>
              <MuiFileInput
                placeholder="Fayl kiriting"
                value={file}
                onChange={setFileHandler}
                // getInputText={(value) => value ? 'Thanks!' : ''}
                fullWidth
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
                Nomi                            </Typography>
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
      </Paper>
    </>
  )
}
