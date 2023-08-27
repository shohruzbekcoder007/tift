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
import { district, region } from '../../../../utils/API_urls'

export default function AddEmployees() {

  const [file, setFile] = useState(null);
  const [regionList, setRegionList] = useState([])
  const [districtList, setDistrictList] = useState([])
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
})

  const reqDataChange = (keyname, value) => {
    setNewData(prev => prev[keyname] = value )
  }

  const setFileHandler = (newValue, info) => {
      setFile(newValue)
  }

  const jinsList = useMemo(() => {
    return jins.map(elem => {
        return {value: elem.value, name: elem.uz}
    })
  }, [])

  const citizenshipList = useMemo(() => {
    return citizenship.map(elem => {
        return {value: elem.value, name: elem.uz}
    })
  },[])

  const nationalityList = useMemo(() => {
    return nationality.map(elem => {
        return {value: elem.value, name: elem.uz}
    })
  },[])

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
            <CustomizedInputSimple callback_func={(val) => { console.log(val) }} placeholder="Doniyor" />
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
            <CustomizedInputSimple callback_func={(val) => { console.log(val) }} placeholder="AA 3798787" />
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
              chageValueFunction={val => console.log(val)}
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
            <CustomizedInputSimple callback_func={(val) => { console.log(val) }} placeholder="Yaxshiboyev" />
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
              Mamlakat
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => console.log(val)}
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
            <CustomizedInputSimple callback_func={(val) => { console.log(val) }} placeholder="Sultonbayevich" />
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
              chageValueFunction={val => console.log(val)}
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
              Elektron pochta
            </Typography>
            <CustomizedInputSimple callback_func={(val) => { console.log(val) }} placeholder="d.yaxshibayev@tuit.ux" />
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
              chageValueFunction={val => console.log(val)}
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
              chageValueFunction={val => console.log(val)}
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
            <AllSelectFullWidth
              chageValueFunction={val => console.log(val)}
              selectOptions={[{
                name: "Tashkent Axborot Universiteti",
                value: 12,
              }]}
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
              Kafedra
            </Typography>
            <AllSelectFullWidth
              chageValueFunction={val => console.log(val)}
              selectOptions={[{
                name: "Tashkent Axborot Universiteti",
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
        {/* <WrapperSelect>
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
            Turi      
          </Typography>
          <AllSelectFullWidth
            chageValueFunction={val => console.log(val)}
            selectOptions={[{
              name: "Fakultet",
              value: 12,
            }]}
          />
        </WrapperSelect>
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
            Fakultet                  </Typography>
          <AllSelectFullWidth
            chageValueFunction={val => console.log(val)}
            selectOptions={[{
              name: "Kompyuter injeneringi",
              value: 12,
            }]}
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
            Vazifasi                        </Typography>
          <AllSelectFullWidth
            chageValueFunction={val => console.log(val)}
            selectOptions={[{
              name: "Dekan",
              value: 12,
            }]}
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
            Stavka
          </Typography>
          <CustomizedInputSimple callback_func={(val) => { console.log(val) }} placeholder="1" />

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
            Ishning boshlanishi:
          </Typography>
          <CustomizedInputSimple callback_func={(val) => { console.log(val) }} placeholder="" />

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
          Ishning boshlanishi:

          </Typography>
          <CustomizedInputSimple callback_func={(val) => { console.log(val) }} placeholder="" />

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
              Ishning tugashi:
          </Typography>
          <CustomizedInputSimple callback_func={(val) => { console.log(val) }} placeholder="" />

        </ModalSelectWrapper> */}
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
