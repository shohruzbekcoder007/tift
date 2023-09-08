import React from 'react'
import { BoxBody, BoxFooter, BoxFooterText, BoxHeader, ClassScheduleTableWrapper, ContentWrapper, ModalBox, ModalButtons, ModalHeader, ModalSelectWrapper } from '../../../../global_styles/styles'
import { TableTHHeader } from '../../../DiplomaTable'
import { Pagination, Paper, Typography } from '@mui/material'
import PageSelector from '../../../PageSelector'
import CustomizedInput from '../../../CustomizedInput'
import { AttendSearchButton, WrapperButtons, WrapperInputsCardTwo } from '../styles'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import CustomizedInputSimple from '../../../CustomizedInputSimple'
import AllSelectFullWidth from '../../../AllSelectFullWidth'
import { useNavigate } from 'react-router-dom'

export default function Schedule() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  return (
    <>
      <Typography
        sx={{
          color: "#000",
          fontWeight: "600",
          fontSize: "20px"
        }}
      >
        HSM500
      </Typography>
      <Paper
        elevation={0}
        sx={{
          width: '100%',
          padding: "20px",
          borderRadius: "10px"
        }}
      >
        <BoxBody>
          <ClassScheduleTableWrapper>
            <table>
              <thead>
                <tr>
                  <TableTHHeader
                    text={"День"}
                    iconc={null}
                  />
                  <TableTHHeader
                    text={"Пара"}
                    iconc={null}
                  />
                  <TableTHHeader
                    text={"Тип"}
                    iconc={null}
                  />
                  <TableTHHeader
                    text={"Аудитория"}
                    iconc={null}
                  />
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th style={{ border: "0px", padding: '12px 5px'}}>
                    <AllSelectFullWidth
                      chageValueFunction={val => console.log(val)}
                      selectOptions={[{
                        name: "Monday",
                        value: 'monday',
                        selected: false
                      },
                      {
                        name: "Tuesday",
                        value: 'tuesday',
                        selected: false
                      },
                      {
                        name: "Wednesday",
                        value: 'wednesday',
                        selected: true
                      },
                      {
                        name: "Thursday",
                        value: 'thursday',
                        selected: false
                      },
                      {
                        name: "Friday",
                        value: 'friday',
                        selected: false
                      },
                      {
                        name: "Saturday",
                        value: 'saturday',
                        selected: false
                      }
                      ]}
                    />
                  </th>
                  <th style={{ border: "0px", padding: '12px 5px' }}>
                    <AllSelectFullWidth
                      chageValueFunction={val => console.log(val)}
                      selectOptions={[{
                        name: "Tanlang",
                        value: 12,
                      }]}
                    />
                  </th>
                  <th style={{ border: "0px", padding: '12px 5px' }}>
                    <AllSelectFullWidth
                      chageValueFunction={val => console.log(val)}
                      selectOptions={[{
                        name: "Tanlang",
                        value: 12,
                      }]}
                    />
                  </th>
                  <th style={{ border: "0px", padding: '12px 5px' }}>
                    <AllSelectFullWidth
                      chageValueFunction={val => console.log(val)}
                      selectOptions={[{
                        name: "Tanlang",
                        value: 12,
                      }]}
                    />
                  </th>
                  <th style={{ border: "0px", }}>
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: "10px",
                        textTransform: "capitalize",
                        boxShadow: "none",
                        padding: "10px 12px",
                        margin: '0 10px',
                        width: "90%"
                      }}
                      onClick={(_) => { }}
                      startIcon={null}
                    >
                      Qo'shish
                    </Button>
                  </th>
                </tr>
              </tbody>
            </table>
          </ClassScheduleTableWrapper>
        </BoxBody>





        <Typography
        sx={{
          color: "#000",
          fontWeight: "600",
          fontSize: "20px",
          margin: '20px 0'
        }}
      >
        O'zgartirish
      </Typography>

      <BoxBody>
          <ClassScheduleTableWrapper>
            <table>
              <thead>
                <tr>
                  <TableTHHeader
                    text={"День"}
                    iconc={null}
                  />
                  <TableTHHeader
                    text={"Пара"}
                    iconc={null}
                  />
                  <TableTHHeader
                    text={"Тип"}
                    iconc={null}
                  />
                  <TableTHHeader
                    text={"Аудитория"}
                    iconc={null}
                  />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th style={{ border: "0px", padding: '12px 5px'}}>
                    <AllSelectFullWidth
                      chageValueFunction={val => console.log(val)}
                      selectOptions={[{
                        name: "Monday",
                        value: 'monday',
                      },
                      {
                        name: "Tuesday",
                        value: 'tuesday',
                      },
                      {
                        name: "Wednesday",
                        value: 'wednesday',
                        selected: true
                      },
                      {
                        name: "Thursday",
                        value: 'thursday',
                      },
                      {
                        name: "Friday",
                        value: 'friday',
                      },
                      {
                        name: "Saturday",
                        value: 'saturday',
                      }
                      ]}
                    />
                  </th>
                  <th style={{ border: "0px", padding: '12px 5px' }}>
                    <AllSelectFullWidth
                      chageValueFunction={val => console.log(val)}
                      selectOptions={[{
                        name: "Tanlang",
                        value: 12,
                      }]}
                    />
                  </th>
                  <th style={{ border: "0px", padding: '12px 5px' }}>
                    <AllSelectFullWidth
                      chageValueFunction={val => console.log(val)}
                      selectOptions={[{
                        name: "Tanlang",
                        value: 12,
                      }]}
                    />
                  </th>
                  <th style={{ border: "0px", padding: '12px 5px' }}>
                    <AllSelectFullWidth
                      chageValueFunction={val => console.log(val)}
                      selectOptions={[{
                        name: "Tanlang",
                        value: 12,
                      }]}
                    />
                  </th>
                  {/* <th style={{ border: "0px", }}>
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: "10px",
                        textTransform: "capitalize",
                        boxShadow: "none",
                        padding: "10px 12px",
                        margin: '0 10px'
                      }}
                      onClick={(_) => { }}
                      startIcon={null}
                    >
                      Qo'shish
                    </Button>
                  </th> */}
                </tr>
              </tbody>
            </table>
          </ClassScheduleTableWrapper>
        </BoxBody>
        <WrapperInputsCardTwo>
          <WrapperButtons>
          <Button
            sx={{ width: "50%", textTransform: "none" }}
            variant="outlined"
            onClick={() => navigate(-1)}
          >
            Qaytish
          </Button>
          <Button
            sx={{ width: "50%", textTransform: "none", boxShadow: "none" }}
            variant="contained"
          >
            Saqlash
          </Button>
          </WrapperButtons>
        </WrapperInputsCardTwo>
      </Paper>

    </>
  )
}
