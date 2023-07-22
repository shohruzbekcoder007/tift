import React, { useEffect, useState } from 'react'
import { BoxBody, BoxFooter, BoxFooterText, BoxHeader, ClassScheduleTableWrapper } from '../../../global_styles/styles'
import { Pagination, Paper } from '@mui/material'
import PageSelector from '../../PageSelector'
import CustomizedInput from '../../CustomizedInput'
import { TableTHHeader } from '../../DiplomaTable'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import AllSelect from '../../AllSelect'
import { StudentSciencesMainHeader } from './styles'
import { useSelector } from 'react-redux'
import { getSciences, getSemester } from './requests'
import { my_sciences, my_semesters } from '../../../utils/API_urls'

export default function StudentSciencesMain() {

  const language = useSelector(state => state.language)
  
  const [semesters, setSemesters] = useState([])
  const [sciences, setSciences] = useState([])
  const [semester, setSemester] = useState(0)

  const getSemesters = (response) => {
    const semester_firstly = response.data.map(element => {
      return {
        value: element.id,
        name: element.name
      }
    })
    setSemester(semester_firstly[0].value)
    setSemesters(semester_firstly)
  }

  const getSemestersEror = (error) => {console.log(error)}

  const getSciensesArrayF = (response) => {
    console.log(response.data)
    setSciences(response.data)
  }

  const getSciensesArrayE = (error) => {
    console.log(error)
  }

  const getSciensesArray = (semester_id) => {
    getSciences(`${my_sciences}?semester=${semester_id}`, getSciensesArrayF, getSciensesArrayE)
  }

  useEffect(() => {
    getSemester(my_semesters, getSemesters, getSemestersEror)
  }, [])

  useEffect(() => {
    if(semester != 0){
      getSciensesArray(semester)
    }
  }, [semester])

  return (
    <Paper
      elevation={0}
      sx={{
        width: '100%',
        padding: "20px",
        borderRadius: "10px"
      }}
    >

      <BoxHeader>
        <AllSelect chageValueFunction={val => { setSemester(val) }}
          selectOptions={semesters}
        />
      </BoxHeader>
      <StudentSciencesMainHeader>
        <PageSelector chageValueFunction={(val) => {
          console.log(val)
        }} />
        <CustomizedInput callback_func={(val) => { console.log(val) }} />
      </StudentSciencesMainHeader>
      <BoxBody>
        <ClassScheduleTableWrapper>
          <table>
            <thead>
              <tr>
                <TableTHHeader
                  text="Fan"
                  iconc={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_78_23314)">
                      <path d="M16.0008 0.666667C16.0008 1.03533 15.7021 1.33333 15.3341 1.33333H6.66746C6.29946 1.33333 6.00079 1.03533 6.00079 0.666667C6.00079 0.298 6.29946 0 6.66746 0H15.3341C15.7021 0 16.0008 0.298 16.0008 0.666667ZM13.3341 3.33333H6.66746C6.29946 3.33333 6.00079 3.63133 6.00079 4C6.00079 4.36867 6.29946 4.66667 6.66746 4.66667H13.3341C13.7021 4.66667 14.0008 4.36867 14.0008 4C14.0008 3.63133 13.7021 3.33333 13.3341 3.33333ZM11.3341 6.66667H6.66746C6.29946 6.66667 6.00079 6.96467 6.00079 7.33333C6.00079 7.702 6.29946 8 6.66746 8H11.3341C11.7021 8 12.0008 7.702 12.0008 7.33333C12.0008 6.96467 11.7021 6.66667 11.3341 6.66667ZM9.33412 10H6.66746C6.29946 10 6.00079 10.298 6.00079 10.6667C6.00079 11.0353 6.29946 11.3333 6.66746 11.3333H9.33412C9.70212 11.3333 10.0008 11.0353 10.0008 10.6667C10.0008 10.298 9.70212 10 9.33412 10ZM5.13879 12.862L4.00079 14V0.666667C4.00079 0.298 3.70212 0 3.33412 0C2.96612 0 2.66746 0.298 2.66746 0.666667V14L1.52879 12.8613C1.26812 12.6007 0.846792 12.6007 0.586125 12.8613C0.325458 13.122 0.325458 13.5433 0.586125 13.804L2.39079 15.6087C2.65079 15.8687 2.99212 15.9987 3.33412 15.9987C3.67612 15.9987 4.01679 15.8687 4.27679 15.6087L6.08146 13.804C6.34212 13.5433 6.34212 13.122 6.08146 12.8613C5.82079 12.6007 5.39946 12.6013 5.13879 12.862Z" fill="#B8B8B8" />
                    </g>
                    <defs>
                      <clipPath id="clip0_78_23314">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>}
                />
                <TableTHHeader
                  text="O‘qituvchi"
                  iconc={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_78_23319)">
                      <path d="M5.33365 15.3334L5.33365 1.78741L5.34365 1.79674L6.86699 3.29274C6.92848 3.3582 7.00257 3.41056 7.08481 3.44667C7.16704 3.48279 7.25572 3.50191 7.34553 3.5029C7.43534 3.50389 7.52442 3.48672 7.60743 3.45242C7.69044 3.41813 7.76566 3.36741 7.82859 3.30332C7.89151 3.23923 7.94083 3.16309 7.97359 3.07946C8.00636 2.99584 8.02188 2.90645 8.01924 2.81668C8.0166 2.7269 7.99585 2.63858 7.95823 2.55703C7.92061 2.47547 7.8669 2.40236 7.80032 2.34208L6.28232 0.849411C6.17365 0.740744 6.00699 0.588744 5.83165 0.433411C5.51624 0.154465 5.10971 0.000488154 4.68865 0.000488136C4.26759 0.000488117 3.86106 0.154465 3.54565 0.433411C3.37099 0.588744 3.20432 0.740744 3.09899 0.845411L1.57632 2.34208C1.45845 2.46754 1.39368 2.63374 1.39557 2.80588C1.39746 2.97802 1.46587 3.14275 1.58648 3.2656C1.70708 3.38844 1.87053 3.45987 2.0426 3.46493C2.21468 3.46999 2.38204 3.40829 2.50965 3.29274L4.00032 1.82941L4.00032 15.3334C4.00032 15.5102 4.07056 15.6798 4.19558 15.8048C4.3206 15.9298 4.49017 16.0001 4.66699 16.0001C4.8438 16.0001 5.01337 15.9298 5.13839 15.8048C5.26341 15.6798 5.33365 15.5102 5.33365 15.3334Z" fill="#B8B8B8" />
                      <path d="M10.6677 0.666667L10.6676 14.17L9.17898 12.7073C9.11749 12.6419 9.0434 12.5895 8.96116 12.5534C8.87893 12.5173 8.79025 12.4982 8.70044 12.4972C8.61063 12.4962 8.52154 12.5134 8.43854 12.5477C8.35553 12.582 8.2803 12.6327 8.21738 12.6968C8.15446 12.7608 8.10514 12.837 8.07238 12.9206C8.03961 13.0042 8.02408 13.0936 8.02672 13.1834C8.02936 13.2732 8.05012 13.3615 8.08774 13.4431C8.12536 13.5246 8.17907 13.5977 8.24565 13.658L9.76498 15.1507C9.87365 15.2593 10.0403 15.4113 10.215 15.5667C10.5304 15.8456 10.9369 15.9996 11.358 15.9996C11.779 15.9996 12.1856 15.8456 12.501 15.5667C12.6763 15.4113 12.843 15.2593 12.9476 15.1547L14.4676 13.658C14.5855 13.5325 14.6503 13.3663 14.6484 13.1942C14.6465 13.0221 14.5781 12.8573 14.4575 12.7345C14.3369 12.6116 14.1734 12.5402 14.0014 12.5352C13.8293 12.5301 13.6619 12.5918 13.5343 12.7073L12.0076 14.208L12.001 14.2133L12.001 0.666667C12.001 0.489856 11.9307 0.320286 11.8057 0.195262C11.6807 0.0702378 11.5111 -1.37136e-07 11.3343 -1.44865e-07C11.1575 -1.52593e-07 10.9879 0.0702378 10.8629 0.195262C10.7379 0.320286 10.6677 0.489856 10.6677 0.666667Z" fill="#B8B8B8" />
                    </g>
                    <defs>
                      <clipPath id="clip0_78_23319">
                        <rect width="16" height="16" fill="white" transform="translate(16) rotate(90)" />
                      </clipPath>
                    </defs>
                  </svg>
                  }
                />
                <TableTHHeader
                  text="Davomat"
                  iconc={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_78_23319)">
                      <path d="M5.33365 15.3334L5.33365 1.78741L5.34365 1.79674L6.86699 3.29274C6.92848 3.3582 7.00257 3.41056 7.08481 3.44667C7.16704 3.48279 7.25572 3.50191 7.34553 3.5029C7.43534 3.50389 7.52442 3.48672 7.60743 3.45242C7.69044 3.41813 7.76566 3.36741 7.82859 3.30332C7.89151 3.23923 7.94083 3.16309 7.97359 3.07946C8.00636 2.99584 8.02188 2.90645 8.01924 2.81668C8.0166 2.7269 7.99585 2.63858 7.95823 2.55703C7.92061 2.47547 7.8669 2.40236 7.80032 2.34208L6.28232 0.849411C6.17365 0.740744 6.00699 0.588744 5.83165 0.433411C5.51624 0.154465 5.10971 0.000488154 4.68865 0.000488136C4.26759 0.000488117 3.86106 0.154465 3.54565 0.433411C3.37099 0.588744 3.20432 0.740744 3.09899 0.845411L1.57632 2.34208C1.45845 2.46754 1.39368 2.63374 1.39557 2.80588C1.39746 2.97802 1.46587 3.14275 1.58648 3.2656C1.70708 3.38844 1.87053 3.45987 2.0426 3.46493C2.21468 3.46999 2.38204 3.40829 2.50965 3.29274L4.00032 1.82941L4.00032 15.3334C4.00032 15.5102 4.07056 15.6798 4.19558 15.8048C4.3206 15.9298 4.49017 16.0001 4.66699 16.0001C4.8438 16.0001 5.01337 15.9298 5.13839 15.8048C5.26341 15.6798 5.33365 15.5102 5.33365 15.3334Z" fill="#B8B8B8" />
                      <path d="M10.6677 0.666667L10.6676 14.17L9.17898 12.7073C9.11749 12.6419 9.0434 12.5895 8.96116 12.5534C8.87893 12.5173 8.79025 12.4982 8.70044 12.4972C8.61063 12.4962 8.52154 12.5134 8.43854 12.5477C8.35553 12.582 8.2803 12.6327 8.21738 12.6968C8.15446 12.7608 8.10514 12.837 8.07238 12.9206C8.03961 13.0042 8.02408 13.0936 8.02672 13.1834C8.02936 13.2732 8.05012 13.3615 8.08774 13.4431C8.12536 13.5246 8.17907 13.5977 8.24565 13.658L9.76498 15.1507C9.87365 15.2593 10.0403 15.4113 10.215 15.5667C10.5304 15.8456 10.9369 15.9996 11.358 15.9996C11.779 15.9996 12.1856 15.8456 12.501 15.5667C12.6763 15.4113 12.843 15.2593 12.9476 15.1547L14.4676 13.658C14.5855 13.5325 14.6503 13.3663 14.6484 13.1942C14.6465 13.0221 14.5781 12.8573 14.4575 12.7345C14.3369 12.6116 14.1734 12.5402 14.0014 12.5352C13.8293 12.5301 13.6619 12.5918 13.5343 12.7073L12.0076 14.208L12.001 14.2133L12.001 0.666667C12.001 0.489856 11.9307 0.320286 11.8057 0.195262C11.6807 0.0702378 11.5111 -1.37136e-07 11.3343 -1.44865e-07C11.1575 -1.52593e-07 10.9879 0.0702378 10.8629 0.195262C10.7379 0.320286 10.6677 0.489856 10.6677 0.666667Z" fill="#B8B8B8" />
                    </g>
                    <defs>
                      <clipPath id="clip0_78_23319">
                        <rect width="16" height="16" fill="white" transform="translate(16) rotate(90)" />
                      </clipPath>
                    </defs>
                  </svg>
                  }
                />
                <TableTHHeader
                  text="Amal"
                  iconc={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_78_23319)">
                      <path d="M5.33365 15.3334L5.33365 1.78741L5.34365 1.79674L6.86699 3.29274C6.92848 3.3582 7.00257 3.41056 7.08481 3.44667C7.16704 3.48279 7.25572 3.50191 7.34553 3.5029C7.43534 3.50389 7.52442 3.48672 7.60743 3.45242C7.69044 3.41813 7.76566 3.36741 7.82859 3.30332C7.89151 3.23923 7.94083 3.16309 7.97359 3.07946C8.00636 2.99584 8.02188 2.90645 8.01924 2.81668C8.0166 2.7269 7.99585 2.63858 7.95823 2.55703C7.92061 2.47547 7.8669 2.40236 7.80032 2.34208L6.28232 0.849411C6.17365 0.740744 6.00699 0.588744 5.83165 0.433411C5.51624 0.154465 5.10971 0.000488154 4.68865 0.000488136C4.26759 0.000488117 3.86106 0.154465 3.54565 0.433411C3.37099 0.588744 3.20432 0.740744 3.09899 0.845411L1.57632 2.34208C1.45845 2.46754 1.39368 2.63374 1.39557 2.80588C1.39746 2.97802 1.46587 3.14275 1.58648 3.2656C1.70708 3.38844 1.87053 3.45987 2.0426 3.46493C2.21468 3.46999 2.38204 3.40829 2.50965 3.29274L4.00032 1.82941L4.00032 15.3334C4.00032 15.5102 4.07056 15.6798 4.19558 15.8048C4.3206 15.9298 4.49017 16.0001 4.66699 16.0001C4.8438 16.0001 5.01337 15.9298 5.13839 15.8048C5.26341 15.6798 5.33365 15.5102 5.33365 15.3334Z" fill="#B8B8B8" />
                      <path d="M10.6677 0.666667L10.6676 14.17L9.17898 12.7073C9.11749 12.6419 9.0434 12.5895 8.96116 12.5534C8.87893 12.5173 8.79025 12.4982 8.70044 12.4972C8.61063 12.4962 8.52154 12.5134 8.43854 12.5477C8.35553 12.582 8.2803 12.6327 8.21738 12.6968C8.15446 12.7608 8.10514 12.837 8.07238 12.9206C8.03961 13.0042 8.02408 13.0936 8.02672 13.1834C8.02936 13.2732 8.05012 13.3615 8.08774 13.4431C8.12536 13.5246 8.17907 13.5977 8.24565 13.658L9.76498 15.1507C9.87365 15.2593 10.0403 15.4113 10.215 15.5667C10.5304 15.8456 10.9369 15.9996 11.358 15.9996C11.779 15.9996 12.1856 15.8456 12.501 15.5667C12.6763 15.4113 12.843 15.2593 12.9476 15.1547L14.4676 13.658C14.5855 13.5325 14.6503 13.3663 14.6484 13.1942C14.6465 13.0221 14.5781 12.8573 14.4575 12.7345C14.3369 12.6116 14.1734 12.5402 14.0014 12.5352C13.8293 12.5301 13.6619 12.5918 13.5343 12.7073L12.0076 14.208L12.001 14.2133L12.001 0.666667C12.001 0.489856 11.9307 0.320286 11.8057 0.195262C11.6807 0.0702378 11.5111 -1.37136e-07 11.3343 -1.44865e-07C11.1575 -1.52593e-07 10.9879 0.0702378 10.8629 0.195262C10.7379 0.320286 10.6677 0.489856 10.6677 0.666667Z" fill="#B8B8B8" />
                    </g>
                    <defs>
                      <clipPath id="clip0_78_23319">
                        <rect width="16" height="16" fill="white" transform="translate(16) rotate(90)" />
                      </clipPath>
                    </defs>
                  </svg>
                  }
                />
                <TableTHHeader
                  text="Reja"
                  iconc={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_78_23319)">
                      <path d="M5.33365 15.3334L5.33365 1.78741L5.34365 1.79674L6.86699 3.29274C6.92848 3.3582 7.00257 3.41056 7.08481 3.44667C7.16704 3.48279 7.25572 3.50191 7.34553 3.5029C7.43534 3.50389 7.52442 3.48672 7.60743 3.45242C7.69044 3.41813 7.76566 3.36741 7.82859 3.30332C7.89151 3.23923 7.94083 3.16309 7.97359 3.07946C8.00636 2.99584 8.02188 2.90645 8.01924 2.81668C8.0166 2.7269 7.99585 2.63858 7.95823 2.55703C7.92061 2.47547 7.8669 2.40236 7.80032 2.34208L6.28232 0.849411C6.17365 0.740744 6.00699 0.588744 5.83165 0.433411C5.51624 0.154465 5.10971 0.000488154 4.68865 0.000488136C4.26759 0.000488117 3.86106 0.154465 3.54565 0.433411C3.37099 0.588744 3.20432 0.740744 3.09899 0.845411L1.57632 2.34208C1.45845 2.46754 1.39368 2.63374 1.39557 2.80588C1.39746 2.97802 1.46587 3.14275 1.58648 3.2656C1.70708 3.38844 1.87053 3.45987 2.0426 3.46493C2.21468 3.46999 2.38204 3.40829 2.50965 3.29274L4.00032 1.82941L4.00032 15.3334C4.00032 15.5102 4.07056 15.6798 4.19558 15.8048C4.3206 15.9298 4.49017 16.0001 4.66699 16.0001C4.8438 16.0001 5.01337 15.9298 5.13839 15.8048C5.26341 15.6798 5.33365 15.5102 5.33365 15.3334Z" fill="#B8B8B8" />
                      <path d="M10.6677 0.666667L10.6676 14.17L9.17898 12.7073C9.11749 12.6419 9.0434 12.5895 8.96116 12.5534C8.87893 12.5173 8.79025 12.4982 8.70044 12.4972C8.61063 12.4962 8.52154 12.5134 8.43854 12.5477C8.35553 12.582 8.2803 12.6327 8.21738 12.6968C8.15446 12.7608 8.10514 12.837 8.07238 12.9206C8.03961 13.0042 8.02408 13.0936 8.02672 13.1834C8.02936 13.2732 8.05012 13.3615 8.08774 13.4431C8.12536 13.5246 8.17907 13.5977 8.24565 13.658L9.76498 15.1507C9.87365 15.2593 10.0403 15.4113 10.215 15.5667C10.5304 15.8456 10.9369 15.9996 11.358 15.9996C11.779 15.9996 12.1856 15.8456 12.501 15.5667C12.6763 15.4113 12.843 15.2593 12.9476 15.1547L14.4676 13.658C14.5855 13.5325 14.6503 13.3663 14.6484 13.1942C14.6465 13.0221 14.5781 12.8573 14.4575 12.7345C14.3369 12.6116 14.1734 12.5402 14.0014 12.5352C13.8293 12.5301 13.6619 12.5918 13.5343 12.7073L12.0076 14.208L12.001 14.2133L12.001 0.666667C12.001 0.489856 11.9307 0.320286 11.8057 0.195262C11.6807 0.0702378 11.5111 -1.37136e-07 11.3343 -1.44865e-07C11.1575 -1.52593e-07 10.9879 0.0702378 10.8629 0.195262C10.7379 0.320286 10.6677 0.489856 10.6677 0.666667Z" fill="#B8B8B8" />
                    </g>
                    <defs>
                      <clipPath id="clip0_78_23319">
                        <rect width="16" height="16" fill="white" transform="translate(16) rotate(90)" />
                      </clipPath>
                    </defs>
                  </svg>
                  }
                />
              </tr>
            </thead>
            <tbody>
              {
                <tr>
                <th colSpan={5} align='center'>Ma’lumot yo’q</th>
              </tr>
              }
              {
                [1, 2, 3, 4, 5].map((elem, index) => {
                  return (
                    <tr key={index}>
                      <th>Kompyuterni tashkillashtirish</th>
                      <th>IAI001 - Ma‘mirov Xudoyberdi Xomidjonovich<br />
                        IAI001-1 - Nurmurodov Javohir Nurmurod o'g'li</th>
                      <th align='center'>
                        <Link to="attendance">
                          <Button
                            variant="contained"
                            color="secondary"
                            sx={{
                              borderRadius: "10px",
                              boxShadow: "none",
                              padding: "8px 15px",
                              minWidth: "auto"
                            }}
                          >
                            1
                          </Button>
                        </Link>
                      </th>
                      <th>
                        <Link to={'tasks'}>
                        <Button
                          variant="contained"
                          color="secondary"
                          sx={{
                            borderRadius: "10px",
                            boxShadow: "none",
                            padding: "8px 35px",
                            minWidth: "auto",
                            textTransform: "none"
                          }}
                          startIcon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_78_19382)">
                              <path d="M12.6667 0H3.33333C1.49533 0 0 1.49533 0 3.33333V12.6667C0 14.5047 1.49533 16 3.33333 16H11.0973C11.9553 16 12.762 15.666 13.3687 15.0593L15.0593 13.3687C15.6573 12.7713 16 11.9427 16 11.0973V3.33333C16 1.49533 14.5047 0 12.6667 0ZM1.33333 12.6667V3.33333C1.33333 2.23067 2.23067 1.33333 3.33333 1.33333H12.6667C13.7693 1.33333 14.6667 2.23067 14.6667 3.33333V10H12C10.8973 10 10 10.8973 10 12V14.6667H3.33333C2.23067 14.6667 1.33333 13.7693 1.33333 12.6667ZM12.426 14.1167C12.1273 14.4153 11.746 14.6 11.3333 14.6513V12C11.3333 11.632 11.6327 11.3333 12 11.3333H14.6507C14.598 11.7433 14.41 12.132 14.116 12.426L12.426 14.1167ZM3.33333 4.33333C3.33333 3.78133 3.78133 3.33333 4.33333 3.33333C4.88533 3.33333 5.33333 3.78133 5.33333 4.33333C5.33333 4.88533 4.88533 5.33333 4.33333 5.33333C3.78133 5.33333 3.33333 4.88533 3.33333 4.33333ZM5.33333 8C5.33333 8.552 4.88533 9 4.33333 9C3.78133 9 3.33333 8.552 3.33333 8C3.33333 7.448 3.78133 7 4.33333 7C4.88533 7 5.33333 7.448 5.33333 8ZM5.33333 11.6667C5.33333 12.2187 4.88533 12.6667 4.33333 12.6667C3.78133 12.6667 3.33333 12.2187 3.33333 11.6667C3.33333 11.1147 3.78133 10.6667 4.33333 10.6667C4.88533 10.6667 5.33333 11.1147 5.33333 11.6667Z" fill="#1A1818" />
                            </g>
                            <defs>
                              <clipPath id="clip0_78_19382">
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          }
                        >
                          Vazifalar
                        </Button>
                        </Link>
                      </th>
                      <th>
                        <Button
                          variant="contained"
                          color="secondary"
                          sx={{
                            borderRadius: "10px",
                            boxShadow: "none",
                            padding: "10px",
                            minWidth: "auto",
                            textTransform: "none"
                          }}
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_78_19382)">
                              <path d="M12.6667 0H3.33333C1.49533 0 0 1.49533 0 3.33333V12.6667C0 14.5047 1.49533 16 3.33333 16H11.0973C11.9553 16 12.762 15.666 13.3687 15.0593L15.0593 13.3687C15.6573 12.7713 16 11.9427 16 11.0973V3.33333C16 1.49533 14.5047 0 12.6667 0ZM1.33333 12.6667V3.33333C1.33333 2.23067 2.23067 1.33333 3.33333 1.33333H12.6667C13.7693 1.33333 14.6667 2.23067 14.6667 3.33333V10H12C10.8973 10 10 10.8973 10 12V14.6667H3.33333C2.23067 14.6667 1.33333 13.7693 1.33333 12.6667ZM12.426 14.1167C12.1273 14.4153 11.746 14.6 11.3333 14.6513V12C11.3333 11.632 11.6327 11.3333 12 11.3333H14.6507C14.598 11.7433 14.41 12.132 14.116 12.426L12.426 14.1167ZM3.33333 4.33333C3.33333 3.78133 3.78133 3.33333 4.33333 3.33333C4.88533 3.33333 5.33333 3.78133 5.33333 4.33333C5.33333 4.88533 4.88533 5.33333 4.33333 5.33333C3.78133 5.33333 3.33333 4.88533 3.33333 4.33333ZM5.33333 8C5.33333 8.552 4.88533 9 4.33333 9C3.78133 9 3.33333 8.552 3.33333 8C3.33333 7.448 3.78133 7 4.33333 7C4.88533 7 5.33333 7.448 5.33333 8ZM5.33333 11.6667C5.33333 12.2187 4.88533 12.6667 4.33333 12.6667C3.78133 12.6667 3.33333 12.2187 3.33333 11.6667C3.33333 11.1147 3.78133 10.6667 4.33333 10.6667C4.88533 10.6667 5.33333 11.1147 5.33333 11.6667Z" fill="#1A1818" />
                            </g>
                            <defs>
                              <clipPath id="clip0_78_19382">
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </Button>
                      </th>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </ClassScheduleTableWrapper>
      </BoxBody>
      <BoxFooter>
        <BoxFooterText>{`Jami 3 ta, 1 dan 3 gachasi ko'rsatilmoqda`}</BoxFooterText>
        <Pagination count={10} shape="rounded" color="primary" onChange={(_, value) => { console.log(value) }} />
      </BoxFooter>
    </Paper>
  )
}
