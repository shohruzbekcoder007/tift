import React, { useMemo, useState } from 'react'
import { BoxHeader, ModalBox, ModalButtons, ModalHeader, ModalSelectWrapper } from '../../../../global_styles/styles'
import { Button, Typography } from '@mui/material'
import CustomizedInputSimple from '../../../CustomizedInputSimple'
import AllSelectFullWidth from '../../../AllSelectFullWidth'
import { WrapperBox, WrapperButtons, WrapperHeader, WrapperInputsCard, WrapperSelect, WrapperInputsCard2, WrapperInputsCardTwo } from './styles'
import { InputsWrapper } from '../../../CourseManagement/styles'
import { MuiFileInput } from 'mui-file-input'
import BasicDatePicker from '../../../BasicDatePicker'
import jins from '../../../../dictionary/jins'
import degree from '../../../../dictionary/degree'
import study_type from '../../../../dictionary/study_type'

export default function EditEmployees() {

  const [file, setFile] = useState(null);
  const [data, setData] = useState({
    student_id: null, //quyiladi tuliq
    passport: null, // <qo'yildi>
    first_name: null, // <qo'yildi>
    last_name: null, // <qo'yildi>
    middle_name: null, // <qo'yildi>
    birthday: null, // <qo'yildi>
    course_number: null, // qo'yilmadi
    form_of_payment: null, // choose
    degree: null, // <qo'yildi>
    study_type: null, // bu nima
    phone_number: null // <qo'yildi>
  })
  
  const setFileHandler = (newValue, info) => {
    setFile(newValue)
  }

  const updateData = (key, value) => {
    setData(prev => {
      return {
        ...prev,
        [key]: value
      }
    })
  }

  const jinsList = useMemo(() => {
    updateData("gender", jins[0].value)
    return jins.map(elem => {
      return { value: elem.value, name: elem.uz }
    })
  }, [])

  const degreeList = useMemo(() => {
    updateData("degree", degree[0].value)
    return degree.map(elem => {
      return { value: elem.value, name: elem.uz }
    })
  }, [])

  const studyTypeList = useMemo(() => {
    updateData("study_type", study_type[0].value)
    return study_type.map(elem => {
      return { value: elem.value, name: elem.uz }
    })
  }, [])

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
            <CustomizedInputSimple callback_func={(val) => { updateData("first_name", val) }} placeholder="Doniyor" />
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
            <CustomizedInputSimple callback_func={(val) => { updateData("passport", val) }} placeholder="AA 3798787" />
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
              chageValueFunction={val => { updateData("gender", val) }}
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
            <CustomizedInputSimple callback_func={(val) => { updateData("last_name", val) }}placeholder="Yaxshiboyev" />
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
            <CustomizedInputSimple callback_func={(val) => { console.log(val) }} placeholder="+9989712386423" />
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
              Daraja
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => updateData("degree", val)}
              selectOptions={degreeList}
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
            <CustomizedInputSimple callback_func={(val) => { updateData("middle_name", val) }} placeholder="Sultonbayevich" />
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
            <CustomizedInputSimple callback_func={(val) => { updateData("phone_number", val) }} placeholder="08-02-1984" />
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
              Studentning turi
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => updateData("study_type", val)}
              selectOptions={studyTypeList}
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
                mb: "0"
              }}
            >
              Tug’ilgan kuni
            </Typography>
            <BasicDatePicker setFunction={(val) => {updateData("birthday", val)}} label="Tug'ilgan kuni"/>
          </WrapperInputsCard>
          <WrapperInputsCard>
            <WrapperInputsCard style={{width: '100%'}}>
              <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="h4"
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#000",
                  mb: "4px"
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
            >
              Saqlash
            </Button>
          </WrapperButtons>
        </WrapperInputsCardTwo>
      </WrapperBox>
    </div>
  )
}