import React, { useState } from 'react'
import { BoxHeader, ModalBox, ModalButtons, ModalHeader, ModalSelectWrapper } from '../../../../global_styles/styles'
import { Button, Typography } from '@mui/material'
import CustomizedInputSimple from '../../../CustomizedInputSimple'
import AllSelectFullWidth from '../../../AllSelectFullWidth'
import { WrapperBox, WrapperButtons, WrapperHeader, WrapperInputsCard, WrapperSelect, WrapperInputsCard2, WrapperInputsCardTwo } from './styles'
import { InputsWrapper } from '../../../CourseManagement/styles'
import { MuiFileInput } from 'mui-file-input'

export default function AdminUsersEdit() {
  const [file, setFile] = useState(null);

  const setFileHandler = (newValue, info) => {
    setFile(newValue)
  }
  return (
    <div>
      <Typography
        sx={{
          color: "#000",
          fontWeight: "600",
          fontSize: "20px",
          margin: "0 0 20px 10px"
        }}
      >
        Tahrirlash
      </Typography>
      <WrapperBox>

        <BoxHeader>
          <WrapperInputsCardTwo>
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
              Login
            </Typography>
            <CustomizedInputSimple callback_func={(val) => { console.log(val) }} placeholder="" />

          </WrapperInputsCardTwo>
          <WrapperInputsCardTwo>
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
              Parol
            </Typography>
            <CustomizedInputSimple callback_func={(val) => { console.log(val) }} placeholder="" />
          </WrapperInputsCardTwo>
        </BoxHeader>

        <BoxHeader>
          <WrapperInputsCardTwo>
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
              Til
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => console.log(val)}
              selectOptions={[{
                name: "RU",
                value: 12,
              }]}
            />
          </WrapperInputsCardTwo>
          <WrapperInputsCardTwo>
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
              Talaba
            </Typography>
            <CustomizedInputSimple callback_func={(val) => { console.log(val) }} placeholder="Ivanov Petr mixaylovich" />
          </WrapperInputsCardTwo>
        </BoxHeader>


        <BoxHeader>
          <WrapperInputsCardTwo>
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
              Tanlang
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => console.log(val)}
              selectOptions={[{
                name: "Tanlang",
                value: 12,
              }]}
            />
          </WrapperInputsCardTwo>
          <WrapperInputsCardTwo>
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
              Parolni tasdiqlang
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => console.log(val)}
              selectOptions={[{
                name: "",
                value: 12,
              }]}
            />
          </WrapperInputsCardTwo>
        </BoxHeader>


        <BoxHeader>
          <WrapperInputsCardTwo>
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
              Rol
            </Typography>
            <CustomizedInputSimple callback_func={(val) => { console.log(val) }} placeholder="" />
          </WrapperInputsCardTwo>
          <WrapperInputsCardTwo>
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
          </WrapperInputsCardTwo>
        </BoxHeader>
        {/* <WrapperSelect>
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
            Turi      
          </Typography>
          <AllSelectFullWidth
            chageValueFunction={val => console.log(val)}
            selectOptions={[{
              name: "Fakultet",
              value: 12,
            }]}
          />
        </WrapperSelect>
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
            Fakultet                  </Typography>
          <AllSelectFullWidth
            chageValueFunction={val => console.log(val)}
            selectOptions={[{
              name: "Kompyuter injeneringi",
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
            Vazifasi                        </Typography>
          <AllSelectFullWidth
            chageValueFunction={val => console.log(val)}
            selectOptions={[{
              name: "Dekan",
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
            Stavka
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
              mb: "10px"
            }}
          >
            Ishning boshlanishi:
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
          Ishning boshlanishi:

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
              Ishning tugashi:
          </Typography>
          <CustomizedInputSimple callback_func={(val) => { console.log(val) }} placeholder="" />

        </ModalSelectWrapper> */}

      </WrapperBox>
    </div>
  )
}
