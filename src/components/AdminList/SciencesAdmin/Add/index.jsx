import { Button, Checkbox, Pagination, Paper, Typography } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import { BoxBody, BoxFooter, BoxTableCard, ClassScheduleTableWrapper, HeaderWrapper, HeaderWrapperH4, HeaderWrapperP, WrapperBody, WrapperBottom, BuildingModalLang, BuildingModalLangText } from './styles'
import { BoxFooterText, BoxHeader, ModalBox, ModalButtons, ModalHeader, ModalSelectWrapper } from '../../../../global_styles/styles'
import AllSelectFullWidth from '../../../AllSelectFullWidth'
import CustomizedInputSimple from '../../../CustomizedInputSimple'
import { WrapperButtons } from '../../Employees/Career/styles'
import { getAdminKafedra } from '../requests'
import { directions, kafedra, science } from '../../../../utils/API_urls'
import { createscience, getDirection } from './requests'
import { Link, useNavigate } from 'react-router-dom'

export default function Add() {

  let navigate = useNavigate()

  const [adminData, setadminData] = useState({
    name: null,
    semester: null,
    lecture: 0,
    practice: 0,
    lab: 0,
    credit: 0,
    code: null,
    kafedra: null,
    degree: null,
    study_type: null,
    independently: 0
  })



 const [CreditCost, setCreditCost] = useState(0);

  const reqDataChange = (keyname, value) => {
    setadminData(prev => {
      prev.credit = Math.round(((+adminData.lecture) + (+adminData.practice) + (+adminData.lab) + (+adminData.independently))/ 30)
      prev[keyname] = value
      return prev;
    })
    setCreditCost(Math.round(((+adminData.lecture) + (+adminData.practice) + (+adminData.lab) + (+adminData.independently))/ 30))
  }


  const createscienceF = () => {
    console.log(adminData)
    createscience(science, adminData, (response) => {
      if (response.status == 201) {
        navigate(`/admin/sciences`)
      } else {

      }
    }, (error) => {
      console.log(error)
    })
  }

  const [adminkafedra, setadminkafedra] = useState([]);
  const [DirectionList, setDirectionList] = useState([]);


  useEffect(() => {
    reqDataChange('degree', admindegree[0]['value'])
    reqDataChange('study_type', adminstudytype[0]['value'])
    getAdminKafedra(`${kafedra}?page_size=1000`, (response) => {
      reqDataChange('kafedra', response.data.results[0]['id'])
      setadminkafedra(response.data.results.map(elem => {
        return {
          name: elem.name,
          value: elem.id
        }
      }))
    }, (error) => {
      console.log(error)
    })

    getDirection(`${directions}`, (response) => {
      reqDataChange('direction', response.data.results[0]['id'])
      setDirectionList(response.data.results.map(elem => {
        return {
          name: elem.name,
          value: elem.id
        }
      }))
    }, (error) => {
      console.log(error)
    })
  }, [])

  const admindegree = useMemo(() => {
    return [
      {
        name: "Bakalavr",
        value: 'bachelor',
      },
      {
        name: "Magistr",
        value: 'master',
      },
    ]
  }, [])

  const Selection = useMemo(() => {
    return [
      {
        name: "Required",
        value: 'required',
      },
      {
        name: "Selection",
        value: 'selection',
      }
    ]
  }, [])

  const adminstudytype = useMemo(() => {
    return [{
      name: "morning",
      value: 'morning',
    },
    {
      name: "evening",
      value: 'evening',
    },
    {
      name: "external",
      value: 'external',
    },
    {
      name: "remote",
      value: 'remote',
    }]
  }, [])




  return (
    <>
      <Typography
        sx={{
          color: "#000",
          fontWeight: "600",
          fontSize: "20px"
        }}
      >
        Qo’shish
      </Typography>
      <BoxTableCard>
        <Paper
          elevation={0}
          sx={{
            width: '100%',
            padding: "20px",
            borderRadius: "10px"
          }}
        >
          <div style={{ display: "flex" }}>
            <HeaderWrapper>
              <BuildingModalLang>
                <BuildingModalLangText>RU</BuildingModalLangText>
                <BuildingModalLangText>UZC</BuildingModalLangText>
                <BuildingModalLangText>UZL</BuildingModalLangText>
                <BuildingModalLangText>EN</BuildingModalLangText>
                <BuildingModalLangText>KAR</BuildingModalLangText>
              </BuildingModalLang>
              <ModalSelectWrapper>
                <Typography
                  id="keep-mounted-modal-title"
                  variant="h6"
                  component="h4"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#000",
                    m: "20px 0 10px 0"
                  }}
                >
                  Nomi
                </Typography>
                <CustomizedInputSimple callback_func={(val) => { reqDataChange('name', val) }} placeholder="" />
              </ModalSelectWrapper>
              <ModalSelectWrapper>
                <Typography
                  id="keep-mounted-modal-title"
                  variant="h6"
                  component="h4"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#000",
                    m: "20px 0 10px 0"
                  }}
                >
                  Semestr
                </Typography>
                <CustomizedInputSimple callback_func={(val) => { reqDataChange('semester', val) }} placeholder="1" type={'number'} />
              </ModalSelectWrapper>
              <ModalSelectWrapper>
                <Typography
                  id="keep-mounted-modal-title"
                  variant="h6"
                  component="h4"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#000",
                    m: "20px 0 10px 0"
                  }}
                >
                  Leksiya
                </Typography>
                <CustomizedInputSimple callback_func={(val) => { reqDataChange('lecture', val) }} placeholder="" type={'number'} />
              </ModalSelectWrapper>
              <ModalSelectWrapper>
                <Typography
                  id="keep-mounted-modal-title"
                  variant="h6"
                  component="h4"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#000",
                    m: "20px 0 10px 0"
                  }}
                >
                  Amaliyot
                </Typography>
                <CustomizedInputSimple callback_func={(val) => { reqDataChange('practice', val) }} placeholder="" type={'number'} />
              </ModalSelectWrapper>
              <ModalSelectWrapper>
                <Typography
                  id="keep-mounted-modal-title"
                  variant="h6"
                  component="h4"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#000",
                    m: "20px 0 10px 0"
                  }}
                >
                  Labaratoriya
                </Typography>
                <CustomizedInputSimple callback_func={(val) => { reqDataChange('lab', val) }} placeholder="" type={'number'} />
              </ModalSelectWrapper>
              <ModalSelectWrapper>
                <Typography
                  id="keep-mounted-modal-title"
                  variant="h6"
                  component="h4"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#000",
                    m: "20px 0 10px 0"
                  }}
                >
                  Mustaqil ta'lim
                </Typography>
                <CustomizedInputSimple callback_func={(val) => { reqDataChange('independently', val) }} placeholder="" type={'number'} />
              </ModalSelectWrapper>
              <ModalSelectWrapper>
                <Typography
                  id="keep-mounted-modal-title"
                  variant="h6"
                  component="h4"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#000",
                    m: "20px 0 10px 0"
                  }}
                >
                  Kredit
                </Typography>
                {CreditCost}
                {/* {adminData.credit} */}
                {/* <CustomizedInputSimple callback_func={(val) => { reqDataChange('credit', val) }} placeholder="" type={'number'} /> */}
              </ModalSelectWrapper>
              <ModalSelectWrapper>
                <Typography
                  id="keep-mounted-modal-title"
                  variant="h6"
                  component="h4"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#000",
                    m: "20px 0 10px 0"
                  }}
                >
                  Kod
                </Typography>
                
                <CustomizedInputSimple callback_func={(val) => { reqDataChange('code', val) }} placeholder="" />
              </ModalSelectWrapper>
              <ModalSelectWrapper>
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
                  Kafedra                        </Typography>
                <AllSelectFullWidth
                  chageValueFunction={val => reqDataChange('kafedra', val)}
                  selectOptions={adminkafedra}
                />
              </ModalSelectWrapper>

              <ModalSelectWrapper>
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
                  Yo'nalish                        </Typography>
                <AllSelectFullWidth
                  chageValueFunction={val => reqDataChange('direction', val)}
                  selectOptions={DirectionList}
                />
              </ModalSelectWrapper>

              <ModalSelectWrapper>
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
                  Daraja                        </Typography>
                <AllSelectFullWidth
                  chageValueFunction={val => reqDataChange('degree', val)}
                  selectOptions={admindegree}
                />
              </ModalSelectWrapper>
              <ModalSelectWrapper>
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
                  Ta’lim turi                        </Typography>
                <AllSelectFullWidth
                  chageValueFunction={val => reqDataChange('study_type', val)}
                  selectOptions={adminstudytype}
                />
              </ModalSelectWrapper>

              <ModalSelectWrapper>
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
                  Fan Tanlov                      </Typography>
                <AllSelectFullWidth
                  chageValueFunction={val => reqDataChange('discipline_type', val)}
                  selectOptions={Selection}
                />
              </ModalSelectWrapper>

              <WrapperButtons>
                <Link to={'/admin/sciences'}>
                  <Button
                    sx={{ textTransform: "none" }}
                    variant="outlined"
                  >
                    Bekor qilish
                  </Button>
                </Link>
                <Button
                  sx={{ textTransform: "none", boxShadow: "none" }}
                  variant="contained"
                  onClick={createscienceF}
                >
                  Saqlash
                </Button>
              </WrapperButtons>
            </HeaderWrapper>
            {/* 
          <HeaderWrapper>
          <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="h4"
                sx={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#000",
                  m: "0 0 20px 0"
                }}
              >
                Yo'nalishga aloqadorlik
              </Typography>
              {
                [1,2,3,4,5,6,6,8,9,0,2,2,3,1,2,2,1,3,3,1,1,2,2,2,2,2,2,2,2].map(item => {
                  return (
                   <div>
                     <Checkbox {...label}  /> Kompyuter muhandisligi (bakalavr)
                   </div>
                  )
                })
              }
          </HeaderWrapper> */}
          </div>

        </Paper>
      </BoxTableCard>
    </>
  )
}
