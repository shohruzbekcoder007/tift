import React, { useEffect } from 'react'
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
import { useLocation, useNavigate } from 'react-router-dom'
import { useMemo } from 'react'
import lesson_types from '../../../../dictionary/lesson_types'
import { getPara, getRooms, getScheduleGroup, getSchudelTable, patchScheduleGroup, postSchudelTable } from './request'
import { bot_para, room_create_list, scheduletable } from '../../../../utils/API_urls'

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

  const [DaySelect, setDaySelect] = React.useState('monday');
  const [ParaSelect, setParaSelect] = React.useState(null);
  const [TypeSelect, setTypeSelect] = React.useState('full');
  const [RoomSelect, setRoomSelect] = React.useState(null);

  const [DaySelectChange, setDaySelectChange] = React.useState(null);
  const [ParaSelectChange, setParaSelectChange] = React.useState(null);
  const [TypeSelectChange, setTypeSelectChange] = React.useState(null);
  const [RoomSelectChange, setRoomSelectChange] = React.useState(null);


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
                  <th></th>
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
                        <th style={{ border: "0px", }}>
                          <Button
                            sx={{ width: "50%", textTransform: "none", boxShadow: "none" }}
                            variant="contained"
                            onClick={(_) => {EditScheduleGroup(elem.id)}}
                          >
                            Saqlash
                          </Button>
                        </th>
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
