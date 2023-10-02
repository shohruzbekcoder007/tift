import React, { useEffect, useMemo, useState } from 'react'
import { BoxBody, BoxFooter, BoxFooterText, BoxHeader, ContentWrapper,ClassScheduleTableWrapper } from '../../global_styles/styles'
import { Button, CircularProgress, Pagination, Paper, Typography } from '@mui/material'
import { ThesisBody, ThesisHeader } from './styles'
import CustomizedInput from '../CustomizedInput'
import PageSelector from '../PageSelector'
import DiplomaTable, { TableTHHeader } from '../DiplomaTable'
import Modal from '@mui/material/Modal'
import AllSelectFullWidth from '../AllSelectFullWidth'
import { ModalBox, ModalButtons, ModalHeader, ModalSelectWrapper } from '../../global_styles/styles'
import CustomizedInputSimple from '../CustomizedInputSimple'
import listLanguage from '../DiplomaTable/language.json'
import { MuiFileInput } from 'mui-file-input'
import DataPicker from '../DataPicker'
import { useLocation } from 'react-router'
import { getTeacheravTasks, setTeacheravTasksPost, setTeacheravTasksPut, setTeacherDeleteTasks } from './requests'
import { host, teacher_tasks } from '../../utils/API_urls'
import AllSelect from '../AllSelect'

export default function Tasks() {
  const { state } = useLocation()
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [file, setFile] = useState(null);
  const [tasksList, settasksList] = useState([]);
  const [titleTasks, settitleTasks] = useState(null);
  const [dedlineTasks, setdedlineTasks] = useState(null);
  const [maxgradeTasks, setmaxgradeTasks] = useState(null);

  // const [tasktypeVal, setTasktype] = useState('oraliq')
  const [taskmethodVal, setTaskmethod] = useState('oddiy')
  // const [trycount, settrycount] = useState(null);
  const [testtime, settesttime] = useState(null);
  const [Disabled, setDisabled] = useState(false);
  const [Status, setStatus] = useState(false);
  const [ModalText, setModalText] = useState(listLanguage.Save['uz']);



  const setFileHandler = (newValue, info) => {
      setFile(newValue)
  }
  const chageRowHadler = (val) => {
    console.log(val)
  }

  const chageSearch = (val) => {
    console.log(val)
  }

  const chagePageHandle = (_, value) => {
    console.log(value)
  }

  useEffect(() => {
    getTeacheravTasks(`${teacher_tasks}?patok=${state.data}`, (response) => {
      settasksList(response.data)
    }, (error) => {
        console.log(error)
    })
  }, [Status])

  const tasktype = useMemo(() => {
    return [
      {
        name: "Oraliq",
        value: 'oraliq',
      },
      {
        name: "Yakuniy",
        value: 'yakuniy',
      },
      {
        name: "Joriy",
        value: 'joriy',
      },
      {
        name: "ananaviy",
        value: 'ananaviy',
      },
    ]
  }, [])

  const taskmethod = useMemo(() => {
    return [
      {
        name: "Oddiy",
        value: 'oddiy',
      },
      {
        name: "Test",
        value: 'test',
      },
      {
        name: "File",
        value: 'file',
      },
    ]
  }, [])

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    setModalText(<CircularProgress color="success" size={25} />)
    setDisabled(true)
    const formData = new FormData();
    if(file){
      formData.append("source", file);
    }
    
    formData.append("title", titleTasks);
    formData.append("grade", maxgradeTasks);
    formData.append("deadline", dedlineTasks);
    formData.append("group", state.data);
    // formData.append("type", tasktypeVal);
    formData.append("method", taskmethodVal);
    // formData.append("try_count", trycount);
    formData.append("time", testtime);


    setTeacheravTasksPost(teacher_tasks, formData, (response) => { 
      setDisabled(false)
      setModalText(listLanguage.Save['uz'])
      setFile(null)
      setStatus(!Status)
      handleClose()
    }, (error) => {
      setDisabled(false)
      setModalText(listLanguage.Save['uz'])
      console.log(error)
    })
};


  return (
    <>
      <BoxHeader>
        <Typography
          variant='h2'
          sx={{
            color: '#000',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: 'normal',
          }}
        >
          Vazifalar - {state.name}
        </Typography>
        <Button
          variant="contained"
          sx={{
            textTransform: "capitalize",
            boxShadow: "none",
            padding: "12px 70px",
            borderRadius: "10px",
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "17px",
            '@media screen and (max-width: 400px)': { 
              margin: "20px 0 0 0" 
            }, 
          }}
          onClick={handleOpen}
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
          {listLanguage.Add['uz']}
        </Button>
      </BoxHeader>
      <Paper
        elevation={0}
        sx={{
          width: '100%',
          padding: "20px",
          borderRadius: "10px"
        }}
      >
        <BoxHeader>
          <Typography
            variant='h2'
            sx={{
              color: '#00753B',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '150%',
              padding: "10px",
              alignItem: "center",
              bgcolor: "rgba(0, 138, 22, 0.08)",
              borderRadius: "10px",
              width: "100%"
            }}
          >
            Talabalarga baxo qo'yish muddati: Topshirish muddatidan keyin 2 kun.
          </Typography>
        </BoxHeader>
        {/* <ThesisHeader>
          <PageSelector chageValueFunction={chageRowHadler} />
          <div style={{ display: 'flex', gap: "10px" }}>
            <CustomizedInput callback_func={chageSearch} />
          </div>
        </ThesisHeader> */}
        <BoxBody>
          <ClassScheduleTableWrapper>
            <table>
              <thead>
                <tr>
                  <TableTHHeader
                    text="ID"
                    iconc={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.0008 0.666667C16.0008 1.03533 15.7021 1.33333 15.3341 1.33333H6.66746C6.29946 1.33333 6.00079 1.03533 6.00079 0.666667C6.00079 0.298 6.29946 0 6.66746 0H15.3341C15.7021 0 16.0008 0.298 16.0008 0.666667ZM13.3341 3.33333H6.66746C6.29946 3.33333 6.00079 3.63133 6.00079 4C6.00079 4.36867 6.29946 4.66667 6.66746 4.66667H13.3341C13.7021 4.66667 14.0008 4.36867 14.0008 4C14.0008 3.63133 13.7021 3.33333 13.3341 3.33333ZM11.3341 6.66667H6.66746C6.29946 6.66667 6.00079 6.96467 6.00079 7.33333C6.00079 7.702 6.29946 8 6.66746 8H11.3341C11.7021 8 12.0008 7.702 12.0008 7.33333C12.0008 6.96467 11.7021 6.66667 11.3341 6.66667ZM9.33412 10H6.66746C6.29946 10 6.00079 10.298 6.00079 10.6667C6.00079 11.0353 6.29946 11.3333 6.66746 11.3333H9.33412C9.70212 11.3333 10.0008 11.0353 10.0008 10.6667C10.0008 10.298 9.70212 10 9.33412 10ZM5.13879 12.862L4.00079 14V0.666667C4.00079 0.298 3.70212 0 3.33412 0C2.96612 0 2.66746 0.298 2.66746 0.666667V14L1.52879 12.8613C1.26812 12.6007 0.846792 12.6007 0.586125 12.8613C0.325458 13.122 0.325458 13.5433 0.586125 13.804L2.39079 15.6087C2.65079 15.8687 2.99212 15.9987 3.33412 15.9987C3.67612 15.9987 4.01679 15.8687 4.27679 15.6087L6.08146 13.804C6.34212 13.5433 6.34212 13.122 6.08146 12.8613C5.82079 12.6007 5.39946 12.6013 5.13879 12.862Z" fill="#B8B8B8"/>
                    </svg>
                    }
                  />
                  <TableTHHeader
                    text="Vazifa nomi"
                    iconc={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_78_22504)">
                    <path d="M5.33365 15.3334L5.33365 1.78741L5.34365 1.79674L6.86699 3.29274C6.92848 3.3582 7.00257 3.41056 7.08481 3.44667C7.16704 3.48279 7.25572 3.50191 7.34553 3.5029C7.43534 3.50389 7.52442 3.48672 7.60743 3.45242C7.69044 3.41813 7.76566 3.36741 7.82859 3.30332C7.89151 3.23923 7.94083 3.16309 7.97359 3.07946C8.00636 2.99584 8.02188 2.90645 8.01924 2.81668C8.0166 2.7269 7.99585 2.63858 7.95823 2.55703C7.92061 2.47547 7.8669 2.40236 7.80032 2.34208L6.28232 0.849411C6.17365 0.740744 6.00699 0.588744 5.83165 0.433411C5.51624 0.154465 5.10971 0.000488154 4.68865 0.000488136C4.26759 0.000488117 3.86106 0.154465 3.54565 0.433411C3.37099 0.588744 3.20432 0.740744 3.09899 0.845411L1.57632 2.34208C1.45845 2.46754 1.39368 2.63374 1.39557 2.80588C1.39746 2.97802 1.46587 3.14275 1.58648 3.2656C1.70708 3.38844 1.87053 3.45987 2.0426 3.46493C2.21468 3.46999 2.38204 3.40829 2.50965 3.29274L4.00032 1.82941L4.00032 15.3334C4.00032 15.5102 4.07056 15.6798 4.19558 15.8048C4.3206 15.9298 4.49017 16.0001 4.66699 16.0001C4.8438 16.0001 5.01337 15.9298 5.13839 15.8048C5.26341 15.6798 5.33365 15.5102 5.33365 15.3334Z" fill="#B8B8B8"/>
                    <path d="M10.6677 0.666667L10.6676 14.17L9.17898 12.7073C9.11749 12.6419 9.0434 12.5895 8.96116 12.5534C8.87893 12.5173 8.79024 12.4982 8.70044 12.4972C8.61063 12.4962 8.52154 12.5134 8.43854 12.5477C8.35553 12.582 8.2803 12.6327 8.21738 12.6968C8.15446 12.7608 8.10514 12.837 8.07238 12.9206C8.03961 13.0042 8.02408 13.0936 8.02672 13.1834C8.02936 13.2732 8.05012 13.3615 8.08774 13.4431C8.12536 13.5246 8.17907 13.5977 8.24565 13.658L9.76498 15.1507C9.87365 15.2593 10.0403 15.4113 10.215 15.5667C10.5304 15.8456 10.9369 15.9996 11.358 15.9996C11.779 15.9996 12.1856 15.8456 12.501 15.5667C12.6763 15.4113 12.843 15.2593 12.9476 15.1547L14.4676 13.658C14.5855 13.5325 14.6503 13.3663 14.6484 13.1942C14.6465 13.0221 14.5781 12.8573 14.4575 12.7345C14.3369 12.6116 14.1734 12.5402 14.0014 12.5352C13.8293 12.5301 13.6619 12.5918 13.5343 12.7073L12.0076 14.208L12.001 14.2133L12.001 0.666667C12.001 0.489856 11.9307 0.320286 11.8057 0.195262C11.6807 0.0702378 11.5111 -1.37136e-07 11.3343 -1.44865e-07C11.1575 -1.52593e-07 10.9879 0.0702378 10.8629 0.195262C10.7379 0.320286 10.6677 0.489856 10.6677 0.666667Z" fill="#B8B8B8"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_78_22504">
                    <rect width="16" height="16" fill="white" transform="translate(16) rotate(90)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    }
                  />
                  <TableTHHeader
                    text="Vazifani topshirish uchun oxirgi muddati"
                    iconc={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_78_22504)">
                    <path d="M5.33365 15.3334L5.33365 1.78741L5.34365 1.79674L6.86699 3.29274C6.92848 3.3582 7.00257 3.41056 7.08481 3.44667C7.16704 3.48279 7.25572 3.50191 7.34553 3.5029C7.43534 3.50389 7.52442 3.48672 7.60743 3.45242C7.69044 3.41813 7.76566 3.36741 7.82859 3.30332C7.89151 3.23923 7.94083 3.16309 7.97359 3.07946C8.00636 2.99584 8.02188 2.90645 8.01924 2.81668C8.0166 2.7269 7.99585 2.63858 7.95823 2.55703C7.92061 2.47547 7.8669 2.40236 7.80032 2.34208L6.28232 0.849411C6.17365 0.740744 6.00699 0.588744 5.83165 0.433411C5.51624 0.154465 5.10971 0.000488154 4.68865 0.000488136C4.26759 0.000488117 3.86106 0.154465 3.54565 0.433411C3.37099 0.588744 3.20432 0.740744 3.09899 0.845411L1.57632 2.34208C1.45845 2.46754 1.39368 2.63374 1.39557 2.80588C1.39746 2.97802 1.46587 3.14275 1.58648 3.2656C1.70708 3.38844 1.87053 3.45987 2.0426 3.46493C2.21468 3.46999 2.38204 3.40829 2.50965 3.29274L4.00032 1.82941L4.00032 15.3334C4.00032 15.5102 4.07056 15.6798 4.19558 15.8048C4.3206 15.9298 4.49017 16.0001 4.66699 16.0001C4.8438 16.0001 5.01337 15.9298 5.13839 15.8048C5.26341 15.6798 5.33365 15.5102 5.33365 15.3334Z" fill="#B8B8B8"/>
                    <path d="M10.6677 0.666667L10.6676 14.17L9.17898 12.7073C9.11749 12.6419 9.0434 12.5895 8.96116 12.5534C8.87893 12.5173 8.79024 12.4982 8.70044 12.4972C8.61063 12.4962 8.52154 12.5134 8.43854 12.5477C8.35553 12.582 8.2803 12.6327 8.21738 12.6968C8.15446 12.7608 8.10514 12.837 8.07238 12.9206C8.03961 13.0042 8.02408 13.0936 8.02672 13.1834C8.02936 13.2732 8.05012 13.3615 8.08774 13.4431C8.12536 13.5246 8.17907 13.5977 8.24565 13.658L9.76498 15.1507C9.87365 15.2593 10.0403 15.4113 10.215 15.5667C10.5304 15.8456 10.9369 15.9996 11.358 15.9996C11.779 15.9996 12.1856 15.8456 12.501 15.5667C12.6763 15.4113 12.843 15.2593 12.9476 15.1547L14.4676 13.658C14.5855 13.5325 14.6503 13.3663 14.6484 13.1942C14.6465 13.0221 14.5781 12.8573 14.4575 12.7345C14.3369 12.6116 14.1734 12.5402 14.0014 12.5352C13.8293 12.5301 13.6619 12.5918 13.5343 12.7073L12.0076 14.208L12.001 14.2133L12.001 0.666667C12.001 0.489856 11.9307 0.320286 11.8057 0.195262C11.6807 0.0702378 11.5111 -1.37136e-07 11.3343 -1.44865e-07C11.1575 -1.52593e-07 10.9879 0.0702378 10.8629 0.195262C10.7379 0.320286 10.6677 0.489856 10.6677 0.666667Z" fill="#B8B8B8"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_78_22504">
                    <rect width="16" height="16" fill="white" transform="translate(16) rotate(90)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    }
                  />
                   <TableTHHeader
                    text="Status"
                    iconc={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_78_22504)">
                    <path d="M5.33365 15.3334L5.33365 1.78741L5.34365 1.79674L6.86699 3.29274C6.92848 3.3582 7.00257 3.41056 7.08481 3.44667C7.16704 3.48279 7.25572 3.50191 7.34553 3.5029C7.43534 3.50389 7.52442 3.48672 7.60743 3.45242C7.69044 3.41813 7.76566 3.36741 7.82859 3.30332C7.89151 3.23923 7.94083 3.16309 7.97359 3.07946C8.00636 2.99584 8.02188 2.90645 8.01924 2.81668C8.0166 2.7269 7.99585 2.63858 7.95823 2.55703C7.92061 2.47547 7.8669 2.40236 7.80032 2.34208L6.28232 0.849411C6.17365 0.740744 6.00699 0.588744 5.83165 0.433411C5.51624 0.154465 5.10971 0.000488154 4.68865 0.000488136C4.26759 0.000488117 3.86106 0.154465 3.54565 0.433411C3.37099 0.588744 3.20432 0.740744 3.09899 0.845411L1.57632 2.34208C1.45845 2.46754 1.39368 2.63374 1.39557 2.80588C1.39746 2.97802 1.46587 3.14275 1.58648 3.2656C1.70708 3.38844 1.87053 3.45987 2.0426 3.46493C2.21468 3.46999 2.38204 3.40829 2.50965 3.29274L4.00032 1.82941L4.00032 15.3334C4.00032 15.5102 4.07056 15.6798 4.19558 15.8048C4.3206 15.9298 4.49017 16.0001 4.66699 16.0001C4.8438 16.0001 5.01337 15.9298 5.13839 15.8048C5.26341 15.6798 5.33365 15.5102 5.33365 15.3334Z" fill="#B8B8B8"/>
                    <path d="M10.6677 0.666667L10.6676 14.17L9.17898 12.7073C9.11749 12.6419 9.0434 12.5895 8.96116 12.5534C8.87893 12.5173 8.79024 12.4982 8.70044 12.4972C8.61063 12.4962 8.52154 12.5134 8.43854 12.5477C8.35553 12.582 8.2803 12.6327 8.21738 12.6968C8.15446 12.7608 8.10514 12.837 8.07238 12.9206C8.03961 13.0042 8.02408 13.0936 8.02672 13.1834C8.02936 13.2732 8.05012 13.3615 8.08774 13.4431C8.12536 13.5246 8.17907 13.5977 8.24565 13.658L9.76498 15.1507C9.87365 15.2593 10.0403 15.4113 10.215 15.5667C10.5304 15.8456 10.9369 15.9996 11.358 15.9996C11.779 15.9996 12.1856 15.8456 12.501 15.5667C12.6763 15.4113 12.843 15.2593 12.9476 15.1547L14.4676 13.658C14.5855 13.5325 14.6503 13.3663 14.6484 13.1942C14.6465 13.0221 14.5781 12.8573 14.4575 12.7345C14.3369 12.6116 14.1734 12.5402 14.0014 12.5352C13.8293 12.5301 13.6619 12.5918 13.5343 12.7073L12.0076 14.208L12.001 14.2133L12.001 0.666667C12.001 0.489856 11.9307 0.320286 11.8057 0.195262C11.6807 0.0702378 11.5111 -1.37136e-07 11.3343 -1.44865e-07C11.1575 -1.52593e-07 10.9879 0.0702378 10.8629 0.195262C10.7379 0.320286 10.6677 0.489856 10.6677 0.666667Z" fill="#B8B8B8"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_78_22504">
                    <rect width="16" height="16" fill="white" transform="translate(16) rotate(90)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    }
                  />
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                 tasksList.length > 0 ? tasksList.map((elem, index) => {
                    return (
                      <ItemTasks key = {index} elem = {elem} index = {index}/>
                    )
                  })
                  :
                  <tr>
                    <th colSpan={12} align='center'>Ma'lumot yo'q</th>
                  </tr>
                }
              </tbody>
            </table>
          </ClassScheduleTableWrapper>
        </BoxBody>
        {/* <BoxFooter>
          <BoxFooterText>{`Jami 3 ta, 1 dan 3 gachasi ko'rsatilmoqda`}</BoxFooterText>
          <Pagination count={10} shape="rounded" color="primary" onChange={chagePageHandle} />
        </BoxFooter> */}
      </Paper>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <ModalBox>
          <div style={{ marginBottom: '20px' }}>
            <ModalHeader>
              <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="h4"
                sx={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#000",
                }}
              >
                {listLanguage.Add['uz']}
              </Typography>
              <span
                onClick={handleClose}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.0037 6.00006C17.8162 5.81259 17.5619 5.70728 17.2967 5.70728C17.0316 5.70728 16.7773 5.81259 16.5897 6.00006L12.0037 10.5861L7.41772 6.00006C7.2302 5.81259 6.97589 5.70728 6.71072 5.70728C6.44556 5.70728 6.19125 5.81259 6.00372 6.00006C5.81625 6.18759 5.71094 6.4419 5.71094 6.70706C5.71094 6.97223 5.81625 7.22653 6.00372 7.41406L10.5897 12.0001L6.00372 16.5861C5.81625 16.7736 5.71094 17.0279 5.71094 17.2931C5.71094 17.5582 5.81625 17.8125 6.00372 18.0001C6.19125 18.1875 6.44556 18.2928 6.71072 18.2928C6.97589 18.2928 7.2302 18.1875 7.41772 18.0001L12.0037 13.4141L16.5897 18.0001C16.7773 18.1875 17.0316 18.2928 17.2967 18.2928C17.5619 18.2928 17.8162 18.1875 18.0037 18.0001C18.1912 17.8125 18.2965 17.5582 18.2965 17.2931C18.2965 17.0279 18.1912 16.7736 18.0037 16.5861L13.4177 12.0001L18.0037 7.41406C18.1912 7.22653 18.2965 6.97223 18.2965 6.70706C18.2965 6.4419 18.1912 6.18759 18.0037 6.00006Z" fill="black" />
                </svg>
              </span>
            </ModalHeader>
          </div>
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
             Vazifa nomi
            </Typography>
            <CustomizedInputSimple callback_func={val => settitleTasks(val)} />
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
              Vazifani topshirish uchun ohirgi muddati
            </Typography>
            <DataPicker setFunction={(val) => {setdedlineTasks(val)}}/>
            
          </ModalSelectWrapper>
            
          {/* <ModalSelectWrapper>
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
                Vazifa Turi
              </Typography>
              <AllSelectFullWidth
                chageValueFunction={val => { setTasktype(val); }}
                selectOptions={tasktype}
              />
          </ModalSelectWrapper> */}

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
                Vazifa Olish Usuli
              </Typography>
              <AllSelectFullWidth
                chageValueFunction={val => { setTaskmethod(val); }}
                selectOptions={taskmethod}
              />
          </ModalSelectWrapper>

          {taskmethodVal == "test"?<ModalSelectWrapper>
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
                Shablon 
              </Typography>
              <a href={host + '/api/v1/documents/teacher-test-template/'} target="_blank" rel="noopener noreferrer">
                <Button
                sx={{ width: "50%", textTransform: "none", borderRadius: "10px", boxShadow: "none" }}
                variant="contained"
                >
                  Yuklab Olish
                </Button>
              </a>
          </ModalSelectWrapper>:<></>}


          {taskmethodVal != "oddiy"?<ModalSelectWrapper>
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
                File Yuklash
              </Typography>
              <MuiFileInput
                placeholder="Fayl kiriting"
                value={file}
                onChange={setFileHandler}
                // getInputText={(value) => value ? 'Thanks!' : ''}
                fullWidth
              />
            </ModalSelectWrapper>:<></>}

            {/* {taskmethodVal == "test"?<ModalSelectWrapper>
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
                Urinishlar soni
              </Typography>
              <CustomizedInputSimple callback_func={(val) => { settrycount(val)}} placeholder="" type={'number'} />
            </ModalSelectWrapper>:<></>} */}

            
            {taskmethodVal == "test"?<ModalSelectWrapper>
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
                Test uchun vaqt
              </Typography>
              <CustomizedInputSimple callback_func={(val) => { settesttime(val)}} placeholder="" type={'number'} />
            </ModalSelectWrapper>:<></>}
                
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
              Maks ball
            </Typography>
            <CustomizedInputSimple callback_func={val => setmaxgradeTasks(val)} />
          </ModalSelectWrapper>
          <ModalButtons>
            <Button
              sx={{ width: "50%", textTransform: "none", borderRadius: "10px" }}
              variant="outlined"
              onClick={handleClose}
            >
              {listLanguage.Cancel['uz']}

            </Button>
            <Button
              sx={{ width: "50%", textTransform: "none", borderRadius: "10px", boxShadow: "none" }}
              variant="contained"
              type='submit'
              onClick={handleSubmit}
              disabled={Disabled}
            >
              {ModalText}

            </Button>
          </ModalButtons>
        </ModalBox>
      </Modal>
    </>
  )
}

const ItemTasks = ({elem, index}) => {
  const [deleted, setDeleted] = useState(false)
  return (deleted ? <></> :
    <tr >
      <th>{index + 1}</th>
      <th>{elem.title}</th>
      <th>{elem.deadline}</th>
      <th>
      <Button
          variant="contained"
          sx={{
            borderRadius: "10px",
            textTransform: "capitalize",
            boxShadow: "none",
            padding: "6px 12px",
            marginRight: "20px"
          }}
          startIcon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_78_22535)">
          <path d="M10.8653 5.52533L11.8013 6.47533L7.93933 10.28C7.68133 10.538 7.342 10.6667 7.00133 10.6667C6.66067 10.6667 6.318 10.5367 6.05733 10.2767L4.20267 8.47933L5.13133 7.52133L6.99333 9.326L10.8653 5.52533ZM16 8C16 12.4113 12.4113 16 8 16C3.58867 16 0 12.4113 0 8C0 3.58867 3.58867 0 8 0C12.4113 0 16 3.58867 16 8ZM14.6667 8C14.6667 4.324 11.676 1.33333 8 1.33333C4.324 1.33333 1.33333 4.324 1.33333 8C1.33333 11.676 4.324 14.6667 8 14.6667C11.676 14.6667 14.6667 11.676 14.6667 8Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_78_22535">
          <rect width="16" height="16" fill="white"/>
          </clipPath>
          </defs>
          </svg>
          }
        >
          Tasdiqlangan
        </Button>
      </th>
        <th>
        
          <DeleteUpdate key={index} elem={elem} setDeleted={(val) => {setDeleted(val)}}/>

        </th>
    </tr>
  )
}


const DeleteUpdate = ({elem, setDeleted}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [file, setFile] = useState(null);
  const [tasksList, settasksList] = useState([]);
  const [titleTasks, settitleTasks] = useState(null);
  const [dedlineTasks, setdedlineTasks] = useState(null);
  const [maxgradeTasks, setmaxgradeTasks] = useState(null);


  const setFileHandler = (newValue, info) => {
      setFile(newValue)
  }
  const chageRowHadler = (val) => {
    console.log(val)
  }

  const chageSearch = (val) => {
    console.log(val)
  }

  const chagePageHandle = (_, value) => {
    console.log(value)
  }

  const DeleteTasks = (pk) => {
    setTeacherDeleteTasks(`${teacher_tasks}${pk}/`, (response) => {
      setDeleted(response.status == 204)
      }, (error) => {
        console.log(error)
      })
    }
  
    const handleSubmit = (pk) => {

      const formData = new FormData();
      formData.append("source", file);
      formData.append("title", titleTasks);
      formData.append("grade", maxgradeTasks);
      formData.append("deadline", dedlineTasks);
  
  
      setTeacheravTasksPut(`${teacher_tasks}${pk}/`, formData, (response) => { 
        handleClose()
      }, (error) => {
        console.log(error)
      })
  };
 


  if(!elem.status){
    return (
      <>
      <Button
        variant="contained"
        sx={{
          borderRadius: "10px",
          textTransform: "capitalize",
          boxShadow: "none",
          padding: "6px 12px",
          marginRight: "20px"
        }}
        onClick={handleOpen}

        startIcon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1148_17994)">
            <path d="M12.44 0.619885L4.31195 8.74789C4.00151 9.05665 3.7554 9.42392 3.58787 9.82845C3.42034 10.233 3.33471 10.6667 3.33595 11.1046V11.9999C3.33595 12.1767 3.40619 12.3463 3.53121 12.4713C3.65624 12.5963 3.82581 12.6666 4.00262 12.6666H4.89795C5.33579 12.6678 5.76953 12.5822 6.17406 12.4146C6.57858 12.2471 6.94585 12.001 7.25462 11.6906L15.3826 3.56255C15.7722 3.172 15.991 2.64287 15.991 2.09122C15.991 1.53957 15.7722 1.01044 15.3826 0.619885C14.9864 0.241148 14.4594 0.0297852 13.9113 0.0297852C13.3632 0.0297852 12.8362 0.241148 12.44 0.619885ZM14.44 2.61989L6.31195 10.7479C5.93603 11.1215 5.42795 11.3318 4.89795 11.3332H4.66928V11.1046C4.67067 10.5745 4.881 10.0665 5.25462 9.69055L13.3826 1.56255C13.525 1.42652 13.7144 1.35061 13.9113 1.35061C14.1082 1.35061 14.2976 1.42652 14.44 1.56255C14.5799 1.7029 14.6585 1.89301 14.6585 2.09122C14.6585 2.28942 14.5799 2.47954 14.44 2.61989Z" fill="white" />
            <path d="M15.3333 5.986C15.1565 5.986 14.987 6.05624 14.8619 6.18126C14.7369 6.30629 14.6667 6.47586 14.6667 6.65267V10H12C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12V14.6667H3.33333C2.8029 14.6667 2.29419 14.456 1.91912 14.0809C1.54405 13.7058 1.33333 13.1971 1.33333 12.6667V3.33333C1.33333 2.8029 1.54405 2.29419 1.91912 1.91912C2.29419 1.54405 2.8029 1.33333 3.33333 1.33333H9.36133C9.53815 1.33333 9.70771 1.2631 9.83274 1.13807C9.95776 1.01305 10.028 0.843478 10.028 0.666667C10.028 0.489856 9.95776 0.320286 9.83274 0.195262C9.70771 0.0702379 9.53815 0 9.36133 0L3.33333 0C2.4496 0.00105857 1.60237 0.352588 0.97748 0.97748C0.352588 1.60237 0.00105857 2.4496 0 3.33333L0 12.6667C0.00105857 13.5504 0.352588 14.3976 0.97748 15.0225C1.60237 15.6474 2.4496 15.9989 3.33333 16H10.8953C11.3333 16.0013 11.7671 15.9156 12.1718 15.7481C12.5764 15.5806 12.9438 15.3345 13.2527 15.024L15.0233 13.252C15.3338 12.9432 15.58 12.576 15.7477 12.1715C15.9153 11.767 16.0011 11.3332 16 10.8953V6.65267C16 6.47586 15.9298 6.30629 15.8047 6.18126C15.6797 6.05624 15.5101 5.986 15.3333 5.986ZM12.31 14.0813C12.042 14.3487 11.7031 14.5337 11.3333 14.6147V12C11.3333 11.8232 11.4036 11.6536 11.5286 11.5286C11.6536 11.4036 11.8232 11.3333 12 11.3333H14.6167C14.5342 11.7023 14.3493 12.0406 14.0833 12.3093L12.31 14.0813Z" fill="white" />
        </g>
        <defs>
            <clipPath id="clip0_1148_17994">
                <rect width="16" height="16" fill="white" />
            </clipPath>
        </defs>
    </svg>
        }
      >
      </Button>

      <Button
      variant="contained"
      sx={{
        borderRadius: "10px",
        textTransform: "capitalize",
        boxShadow: "none",
        padding: "6px 12px",
        marginRight: "20px",
        backgroundColor: 'red'
      }}
      onClick={(_) => DeleteTasks(elem.id)}
      startIcon={<svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <ModalBox>
          <div style={{ marginBottom: '20px' }}>
            <ModalHeader>
              <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="h4"
                sx={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#000",
                }}
              >
                {listLanguage.Add['uz']}
              </Typography>
              <span
                onClick={handleClose}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.0037 6.00006C17.8162 5.81259 17.5619 5.70728 17.2967 5.70728C17.0316 5.70728 16.7773 5.81259 16.5897 6.00006L12.0037 10.5861L7.41772 6.00006C7.2302 5.81259 6.97589 5.70728 6.71072 5.70728C6.44556 5.70728 6.19125 5.81259 6.00372 6.00006C5.81625 6.18759 5.71094 6.4419 5.71094 6.70706C5.71094 6.97223 5.81625 7.22653 6.00372 7.41406L10.5897 12.0001L6.00372 16.5861C5.81625 16.7736 5.71094 17.0279 5.71094 17.2931C5.71094 17.5582 5.81625 17.8125 6.00372 18.0001C6.19125 18.1875 6.44556 18.2928 6.71072 18.2928C6.97589 18.2928 7.2302 18.1875 7.41772 18.0001L12.0037 13.4141L16.5897 18.0001C16.7773 18.1875 17.0316 18.2928 17.2967 18.2928C17.5619 18.2928 17.8162 18.1875 18.0037 18.0001C18.1912 17.8125 18.2965 17.5582 18.2965 17.2931C18.2965 17.0279 18.1912 16.7736 18.0037 16.5861L13.4177 12.0001L18.0037 7.41406C18.1912 7.22653 18.2965 6.97223 18.2965 6.70706C18.2965 6.4419 18.1912 6.18759 18.0037 6.00006Z" fill="black" />
                </svg>
              </span>
            </ModalHeader>
          </div>
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
             Vazifa nomi
            </Typography>
            <CustomizedInputSimple callback_func={val => settitleTasks(val)} />
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
              Vazifani topshirish uchun ohirgi muddati
            </Typography>
            <DataPicker setFunction={(val) => {setdedlineTasks(val)}}/>
            
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
                Qo'llanma
              </Typography>
              <MuiFileInput
                placeholder="Fayl kiriting"
                value={file}
                onChange={setFileHandler}
                // getInputText={(value) => value ? 'Thanks!' : ''}
                fullWidth
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
              Maks ball
            </Typography>
            <CustomizedInputSimple callback_func={val => setmaxgradeTasks(val)} />
          </ModalSelectWrapper>
          <ModalButtons>
            <Button
              sx={{ width: "50%", textTransform: "none", borderRadius: "10px" }}
              variant="outlined"
              onClick={handleClose}
            >
              {listLanguage.Cancel['uz']}

            </Button>
            <Button
              sx={{ width: "50%", textTransform: "none", borderRadius: "10px", boxShadow: "none" }}
              variant="contained"
              type='submit'
              onClick={(_) => handleSubmit(elem.id)}
            >
              {listLanguage.Save['uz']}

            </Button>
          </ModalButtons>
        </ModalBox>
      </Modal>
      </>
    )
  } else {
    return <></>
  }
}