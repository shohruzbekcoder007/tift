import React from 'react'
import { BoxBody, BoxFooter, BoxFooterText, BoxHeader, ClassScheduleTableWrapper, ContentWrapper, ModalBox, ModalButtons, ModalHeader, ModalSelectWrapper } from '../../../../global_styles/styles'
import { TableTHHeader } from '../../../DiplomaTable'
import { Pagination, Paper, Typography } from '@mui/material'
import PageSelector from '../../../PageSelector'
import CustomizedInput from '../../../CustomizedInput'
import { AttendSearchButton } from '../styles'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import CustomizedInputSimple from '../../../CustomizedInputSimple'
import AllSelectFullWidth from '../../../AllSelectFullWidth'

export default function InterimControl() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Typography
        sx={{
          color: "#000",
          fontWeight: "600",
          fontSize: "20px"
        }}
      >
        Промежуточный контроль - 2021-2022 Birinchi semester
      </Typography>
      <Paper
        elevation={0}
        sx={{
          width: '100%',
          padding: "20px",
          borderRadius: "10px"
        }}
      >
       <BoxHeader>
          <PageSelector chageValueFunction={(val) => {
            console.log(val)
          }} />
          <AttendSearchButton>
            <CustomizedInput callback_func={(val) => { console.log(val) }} />
            <Button
              variant="contained"
              onClick={handleOpen}
              sx={{
                textTransform: "capitalize",
                boxShadow: "none",
                padding: "12px 70px",
                borderRadius: "10px",
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "17px"
              }}
              startIcon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_160_5797)">
                  <path d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433286 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9971 7.34872 18.9426 4.80684 17.0679 2.9321C15.1932 1.05736 12.6513 0.00286757 10 0ZM10 18.3333C8.35183 18.3333 6.74066 17.8446 5.37025 16.9289C3.99984 16.0132 2.93174 14.7117 2.30101 13.189C1.67028 11.6663 1.50525 9.99076 1.82679 8.37425C2.14834 6.75774 2.94201 5.27288 4.10745 4.10744C5.27289 2.94201 6.75774 2.14833 8.37425 1.82679C9.99076 1.50525 11.6663 1.67027 13.189 2.301C14.7118 2.93173 16.0132 3.99984 16.9289 5.37025C17.8446 6.74066 18.3333 8.35182 18.3333 10C18.3309 12.2094 17.4522 14.3276 15.8899 15.8899C14.3276 17.4522 12.2094 18.3309 10 18.3333ZM14.1667 10C14.1667 10.221 14.0789 10.433 13.9226 10.5893C13.7663 10.7455 13.5544 10.8333 13.3333 10.8333H10.8333V13.3333C10.8333 13.5543 10.7455 13.7663 10.5893 13.9226C10.433 14.0789 10.221 14.1667 10 14.1667C9.77899 14.1667 9.56703 14.0789 9.41075 13.9226C9.25447 13.7663 9.16667 13.5543 9.16667 13.3333V10.8333H6.66667C6.44566 10.8333 6.2337 10.7455 6.07742 10.5893C5.92113 10.433 5.83334 10.221 5.83334 10C5.83334 9.77899 5.92113 9.56703 6.07742 9.41074C6.2337 9.25447 6.44566 9.16667 6.66667 9.16667H9.16667V6.66667C9.16667 6.44565 9.25447 6.23369 9.41075 6.07741C9.56703 5.92113 9.77899 5.83333 10 5.83333C10.221 5.83333 10.433 5.92113 10.5893 6.07741C10.7455 6.23369 10.8333 6.44565 10.8333 6.66667V9.16667H13.3333C13.5544 9.16667 13.7663 9.25447 13.9226 9.41074C14.0789 9.56703 14.1667 9.77899 14.1667 10Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_160_5797">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              }
            >
              Qo'shish
            </Button>
          </AttendSearchButton>
        </BoxHeader>
        <BoxBody>
          <ClassScheduleTableWrapper>
            <table>
              <thead>
                <tr>
                  <TableTHHeader
                    text={"ID"}
                    iconc={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1184_22652)">
                        <path d="M16.0008 0.666667C16.0008 1.03533 15.7021 1.33333 15.3341 1.33333H6.66746C6.29946 1.33333 6.00079 1.03533 6.00079 0.666667C6.00079 0.298 6.29946 0 6.66746 0H15.3341C15.7021 0 16.0008 0.298 16.0008 0.666667ZM13.3341 3.33333H6.66746C6.29946 3.33333 6.00079 3.63133 6.00079 4C6.00079 4.36867 6.29946 4.66667 6.66746 4.66667H13.3341C13.7021 4.66667 14.0008 4.36867 14.0008 4C14.0008 3.63133 13.7021 3.33333 13.3341 3.33333ZM11.3341 6.66667H6.66746C6.29946 6.66667 6.00079 6.96467 6.00079 7.33333C6.00079 7.702 6.29946 8 6.66746 8H11.3341C11.7021 8 12.0008 7.702 12.0008 7.33333C12.0008 6.96467 11.7021 6.66667 11.3341 6.66667ZM9.33412 10H6.66746C6.29946 10 6.00079 10.298 6.00079 10.6667C6.00079 11.0353 6.29946 11.3333 6.66746 11.3333H9.33412C9.70212 11.3333 10.0008 11.0353 10.0008 10.6667C10.0008 10.298 9.70212 10 9.33412 10ZM5.13879 12.862L4.00079 14V0.666667C4.00079 0.298 3.70212 0 3.33412 0C2.96612 0 2.66746 0.298 2.66746 0.666667V14L1.52879 12.8613C1.26812 12.6007 0.846792 12.6007 0.586125 12.8613C0.325458 13.122 0.325458 13.5433 0.586125 13.804L2.39079 15.6087C2.65079 15.8687 2.99212 15.9987 3.33412 15.9987C3.67612 15.9987 4.01679 15.8687 4.27679 15.6087L6.08146 13.804C6.34212 13.5433 6.34212 13.122 6.08146 12.8613C5.82079 12.6007 5.39946 12.6013 5.13879 12.862Z" fill="#B8B8B8" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1184_22652">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    }
                  />
                  <TableTHHeader
                    text={"Tanlov davri"}
                    iconc={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.33756 15.3334L4.33756 1.78741L4.34756 1.79674L5.87089 3.29274C5.93239 3.3582 6.00648 3.41056 6.08871 3.44667C6.17095 3.48279 6.25963 3.50191 6.34944 3.5029C6.43925 3.50389 6.52833 3.48672 6.61134 3.45242C6.69435 3.41813 6.76957 3.36741 6.83249 3.30332C6.89541 3.23923 6.94474 3.16309 6.9775 3.07946C7.01026 2.99584 7.02579 2.90645 7.02315 2.81668C7.02051 2.7269 6.99976 2.63858 6.96214 2.55703C6.92452 2.47547 6.8708 2.40236 6.80423 2.34208L5.28623 0.849411C5.17756 0.740744 5.01089 0.588744 4.83556 0.433411C4.52015 0.154465 4.11362 0.000488154 3.69256 0.000488136C3.2715 0.000488117 2.86497 0.154465 2.54956 0.433411C2.37489 0.588744 2.20823 0.740744 2.10289 0.845411L0.580225 2.34208C0.462353 2.46754 0.397584 2.63374 0.399477 2.80588C0.40137 2.97802 0.469779 3.14275 0.590382 3.2656C0.710986 3.38844 0.874433 3.45987 1.04651 3.46493C1.21858 3.46999 1.38595 3.40829 1.51356 3.29274L3.00423 1.82941L3.00422 15.3334C3.00422 15.5102 3.07446 15.6798 3.19949 15.8048C3.32451 15.9298 3.49408 16.0001 3.67089 16.0001C3.8477 16.0001 4.01727 15.9298 4.1423 15.8048C4.26732 15.6798 4.33756 15.5102 4.33756 15.3334Z" fill="#B8B8B8" />
                      <path d="M9.66765 0.666667L9.66765 14.17L8.17898 12.7073C8.11749 12.6419 8.0434 12.5895 7.96116 12.5534C7.87893 12.5173 7.79024 12.4982 7.70044 12.4972C7.61063 12.4962 7.52154 12.5134 7.43854 12.5477C7.35553 12.582 7.2803 12.6327 7.21738 12.6968C7.15446 12.7608 7.10514 12.837 7.07238 12.9206C7.03961 13.0042 7.02408 13.0936 7.02672 13.1834C7.02936 13.2732 7.05012 13.3615 7.08774 13.4431C7.12536 13.5246 7.17907 13.5977 7.24565 13.658L8.76498 15.1507C8.87365 15.2593 9.04032 15.4113 9.21498 15.5667C9.53039 15.8456 9.93692 15.9996 10.358 15.9996C10.779 15.9996 11.1856 15.8456 11.501 15.5667C11.6763 15.4113 11.843 15.2593 11.9476 15.1547L13.4676 13.658C13.5855 13.5325 13.6503 13.3663 13.6484 13.1942C13.6465 13.0221 13.5781 12.8573 13.4575 12.7345C13.3369 12.6116 13.1734 12.5402 13.0014 12.5352C12.8293 12.5301 12.6619 12.5918 12.5343 12.7073L11.0076 14.208L11.001 14.2133L11.001 0.666667C11.001 0.489856 10.9307 0.320286 10.8057 0.195262C10.6807 0.0702378 10.5111 -1.37136e-07 10.3343 -1.44865e-07C10.1575 -1.52593e-07 9.98794 0.0702378 9.86291 0.195262C9.73789 0.320286 9.66765 0.489856 9.66765 0.666667Z" fill="#B8B8B8" />
                    </svg>
                    }
                  />
                  <th></th>
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
             Tanlovning boshlanish sanasi:                       </Typography>
            <CustomizedInputSimple callback_func={(val) => { console.log(val) }} placeholder="Y-m-d H:i:s" />

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
             Tanlovning tugash sanasi:                        </Typography>
            <CustomizedInputSimple callback_func={(val) => { console.log(val) }} placeholder="Y-m-d H:i:s" />

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
              Предметы                            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => console.log(val)}
              selectOptions={[{
                name: "Tanlang",
                value: 12,
              }]}
            />
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
    </>
  )
}
