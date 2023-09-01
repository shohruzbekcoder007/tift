import React from 'react'
import { ModalSelectWrapper } from '../../../../global_styles/styles'
import { Button, Typography } from '@mui/material'
import CustomizedInputSimple from '../../../CustomizedInputSimple'
import AllSelectFullWidth from '../../../AllSelectFullWidth'
import { WrapperBox, WrapperButtons, WrapperHeader, WrapperSelect } from '../Career/styles'
import { useNavigate } from 'react-router-dom';

export default function Show() {
  const navigate = useNavigate();
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
        Mansab-Xodimlar
      </Typography>
      <WrapperBox>
        <WrapperHeader>
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
            Xodim: Yaxshiboyev Doniyor                            </Typography>
        </WrapperHeader>
        <WrapperSelect>
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

        </ModalSelectWrapper>
        <WrapperButtons>
          <Button
            sx={{ width: "50%", textTransform: "none" }}
            variant="outlined"
            onClick={() => navigate(-1)}
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
