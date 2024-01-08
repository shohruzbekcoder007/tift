import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { BoxBody, BoxFooter, BoxFooterText, BoxHeader, ClassScheduleTableWrapper, ContentWrapper } from '../../../global_styles/styles'
import { CircularProgress, Pagination, Paper, Typography } from '@mui/material'
import PageSelector from '../../PageSelector'
import CustomizedInput from '../../CustomizedInput'
import { TableTHHeader } from '../../DiplomaTable'
import Button from '@mui/material/Button'
import { AttendSearchButton } from './styles'
import { InputsWrapper } from '../../CourseManagement/styles'
import { Link } from 'react-router-dom'
import { deleteStudent, getUsers } from './request'
import { academic_group_short, academic_year, additional_student, directions, host, users_student } from '../../../utils/API_urls'
import AutocompleteJames from '../../AutocompleteJames'
import { getDirections } from '../Directions/request'
import { getAcademicGroup } from '../Streams/request'
import { getAcademecYear } from '../Semestr/requests'
import AllSelectFullWidth from '../../AllSelectFullWidth'
import degree from '../../../dictionary/degree'
import study_type from '../../../dictionary/study_type'
import jins from '../../../dictionary/jins'
import contract_type from '../../../dictionary/contract_type'
import { useDispatch, useSelector } from 'react-redux'
import { setTable } from '../../../redux/action/tableActions'

export default function Students() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [file, setFile] = useState(null);
  const setFileHandler = (newValue, info) => {
    setFile(newValue)
  }

  const user = useSelector((state) => state.user);
  const searchSelects = useSelector((state) => state.table);
  const dispatch = useDispatch()
  // ======
  const [students, setStudents] = useState([])
  const [pageSize, setPageSize] = useState(searchSelects.pageSize)
  const [searchText, setSearchText] = useState(searchSelects.searchText)
  const [allCount, setAllCount] = useState(0)
  const [page, setPage] = useState(searchSelects.page)
  const [pageCount, setPageCount] = useState(1)
  const [deleted, setDeleted] = useState(true)
  const [Directions, setDirections] = useState([])
  const [GroupList, setGroupList] = useState([])
  const [AcademekYear, setAcademekYear] = useState(searchSelects.AcademekYear)
  const [DegreeSelect, setDegreeSelect] = useState(searchSelects.DegreeSelect)
  const [StudyTypeSelect, setStudyTypeSelect] = useState(searchSelects.StudyTypeSelect)
  const [DirectionID, setDirectionID] = useState(searchSelects.DirectionID)
  const [GroupID, setGroupID] = useState(searchSelects.GroupID)
  const [YearList, setYearList] = useState([])
  const [YearStatus, setYearStatus] = useState(true)
  const [DefaultPage, setDefaultPage] = useState(1)
  const [Gender, setGender] = useState(searchSelects.Gender)
  const [ModalText, setModalText] = useState(<CircularProgress color="success" size={25} />);
  localStorage.setItem('status', true)
  const [FormPayment, setFormPayment] = useState(searchSelects.FormPayment)


  useEffect(() => {
    
    // setPageSize(searchSelects.pageSize)
    // setSearchText(searchSelects.searchText)
    // setPage(searchSelects.page)
    // setDirectionID(searchSelects.DirectionID)
    // setGroupID(searchSelects.GroupID)
    // setAcademekYear(searchSelects.AcademekYear)
    // setDegreeSelect(searchSelects.DegreeSelect)
    // setStudyTypeSelect(searchSelects.StudyTypeSelect)
    // setGender(searchSelects.Gender)
    // setFormPayment(searchSelects.FormPayment)

    console.log(searchSelects, "<===")
  }, [])


  const Contract = useMemo(() => {
    return contract_type.map(elem => {
      return {
        name: elem.uz,
        value: elem.value
      }
    })
  }, [])

  const DegreeList = useMemo(() => {
    degree[0].value = '&'
    return degree.map(elem => {
      return {
        name: elem.uz,
        value: elem.value
      }
    })
  }, [])

  const StudyTipeList = useMemo(() => {
    study_type[0].value = '&'
    return study_type.map(elem => {
      return {
        name: elem.uz,
        value: elem.value
      }
    })
  }, [])


  useEffect(() => {
    getAcademecYear(academic_year, (response) => {
      console.log(response.data.results);
      let mass = [{
        name: "O'quv yili",
        value: '&',
      }]

      response.data.results.map(item => {
        mass.push({
          name: item.name,
          value: item.season
        })
      })
      setAcademekYear(mass[0].value)
      setYearList(mass)

    }, (error) => {
      console.log(error)
    })
  }, []);

  useEffect(() => {
    setStudents([])
    getUsers(`${additional_student}?page_size=${pageSize}&search=${searchText}&page=${page}&specialty=${DirectionID}&academic_group=${GroupID}&year_of_admission=${AcademekYear}&degree=${DegreeSelect}&study_type=${StudyTypeSelect}&gender=${Gender}&form_of_payment=${FormPayment}`, response => {
      console.log(response.data)
      setStudents(response.data.results)
      setAllCount(response.data.count)
      setPageCount(response.data.page_count)
      dispatch(setTable({
        page, 
        pageSize, 
        searchText, 
        DirectionID, 
        GroupID, 
        AcademekYear, 
        StudyTypeSelect, 
        DegreeSelect,
        Gender,
        FormPayment
      }))
      if (response.data.results.length == 0) setModalText("Ma'lumot yo'q")
      setYearStatus(false)
    }, error => {
      setModalText("Ma'lumot yo'q")
      console.log(error)
    })
  }, [page, pageSize, searchText, DirectionID, GroupID, AcademekYear, StudyTypeSelect, DegreeSelect,Gender,FormPayment])

  useEffect(() => {

    getDirections(`${directions}?page_size=100`, (response) => {
      const currlist = [...response.results]
      currlist.unshift({
        name: 'Hammasi',
        id: '&',
        degree: "hammasi"
      })
      setDirections(currlist.map(elem => {
        return {
          name: elem.name + " (" + elem.degree + ")",
          value: elem.id
        }
      }))

    }, (error) => {
      console.log(error);
    })
  }, []);

  useEffect(() => {
    if (AcademekYear != 0)
      getAcademicGroup(`${academic_group_short}?page_size=1000&direction=${DirectionID == "&" ? '&' : DirectionID}&year=${AcademekYear ?? '&'}`, (response) => {
        const currlist = [...response.data]
        currlist.unshift({
          name: 'Hammasi',
          id: '',
          student_count: ""
        })
        setGroupList(currlist.map(elem => {
          if (!elem.student_count == "") {
            return {
              name: elem.name + " (" + elem.student_count + ")",
              value: elem.id
            }
          } else {
            return {
              name: elem.name,
              value: elem.id
            }
          }
        }))
      }, (error) => {
        console.log(error);
      })
  }, [DirectionID, AcademekYear]);

  const jinsList = useMemo(() => {
    setGender(jins[0].value)
    return jins.map(elem => {
      return { value: elem.value, name: elem.uz }
    })
  }, [])

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          width: '100%',
          padding: "20px",
          borderRadius: "10px"
        }}
      >
        <BoxHeader>
          <PageSelector
            defPage={pageSize}
            chageValueFunction={(val) => {
              setPageSize(val)
            }} 
          />
          <AttendSearchButton>
            <a href={host + `/api/v1/documents/admin-students-contingent/?year=${AcademekYear}&study_type=${StudyTypeSelect}&direction=${DirectionID}&degree=${DegreeSelect}&academic_group=${GroupID}&form_of_payment=${FormPayment}`} target='_blank'>
              <Button
                variant="contained"
                sx={{
                  width: "90px",
                  textTransform: "capitalize",
                  boxShadow: "none",
                  padding: "12px",
                  borderRadius: "10px",
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "17px"
                }}
                startIcon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                </svg>
                }
              >
                Excel
              </Button>
            </a>
            {
              user['role'] != 'rector' &&
            <Link to={'add'}>
              <Button
                variant="contained"
                onClick={handleOpen}
                sx={{
                  textTransform: "capitalize",
                  boxShadow: "none",
                  padding: "12px 70px",
                  borderRadius: "10px",
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "17px"
                }}
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
                Qo'shish
              </Button>
            </Link>
            }
            <CustomizedInput callback_func={(val) => { setSearchText(val) }} />
          </AttendSearchButton>
        </BoxHeader>
        <BoxHeader>
          <InputsWrapper>
            <AllSelectFullWidth
              chageValueFunction={(val) => setAcademekYear(val)}
              selectedOptionP={YearList?.[0]?.value}
              selectOptions={YearList}
            />
            <AutocompleteJames width={'150px'} selectOptions={Directions}  chageValueFunction={val => setDirectionID(val)} label={"Yo'nalish"} />
            <AutocompleteJames width={'150px'} selectOptions={GroupList} chageValueFunction={val => setGroupID(val)} label={"Guruh"} />
            <AllSelectFullWidth
              chageValueFunction={(val) => setDegreeSelect(val)}
              selectedOptionP={DegreeList[0].value}
              selectOptions={DegreeList}
            />
            <AllSelectFullWidth
              chageValueFunction={(val) => setStudyTypeSelect(val)}
              selectedOptionP={StudyTipeList[0].value}
              selectOptions={StudyTipeList}
            />
             <AllSelectFullWidth
              chageValueFunction={val => { setGender(val) }}
              selectedOptionP={jinsList[0].value}
              selectOptions={jinsList}
            />

            <AllSelectFullWidth
              chageValueFunction={(val) => setFormPayment(val)}
              selectedOptionP={Contract?.[0]?.value}
              selectOptions={Contract}
            />
          </InputsWrapper>
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
                    </svg>
                    }
                  />
                  <TableTHHeader
                    text="F.I.SH"
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
                    text="Guruh"
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
                    text={'Daraja'}
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
                    text={"Ta'lim shakli"}
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
                    text={'Yo’nalish'}
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
                    text={'Kurs'}
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
                  {
                    user['role'] != 'rector' &&
                  <th></th>
                  }
                </tr>
              </thead>
              <tbody>
                {
                  students.length > 0 ? students.map((elem, index) => {
                    return (
                      <OneStudent student={elem} key={index} setDeleted={setDeleted} />
                    )
                  })
                    :
                    <tr>
                      <th colSpan={12} align='center'>{ModalText}</th>
                    </tr>
                }
              </tbody>
            </table>
          </ClassScheduleTableWrapper>
        </BoxBody>
        <BoxFooter>
          <BoxFooterText>{`Jami ${allCount} ta, ${pageSize * (page - 1) + 1} dan ${pageSize * (page - 1) + students.length} gachasi ko'rsatilmoqda`}</BoxFooterText>
          <Pagination  count={pageCount} defaultPage={page} shape="rounded" color="primary" onChange={(_, value) => {setPage(value); setDefaultPage(10)}} />
        </BoxFooter>
      </Paper>
    </>
  )
}

const OneStudent = ({ student, setDeleted }) => {

  const studentDeleted = () => {
    console.log(`users_student${student.id}`)
    deleteStudent(`${users_student}${student.id}`, response => {
      console.log()
      if (response.status) {
        setDeleted(prev => !prev)
      }
    }, error => {
      console.log(error)
    })
  }
  
  const user = useSelector((state) => state.user);

  return (
    <tr>
      <th>{student.student_id}</th>
      <th>{student.full_name}</th>
      <th>{student.academic_group != null ? student.academic_group : ""}</th>
      {
        student.degree ? degree.map(elem => {
          if (elem.value?.toLowerCase() == student.degree?.toLowerCase()) {
            return (<th>{elem.uz}</th>)
          }
        })
          : <th></th>
      }
      {
        student.study_type ? study_type.map(elem => {
          if (elem.value?.toLowerCase() == student.study_type?.toLowerCase()) {
            return (<th>{elem.uz}</th>)
          }
        })
          : <th></th>
      }
      <th>{student.specialty}</th>
      <th>{student.course_number}</th>
      {
        user['role'] != 'rector' &&
      <th>
        <Link to={'edit'} state={{ StudentID: student.id }}>
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
              <g clipPath="url(#clip0_1221_28999)">
                <path d="M12.94 0.619885L4.81195 8.74789C4.50151 9.05665 4.2554 9.42392 4.08787 9.82845C3.92034 10.233 3.83471 10.6667 3.83595 11.1046V11.9999C3.83595 12.1767 3.90619 12.3463 4.03121 12.4713C4.15624 12.5963 4.32581 12.6666 4.50262 12.6666H5.39795C5.83579 12.6678 6.26953 12.5822 6.67406 12.4146C7.07858 12.2471 7.44585 12.001 7.75462 11.6906L15.8826 3.56255C16.2722 3.172 16.491 2.64287 16.491 2.09122C16.491 1.53957 16.2722 1.01044 15.8826 0.619885C15.4864 0.241148 14.9594 0.0297852 14.4113 0.0297852C13.8632 0.0297852 13.3362 0.241148 12.94 0.619885ZM14.94 2.61989L6.81195 10.7479C6.43603 11.1215 5.92795 11.3318 5.39795 11.3332H5.16928V11.1046C5.17067 10.5745 5.381 10.0665 5.75462 9.69055L13.8826 1.56255C14.025 1.42652 14.2144 1.35061 14.4113 1.35061C14.6082 1.35061 14.7976 1.42652 14.94 1.56255C15.0799 1.7029 15.1585 1.89301 15.1585 2.09122C15.1585 2.28942 15.0799 2.47954 14.94 2.61989Z" fill="white" />
                <path d="M15.8333 5.986C15.6565 5.986 15.487 6.05624 15.3619 6.18126C15.2369 6.30629 15.1667 6.47586 15.1667 6.65267V10H12.5C11.9696 10 11.4609 10.2107 11.0858 10.5858C10.7107 10.9609 10.5 11.4696 10.5 12V14.6667H3.83333C3.3029 14.6667 2.79419 14.456 2.41912 14.0809C2.04405 13.7058 1.83333 13.1971 1.83333 12.6667V3.33333C1.83333 2.8029 2.04405 2.29419 2.41912 1.91912C2.79419 1.54405 3.3029 1.33333 3.83333 1.33333H9.86133C10.0381 1.33333 10.2077 1.2631 10.3327 1.13807C10.4578 1.01305 10.528 0.843478 10.528 0.666667C10.528 0.489856 10.4578 0.320286 10.3327 0.195262C10.2077 0.0702379 10.0381 0 9.86133 0L3.83333 0C2.9496 0.00105857 2.10237 0.352588 1.47748 0.97748C0.852588 1.60237 0.501059 2.4496 0.5 3.33333L0.5 12.6667C0.501059 13.5504 0.852588 14.3976 1.47748 15.0225C2.10237 15.6474 2.9496 15.9989 3.83333 16H11.3953C11.8333 16.0013 12.2671 15.9156 12.6718 15.7481C13.0764 15.5806 13.4438 15.3345 13.7527 15.024L15.5233 13.252C15.8338 12.9432 16.08 12.576 16.2477 12.1715C16.4153 11.767 16.5011 11.3332 16.5 10.8953V6.65267C16.5 6.47586 16.4298 6.30629 16.3047 6.18126C16.1797 6.05624 16.0101 5.986 15.8333 5.986ZM12.81 14.0813C12.542 14.3487 12.2031 14.5337 11.8333 14.6147V12C11.8333 11.8232 11.9036 11.6536 12.0286 11.5286C12.1536 11.4036 12.3232 11.3333 12.5 11.3333H15.1167C15.0342 11.7023 14.8493 12.0406 14.5833 12.3093L12.81 14.0813Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_1221_28999">
                  <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                </clipPath>
              </defs>
            </svg>
            }
          >
          </Button>
        </Link>
        {/* <Button
          variant="contained"
          sx={{
            borderRadius: "10px",
            textTransform: "capitalize",
            boxShadow: "none",
            padding: "6px 12px",
            marginRight: "20px",
            backgroundColor: "redButton.main",
            "&:hover": {
              backgroundColor: "redButton.main",
            },
          }}
          startIcon={<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1221_29003)">
              <path d="M14.5026 2.66667H12.4359C12.2812 1.91428 11.8718 1.23823 11.2768 0.752479C10.6817 0.266727 9.93741 0.000969683 9.16927 0L7.83594 0C7.0678 0.000969683 6.32348 0.266727 5.72844 0.752479C5.13339 1.23823 4.724 1.91428 4.56927 2.66667H2.5026C2.32579 2.66667 2.15622 2.7369 2.0312 2.86193C1.90618 2.98695 1.83594 3.15652 1.83594 3.33333C1.83594 3.51014 1.90618 3.67971 2.0312 3.80474C2.15622 3.92976 2.32579 4 2.5026 4H3.16927V12.6667C3.17033 13.5504 3.52186 14.3976 4.14675 15.0225C4.77164 15.6474 5.61887 15.9989 6.5026 16H10.5026C11.3863 15.9989 12.2336 15.6474 12.8585 15.0225C13.4833 14.3976 13.8349 13.5504 13.8359 12.6667V4H14.5026C14.6794 4 14.849 3.92976 14.974 3.80474C15.099 3.67971 15.1693 3.51014 15.1693 3.33333C15.1693 3.15652 15.099 2.98695 14.974 2.86193C14.849 2.7369 14.6794 2.66667 14.5026 2.66667ZM7.83594 1.33333H9.16927C9.58279 1.33384 9.98602 1.46225 10.3237 1.70096C10.6613 1.93967 10.9169 2.27699 11.0553 2.66667H5.94994C6.08833 2.27699 6.34387 1.93967 6.68153 1.70096C7.01919 1.46225 7.42242 1.33384 7.83594 1.33333ZM12.5026 12.6667C12.5026 13.1971 12.2919 13.7058 11.9168 14.0809C11.5417 14.456 11.033 14.6667 10.5026 14.6667H6.5026C5.97217 14.6667 5.46346 14.456 5.08839 14.0809C4.71332 13.7058 4.5026 13.1971 4.5026 12.6667V4H12.5026V12.6667Z" fill="white" />
              <path d="M7.16667 11.9998C7.34348 11.9998 7.51305 11.9296 7.63807 11.8046C7.7631 11.6796 7.83333 11.51 7.83333 11.3332V7.33317C7.83333 7.15636 7.7631 6.98679 7.63807 6.86177C7.51305 6.73674 7.34348 6.6665 7.16667 6.6665C6.98986 6.6665 6.82029 6.73674 6.69526 6.86177C6.57024 6.98679 6.5 7.15636 6.5 7.33317V11.3332C6.5 11.51 6.57024 11.6796 6.69526 11.8046C6.82029 11.9296 6.98986 11.9998 7.16667 11.9998Z" fill="white" />
              <path d="M9.83073 11.9998C10.0075 11.9998 10.1771 11.9296 10.3021 11.8046C10.4272 11.6796 10.4974 11.51 10.4974 11.3332V7.33317C10.4974 7.15636 10.4272 6.98679 10.3021 6.86177C10.1771 6.73674 10.0075 6.6665 9.83073 6.6665C9.65392 6.6665 9.48435 6.73674 9.35932 6.86177C9.2343 6.98679 9.16406 7.15636 9.16406 7.33317V11.3332C9.16406 11.51 9.2343 11.6796 9.35932 11.8046C9.48435 11.9296 9.65392 11.9998 9.83073 11.9998Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_1221_29003">
                <rect width="16" height="16" fill="white" transform="translate(0.5)" />
              </clipPath>
            </defs>
          </svg>
          }
          onClick={studentDeleted}
        >
        </Button> */}
      </th>
      }
    </tr>
  )
}