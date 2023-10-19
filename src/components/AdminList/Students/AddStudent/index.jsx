import React, { useEffect, useMemo, useState } from 'react'
import { BoxHeader } from '../../../../global_styles/styles'
import { Button, Snackbar, Typography } from '@mui/material'
import CustomizedInputSimple from '../../../CustomizedInputSimple'
import AllSelectFullWidth from '../../../AllSelectFullWidth'
import { StudentInfoCard, WrapperBox, WrapperButtons, WrapperImgCard, WrapperInputsCard, WrapperInputsCardTwo } from './styles'
import { MuiFileInput } from 'mui-file-input'
import jins from '../../../../dictionary/jins'
import citizenship from '../../../../dictionary/citizenship'
import nationality from '../../../../dictionary/nationality'
import academic_title from '../../../../dictionary/academic_title'
import { createStudent, getOneStudentData, getRegionListRequest } from './request'
import { academic_group_short, additional_ie_oneid, country, directions, district, employee, region, users_student } from '../../../../utils/API_urls'
import BasicDatePicker from '../../../BasicDatePicker'
import { useNavigate } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';
import { getAcademicGroup } from '../../Streams/request'
import contract_type from '../../../../dictionary/contract_type'
import study_type from '../../../../dictionary/study_type'
import degree from '../../../../dictionary/degree'
import language from '../../../../dictionary/language'
import { Box } from '@mui/system'
import { InputsWrapper } from '../../../CourseManagement/styles'
import axios from 'axios'

export default function AddStudents() {

  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  // const [regionList, setRegionList] = useState([])
  // const [regionList1, setRegionList1] = useState([])
  // const [districtList, setDistrictList] = useState([])
  // const [districtList1, setDistrictList1] = useState([])
  const [departmentList, setDepartmentList] = useState([])
  // const [countryList, setCountryList] = useState([])
  // const [regionId, setRegionId] = useState(null)
  // const [regionId1, setRegionId1] = useState(null)
  const [openAlert, setOpenAlert] = useState(false)
  const [changed, serChanged] = useState(false)
  const [academicGroupList, setacademicGroupList] = useState([])
  const [alertMessage, setAlertMessage] = useState('')
  const [PassportStudent, setPassportStudent] = useState('')
  const [BirthdayStudent, setBirthdayStudent] = useState(null)

  const [StudentInfo, setStudentInfo] = useState(null)

  const handleCloseAlert = () => setOpenAlert(false);


  const [newData, setNewData] = useState({
    citizenship: null,
    nationality: null,
    passport: null,
    jshshr: null,
    first_name: null,
    last_name: null,
    middle_name: null,
    birthday: null,
    gender: null,
    country: null,
    region: null,
    district: null,
    address: null,
    region2: null,
    district2: null,
    address2: null,
    year_of_admission: null,
    academic_group: null,
    specialty: null,
    start_work: null,
    course_number: null,
    email: null,
    phone_number: null,
    avatar: null,
    form_of_payment: null,
    gpa: null,
    study_type: null,
    degree: null,
    lang: null,
    student_id: null
  })

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const anchorOrigin1 = {
    vertical: 'bottom',
    horizontal: "right"
  }

  const anchorOrigin2 = {
    vertical: 'bottom',
    horizontal: "left"
  }

  const reqDataChange = (keyname, value) => {
    setNewData(prev => {
      prev[keyname] = value
      return prev;
    })
  }

  const setFileHandler = (newValue, info) => {
    console.log(newValue);
    reqDataChange("avatar", newValue)
    setFile(newValue)
  }

  // const jinsList = useMemo(() => {
  //   reqDataChange("gender", jins[0].value)
  //   return jins.map(elem => {
  //     return { value: elem.value, name: elem.uz }
  //   })
  // }, [])

  const StudyTypeList = useMemo(() => {
    reqDataChange("study_type", study_type[0].value)
    return study_type.map(elem => {
      return { value: elem.value, name: elem.uz }
    })
  }, [])

  const DegreeTypeList = useMemo(() => {
    reqDataChange("degree", degree[0].value)
    return degree.map(elem => {
      return { value: elem.value, name: elem.uz }
    })
  }, [])

  const LangList = useMemo(() => {
    reqDataChange("lang", language[0].value)
    return language.map(elem => {
      return { value: elem.value, name: elem.uz }
    })
  }, [])

  const citizenshipList = useMemo(() => {
    reqDataChange("citizenship", citizenship[0].value)
    return citizenship.map(elem => {
      return { value: elem.value, name: elem.uz }
    })
  }, [])

  // const nationalityList = useMemo(() => {
  //   reqDataChange("nationality", nationality[0].value)
  //   return nationality.map(elem => {
  //     return { value: elem.value, name: elem.uz }
  //   })
  // }, [])

  const ContractList = useMemo(() => {
    reqDataChange("contract_type", contract_type[0].value)
    return contract_type.map(elem => {
      return {
        value: elem.value,
        name: elem.uz
      }
    })
  }, [])

  useEffect(() => {
    // getRegionListRequest(`${region}?page_size=500`, (response) => {
    //   reqDataChange("region", response.data[0]?.id)
    //   reqDataChange("region2", response.data[0]?.id)
    //   setRegionList(response.data.map(elem => {
    //     return {
    //       name: elem.name,
    //       value: elem.id
    //     }
    //   }))
    //   setRegionList1(response.data.map(elem => {
    //     return {
    //       name: elem.name,
    //       value: elem.id
    //     }
    //   }))
    //   setRegionId(response.data[0]?.id)
    //   setRegionId1(response.data[0]?.id)
    // }, (error) => {
    //   console.log(error)
    // })
    // getRegionListRequest(`${district}?page_size=500`, (response) => {
    //   reqDataChange("district", response.data[0]?.id)
    //   reqDataChange("district2", response.data[0]?.id)
    //   setDistrictList(response.data.map(elem => {
    //     return {
    //       name: elem.name,
    //       value: elem.id
    //     }
    //   }))
    //   setDistrictList1(response.data.map(elem => {
    //     return {
    //       name: elem.name,
    //       value: elem.id
    //     }
    //   }))
    // }, (error) => {
    //   console.log(error)
    // })
    getRegionListRequest(`${directions}?page_size=500`, (response) => {
      console.log(response);
      setDepartmentList(response.data.results.map(elem => {
        return {
          name: elem.name,
          value: elem.id
        }
      }))
    }, (error) => {
      console.log(error)
    })
    // getRegionListRequest(`${country}`, (response) => {
    //   reqDataChange("country", response.data[0]?.id)
    //   setCountryList(response.data.map(elem => {
    //     return {
    //       value: elem.id,
    //       name: elem.name
    //     }
    //   }))
    // }, (error) => {
    //   console.log(error)
    // })

    getAcademicGroup(`${academic_group_short}?page_size=1000`, (response) => {
      reqDataChange("academic_group", response.data[0]?.id)
      setacademicGroupList(response.data.map(elem => {
        return {
          name: elem.name + " (" + elem.student_count + ")",
          value: elem.id
        }
      }))
    }, (error) => {
      console.log(error)
    })
  }, [])

  // useEffect(() => {
  //   if (regionId) {
  //     getRegionListRequest(`${district}?page_size=500&region=${regionId}`, (response) => {
  //       reqDataChange("district", response.data[0]?.id)
  //       setDistrictList(response.data.map(elem => {
  //         return {
  //           name: elem.name,
  //           value: elem.id
  //         }
  //       }))
  //     }, (error) => {
  //       console.log(error)
  //     })
  //   }
  // }, [regionId])

  // useEffect(() => {
  //   if (regionId1) {
  //     getRegionListRequest(`${district}?page_size=500&region=${regionId1}`, (response) => {
  //       reqDataChange("district2", response.data[0]?.id)
  //       setDistrictList1(response.data.map(elem => {
  //         return {
  //           name: elem.name,
  //           value: elem.id
  //         }
  //       }))
  //     }, (error) => {
  //       console.log(error)
  //     })
  //   }
  // }, [regionId1])



  const GetStudent = (_) => {
    getOneStudentData(`${additional_ie_oneid}?passport=${PassportStudent}&birthday=${BirthdayStudent}`, (response) => {
      let student = response.data
      reqDataChange("first_name", student.namelatin)
      reqDataChange("passport", student.document)
      reqDataChange("last_name", student.surnamelatin)
      if (student.sex == '1') {
        reqDataChange("gender", 'male')
      } else {
        reqDataChange("gender", 'female')
      }
      reqDataChange("birthday", student.birth_date)
      reqDataChange("middle_name", student.patronymlatin)
      reqDataChange("citizenship_oneid", student.citizenship)
      reqDataChange("docdatebegin", student.docdatebegin)
      reqDataChange("docdateend", student.docdateend)
      reqDataChange("nationality_oneid", student.nationality)
      reqDataChange("jshshr", student.pinpp)
      reqDataChange("birthplace", student.birthplace)
      reqDataChange("image_url", student.photo)
      reqDataChange("address", student.birthcountry + " " + student.citizenship + " " + student.nationality + " " + student.docgiveplace)
      setStudentInfo(response.data)
    }, (error) => {
      serChanged(false)
      setOpenAlert(true)
      console.log(error)
      let msg = ``
      console.log(error)
      if (error.response.data.message) {
        msg = msg + " " + error.response.data.message
      }
      setAlertMessage(msg)

    })
  }

  // admin/employees
  const createEmployes = () => {
    // console.log(newData)
    createStudent(users_student, newData, response => {
      navigate(-1)
      console.log(response)
    }, error => {
      serChanged(false)
      setOpenAlert(true)
      console.log(error)
      let msg = ``
      if (error.response.data.first_name) {
        msg = msg + " " + error.response.data.first_name
      } if (error.response.data.last_name) {
        msg = msg + " " + error.response.data.last_name
      } if (error.response.data.phone_number) {
        msg = msg + " " + error.response.data.phone_number
      } if (error.response.data.detail) {
        msg = msg + " Bunday foydalanuvchi mavjud"
      }
      if (error.response.data.gpa) {
        msg = msg + error.response.data.gpa
      }
      if (error.response.data.jshshr) {
        msg = msg + error.response.data.jshshr
      } if (error.response.data.lang) {
        msg = msg + error.response.data.lang
      } if (error.response.data.student_id) {
        msg = msg + error.response.data.student_id
      }
      setAlertMessage(msg)
    })
  }

  const WritePassport = (val) => {
    reqDataChange("passport", val)
    setPassportStudent(val.toUpperCase());
  }
  const handleDate = (val) => {
    reqDataChange("birthday", val)
    setBirthdayStudent(val);
  }

  return (
    <div>
      <Typography
        sx={{
          color: "#000",
          fontWeight: "600",
          fontSize: "20px",
          margin: "0 0 20px 10px"
        }}
      >
        Qo'shish
      </Typography>
      <WrapperBox>
        <BoxHeader>
          <div style={{ width: "70%", gap: "20px", display: "grid" }}>
            <div>
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
                Pasport
              </Typography>
              <CustomizedInputSimple status='passport' defaultValue={PassportStudent} callback_func={(val) => { WritePassport(val) }} placeholder="Passport" />
            </div>
            <div>
              <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="h4"
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#000",
                  mb: "0"
                }}
              >
                Tug’ilgan kuni
              </Typography>
              <BasicDatePicker setFunction={(val) => { handleDate(val) }} label="Tug’ilgan kuni" />
            </div>
            <BoxHeader style={{ margin: "1rem 0", display: "flex", justifyContent: "end" }}>
              <Button
                variant="contained"
                onClick={GetStudent}
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
                startIcon={null}
              >
                Yuklash
              </Button>
            </BoxHeader>
          </div>
          <div>
            {
              StudentInfo ?
                <WrapperImgCard>
                  <img src={StudentInfo.photo} alt="" />
                </WrapperImgCard>
                :
                <WrapperImgCard>
                  <img src="https://qabul.tift.uz/static/images/user.jpeg" alt="" />
                </WrapperImgCard>

            }
          </div>
        </BoxHeader>
          {
            StudentInfo ?  <BoxHeader>
            <StudentInfoCard>
              <div>
                <h3>Ism: </h3>
                <b >{StudentInfo.namelatin}</b>
              </div>
              <div>
                <h3>Fuqorolik: </h3>
                <b >{StudentInfo.citizenship}</b>
              </div>
              <div>
                <h3>JSHSHIR: </h3>
                <b >{StudentInfo.pinpp}</b>
              </div>
            </StudentInfoCard>
            <StudentInfoCard>
              <div>
                <h3>Familiya: </h3>
                <b>{StudentInfo.surnamelatin}</b>
              </div>
              <div>
                <h3>Mamlakat: </h3>
                <b>{StudentInfo.birthcountry}</b>
              </div>
              <div>
                <h3>Shahar, Tuman: </h3>
                <b>{StudentInfo.birthplace}</b>
              </div>
            </StudentInfoCard>
            <StudentInfoCard>
  
              <div>
                <h3>Otasining ismi: </h3>
                <b >{StudentInfo.patronymlatin}</b>
              </div>
              <div>
                <h3>Millat: </h3>
                <b >{StudentInfo.nationality}</b>
              </div>
              <div>
                <h3>Manzil: </h3>
                <b >{StudentInfo.docgiveplace}</b>
              </div>
            </StudentInfoCard>
          </BoxHeader>
          :""
          }
        {/* <BoxHeader>
          <WrapperInputsCard>
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
              Ism
            </Typography>
            <CustomizedInputSimple callback_func={(val) => { reqDataChange("first_name", val) }} placeholder="Ism" />
          </WrapperInputsCard>
          <WrapperInputsCard>
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
              Pasport
            </Typography>
            <CustomizedInputSimple callback_func={(val) => { reqDataChange("passport", val) }} placeholder="Passport" />
          </WrapperInputsCard>
          <WrapperInputsCard>
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
              Jinsi
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => { reqDataChange("gender", val) }}
              selectOptions={jinsList}
            />
          </WrapperInputsCard>
        </BoxHeader> */}

        {/* <BoxHeader> */}
        {/* <WrapperInputsCard>
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
              Familiya
            </Typography>
            <CustomizedInputSimple callback_func={(val) => { reqDataChange("last_name", val) }} placeholder="Familiya" />
          </WrapperInputsCard> */}
        {/* <WrapperInputsCard>
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
              Telefon raqami
            </Typography>
            <CustomizedInputSimple callback_func={(val) => { reqDataChange("phone_number", val) }} placeholder="+998 9X XXX-XX-XX" />
          </WrapperInputsCard> */}
        {/* <WrapperInputsCard>
            <Typography
              id="keep-mounted-modal-title"
              variant="h6"
              component="h4"
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#000",
                mb: "0"
              }}
            >
              Tug’ilgan kuni
            </Typography>
            <BasicDatePicker setFunction={(val) => { reqDataChange("birthday", val) }} label="Tug’ilgan kuni" />
          </WrapperInputsCard> */}
        {/* </BoxHeader> */}

        {/* <BoxHeader>
          <WrapperInputsCard>
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
              Sharifi
            </Typography>
            <CustomizedInputSimple callback_func={(val) => { reqDataChange("middle_name", val) }} placeholder="Sharifi" />
          </WrapperInputsCard>
          <WrapperInputsCard>
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
              Elektron pochta
            </Typography>
            <CustomizedInputSimple callback_func={(val) => { reqDataChange("email", val) }} placeholder="@gmail.com" />
          </WrapperInputsCard>
          <WrapperInputsCard>
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
              Fuqarolik
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => reqDataChange("citizenship", val)}
              selectOptions={citizenshipList}
            />
          </WrapperInputsCard>
        </BoxHeader> */}

        {/* <BoxHeader>
          <WrapperInputsCardTwo>
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
              Mamlakat
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => reqDataChange("country", val)}
              selectOptions={countryList}
            />
          </WrapperInputsCardTwo>
          <WrapperInputsCardTwo>
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
              Millat
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => reqDataChange("nationality", val)}
              selectOptions={nationalityList}
            />
          </WrapperInputsCardTwo>
          <WrapperInputsCard>
          </WrapperInputsCard>
        </BoxHeader> */}

        <BoxHeader>
          <WrapperInputsCardTwo>
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
              Telefon raqami
            </Typography>
            <CustomizedInputSimple callback_func={(val) => { reqDataChange("phone_number", val) }} placeholder="+998 9X XXX-XX-XX" />
          </WrapperInputsCardTwo>
          <WrapperInputsCardTwo>
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
              Yo'nalish
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => reqDataChange("specialty", val)}
              selectOptions={departmentList}
            />
          </WrapperInputsCardTwo>
        </BoxHeader>

        {/* <Typography
          id="keep-mounted-modal-title"
          variant="h6"
          component="h4"
          sx={{
            fontSize: "24px",
            fontWeight: 600,
            color: "#000",
            mb: "10px",
            p: 2
          }}
        >
          Doimiy yashash manzili
        </Typography>

        <BoxHeader>
          <WrapperInputsCardTwo>
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
              Viloyat
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => { reqDataChange("region", val); setRegionId(val) }}
              selectOptions={regionList}
            />
          </WrapperInputsCardTwo>
          <WrapperInputsCardTwo>
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
              Shahar, Tuman
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => reqDataChange("district", val)}
              selectOptions={districtList}
            />
          </WrapperInputsCardTwo>
        </BoxHeader> */}

        {/* <BoxHeader>
          <div style={{ width: '100%' }}>
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
              Manzil
            </Typography>
            <CustomizedInputSimple callback_func={(val) => { reqDataChange("address", val) }} placeholder="Manzil" />
          </div>
        </BoxHeader> */}

        {/* <Typography
          id="keep-mounted-modal-title"
          variant="h6"
          component="h4"
          sx={{
            fontSize: "24px",
            fontWeight: 600,
            color: "#000",
            mb: "10px",
            p: 2
          }}
        >
          Vaqtinchalik yashash manzili
        </Typography>

        <BoxHeader>
          <WrapperInputsCardTwo>
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
              Viloyat
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => { reqDataChange("region2", val); setRegionId1(val) }}
              selectOptions={regionList1}
            />
          </WrapperInputsCardTwo>
          <WrapperInputsCardTwo>
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
              Shahar, Tuman
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => reqDataChange("district2", val)}
              selectOptions={districtList1}
            />
          </WrapperInputsCardTwo>
        </BoxHeader> */}
        {/* 
        <BoxHeader>
          <div style={{ width: '100%' }}>
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
              Manzil
            </Typography>
            <CustomizedInputSimple callback_func={(val) => { reqDataChange("address2", val) }} placeholder="Manzil" />
          </div>
        </BoxHeader> */}

        <Typography
          id="keep-mounted-modal-title"
          variant="h6"
          component="h4"
          sx={{
            fontSize: "24px",
            fontWeight: 600,
            color: "#000",
            mb: "10px",
            p: 2
          }}
        >
          Qo'shimcha Ma'lumotlar
        </Typography>

        <BoxHeader>
          <WrapperInputsCardTwo>
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
              Academic group
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => reqDataChange("academic_group", val)}
              selectOptions={academicGroupList}
            />
          </WrapperInputsCardTwo>
          <WrapperInputsCardTwo>
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
              To'lov turi
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => reqDataChange("form_of_payment", val)}
              selectOptions={ContractList}
            />
          </WrapperInputsCardTwo>
        </BoxHeader>

        <BoxHeader>
          <WrapperInputsCardTwo>
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
              O'qishga kirgan yili
            </Typography>
            <CustomizedInputSimple callback_func={(val) => { reqDataChange("year_of_admission", val) }} placeholder="" type={"number"} />
          </WrapperInputsCardTwo>
          <WrapperInputsCardTwo>
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
              Kurs raqami
            </Typography>
            <CustomizedInputSimple callback_func={(val) => { reqDataChange("course_number", val) }} type="number" />
          </WrapperInputsCardTwo>
        </BoxHeader>

        <BoxHeader>
          <WrapperInputsCardTwo>
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
              GPA
            </Typography>
            <CustomizedInputSimple callback_func={(val) => { reqDataChange("gpa", val) }} placeholder="" type={"number"} />
          </WrapperInputsCardTwo>
          <WrapperInputsCardTwo>
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
              O'qish turi
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => reqDataChange("study_type", val)}
              selectOptions={StudyTypeList}
            />
          </WrapperInputsCardTwo>
        </BoxHeader>

        <BoxHeader>
          <WrapperInputsCardTwo>
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
              StudentID
            </Typography>
            <CustomizedInputSimple callback_func={(val) => { reqDataChange("student_id", val) }} placeholder="" />
          </WrapperInputsCardTwo>
          <WrapperInputsCardTwo>
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
              Ta'lim tili
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => reqDataChange("lang", val)}
              selectOptions={LangList}
            />
          </WrapperInputsCardTwo>
        </BoxHeader>

        <BoxHeader>
          {/* <WrapperInputsCardTwo>
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
              Avatar
            </Typography>
            <MuiFileInput
              placeholder="Fayl kiriting"
              value={file}
              onChange={setFileHandler}
              fullWidth
            />
          </WrapperInputsCardTwo> */}
          <WrapperInputsCardTwo>
            <Typography
              id="keep-mounted-modal-title"
              variant="h6"
              component="h4"
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#000",
                mb: "0"
              }}
            >
              Darajasi
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => reqDataChange("degree", val)}
              selectOptions={DegreeTypeList}
            />
          </WrapperInputsCardTwo>
        </BoxHeader>
        <WrapperInputsCardTwo>
          <WrapperButtons>
            <Button
              sx={{ width: "50%", textTransform: "none" }}
              variant="outlined"
              onClick={() => navigate(-1)}
            >
              Bekor qilish
            </Button>
            <Button
              sx={{ width: "50%", textTransform: "none", boxShadow: "none" }}
              variant="contained"
              onClick={createEmployes}
            >
              Saqlash
            </Button>
          </WrapperButtons>
        </WrapperInputsCardTwo>
      </WrapperBox>
      <Snackbar open={openAlert} anchorOrigin={changed ? anchorOrigin1 : anchorOrigin2} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity={changed ? "success" : "error"} sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </div>
  )
}
