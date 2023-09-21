import React, { useEffect, useMemo, useState } from 'react'
import { BoxHeader } from '../../../../global_styles/styles'
import { Button, Typography } from '@mui/material'
import CustomizedInputSimple from '../../../CustomizedInputSimple'
import AllSelectFullWidth from '../../../AllSelectFullWidth'
import { WrapperBox, WrapperButtons, WrapperInputsCard, WrapperInputsCardTwo } from './styles'
import { MuiFileInput } from 'mui-file-input'
import jins from '../../../../dictionary/jins'
import citizenship from '../../../../dictionary/citizenship'
import nationality from '../../../../dictionary/nationality'
import academic_title from '../../../../dictionary/academic_title'
import academic_degree from '../../../../dictionary/academic_degree'
import { PatchEmployee, createEmployee, getOneEmployees, getRegionListRequest } from './request'
import { country, district, employee, kafedra, region } from '../../../../utils/API_urls'
import BasicDatePicker from '../../../BasicDatePicker'
import { useLocation, useNavigate } from 'react-router-dom';

export default function EditEmployees() {

  const navigate = useNavigate();
  const {state} = useLocation()

  const [file, setFile] = useState(null);
  const [regionList, setRegionList] = useState([])
  const [regionList1, setRegionList1] = useState([])
  const [districtList, setDistrictList] = useState([])
  const [districtList1, setDistrictList1] = useState([])
  const [departmentList, setDepartmentList] = useState([])
  const [countryList, setCountryList] = useState([])
  const [regionId, setRegionId] = useState(null)
  const [regionId1, setRegionId1] = useState(null)
  const [Status, setStatus] = useState(false)
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
    specialty_employee: null,
    academic_degree: null,
    kafedra: null,
    start_work: null,
    experience: null,
    email: null,
    phone_number: null,
    avatar: null,
    academic_title: null,
  })

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

  const academicTitleList = useMemo(() => {
    reqDataChange("academic_title", academic_title[0].value)
    return academic_title.map(elem => {
      return {
        value: elem.value,
        name: elem.uz
      }
    })
  }, [])

  const academicDegreeList = useMemo(() => {
    reqDataChange("academic_degree", academic_degree[0].value)
    return academic_degree.map(elem => {
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
    getRegionListRequest(`${kafedra}?page_size=500`, (response) => {
      setDepartmentList(response.data.results.map(elem => {
        return {
          name: elem.name,
          value: elem.id
        }
      }))
    }, (error) => {
      console.log(error)
    })
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
  }, [])

  useEffect(() => {
    if(regionId){
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
  },[regionId])

  useEffect(() => {
    if(regionId1){
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
  },[regionId1])

  const EditEmployes = () => {
    // console.log(newData)
    PatchEmployee(`${employee}${state.employeesID}/`, newData, response => {
      navigate(-1)
    }, error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getOneEmployees(`${employee}${state.employeesID}/`, response => {
      const updatedData = {
        ...newData,
        ...response.data,
      };
      // Set the updated data in your state
      updatedData.avatar = null
      setNewData(updatedData);
      setStatus(true)
      console.log(updatedData);
    }, error => {
      console.log(error)
    })
  }, []);

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
            <CustomizedInputSimple defaultValue={newData.phone_number} type={"number"} callback_func={(val) => { reqDataChange("phone_number", val) }} placeholder="" />
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
            <BasicDatePicker setFunction={(val) => {reqDataChange("birthday", val)}} label=""/>
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
            <CustomizedInputSimple  defaultValue={newData.middle_name}  callback_func={(val) => { reqDataChange("middle_name", val) }} placeholder="Sharifi" />
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
            <CustomizedInputSimple  defaultValue={newData.email}  callback_func={(val) => { reqDataChange("email", val) }} placeholder="Elektron pochta" />
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
          <WrapperInputsCard>

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
              Kafedra
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => reqDataChange("kafedra", val)}
              selectedOptionP={newData.kafedra}
              selectOptions={departmentList}
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
              JSHSHR
            </Typography>
            <CustomizedInputSimple  defaultValue={newData.jshshr}  callback_func={(val) => { reqDataChange("jshshr", val) }} placeholder="JSHSHR" />
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
              chageValueFunction={val => {reqDataChange("region", val); setRegionId(val)}}
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
              chageValueFunction={val => {reqDataChange("region2", val); setRegionId1(val)}}
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
          Ish tajribasi
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
              Academic Degree
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => reqDataChange("academic_degree", val)}
              selectedOptionP={newData.academic_degree}

              selectOptions={academicDegreeList}
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
              Academic Title
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => reqDataChange("academic_title", val)}
              selectedOptionP={newData.academic_title}

              selectOptions={academicTitleList}
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
              Specialty Employee
            </Typography>
            <CustomizedInputSimple defaultValue={newData.specialty_employee} callback_func={(val) => { reqDataChange("specialty_employee", val) }} placeholder=""/>
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
              Experience
            </Typography>
            <CustomizedInputSimple defaultValue={newData.experience} callback_func={(val) => { reqDataChange("experience", val) }} placeholder="Ish tajribasi(yil)" type="number"/>
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
              Avatar
            </Typography>
            <MuiFileInput
              placeholder="Fayl kiriting"
              value={file}
              onChange={setFileHandler}
              fullWidth
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
                mb: "0"
              }}
            >
              Ish boshlangan vaqti
            </Typography>
            <BasicDatePicker setFunction={(val) => {reqDataChange("start_work", val)}} label="Ish boshlangan vaqti"/>
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
              onClick={EditEmployes}
            >
              Saqlash
            </Button>
          </WrapperButtons>
        </WrapperInputsCardTwo>
      </WrapperBox>
      }
    </div>
  )
}
