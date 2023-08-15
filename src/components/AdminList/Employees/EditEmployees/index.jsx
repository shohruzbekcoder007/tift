import React from 'react'
import { BoxHeader, ModalBox, ModalButtons, ModalHeader, ModalSelectWrapper } from '../../../../global_styles/styles'
import { Button, Typography } from '@mui/material'
import CustomizedInputSimple from '../../../CustomizedInputSimple'
import AllSelectFullWidth from '../../../AllSelectFullWidth'
import { WrapperBox, WrapperButtons, WrapperHeader, WrapperSelect } from './styles'
import { InputsWrapper } from '../../../CourseManagement/styles'

export default function EditEmployees() {
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
        Redaktirovat
      </Typography>
      <WrapperBox>
        <WrapperHeader>
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
                Ism
              </Typography>
              <CustomizedInputSimple callback_func={(val) => { console.log(val) }} placeholder="Doniyor" />
            {/* <div>
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
                Pasport
              </Typography>
              <CustomizedInputSimple callback_func={(val) => { console.log(val) }} placeholder="AA 3798787" />
            </div>
            <div>
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
                Jinsi
              </Typography>
              <AllSelectFullWidth
                chageValueFunction={val => console.log(val)}
                selectOptions={[{
                  name: "Qiz",
                  value: 12,
                }]}
              />
            </div> */}
        </WrapperHeader>
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
      </WrapperBox>
    </div>
  )
}
