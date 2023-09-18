import React, { useEffect, useState } from 'react'
import { BoxBody, BoxHeader, ClassScheduleTableWrapper, ContentWrapper } from '../../../global_styles/styles'
import { Paper } from '@mui/material'
import { TableTHHeader } from '../../DiplomaTable'
import AllSelectFullWidth from '../../AllSelectFullWidth'
import { getBuildings, getGroups, getRoomList, getScheduleAdmin, getSemester } from './requests'
import { building, my_semesters, room_create_list, schedule_admin, teacher_groups } from '../../../utils/API_urls'
import DayTable from './DayTable'

export default function ScheduleStudy() {

  const [semesters, setSemesters] = useState([])
  const [semester, setSemester] = useState(0)
  const [tours, setTours] = useState([])
  const [tour, setTour] = useState([])
  const [rooms, setRooms] = useState([])
  const [groups, setGroups] = useState([])
  const [roomList, setRoomList] = useState([])

  useEffect(() => {
    getSemester(my_semesters, (response) => {
      const semester_firstly = response.data.map(element => {
        return {
          value: element.id,
          name: `${element.parent} ${element.name}`
        }
      })
      setSemester(semester_firstly[0].value)
      setSemesters(semester_firstly)
    }, (error) => {
      console.log(error)
    })
    getBuildings(`${building}?page_size=20`, (response) => {
      const building_firstly = response.data.results.map(element => {
        return {
          value: element.id,
          name: `${element.name} ${element.room}`
        }
      })
      setTour(building_firstly[0].value)
      setTours(building_firstly)
    }, (error) => {
      console.log(error)
    })
  }, [])

  useEffect(() => {
    if (semester) {
      getGroups(`${teacher_groups}?semester=${semester}&page_size=500`, (response) => {
        const result_list = response.data.map(elem => {
          return {
            name: elem.name,
            value: elem.id
          }
        })
        setGroups(result_list)
      }, (error) => {
        console.log(error)
      })
    }
  }, [semester])

  useEffect(() => {
    getRoomList(`${room_create_list}?building=${tour}&page_size=500`, response => {
      const room_list = response.data.results.map((elem) => {
        return {
          value: elem.id,
          name: `${elem.name} ${elem.count}`
        }
      })
      setRoomList(room_list)
    }, error => {
      console.log(error)
    })
  }, [tour])

  useEffect(() => {
    if (semester != 0 && tour != 0) {
      getScheduleAdmin(`${schedule_admin}?semester=${semester}&building=${tour}`, (response) => {
        setRooms(response.data.room)
      }, (error) => {
        console.log(error)
      })
    }
  }, [semester, tour])

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
          <AllSelectFullWidth
            chageValueFunction={val => setTour(val)}
            selectOptions={tours}
          />
          <AllSelectFullWidth
            chageValueFunction={val => setSemester(val)}
            selectOptions={semesters}
          />
        </BoxHeader>
        <BoxBody>
          <ClassScheduleTableWrapper>
            <table>
              <thead>
                <tr>
                  <TableTHHeader
                    text="Aud."
                    iconc={null}
                    rowspan={2}
                  />
                  <TableTHHeader
                    text="Dushanba"
                    iconc={null}
                    colspan={6}
                  />
                  <TableTHHeader
                    text="Seshanba"
                    iconc={null}
                    colspan={6}
                  />
                  <TableTHHeader
                    text="Chorshanba"
                    iconc={null}
                    colspan={6}
                  />
                  <TableTHHeader
                    text="Payshanba"
                    iconc={null}
                    colspan={6}
                  />
                  <TableTHHeader
                    text="Juma"
                    iconc={null}
                    colspan={6}
                  />
                  <TableTHHeader
                    text="Shanba"
                    iconc={null}
                    colspan={6}
                  />
                </tr>
                <tr>
                  <TableTHHeader
                    text="1"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="2"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="3"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="4"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="5"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="6"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="1"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="2"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="3"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="4"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="5"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="6"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="1"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="2"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="3"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="4"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="5"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="6"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="1"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="2"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="3"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="4"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="5"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="6"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="1"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="2"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="3"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="4"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="5"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="6"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="1"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="2"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="3"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="4"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="5"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="6"
                    iconc={null}
                  />
                </tr>
              </thead>
              <tbody>
                {
                  rooms.map((elem, index) => {
                    return (
                      <tr key={index}>
                        <th>{elem.name} ({elem.count})</th>
                        {
                          elem.schedule.map((el, ind) => {
                            return el.timetable.map((ell, innd) => {
                              return (
                                <DayTable oneday={ell} groups={groups} day={ind + 1} para={innd + 1} key={innd} room={{ name: elem.name, id: elem.id }} semester={semester} />
                              )
                            }
                            )
                          })
                        }
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </ClassScheduleTableWrapper>
        </BoxBody>
      </Paper>
    </ContentWrapper>
  )
}