import React, { useEffect, useState } from 'react'
import { BoxBody, BoxFooter, BoxFooterText, BoxHeader, ClassScheduleTableWrapper, ContentWrapper } from '../../global_styles/styles'
import { Pagination, Paper, Typography } from '@mui/material'
import PageSelector from '../PageSelector'
import CustomizedInput from '../CustomizedInput'
import { TableTHHeader } from '../DiplomaTable'
import Button from '@mui/material/Button'
import AllSelect from '../AllSelect'
import CustomizedInputSimple from '../CustomizedInputSimple'
import { InputsWrapper } from '../CourseManagement/styles'
import listLanguage from '../CourseManagement/language.json'
import { useLocation } from 'react-router-dom'
import { GroupListShow} from '../../utils/API_urls'
import { getGroupSemesters } from './requests'
export default function Appropriation() {
  const {state} = useLocation()
  const [DekanGroupsSemestr, setDekanGroupsSemestr] = useState([]);
  const [GroupName, setGroupName] = useState('');
    useEffect(() => {
      getGroupSemesters(`${GroupListShow}${state}`, (response) => {
            setGroupName(response.data.name)
            setDekanGroupsSemestr(response.data.semesters)
        }, (error) => {
            console.log(error)
        })
    }, [])
  return (
    <>
        <Typography
        variant="h6"
        component="h4"
        sx={{
          fontSize: "24px",
          fontWeight: 600,
          color: "#151515",
          fontStyle: "normal",
          lineHeight: "normal"
        }}
      >
        {GroupName} - O’zlashtirish qaydonmasi 
      </Typography>
      <Paper
        elevation={0}
        sx={{
          width: '100%',
          padding: "20px",
          borderRadius: "10px"
        }}
        >
        <BoxHeader>
          <PageSelector chageValueFunction={(val) => {
            console.log(val)
          }} />
          <CustomizedInput callback_func={(val) => { console.log(val) }} />
        </BoxHeader>
        <BoxBody>
          <ClassScheduleTableWrapper>
            <table>
              <thead>
                <tr>
                  <TableTHHeader
                    text="ID"
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
                    text="Semester"
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
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                   DekanGroupsSemestr?.length > 0 ?  DekanGroupsSemestr.map((elem, index) => {
                    return (
                      <tr key={index}>
                        <th>{elem.id}</th>
                        <th>{elem.parent.name + "  " + elem.name}</th>
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
                            startIcon={<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_78_27511)">
                                <path d="M7.08614 12.0813C7.27187 12.2672 7.4924 12.4146 7.73514 12.5152C7.97787 12.6158 8.23805 12.6676 8.5008 12.6676C8.76355 12.6676 9.02373 12.6158 9.26647 12.5152C9.5092 12.4146 9.72973 12.2672 9.91547 12.0813L12.0561 9.94067C12.1709 9.81373 12.2325 9.64752 12.2281 9.47644C12.2237 9.30536 12.1537 9.14253 12.0325 9.02165C11.9114 8.90077 11.7484 8.8311 11.5773 8.82707C11.4062 8.82304 11.2402 8.88496 11.1135 9L9.1628 10.9513L9.16747 0.666667C9.16747 0.489856 9.09723 0.320286 8.97221 0.195262C8.84718 0.0702379 8.67761 0 8.5008 0C8.32399 0 8.15442 0.0702379 8.0294 0.195262C7.90437 0.320286 7.83414 0.489856 7.83414 0.666667L7.82814 10.9387L5.88814 9C5.76304 8.875 5.59341 8.8048 5.41657 8.80486C5.23972 8.80493 5.07014 8.87524 4.94514 9.00033C4.82013 9.12543 4.74994 9.29506 4.75 9.4719C4.75006 9.64875 4.82037 9.81833 4.94547 9.94333L7.08614 12.0813Z" fill="white" />
                                <path d="M15.8333 10.6665C15.6565 10.6665 15.487 10.7367 15.3619 10.8618C15.2369 10.9868 15.1667 11.1564 15.1667 11.3332V13.9998C15.1667 14.1766 15.0964 14.3462 14.9714 14.4712C14.8464 14.5963 14.6768 14.6665 14.5 14.6665H2.5C2.32319 14.6665 2.15362 14.5963 2.0286 14.4712C1.90357 14.3462 1.83333 14.1766 1.83333 13.9998V11.3332C1.83333 11.1564 1.7631 10.9868 1.63807 10.8618C1.51305 10.7367 1.34348 10.6665 1.16667 10.6665C0.989856 10.6665 0.820286 10.7367 0.695262 10.8618C0.570238 10.9868 0.5 11.1564 0.5 11.3332L0.5 13.9998C0.5 14.5303 0.710714 15.039 1.08579 15.4141C1.46086 15.7891 1.96957 15.9998 2.5 15.9998H14.5C15.0304 15.9998 15.5391 15.7891 15.9142 15.4141C16.2893 15.039 16.5 14.5303 16.5 13.9998V11.3332C16.5 11.1564 16.4298 10.9868 16.3047 10.8618C16.1797 10.7367 16.0101 10.6665 15.8333 10.6665Z" fill="white" />
                              </g>
                              <defs>
                                <clipPath id="clip0_78_27511">
                                  <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                                </clipPath>
                              </defs>
                            </svg>
                            }
                          >
                            Yuklash
                          </Button>
                        </th>
                      </tr>
                    )
                  })
                  : 
                  <tr>
                      <th data-cell="Ma'lumot" colSpan={12} align='center'>Ma'lumot yo'q</th>
                  </tr>
                }
              </tbody>
            </table>
          </ClassScheduleTableWrapper>
        </BoxBody>
        {/* <BoxFooter>
          <BoxFooterText>{`Jami 3 ta, 1 dan 3 gachasi ko'rsatilmoqda`}</BoxFooterText>
          <Pagination count={10} shape="rounded" color="primary" onChange={(_, value) => { console.log(value) }} />
        </BoxFooter> */}
      </Paper>
    </>
  )
}
