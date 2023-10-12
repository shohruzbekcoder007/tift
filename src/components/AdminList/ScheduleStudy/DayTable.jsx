import React, { useMemo, useState } from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { ScheduleTable } from './styles'
import AllSelectFullWidth from '../../AllSelectFullWidth';
import { ModalSelectWrapper } from '../../../global_styles/styles';
import week_day from '../../../dictionary/week_day'
import lesson_types from '../../../dictionary/lesson_types'
import { createScheduleTable } from './requests';
import { scheduletable } from '../../../utils/API_urls';
import { Alert } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function DayTable({ oneday, groups, day, para, room }) {

  const [open, setOpen] = useState(false);
  const [new_lessons, setNewLessons] = useState([])
  const [error, setError] = useState(false)
  const [data, setData] = useState({
    group: groups[0]?.value,
    weekday: getDay(day),
    para: para,
    room: room?.id,
    types: lesson_types[0].value
  })

  const weekDays = useMemo(() => {
    return week_day.map(elem => {
      return {
        value: elem.value,
        name: elem.uz
      }
    })
  }, [])

  const lessonTypes = useMemo(() => {
    return lesson_types.map(elem => {
      return {
        name: elem.uz,
        value: elem.value
      }
    })
  }, [])

  const paraList = useMemo(() => {
    return [
      {
        name: 1,
        value: 1
      },
      {
        name: 2,
        value: 2
      },
      {
        name: 3,
        value: 3
      },
      {
        name: 4,
        value: 4
      },
      {
        name: 5,
        value: 5
      },
      {
        name: 6,
        value: 6
      }
    ]
  }, [])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    createScheduleTable(scheduletable, data, response => {
      if (response.id) {
        setNewLessons(prev => {
          return [...prev, {
            types: data.types,
            group: groups.find((el) => el.value == data.group)
          }]
        })
        handleClose()
      } else {
        setError(true)
      }
    }, error => {
      console.log(error)
      setError(true)
    })
  }

  return (
    <>
      <ScheduleTable
        onClick={() => {
          handleClickOpen()
        }}
      >
        {
          oneday?.group?.[0] != null && oneday?.group?.map((element, indx) => {
            return <span key={indx} style={{ padding: "10px", backgroundColor: "#eee", borderRadius: "10px", margin: "5px", display: "inline-block", color: "#000" }}>{element}</span>
          })
        }
        {
          new_lessons?.map((element, indx) => {
            return <span key={indx} style={{ padding: "10px", backgroundColor: "#eee", borderRadius: "10px", margin: "5px", display: "inline-block", color: "#000" }}>{element.group.name}</span>
          })
        }
      </ScheduleTable>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Dars jadvaliga qo'shish
        </DialogTitle>

        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers style={{ width: "450px" }}>
          {error ? <Alert severity="success" color="error" sx={{ my: 1 }}>
            Jadvalga dars qo'shib bo'lmadi
          </Alert> : <></>}
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
              Group
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => setData(prev => {
                return {
                  ...prev,
                  group: val
                }
              })}

              selectOptions={groups}
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
              Weekday
            </Typography>
            {getDay(day)}
            {/* <AllSelectFullWidth
                            chageValueFunction={val => setData(prev => {
                                return {
                                    ...prev,
                                    weekday: val
                                }
                            })}
                            selectOptions={weekDays}
                        /> */}
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
              Para
            </Typography>
            {para}
            {/* <AllSelectFullWidth
                            chageValueFunction={val => setData(prev => {
                                return {
                                    ...prev,
                                    para: val
                                }
                            })}
                            selectOptions={paraList}
                        /> */}
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
              Room
            </Typography>
            {room?.name}
            {/* <AllSelectFullWidth
                            chageValueFunction={val => setData(prev => {
                                return {
                                    ...prev,
                                    room: val
                                }
                            })}
                            selectOptions={roomList}
                        /> */}
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
              Types
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => setData(prev => {
                return {
                  ...prev,
                  types: val
                }
              })}
              selectOptions={lessonTypes}
            />
          </ModalSelectWrapper>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSubmit}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  )
}

const getDay = (day_number) => {
  if (day_number == 1) return "monday"
  if (day_number == 2) return "tuesday"
  if (day_number == 3) return "wednesday"
  if (day_number == 4) return "thursday"
  if (day_number == 5) return "friday"
  if (day_number == 6) return "saturday"
}