import React, { useMemo, useState } from 'react'
import { BoxHeader, ModalBox, ModalButtons, ModalHeader, ModalSelectWrapper } from '../../../../global_styles/styles'
import { Button, Typography } from '@mui/material'
import CustomizedInputSimple from '../../../CustomizedInputSimple'
import AllSelectFullWidth from '../../../AllSelectFullWidth'
import { WrapperBox, WrapperButtons, WrapperHeader, WrapperInputsCard, WrapperSelect, WrapperInputsCard2, WrapperInputsCardTwo } from './styles'
import { InputsWrapper } from '../../../CourseManagement/styles'
import { MuiFileInput } from 'mui-file-input'
import BasicDatePicker from '../../../BasicDatePicker'
import degree from '../../../../dictionary/degree'
import study_type from '../../../../dictionary/study_type'
import form_of_payment from '../../../../dictionary/form_of_payment'
import { createStudent } from '../request'
import { users_student } from '../../../../utils/API_urls'

export default function AddStudent() {

  const [file, setFile] = useState(null);
  const [data, setData] = useState({
    student_id: null, // <qo'yildi>
    passport: null, // <qo'yildi>
    first_name: null, // <qo'yildi>
    last_name: null, // <qo'yildi>
    middle_name: null, // <qo'yildi>
    birthday: null, // <qo'yildi>
    course_number: null, // qo'yilmadi
    form_of_payment: null, // choose
    degree: null, // <qo'yildi>
    study_type: null, // <qo'yildi>
    phone_number: null, // <qo'yildi>
    avatar: null, // <qo'yildi>
  })
  
  const setFileHandler = (newValue, info) => {
    setFile(newValue)
    updateData("avatar", newValue)
  }

  const updateData = (key, value) => {
    setData(prev => {
      return {
        ...prev,
        [key]: value
      }
    })
  }

  const paymentList = useMemo(() => {
    updateData("form_of_payment", form_of_payment[0].value)
    return form_of_payment.map(elem => {
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

  const createNewStudent = () => {
    createStudent(users_student, data, response => {
      console.log(response)
    }, (error) => {
      console.log(error)
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
              Student Id
            </Typography>
            {/* <AllSelectFullWidth
              chageValueFunction={val => { updateData("gender", val) }}
              selectOptions={jinsList}
            /> */}
            <CustomizedInputSimple callback_func={(val) => { updateData("student_id", val) }} placeholder="3798787" />
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
              Form of payment
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => updateData("form_of_payment", val)}
              selectOptions={paymentList}
            />
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
              onClick={createNewStudent}
            >
              Saqlash
            </Button>
          </WrapperButtons>
        </WrapperInputsCardTwo>
      </WrapperBox>
    </div>
  )
}