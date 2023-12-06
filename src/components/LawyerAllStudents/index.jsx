import { Box, Button, Checkbox, Modal, Pagination, Paper, Typography } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import { BoxBody, BoxFooter, BoxFooterText, BoxHeader, ClassScheduleTableWrapper, ContentWrapper, ModalBox, ModalButtons, ModalHeader, ModalSelectWrapper } from '../../global_styles/styles'
import { TableTHHeader } from '../DiplomaTable'
import { ModalBoxInfo, TeacherSciencesButtonBox } from './styles'
import { MuiFileInput } from 'mui-file-input'
import AllSelect from '../AllSelect'
import CustomizedInput from '../CustomizedInput'
import PageSelector from '../PageSelector'
import { getLawyerStudent, postLawyerStudent } from './requests'
import { academic_group_short, directions, host, lawyer_studentdocument } from '../../utils/API_urls'
import { getDirections } from '../AdminList/Directions/request'
import study_type from '../../dictionary/study_type'
import AutocompleteJames from '../AutocompleteJames'
import AllSelectFullWidth from '../AllSelectFullWidth'
import { InputsWrapper } from '../CourseManagement/styles'
import { getAcademicGroup } from '../AdminList/Streams/request'

export default function LawyerAllStudents() {

  const [pageSize, setPageSize] = useState(10)
  const [allCount, setAllCount] = useState(0)
  const [pageCount, setPageCount] = useState(1)
  const [page, setPage] = useState(1)
  const [Course_number, setCourse_number] = useState(1)
  const [SearchText, setSearchText] = useState('')
  const [allStudent, setallStudent] = useState([])
  const [Directions, setDirections] = useState([])
  // const [studentDocument, setstudentDocument] = useState([])
  // const handleOpen = () => setOpen(true)
  // const [open, setOpen] = useState(false)
  // const [file, setFile] = useState(null)
  // const [file1, setFile1] = useState(null)
  // const [file2, setFile2] = useState(null)
  // const handleClose = () => setOpen(false)
  const [GroupList, setGroupList] = useState([])
  const [DirectionID, setDirectionID] = useState('&')
  const [GroupID, setGroupID] = useState('')
  const [StudyTypeSelect, setStudyTypeSelect] = useState('')


  const StudyTipeList = useMemo(() => {
    study_type[0].value = '&'
    return study_type.map(elem => {
      return {
        name: elem.uz,
        value: elem.value
      }
    })
  }, [])

  const CourseNumber = useMemo(() => {
    return [
      {
        name: '1-kurs',
        value: 1,
      },
      {
        name: '2-kurs',
        value: 2,
      },
      {
        name: '3-kurs',
        value: 3,
      },
      {
        name: '4-kurs',
        value: 4,
      }
    ]
  }, [])




  useEffect(() => {
    getLawyerStudent(`${lawyer_studentdocument}?page_size=${pageSize}&page=${page}&search=${SearchText}&specialty=${DirectionID}&academic_group=${GroupID}&study_type=${StudyTypeSelect}&course_number=${Course_number}`, (response) => {
      setAllCount(response.data.count)
      setPageCount(response.data.page_count)
      setallStudent(response.data.results)

    }, (error) => {
      console.log(error)
    })


  }, [pageSize, page, SearchText, DirectionID, GroupID, StudyTypeSelect, Course_number])

  useEffect(() => {

    getDirections(`${directions}?page_size=100`, (response) => {
      // setDirections(response.results)
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



  // useEffect(() => {
  //   getAcademicGroup(`${academic_group_short}?page_size=1000&direction=${DirectionID == "&" ? '&' : DirectionID}`, (response) => {
  //     // setDirections(response.results)
  //     const currlist = [...response.data]
  //     // currlist.unshift({
  //     //   name: 'Guruhsiz talabalar',
  //     //   id: 'none',
  //     //   student_count: ""
  //     // })
  //     currlist.unshift({
  //       name: 'Hammasi',
  //       id: '',
  //       student_count: ""
  //     })
  //     setGroupList(currlist.map(elem => {
  //       if (!elem.student_count == "") {
  //         return {
  //           name: elem.name + " (" + elem.student_count + ")",
  //           value: elem.id
  //         }
  //       } else {
  //         return {
  //           name: elem.name,
  //           value: elem.id
  //         }
  //       }
  //     }))
  //   }, (error) => {
  //     console.log(error);
  //   })
  // }, [DirectionID,]);




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

          <PageSelector chageValueFunction={(val) => {
            setPageSize(val)
          }} />
          <CustomizedInput callback_func={(val) => { setSearchText(val) }} />
        </BoxHeader>
        <BoxHeader>
          <InputsWrapper>
            <AllSelect
              chageValueFunction={val => { setCourse_number(val); }}
              selectOptions={CourseNumber}
            />
            <AutocompleteJames width={'150px'} selectOptions={Directions} chageValueFunction={val => setDirectionID(val)} label={"Yo'nalish"} />
            <AutocompleteJames width={'150px'} selectOptions={GroupList} chageValueFunction={val => setGroupID(val)} label={"Guruh"} />
            <AllSelectFullWidth
              chageValueFunction={(val) => setStudyTypeSelect(val)}
              selectedOptionP={StudyTipeList[0].value}
              selectOptions={StudyTipeList}
            />
          </InputsWrapper>
        </BoxHeader>
        <BoxBody>
          <ClassScheduleTableWrapper>
            <table>
              <thead>
                <tr>
                  <TableTHHeader
                    text="#"
                    iconc={null}
                  />
                  <TableTHHeader
                    text="Student"
                    iconc={null}
                  />

                  <TableTHHeader
                    text='Count'
                    iconc={null}
                  />

                  <TableTHHeader
                    text=''
                    iconc={null}
                  />

                  <TableTHHeader
                    text=''
                    iconc={null}
                  />

                </tr>

              </thead>
              <tbody>
                {
                  allStudent.map((elem) => {
                    return (
                      <LawyerStudent elem={elem} />
                    )
                  })
                }

              </tbody>
            </table>
          </ClassScheduleTableWrapper>
        </BoxBody>
        <BoxFooter>
          <BoxFooterText>{`Jami ${allCount} ta, ${pageSize * (page - 1) + 1} dan ${pageSize * (page - 1) + allStudent.length} gachasi ko'rsatilmoqda`}</BoxFooterText>
          <Pagination count={pageCount} shape="rounded" color="primary" onChange={(_, value) => { setPage(value) }} />
        </BoxFooter>
      </Paper>
    </ContentWrapper>
  )
}


const LawyerStudent = ({ elem }) => {

  const [open, setOpen] = useState(false)
  const [file, setFile] = useState(null)
  const [file1, setFile1] = useState(null)
  const [file2, setFile2] = useState(null)
  const [file3, setFile3] = useState(null)

  const [CheckBox, setCheckBox] = useState(null)
  const [CheckBox1, setCheckBox1] = useState(null)
  const [CheckBox2, setCheckBox2] = useState(null)
  const [CheckBox3, setCheckBox3] = useState(null)



  const [studentDocument, setstudentDocument] = useState([])
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const setFileHandler = (newValue, info) => {
    setFile(newValue)
  }
  const setFileHandler1 = (newValue, info) => {
    setFile1(newValue)
  }
  const setFileHandler2 = (newValue, info) => {
    setFile2(newValue)
  }
  const setFileHandler3 = (newValue, info) => {
    setFile3(newValue)
  }

  const openModalBoxStudent = (element) => {
    getLawyerStudent(`${lawyer_studentdocument}${elem.id}/`, (response) => {
      console.log(response.data.document);
    }, (error) => {
      console.log(error)
    })

    setstudentDocument(element.document)
    console.log(studentDocument);
    handleOpen()
  }

  const SubmintGradeTasks = (event) => {
    event.preventDefault();
    // const formData = new FormData();
    // formData.append("student", elem.id);

    let array = []
    console.log(CheckBox);
    if (CheckBox) {
      console.log("ishladi");
      array.push({
        type: "contract",
        is_submission: true
      })
    }
    if (CheckBox1) {
      array.push({
        type: "diplom",
        is_submission: true
      })
    }
    if (CheckBox2) {
      array.push({
        type: "passport",
        is_submission: true
      })
    }
    if (CheckBox3) {
      array.push({
        type: "photo",
        is_submission: true
      })
    }

    // if (file) {
    //   array.push({
    //     type: "diplom",
    //     is_submission: true,
    //     file: file
    //   })
    // } else if (file1) {
    //   array.push({
    //     type: "passport",
    //     is_submission: true,
    //     file: file1
    //   })
    // } else if (file2) {
    //   array.push({
    //     type: "photo",
    //     is_submission: true,
    //     file: file2
    //   })
    // }
    // else if (file3) {
    //   array.push({
    //     type: "contract",
    //     is_submission: true,
    //     file: file3
    //   })
    // }

    // if (array.length > 0) {
    //   formData.append("document", array);
    if (studentDocument.length > 0) array = studentDocument
    // }
    // console.log(formData);
    console.log(array);

    postLawyerStudent(`${lawyer_studentdocument}`, {
      student: elem.id,
      document: array
    }, (response) => {
      console.log(response);
      handleClose()
    }, (error) => {
      console.log(error)
    })
  }

  const GoEdit = (type, status, index) => {
    console.log(type, status, index);
    let array = [...studentDocument]
    console.log(array);
    if (status) {
      array[index].is_submission = status
    }else {
      array[index].is_submission = status
    }
    setstudentDocument(array)
    // if (type == "diplom") {
    //   array.push({
    //     type: "diplom",
    //     is_submission: true
    //   })
    // }
    // if (type == "passport") {
    //   array.push({
    //     type: "passport",
    //     is_submission: true
    //   })
    // }
    // if (type == "photo") {
    //   array.push({
    //     type: "photo",
    //     is_submission: true
    //   })
    // }

  }

  return (
    <tr key={elem.id}>
      <th>{elem.id}</th>
      <th>{elem.full_name}</th>
      <th>{elem.submission_count}/4</th>
      <th>
        <Button
          variant="contained"
          sx={{
            marginLeft: '15px',
            borderRadius: '10px',
            textTransform: "capitalize",
            boxShadow: "none",
            padding: "10px 12px",
          }}
          onClick={(_) => { openModalBoxStudent(elem) }}
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
          Docs
        </Button>
      </th>
      <th>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <form style={{ width: "100%" }} onSubmit={SubmintGradeTasks} method="HTTP_METHOD" encType='application/json'>
            <ModalBoxInfo>
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
                    Student dokumentlari
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
              </ModalSelectWrapper>
              <ModalSelectWrapper>
                <ClassScheduleTableWrapper>
                  <table>
                    <thead>
                      <tr>
                        {
                          studentDocument.length > 0 ?
                          studentDocument.map((elem, index) => {
                            return (
                              <TableTHHeader
                                text={elem.type}
                                iconc={null}
                              />
                            )
                          }):
                           <>
                            <TableTHHeader
                              text="contract"
                              iconc={null}
                            />
                            <TableTHHeader
                              text="diplom"
                              iconc={null}
                            /> 
                           <TableTHHeader
                            text="passport"
                            iconc={null}
                          />
                           <TableTHHeader
                            text="photo"
                            iconc={null}
                          />
                           </>

                        }
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {
                          studentDocument.length > 0 ?
                            studentDocument.map((elem, index) => {
                              return (
                                elem.is_submission ?
                                  <th key={index}>
                                    <TeacherSciencesButtonBox style={{ justifyContent: "center", cursor: "pointer  " }}>
                                      {
                                        <Checkbox {...label} onChange={(event) => GoEdit(elem.type, false,index)} checked={true} />
                                      }
                                    </TeacherSciencesButtonBox>
                                  </th> :
                                  <th key={index}>
                                    <TeacherSciencesButtonBox style={{ justifyContent: "center", cursor: "pointer  " }}>
                                      {
                                        <Checkbox {...label} onChange={(event) => GoEdit(elem.type, true, index)} />
                                      }
                                    </TeacherSciencesButtonBox>
                                  </th>
                              )
                            }) :
                            <>
                              <th>
                                <TeacherSciencesButtonBox style={{ justifyContent: "center", cursor: "pointer  " }}>
                                  <Checkbox {...label} onChange={(event) => setCheckBox(event.target.value)} />
                                </TeacherSciencesButtonBox>
                              </th>
                              <th>
                                <TeacherSciencesButtonBox style={{ justifyContent: "center", cursor: "pointer  " }}>
                                  <Checkbox {...label} onChange={(event) => setCheckBox1(event.target.value)} />
                                </TeacherSciencesButtonBox>
                              </th>
                              <th>
                                <TeacherSciencesButtonBox style={{ justifyContent: "center", cursor: "pointer  " }}>
                                  <Checkbox {...label} onChange={(event) => setCheckBox2(event.target.value)} />
                                </TeacherSciencesButtonBox>
                              </th>
                              <th>
                                <TeacherSciencesButtonBox style={{ justifyContent: "center", cursor: "pointer  " }}>
                                  <Checkbox {...label} onChange={(event) => setCheckBox3(event.target.value)} />
                                </TeacherSciencesButtonBox>
                              </th>
                            </>
                        }
                      </tr>
                      {/* <tr>
                        <th>
                          <MuiFileInput
                            placeholder="Fayl"
                            value={file}
                            onChange={setFileHandler}
                            id="dsga1"
                            fullWidth
                          />
                        </th>
                        <th>
                          <MuiFileInput
                            placeholder="Fayl"
                            value={file1}
                            onChange={setFileHandler1}
                            id="dsga2"
                            fullWidth
                          />
                        </th>
                        <th>
                          <MuiFileInput
                            placeholder="Fayl"
                            value={file2}
                            onChange={setFileHandler2}
                            id="dsga3"
                            fullWidth
                          />
                        </th>
                        <th>
                          <MuiFileInput
                            placeholder="Fayl"
                            value={file3}
                            onChange={setFileHandler}
                            id="dsga4"
                            fullWidth
                          />
                        </th>
                      </tr> */}
                      {/* <tr>
                        {
                          studentDocument ?
                            studentDocument.map((elem, index) => {
                              return (
                                <th>
                                  {
                                    elem.file ?
                                      <a href={host + elem?.file} target='_blank'>
                                        <Button
                                          variant="contained"
                                          sx={{
                                            borderRadius: '0',
                                            textTransform: "capitalize",
                                            boxShadow: "none",
                                            padding: "10px 12px",
                                          }}
                                          startIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                          </svg>
                                          }
                                        >
                                        </Button>
                                      </a>
                                      :

                                      <Button
                                        variant="contained"
                                        sx={{
                                          borderRadius: '0',
                                          textTransform: "capitalize",
                                          boxShadow: "none",
                                          padding: "10px 12px",
                                          backgroundColor: "red",
                                          "&:hover": {
                                            backgroundColor: "red",
                                          },
                                          cursor: "not-allowed"
                                        }}
                                        startIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                        </svg>
                                        }
                                      >
                                      </Button>
                                  }
                                </th>
                              )

                            }) :
                            <></>
                        }
                      </tr> */}

                    </tbody>
                  </table>
                </ClassScheduleTableWrapper>
              </ModalSelectWrapper>
              <ModalSelectWrapper>
              </ModalSelectWrapper>
              <ModalButtons>
                <Button
                  sx={{ width: "50%", textTransform: "none", borderRadius: "10px" }}
                  variant="outlined"
                  onClick={handleClose}
                >
                  Bekor qilish
                </Button>
                <Button
                  sx={{ width: "50%", textTransform: "none", borderRadius: "10px", boxShadow: "none" }}
                  variant="contained"
                  type="submit"
                >
                  Saqlash
                </Button>
              </ModalButtons>
            </ModalBoxInfo>
          </form>

        </Modal>
      </th>
    </tr>
  )
}