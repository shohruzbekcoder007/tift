import React, { useEffect, useMemo, useState } from 'react'
import { BoxHeader } from '../../../../global_styles/styles'
import { Button, Snackbar, Typography } from '@mui/material'
import CustomizedInputSimple from '../../../CustomizedInputSimple'
import AllSelectFullWidth1 from '../../../AllSelectFullWidth1'
import { WrapperBox, WrapperButtons, WrapperInputsCard, WrapperInputsCardTwo } from './styles'
import { MuiFileInput } from 'mui-file-input'
import jins from '../../../../dictionary/jins'
import citizenship from '../../../../dictionary/citizenship'
import nationality from '../../../../dictionary/nationality'
import academic_title from '../../../../dictionary/academic_title'
import { createStudent, getRegionListRequest } from './request'
import { academic_group_short, country, directions, district, employee, host, region, users_student } from '../../../../utils/API_urls'
import BasicDatePicker from '../../../BasicDatePicker'
import { useLocation, useNavigate } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';
import { getAcademicGroup } from '../../Streams/request'
import contract_type from '../../../../dictionary/contract_type'
import study_type from '../../../../dictionary/study_type'
import degree from '../../../../dictionary/degree'
import language from '../../../../dictionary/language'
import { PatchEmployee, getOneEmployees } from '../EditEmployees/request'
import AllSelectFullWidth from '../../../AllSelectFullWidth'
import { WrapperImgCard } from '../AddStudent/styles'
import { getRole } from '../../../../utils/getRole'
import { useSelector } from 'react-redux'

export default function EditStudents() {

  const navigate = useNavigate();
  const { state } = useLocation()

  const [file, setFile] = useState(null);
  const [regionList, setRegionList] = useState([])
  const [regionList1, setRegionList1] = useState([])
  const [districtList, setDistrictList] = useState([])
  const [districtList1, setDistrictList1] = useState([])
  const [departmentList, setDepartmentList] = useState([])
  const [countryList, setCountryList] = useState([])
  const [regionId, setRegionId] = useState(null)
  const [regionId1, setRegionId1] = useState(null)
  const [openAlert, setOpenAlert] = useState(false)
  const [changed, serChanged] = useState(false)
  const [academicGroupList, setacademicGroupList] = useState([])
  const [alertMessage, setAlertMessage] = useState('')
  const handleCloseAlert = () => setOpenAlert(false);
  const [Status, setStatus] = useState(false)
  const user = useSelector((state) => state.user);

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
    form_of_payment: null,
    gpa: null,
    study_type: null,
    degree: null,
    lang: null,
    student_id: null,
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
    reqDataChange("avatar", newValue)
    setFile(newValue)
  }

  const jinsList = useMemo(() => {
    reqDataChange("gender", jins[0].value)
    return jins.map(elem => {
      return { value: elem.value, name: elem.uz }
    })
  }, [])

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

  const nationalityList = useMemo(() => {
    reqDataChange("nationality", nationality[0].value)
    return nationality.map(elem => {
      return { value: elem.value, name: elem.uz }
    })
  }, [])

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
    getRegionListRequest(`${region}?page_size=500`, (response) => {
      reqDataChange("region", response.data[0]?.id)
      reqDataChange("region2", response.data[0]?.id)
      setRegionList(response.data.map(elem => {
        return {
          name: elem.name,
          value: elem.id
        }
      }))
      setRegionList1(response.data.map(elem => {
        return {
          name: elem.name,
          value: elem.id
        }
      }))
      setRegionId(response.data[0]?.id)
      setRegionId1(response.data[0]?.id)
    }, (error) => {
      console.log(error)
    })
  }, [])

  useEffect(() => {
    getRegionListRequest(`${district}?page_size=500`, (response) => {
      reqDataChange("district", response.data[0]?.id)
      reqDataChange("district2", response.data[0]?.id)
      setDistrictList(response.data.map(elem => {
        return {
          name: elem.name,
          value: elem.id
        }
      }))
      setDistrictList1(response.data.map(elem => {
        return {
          name: elem.name,
          value: elem.id
        }
      }))
    }, (error) => {
      console.log(error)
    })
  }, []);

  useEffect(() => {
    getRegionListRequest(`${directions}?page_size=500`, (response) => {
      console.log(response);
      setDepartmentList(response.data.results.map(elem => {
        return {
          name: elem.name + " (" + elem.degree + ")",
          value: elem.id
        }
      }))
    }, (error) => {
      console.log(error)
    })
  }, []);

  useEffect(() => {
    getRegionListRequest(`${country}`, (response) => {
      reqDataChange("country", response.data[0]?.id)
      setCountryList(response.data.map(elem => {
        return {
          value: elem.id,
          name: elem.name
        }
      }))
    }, (error) => {
      console.log(error)
    })
  }, []);



  useEffect(() => {
    if (regionId) {
      getRegionListRequest(`${district}?page_size=500&region=${regionId}`, (response) => {
        reqDataChange("district", response.data[0]?.id)
        setDistrictList(response.data.map(elem => {
          return {
            name: elem.name,
            value: elem.id
          }
        }))
      }, (error) => {
        console.log(error)
      })
    }
  }, [regionId])

  useEffect(() => {
    if (regionId1) {
      getRegionListRequest(`${district}?page_size=500&region=${regionId1}`, (response) => {
        reqDataChange("district2", response.data[0]?.id)
        setDistrictList1(response.data.map(elem => {
          return {
            name: elem.name,
            value: elem.id
          }
        }))
      }, (error) => {
        console.log(error)
      })
    }
  }, [regionId1])


  useEffect(() => {
    getAcademicGroup(`${academic_group_short}?page_size=1000`, (response) => {
      setacademicGroupList(response.data.map(elem => {
        return {
          name: elem.name + " (" + elem.student_count + ")",
          value: elem.id
        }
      }))
    }, (error) => {
      console.log(error)
    })
  }, []);

  // admin/employees


  useEffect(() => {
    getOneEmployees(`${users_student}${state?.StudentID}/`, response => {
      const updatedData = {
        ...newData,
        ...response.data,
      };
      if (response.data.avatar) updatedData.avatar = response.data.avatar.replace('/media/https%3A/', '')
      // Set the updated data in your state
      setNewData(updatedData);
      setTimeout(() => {
        setStatus(true)
      }, 500);
    }, error => {
      console.log(error)
    })
  }, []);


  const EditStudent = () => {
    // console.log(newData)
    newData.avatar = null
    PatchEmployee(`${users_student}${state?.StudentID}/`, newData, response => {
      navigate(-1)
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
        Tahrirlash
      </Typography>
      {
        Status && <WrapperBox>
          <BoxHeader>
            {
              newData.avatar ?
                <WrapperImgCard>
                  <img src={`https://` + newData.avatar} alt="" />
                </WrapperImgCard>
                :
                <WrapperImgCard>
                  <img src="https://qabul.tift.uz/static/images/user.jpeg" alt="" />
                </WrapperImgCard>

            }
          </BoxHeader>
          <BoxHeader>
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
              <CustomizedInputSimple defaultValue={newData.first_name} callback_func={(val) => { reqDataChange("first_name", val) }} placeholder="Ism" />
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
              <CustomizedInputSimple defaultValue={newData.passport} callback_func={(val) => { reqDataChange("passport", val) }} placeholder="Passport" />
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
                selectedOptionP={newData.gender}
                selectOptions={jinsList}
              />
            </WrapperInputsCard>
          </BoxHeader>

          <BoxHeader>
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
                Familiya
              </Typography>
              <CustomizedInputSimple defaultValue={newData.last_name} callback_func={(val) => { reqDataChange("last_name", val) }} placeholder="Familiya" />
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
                Telefon raqami
              </Typography>
              <CustomizedInputSimple type={'text'} defaultValue={newData.phone_number} callback_func={(val) => { reqDataChange("phone_number", val) }} placeholder="+998 9X XXX-XX-XX" />
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
                  mb: "0"
                }}
              >
                Tug’ilgan kuni
              </Typography>
              <BasicDatePicker setFunction={(val) => { reqDataChange("birthday", val) }} label="Tug’ilgan kuni" />
            </WrapperInputsCard>



          </BoxHeader>

          <BoxHeader>
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
              <CustomizedInputSimple defaultValue={newData.middle_name} callback_func={(val) => { reqDataChange("middle_name", val) }} placeholder="Sharifi" />
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
                JSHSHR
              </Typography>
              <CustomizedInputSimple defaultValue={newData.jshshr} callback_func={(val) => { reqDataChange("jshshr", val) }} placeholder="JSHSHR" />
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
                selectedOptionP={newData.citizenship}
                selectOptions={citizenshipList}
              />
            </WrapperInputsCard>
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
                Mamlakat
              </Typography>
              <AllSelectFullWidth
                chageValueFunction={val => reqDataChange("country", val)}
                selectedOptionP={newData.country}
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
                selectedOptionP={newData.nationality}
                selectOptions={nationalityList}
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
                Yo'nalish
              </Typography>
              <AllSelectFullWidth
                chageValueFunction={val => reqDataChange("specialty", val)}
                selectedOptionP={newData.specialty}
                selectOptions={departmentList}
              />
            </WrapperInputsCardTwo>

          </BoxHeader>

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
                selectedOptionP={newData.region}
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
                selectedOptionP={newData.district}

                selectOptions={districtList}
              />
            </WrapperInputsCardTwo>
          </BoxHeader>

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
              <CustomizedInputSimple defaultValue={newData.address} callback_func={(val) => { reqDataChange("address", val) }} placeholder="Manzil" />
            </div>
          </BoxHeader>

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
                selectedOptionP={newData.region2}

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
                selectedOptionP={newData.district2}

                selectOptions={districtList1}
              />
            </WrapperInputsCardTwo>
          </BoxHeader>

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
              <CustomizedInputSimple defaultValue={newData.address2} callback_func={(val) => { reqDataChange("address2", val) }} placeholder="Manzil" />
            </div>
          </BoxHeader>

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
                selectedOptionP={newData.academic_group}
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
                selectedOptionP={newData.form_of_payment}

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
              <CustomizedInputSimple defaultValue={newData.year_of_admission} callback_func={(val) => { reqDataChange("year_of_admission", val) }} placeholder="" type={"number"} />
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
              <CustomizedInputSimple defaultValue={newData.course_number} callback_func={(val) => { reqDataChange("course_number", val) }} type="number" />
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
              <CustomizedInputSimple defaultValue={newData.gpa} callback_func={(val) => { reqDataChange("gpa", val) }} placeholder="" type={"number"} />
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
                selectedOptionP={newData.study_type}
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
              <CustomizedInputSimple defaultValue={newData.student_id} callback_func={(val) => { reqDataChange("student_id", val) }} placeholder="" />
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
                selectedOptionP={newData.lang}

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
                selectedOptionP={newData.degree}
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
                Orqaga qaytish
              </Button>
              {getRole(user) != 'dekan' &&
                <Button
                  sx={{ width: "50%", textTransform: "none", boxShadow: "none" }}
                  variant="contained"
                  onClick={EditStudent}
                >
                  Saqlash
                </Button>
              }
            </WrapperButtons>
          </WrapperInputsCardTwo>
        </WrapperBox>
      }
      <Snackbar open={openAlert} anchorOrigin={changed ? anchorOrigin1 : anchorOrigin2} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity={changed ? "success" : "error"} sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </div>
  )
}
