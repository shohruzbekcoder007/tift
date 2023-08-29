import { Button, Checkbox, Pagination, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { BoxBody, BoxFooter, BoxTableCard, ClassScheduleTableWrapper, HeaderWrapper, HeaderWrapperH4, HeaderWrapperP, WrapperBody, WrapperBottom,  BuildingModalLang, BuildingModalLangText  } from './styles'
import { BoxFooterText, BoxHeader, ModalBox, ModalButtons, ModalHeader, ModalSelectWrapper } from '../../../../global_styles/styles'
import { TableTHHeader } from '../../../DiplomaTable'
import PageSelector from '../../../PageSelector'
import { AttendSearchButton } from '../../AddCredit/styles'
import CustomizedInput from '../../../CustomizedInput'
import { Modal } from '@mui/base'
import AllSelectFullWidth from '../../../AllSelectFullWidth'
import CustomizedInputSimple from '../../../CustomizedInputSimple'
import { MuiFileInput } from 'mui-file-input'
import { WrapperButtons } from '../../Employees/Career/styles'
import { WrapperInputsCardTwo } from '../../Employees/EditEmployees/styles'

export default function Add() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [file, setFile] = useState(null);
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const setFileHandler = (newValue, info) => {
      setFile(newValue)
  }
  return (
    <>
      <Typography
        sx={{
          color: "#000",
          fontWeight: "600",
          fontSize: "20px"
        }}
      >
        Qo’shish
      </Typography>
      <BoxTableCard>
      <Paper
        elevation={0}
        sx={{
          width: '100%',
          padding: "20px",
          borderRadius: "10px"
        }}
      >
        <div style={{display: "flex"}}>
          <HeaderWrapper>
          <BuildingModalLang>
            <BuildingModalLangText>RU</BuildingModalLangText>
            <BuildingModalLangText>UZC</BuildingModalLangText>
            <BuildingModalLangText>UZL</BuildingModalLangText>
            <BuildingModalLangText>EN</BuildingModalLangText>
            <BuildingModalLangText>KAR</BuildingModalLangText>
          </BuildingModalLang>
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
                Nomi
              </Typography>
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
                  m: "20px 0 10px 0"
                }}
              >
                Semestr
              </Typography>
              <CustomizedInputSimple callback_func={(val) => { console.log(val) }} placeholder="1" />
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
                  m: "20px 0 10px 0"
                }}
              >
                Leksiya
              </Typography>
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
                  m: "20px 0 10px 0"
                }}
              >
                Amaliyot
              </Typography>
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
                  m: "20px 0 10px 0"
                }}
              >
                Labaratoriya
              </Typography>
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
                  m: "20px 0 10px 0"
                }}
              >
                Kredit
              </Typography>
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
                  m: "20px 0 10px 0"
                }}
              >
                Kod
              </Typography>
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
                Kafedra                        </Typography>
              <AllSelectFullWidth
                chageValueFunction={val => console.log(val)}
                selectOptions={[{
                  name: "Tanlang",
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
                Daraja                        </Typography>
              <AllSelectFullWidth
                chageValueFunction={val => console.log(val)}
                selectOptions={[{
                  name: "Bakalavr",
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
                Ta’lim turi                        </Typography>
              <AllSelectFullWidth
                chageValueFunction={val => console.log(val)}
                selectOptions={[{
                  name: "Ikkinchi mutahassislik",
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
                Fan turi                        </Typography>
              <AllSelectFullWidth
                chageValueFunction={val => console.log(val)}
                selectOptions={[{
                  name: "Tanlang",
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
                Asosiy predmet                        </Typography>
              <AllSelectFullWidth
                chageValueFunction={val => console.log(val)}
                selectOptions={[{
                  name: "Tanlang",
                  value: 12,
                }]}
              />
            </ModalSelectWrapper>
          <WrapperButtons>
          <Button
            sx={{ width: "50%", textTransform: "none" }}
            variant="outlined"
          >
            Bekor qilish
          </Button>
          <Button
            sx={{ width: "50%", textTransform: "none", boxShadow: "none" }}
            variant="contained"
          >
            Saqlash
          </Button>
          </WrapperButtons>
          </HeaderWrapper>
{/* 
          <HeaderWrapper>
          <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="h4"
                sx={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#000",
                  m: "0 0 20px 0"
                }}
              >
                Yo'nalishga aloqadorlik
              </Typography>
              {
                [1,2,3,4,5,6,6,8,9,0,2,2,3,1,2,2,1,3,3,1,1,2,2,2,2,2,2,2,2].map(item => {
                  return (
                   <div>
                     <Checkbox {...label}  /> Kompyuter muhandisligi (bakalavr)
                   </div>
                  )
                })
              }
          </HeaderWrapper> */}
        </div>
        
      </Paper>
      </BoxTableCard>
    </>
  )
}
