import { Button, Checkbox, Pagination, Paper, Typography } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import { BoxBody, BoxFooter, BoxTableCard, ClassScheduleTableWrapper, HeaderWrapper, HeaderWrapperH4, HeaderWrapperP, WrapperBody, WrapperBottom,  BuildingModalLang, BuildingModalLangText  } from './styles'
import { BoxFooterText, BoxHeader, ModalBox, ModalButtons, ModalHeader, ModalSelectWrapper } from '../../../../global_styles/styles'
import AllSelectFullWidth from '../../../AllSelectFullWidth'
import CustomizedInputSimple from '../../../CustomizedInputSimple'
import { WrapperButtons } from '../../Employees/Career/styles'
import { getAdminKafedra } from '../requests'
import { directions, kafedra, science } from '../../../../utils/API_urls'
import { useLocation, useNavigate } from 'react-router-dom'
import { updatescience } from './requests'
import { getDirection } from '../Add/requests'

export default function Edit() {
  
  const [adminkafedra, setadminkafedra] = useState([]);
  const [returndata, setreturndata] = useState(null);
  const [DirectionList, setDirectionList] = useState([]);

  const [adminData, setadminData] = useState({
    name: null,
    semester: null,
    lecture: null,
    practice: 0,
    lab: 0,
    credit: null,
    code: null,
    kafedra: null,
    degree: null,
    study_type: null,

  })

  console.log(adminData);
  const {state} = useLocation()
  let navigate = useNavigate()

  useEffect(() => {
    reqDataChange('degree',admindegree[0]['value'])
    reqDataChange('study_type',adminstudytype[0]['value'])
    getAdminKafedra(`${kafedra}?page_size=1000`, (response) => {
      
      reqDataChange('kafedra',response.data.results[0]['id'])
      setadminkafedra(response.data.results.map( elem => {
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

  useEffect(() => {
    getAdminKafedra(`${science}${state.data}/`, (response) => {
      setreturndata(response.data)
      setadminData({
        name: response.data.name,
        semester: response.data.semester,
        lecture: response.data.lecture,
        practice: response.data.practice,
        lab: response.data.lab,
        credit: response.data.credit,
        code: response.data.code,
        kafedra: response.data.kafedra,
        degree: response.data.degree,
        study_type: response.data.study_type,
      })
    }, (error) => {
        console.log(error)
    })
  }, [])


  const reqDataChange = (keyname, value) => {
    setadminData(prev => {
      prev[keyname] = value
      return prev;
    })
  }

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
  },[])

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
  },[])

  const updatescienceF = () => {
    updatescience(`${science}${state.data}/`, adminData, (response) => {
      if (response) {
        navigate(`/admin/sciences`)
      }else{

      }
    }, (error) => {
        console.log(error)
      })
  }



  return (
    <>
      <Typography
        sx={{
          color: "#000",
          fontWeight: "600",
          fontSize: "20px"
        }}
      >
        Tahrirlash
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
        <div style={{display: "flex"}}>
          <HeaderWrapper>
          {/* <BuildingModalLang>
            <BuildingModalLangText>RU</BuildingModalLangText>
            <BuildingModalLangText>UZC</BuildingModalLangText>
            <BuildingModalLangText>UZL</BuildingModalLangText>
            <BuildingModalLangText>EN</BuildingModalLangText>
            <BuildingModalLangText>KAR</BuildingModalLangText>
          </BuildingModalLang> */}
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
              <CustomizedInputSimple callback_func={(val) => { reqDataChange('name',val) }} defaultValue={returndata?.name}/>
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
              <CustomizedInputSimple callback_func={(val) => { reqDataChange('semester',val) }} type={"number"} defaultValue={returndata?.semester}/>
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
              <CustomizedInputSimple callback_func={(val) => { reqDataChange('lecture',val) }} type={"number"} defaultValue={returndata?.lecture}/>
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
              <CustomizedInputSimple callback_func={(val) => { reqDataChange('practice',val) }} type={"number"} defaultValue={returndata?.practice}/>
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
              <CustomizedInputSimple callback_func={(val) => { reqDataChange('lab',val) }} type={"number"} defaultValue={returndata?.lab}/>
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
              <CustomizedInputSimple callback_func={(val) => { reqDataChange('credit',val) }} type={"number"} defaultValue={returndata?.credit}/>
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
              <CustomizedInputSimple callback_func={(val) => { reqDataChange('code',val) }} defaultValue={returndata?.code} />
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
                chageValueFunction={val => reqDataChange('kafedra',val)}
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
                chageValueFunction={val => reqDataChange('study_type',val)}
                selectOptions={adminstudytype}
              />
            </ModalSelectWrapper>
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
            onClick={updatescienceF}
          >
            Saqlash
          </Button>
          </WrapperButtons>
          </HeaderWrapper>
        </div>
        
      </Paper>
      </BoxTableCard>
    </>
  )
}
