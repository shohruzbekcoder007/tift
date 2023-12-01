import React, { useEffect, useState } from 'react'
import { BoxBody, BoxFooter, BoxFooterText, BoxHeader, ClassScheduleTableWrapper, ContentWrapper, ModalBox, ModalButtons, ModalHeader, ModalSelectWrapper } from '../../../../global_styles/styles'
import { TableTHHeader } from '../../../DiplomaTable'
import { Pagination, Paper, Snackbar, Typography } from '@mui/material'
import PageSelector from '../../../PageSelector'
import CustomizedInput from '../../../CustomizedInput'
import { AttendSearchButton, WrapperButtons, WrapperInputsCardTwo } from '../styles'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import CustomizedInputSimple from '../../../CustomizedInputSimple'
import AllSelectFullWidth from '../../../AllSelectFullWidth'
import { useLocation, useNavigate } from 'react-router-dom'
import { useMemo } from 'react'
import lesson_types from '../../../../dictionary/lesson_types'
import { deletScheduleGroup, getPara, getRooms, getScheduleGroup, getSchudelTable, patchScheduleGroup, postSchudelTable } from './request'
import { bot_para, room_create_list, scheduletable } from '../../../../utils/API_urls'
import AlertDialog from '../../../AlertDialog'
import MuiAlert from '@mui/material/Alert';
import { useSelector } from 'react-redux'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Schedule() {
  const [open, setOpen] = React.useState(false);
  const [Status, setStatus] = React.useState(false);
  const [ParaList, setParaList] = React.useState([]);
  const [RoomList, setRoomList] = React.useState([]);
  const [ScheduleGroupList, setScheduleGroupList] = React.useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const state = useLocation()
  const user = useSelector((state) => state.user);
  const [DaySelect, setDaySelect] = React.useState('monday');
  const [ParaSelect, setParaSelect] = React.useState(null);
  const [TypeSelect, setTypeSelect] = React.useState('full');
  const [RoomSelect, setRoomSelect] = React.useState(null);

  const [DaySelectChange, setDaySelectChange] = React.useState(null);
  const [ParaSelectChange, setParaSelectChange] = React.useState(null);
  const [TypeSelectChange, setTypeSelectChange] = React.useState(null);
  const [RoomSelectChange, setRoomSelectChange] = React.useState(null);
  const [openAlertM, setOpenAlertM] = useState(false)
  const [changed, serChanged] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const handleCloseAlert = () => setOpenAlertM(false);
  
  const [alert, setAlert] = useState(false)
  const [DeletedID, setDeletedID] = useState(null)
  const openAlert = (id) => { 
    setDeletedID(id)
    setAlert(true) 
  }

  const anchorOrigin1 = {
    vertical: 'bottom',
    horizontal: "right"
  }
  
  const anchorOrigin2 = {
    vertical: 'bottom',
    horizontal: "left"
  }

  const WeekList = useMemo(() => {
    return [{
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
    ]
  }, [])

  const TypeList = useMemo(() => {
    return lesson_types?.map(elem => {
      return {
        name: elem.uz,
        value: elem.value
      }
    })
  }, [])

  useEffect(() => {
    getPara(bot_para, (response) => {
      setParaSelect(response.data[0].id)
      setParaList(response.data?.map(elem => {
        return {
          name: elem.name,
          value: elem.id
        }
      }))
    }, (error) => {
      console.log(error);
    })

    getRooms(`${room_create_list}?page_size=1000`, (response) => {
      setRoomSelect(response?.data?.results[0]?.id)
      setRoomList(response?.data?.results?.map(elem => {
        return {
          name: elem.name + " (" + elem.building + " bino)",
          value: elem.id
        }
      }))
    }, (error) => {
      console.log(error);
    })
   

  }, []);


  useEffect(() => {
    getScheduleGroup(`${scheduletable}?page_size=100&group=${state.state.id}`, (response) => {
      setScheduleGroupList(response.data.results);
    }, (error) => {
      console.log(error);
    })
  }, [Status]);

  const deleteSchedule = (_) => {
    deletScheduleGroup(`${scheduletable}${DeletedID}`, (response) => {
      setStatus(!Status)
    }, (error) => {
      console.log(error);
    })
  }

  const handleClick = (_) => {
    postSchudelTable(scheduletable, {
      group: state.state.id,
      weekday: DaySelect,
      para: ParaSelect,
      room: RoomSelect,
      types: TypeSelect
    }, (response) => {
      setStatus(!Status)
    }, (error) => {
      serChanged(false)
      setOpenAlertM(true)
      setAlertMessage(error.response.data.detail)
      console.log(error);
    })
  }

  const EditScheduleGroup = (id) => {
    let ChangeList = {}

    if (DaySelectChange) ChangeList.weekday = DaySelectChange
    else if (ParaSelectChange) ChangeList.para = ParaSelectChange
    else if (RoomSelectChange) ChangeList.room = RoomSelectChange
    else if (TypeSelectChange) ChangeList.types = TypeSelectChange
    

    if (ChangeList) {
      patchScheduleGroup(`${scheduletable}${id}/`, ChangeList, (response) => {
        setStatus(!Status)
      }, (error) => {
        console.log(error);
      })
    }
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
        {state?.state?.name}
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
                  {
                    user['role'] != 'rector' &&
                  <th></th>
                  }
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th style={{ border: "0px", padding: '12px 5px' }}>
                    <AllSelectFullWidth
                      chageValueFunction={val => setDaySelect(val)}
                      selectOptions={WeekList}
                      selectedOptionP="monday"
                    />
                  </th>
                  <th style={{ border: "0px", padding: '12px 5px' }}>
                    <AllSelectFullWidth
                      chageValueFunction={val => setParaSelect(val)}
                      selectOptions={ParaList}
                    />
                  </th>
                  <th style={{ border: "0px", padding: '12px 5px' }}>
                    <AllSelectFullWidth
                      chageValueFunction={val => setTypeSelect(val)}
                      selectOptions={TypeList}
                      selectedOptionP="full"
                    />
                  </th>
                  <th style={{ border: "0px", padding: '12px 5px' }}>
                    <AllSelectFullWidth
                      chageValueFunction={val => setRoomSelect(val)}
                      selectOptions={RoomList}
                    />
                  </th>
                  {
                    user['role'] != 'rector' &&
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
                      onClick={(_) => handleClick()}
                      startIcon={null}
                    >
                      Qo'shish
                    </Button>
                  </th>
                  }
                </tr>
              </tbody>
            </table>
          </ClassScheduleTableWrapper>
        </BoxBody>

        <Snackbar open={openAlertM} anchorOrigin={changed ? anchorOrigin1 : anchorOrigin2} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity={changed ? "success" : "error"} sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>



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
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  ScheduleGroupList.map(elem => {
                    return (
                      <tr>
                        <th style={{ border: "0px", padding: '12px 5px' }}>
                          <AllSelectFullWidth
                            chageValueFunction={val => setDaySelectChange(val)}
                            selectedOptionP={elem.weekday}
                            selectOptions={WeekList}
                          />
                        </th>

                        <th style={{ border: "0px", padding: '12px 5px' }}>
                          <AllSelectFullWidth
                            chageValueFunction={val => setParaSelectChange(val)}
                            selectedOptionP={elem.para}
                            selectOptions={ParaList}
                          />
                        </th>
                        <th style={{ border: "0px", padding: '12px 5px' }}>
                          <AllSelectFullWidth
                            chageValueFunction={val => setTypeSelectChange(val)}
                            selectedOptionP={elem.types}
                            selectOptions={TypeList}
                          />
                        </th>
                        <th style={{ border: "0px", padding: '12px 5px' }}>
                          <AllSelectFullWidth
                            chageValueFunction={val => setRoomSelectChange(val)}
                            selectedOptionP={elem.room}
                            selectOptions={RoomList}
                          />
                        </th>
                        {
                          user['role'] != 'rector' &&
                        <th style={{ border: "0px", }}>
                          <div style={{display: 'flex', justifyContent: "space-between  "}}>
                          <Button
                            sx={{ width: "50%", textTransform: "none", boxShadow: "none" }}
                            variant="contained"
                            onClick={(_) => {EditScheduleGroup(elem.id)}}
                          >
                            Saqlash
                          </Button>
                          <Button
                            variant="contained"
                            sx={{
                              borderRadius: "10px",
                              textTransform: "capitalize",
                              boxShadow: "none",
                              padding: "6px 12px",
                              backgroundColor: "redButton.main",
                              "&:hover": {
                                backgroundColor: "redButton.main",
                              },
                            }}
                            onClick={(_) => openAlert(elem.id)}
                            startIcon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_1148_18282)">
                                <path d="M14.0026 2.66667H11.9359C11.7812 1.91428 11.3718 1.23823 10.7768 0.752479C10.1817 0.266727 9.43741 0.000969683 8.66927 0L7.33594 0C6.5678 0.000969683 5.82348 0.266727 5.22844 0.752479C4.63339 1.23823 4.224 1.91428 4.06927 2.66667H2.0026C1.82579 2.66667 1.65622 2.7369 1.5312 2.86193C1.40618 2.98695 1.33594 3.15652 1.33594 3.33333C1.33594 3.51014 1.40618 3.67971 1.5312 3.80474C1.65622 3.92976 1.82579 4 2.0026 4H2.66927V12.6667C2.67033 13.5504 3.02186 14.3976 3.64675 15.0225C4.27164 15.6474 5.11887 15.9989 6.0026 16H10.0026C10.8863 15.9989 11.7336 15.6474 12.3585 15.0225C12.9833 14.3976 13.3349 13.5504 13.3359 12.6667V4H14.0026C14.1794 4 14.349 3.92976 14.474 3.80474C14.599 3.67971 14.6693 3.51014 14.6693 3.33333C14.6693 3.15652 14.599 2.98695 14.474 2.86193C14.349 2.7369 14.1794 2.66667 14.0026 2.66667ZM7.33594 1.33333H8.66927C9.08279 1.33384 9.48602 1.46225 9.82368 1.70096C10.1613 1.93967 10.4169 2.27699 10.5553 2.66667H5.44994C5.58833 2.27699 5.84387 1.93967 6.18153 1.70096C6.51919 1.46225 6.92242 1.33384 7.33594 1.33333ZM12.0026 12.6667C12.0026 13.1971 11.7919 13.7058 11.4168 14.0809C11.0417 14.456 10.533 14.6667 10.0026 14.6667H6.0026C5.47217 14.6667 4.96346 14.456 4.58839 14.0809C4.21332 13.7058 4.0026 13.1971 4.0026 12.6667V4H12.0026V12.6667Z" fill="white" />
                                <path d="M6.66667 12.0001C6.84348 12.0001 7.01305 11.9298 7.13807 11.8048C7.2631 11.6798 7.33333 11.5102 7.33333 11.3334V7.33341C7.33333 7.1566 7.2631 6.98703 7.13807 6.86201C7.01305 6.73699 6.84348 6.66675 6.66667 6.66675C6.48986 6.66675 6.32029 6.73699 6.19526 6.86201C6.07024 6.98703 6 7.1566 6 7.33341V11.3334C6 11.5102 6.07024 11.6798 6.19526 11.8048C6.32029 11.9298 6.48986 12.0001 6.66667 12.0001Z" fill="white" />
                                <path d="M9.33073 12.0001C9.50754 12.0001 9.67711 11.9298 9.80213 11.8048C9.92716 11.6798 9.9974 11.5102 9.9974 11.3334V7.33341C9.9974 7.1566 9.92716 6.98703 9.80213 6.86201C9.67711 6.73699 9.50754 6.66675 9.33073 6.66675C9.15392 6.66675 8.98435 6.73699 8.85932 6.86201C8.7343 6.98703 8.66406 7.1566 8.66406 7.33341V11.3334C8.66406 11.5102 8.7343 11.6798 8.85932 11.8048C8.98435 11.9298 9.15392 12.0001 9.33073 12.0001Z" fill="white" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1148_18282">
                                  <rect width="16" height="16" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>

                            }
                          >
                          </Button>
                       
                          </div>
                        <AlertDialog
                          open_alert={alert}
                          callback1={(_) => {
                            deleteSchedule()
                          }}
                          callback2={() => { setAlert(false) }}
                          alertText={"Ushbu Jadvalni haqiqatdan ham o'chirmoqchimisiz?"}
                        />
                        </th>
                        }
                      </tr>
                    )
                  })
                }
                {/* <tr>
                  <th style={{ border: "0px", padding: '12px 5px'}}>
                    <AllSelectFullWidth
                      chageValueFunction={val => console.log(val)}
                      selectedOptionP = {'wednesday'}
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
                        value: 'wednesday'
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
                </tr> */}
              </tbody>
            </table>
          </ClassScheduleTableWrapper>
        </BoxBody>
        {/* <WrapperInputsCardTwo>
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
        </WrapperInputsCardTwo> */}
      </Paper>

    </>
  )
}
