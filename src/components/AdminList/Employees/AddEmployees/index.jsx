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
import { getRegionListRequest } from '../request'
import { district, kafedra, region } from '../../../../utils/API_urls'

export default function AddEmployees() {

  const [file, setFile] = useState(null);
  const [regionList, setRegionList] = useState([])
  const [districtList, setDistrictList] = useState([])
  const [departmentList, setDepartmentList] = useState([])
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
    avatar: null
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
    return jins.map(elem => {
      return { value: elem.value, name: elem.uz }
    })
  }, [])

  const citizenshipList = useMemo(() => {
    return citizenship.map(elem => {
      return { value: elem.value, name: elem.uz }
    })
  }, [])

  const nationalityList = useMemo(() => {
    return nationality.map(elem => {
      return { value: elem.value, name: elem.uz }
    })
  }, [])

  useEffect(() => {
    getRegionListRequest(`${region}?page_size=500`, (response) => {
      setRegionList(response.data.results.map(elem => {
        return {
          name: elem.name,
          value: elem.id
        }
      }))
    }, (error) => {
      console.log(error)
    })
    getRegionListRequest(`${district}?page_size=500`, (response) => {
      setDistrictList(response.data.results.map(elem => {
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
  }, [])

  const createEmployes = () => {
    console.log(newData)
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
            <CustomizedInputSimple callback_func={(val) => { reqDataChange("first_name", val) }} placeholder="Doniyor" />
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
            <CustomizedInputSimple callback_func={(val) => { reqDataChange("passport", val) }} placeholder="AA 3798787" />
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
            <CustomizedInputSimple callback_func={(val) => { reqDataChange("last_name", val) }} placeholder="Yaxshiboyev" />
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
              Uy telefon raqami
            </Typography>
            <CustomizedInputSimple callback_func={(val) => { reqDataChange("phone_number", val) }} placeholder="+9989712386423" />
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
              Mamlakat
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => reqDataChange("country", val)}
              selectOptions={[{
                name: "O’zbekiston",
                value: 12,
              }]}
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
              Sharifi
            </Typography>
            <CustomizedInputSimple callback_func={(val) => { reqDataChange("middle_name", val) }} placeholder="Sultonbayevich" />
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
            <CustomizedInputSimple callback_func={(val) => { console.log(val) }} placeholder="08-02-1984" />
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
              Viloyat
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => reqDataChange("region", val)}
              selectOptions={regionList}
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
              Tug’ilgan kuni
            </Typography>
            <CustomizedInputSimple callback_func={(val) => { reqDataChange("birthday", val) }} placeholder="08-02-1984" />
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
            <CustomizedInputSimple callback_func={(val) => { reqDataChange("email", val) }} placeholder="d.yaxshibayev@tuit.ux" />
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
              Viloyat
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => console.log(val)}
              selectOptions={regionList}
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
              Millat
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => reqDataChange("nationality", val)}
              selectOptions={nationalityList}
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
              Fuqarolik
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => reqDataChange("citizenship", val)}
              selectOptions={citizenshipList}
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
              Universitet
            </Typography>
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
              TIFT
            </Typography>
            {/* <AllSelectFullWidth
              chageValueFunction={val => console.log(val)}
              selectOptions={[{
                name: "Tashkent Axborot Universiteti",
                value: 12,
              }]}
            /> */}
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
              Kafedra
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => console.log(val)}
              selectOptions={departmentList}
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
              Shahar, Tuman
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => console.log(val)}
              selectOptions={districtList}
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
              Adress
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => console.log(val)}
              selectOptions={[{
                name: "000000",
                value: 12,
              }]}
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
              Shahar, Tuman (vaqtinchalik)
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => console.log(val)}
              selectOptions={districtList}
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
              Adress(vaqtinchalik)
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => console.log(val)}
              selectOptions={[{
                name: "14-4-32",
                value: 12,
              }]}
            />
          </WrapperInputsCardTwo>
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
              Avatar
            </Typography>
            <MuiFileInput
              placeholder="Fayl kiriting"
              value={file}
              onChange={setFileHandler}
              // getInputText={(value) => value ? 'Thanks!' : ''}
              fullWidth
            />
          </WrapperInputsCard>
        </BoxHeader>
        <WrapperInputsCardTwo>
          <WrapperButtons>
            <Button
              sx={{ width: "50%", textTransform: "none" }}
              variant="outlined"
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
    </div>
  )
}
