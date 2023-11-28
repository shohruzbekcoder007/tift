
import React, { useEffect, useState } from 'react'
import { ContentWrapper } from '../../global_styles/styles'
import { EditIcon, HeaderWrapper, HeaderWrapperBottom, HeaderWrapperH4, HeaderWrapperP, HeaderWrapperTop, HeaderWrapperTopDiv, Hr, InfoBody, ModalBoxInfo, ModalButtonsInfo, ModalSelectWrapperInfo, WrapperBody, WrapperBodyContract } from './styles'
import Modal from '@mui/material/Modal'
import { Button, Snackbar, Typography } from '@mui/material'
import { ModalHeader } from '../../global_styles/styles'
import AllSelectFullWidth from '../AllSelectFullWidth'
import { getStudentInformation, setInformation } from './requests'
import { host, student_detail, student_district, student_region, studentcontract } from '../../utils/API_urls'
import CustomizedInputSimple from '../CustomizedInputSimple'
import MuiAlert from '@mui/material/Alert';



export default function Information() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [infoList, setInfoList] = useState([])
  const [RegionList, setRegionList] = useState([])
  const [districtList, setDistrictList] = useState([])
  const [districtList1, setDistrictList1] = useState([])
  const [changedRegionId, setChangedRegionId] = useState(null)
  const [changedRegionId1, setChangedRegionId1] = useState(null)
  const [changeDistrictList, setChangeDistrictList] = useState(null)
  const [changeDistrictList1, setChangeDistrictList1] = useState(null)
  const [Passport, setPassport] = useState('')
  const [textInfo, setTextInfo] = useState('')
  const [textInfo1, setTextInfo1] = useState('')
  const [openAlert, setOpenAlert] = useState(false)
  const [Status, setStatus] = useState(false)
  const [changed, serChanged] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [StudentContract, setStudentContract] = useState([])

  const handleCloseAlert = () => setOpenAlert(false);

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

  useEffect(() => {
    if (Passport) {
      getStudentInformation(`${studentcontract}?contract_id=${Passport}`, (response) => {
        console.log(response, "dsadasdas");
        setStudentContract(response.data)
        // setInfoList(response.data.result)
      }, (error) => {
        console.log(error)
      })
    }
  }, [Passport]);

  useEffect(() => {
    getStudentInformation(student_detail, (response) => {
      setPassport(response.data.result.passport)
      setInfoList(response.data.result)
    }, (error) => {
      console.log(error)
    })



    getStudentInformation(student_region, (response) => {
      setChangedRegionId(response.data[0]?.id)
      setChangedRegionId1(response.data[0]?.id)
      console.log(response.data);
      setRegionList(response.data.map(elem => {
        return {
          name: elem.name,
          value: elem.id
        }
      }))
    }, (error) => {
      console.log(error)
    })
  }, [Status])


  const hangleClick = (_) => {
    setInformation(student_detail, {
      region: changedRegionId,
      district: changeDistrictList,
      address: textInfo,
      region2: changedRegionId1,
      district2: changeDistrictList1,
      address2: textInfo1,
    }, (response) => {
      console.log(response);
      setOpenAlert(true)
      setStatus(!Status)
      serChanged(true)
      setAlertMessage("Saqlandi")
      handleClose()
    }, (error) => {
      console.log(error)
    })
  }



  useEffect(() => {
    if (changedRegionId) {
      getStudentInformation(`${student_district}&region=${changedRegionId}`, (response) => {
        setChangeDistrictList(response.data[0]?.id)
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
  }, [changedRegionId])


  useEffect(() => {
    if (changedRegionId1) {
      getStudentInformation(`${student_district}&region=${changedRegionId1}`, (response) => {
        setChangeDistrictList1(response.data[0]?.id)
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
  }, [changedRegionId1])


  return (
    <ContentWrapper>
      <InfoBody>
        <HeaderWrapper>
          <HeaderWrapperTop>
            <img src={`${host}${infoList.avatar}`} alt="Photo" />
            <HeaderWrapperTopDiv>
              <HeaderWrapperH4>{infoList.full_name}</HeaderWrapperH4>
              {/* Xayrulla o’g’li */}
            </HeaderWrapperTopDiv>
            <EditIcon onClick={handleOpen}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.2914 0.709307C14.8365 0.255108 14.2199 0 13.5771 0C12.9343 0 12.3177 0.255108 11.8628 0.709307L0.980268 11.5918C0.668627 11.9017 0.421529 12.2703 0.25327 12.6763C0.0850108 13.0823 -0.00106923 13.5177 1.00242e-05 13.9572V15.3309C1.00242e-05 15.5083 0.0705062 15.6785 0.19599 15.804C0.321474 15.9295 0.491667 16 0.669128 16H2.04283C2.48228 16.0012 2.91761 15.9153 3.32362 15.7471C3.72963 15.579 4.09826 15.332 4.40816 15.0204L15.2914 4.1372C15.7454 3.68233 16.0003 3.06592 16.0003 2.42325C16.0003 1.78059 15.7454 1.16418 15.2914 0.709307ZM3.46203 14.0743C3.08465 14.4491 2.57475 14.6602 2.04283 14.6618H1.33825V13.9572C1.33757 13.6935 1.3892 13.4323 1.49016 13.1887C1.59112 12.945 1.73939 12.7239 1.9264 12.538L10.1853 4.27905L11.7243 5.81802L3.46203 14.0743ZM14.3446 3.19106L12.6677 4.86854L11.1288 3.33292L12.8063 1.65544C12.9073 1.55461 13.0272 1.47467 13.1592 1.42018C13.2911 1.3657 13.4325 1.33774 13.5753 1.33789C13.718 1.33805 13.8593 1.36632 13.9912 1.42109C14.123 1.47586 14.2427 1.55606 14.3436 1.65711C14.4444 1.75816 14.5243 1.87808 14.5788 2.01003C14.6333 2.14197 14.6613 2.28336 14.6611 2.42611C14.6609 2.56886 14.6327 2.71018 14.5779 2.84201C14.5231 2.97383 14.4429 3.09358 14.3419 3.19441L14.3446 3.19106Z" fill="white" />
              </svg>
            </EditIcon>
          </HeaderWrapperTop>
          <Hr />
          <HeaderWrapperBottom>
            <WrapperBody>
              <HeaderWrapperH4>Passport seriya:</HeaderWrapperH4>
              <HeaderWrapperP>{infoList.passport}</HeaderWrapperP>
            </WrapperBody>
            <WrapperBody>
              <HeaderWrapperH4>Jshshr:</HeaderWrapperH4>
              <HeaderWrapperP>{infoList.jshshr}</HeaderWrapperP>
            </WrapperBody>
            <WrapperBody>
              <HeaderWrapperH4>Tug’ilgan sanasi:</HeaderWrapperH4>
              <HeaderWrapperP>{infoList.birthday}</HeaderWrapperP>
            </WrapperBody>
            <WrapperBody>
              <HeaderWrapperH4>Jinsi:</HeaderWrapperH4>
              <HeaderWrapperP>{infoList.gender == "male" && "Erkak" || infoList.gender == "female" && "Ayol" || ""}</HeaderWrapperP>
            </WrapperBody>
            <WrapperBody>
              <HeaderWrapperH4>Reyting daftarcha:</HeaderWrapperH4>
              <HeaderWrapperP>{infoList.rating_notebook}</HeaderWrapperP>
            </WrapperBody>
            <WrapperBody>
              <HeaderWrapperH4>Manzil:</HeaderWrapperH4>
              <HeaderWrapperP>{infoList.address}</HeaderWrapperP>
            </WrapperBody>
            <WrapperBody>
              <HeaderWrapperH4>Manzil (vaqtincha):</HeaderWrapperH4>
              <HeaderWrapperP>{infoList.address2}</HeaderWrapperP>
            </WrapperBody>
            {/* <WrapperBodyContract>
              <Button
                sx={{ width: "100%", textTransform: "none", borderRadius: "10px", boxShadow: "none" }}
                variant="contained"
              >
                O'qish joyidan ma'lumotnoma
              </Button>
            </WrapperBodyContract> */}
          </HeaderWrapperBottom>
        </HeaderWrapper>
        <HeaderWrapper margin='true'>
          <WrapperBody>
            <HeaderWrapperH4>Yo’nalish:</HeaderWrapperH4>
            <HeaderWrapperP>{infoList.direction}</HeaderWrapperP>
          </WrapperBody>
          <WrapperBody>
            <HeaderWrapperH4>O’qish tili:</HeaderWrapperH4>
            <HeaderWrapperP>{infoList.lang}</HeaderWrapperP>
          </WrapperBody>
          <WrapperBody>
            <HeaderWrapperH4>Darajasi:</HeaderWrapperH4>
            <HeaderWrapperP>{infoList.degree === 'bachelor' && 'Bakalavr' || infoList.degree === 'master' && 'Magistr' || ''}</HeaderWrapperP>
          </WrapperBody>
          <WrapperBody>
            <HeaderWrapperH4>Ta’lim shakli:</HeaderWrapperH4>
            <HeaderWrapperP>{infoList.study_type}</HeaderWrapperP>
          </WrapperBody>
          <WrapperBody>
            <HeaderWrapperH4>Kurs: </HeaderWrapperH4>
            <HeaderWrapperP>{infoList.course_number}</HeaderWrapperP>
          </WrapperBody>
          <WrapperBody>
            <HeaderWrapperH4>Guruh: </HeaderWrapperH4>
            <HeaderWrapperP>{infoList.academic_group}</HeaderWrapperP>
          </WrapperBody>
          <WrapperBody>
            <HeaderWrapperH4>Murabbiy:</HeaderWrapperH4>
            <HeaderWrapperP>{infoList.tutor}</HeaderWrapperP>
          </WrapperBody>
          <WrapperBody>
            <HeaderWrapperH4>Stipendiya:</HeaderWrapperH4>
            <HeaderWrapperP>{infoList.is_scholarship === true ? "Bor" : "Yoq"}</HeaderWrapperP>
          </WrapperBody>
          <WrapperBody>
            <HeaderWrapperH4>O'qish turi:</HeaderWrapperH4>
            <HeaderWrapperP>{infoList.form_of_payment}</HeaderWrapperP>
          </WrapperBody>
          <WrapperBodyContract>
            {
              StudentContract.length > 0 ? StudentContract.map((elem, index) => {
                return (
                  <>
                    {
                      elem.type == 'two' ?
                        elem.file ? <a href={host + elem?.file} target='_blank'>
                          <Button
                            sx={{ width: "100%", textTransform: "none", borderRadius: "10px", boxShadow: "none" }}
                            variant="contained"
                          >
                            Ikki Tomonlama Shartomani yuklab olish
                          </Button>
                        </a>
                          : <Button
                            sx={{
                              width: "100%", textTransform: "none", borderRadius: "10px", boxShadow: "none", backgroundColor: "text.secondary",
                              "&:hover": {
                                backgroundColor: "text.secondary",
                              },
                              cursor: 'no-drop'
                            }}
                            variant="contained"
                          >
                            Ikki Tomonlama Shartomani yuklab olish
                          </Button>
                        :
                        elem.file ? <a href={host + elem?.file} target='_blank'>
                          <Button
                            sx={{ width: "100%", textTransform: "none", borderRadius: "10px", boxShadow: "none" }}
                            variant="contained"
                          >
                            Uch Tomonlama Shartomani yuklab olish
                          </Button>
                        </a>
                          : <Button
                            sx={{
                              width: "100%", textTransform: "none", borderRadius: "10px", boxShadow: "none", backgroundColor: "text.secondary",
                              "&:hover": {
                                backgroundColor: "text.secondary",
                              },
                              cursor: 'no-drop'
                            }}
                            variant="contained"
                          >
                            Uch Tomonlama Shartomani yuklab olish
                          </Button>
                    }
                  </>
                )
              })
                :
                <></>
            }
          </WrapperBodyContract>
        </HeaderWrapper>
      </InfoBody>

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <ModalBoxInfo>
          <div style={{ marginBottom: '20px' }}>
            <ModalHeader>
              <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="HeaderWrapperH4"
                sx={{
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#000",
                }}
              >
                Tahrirlash
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
          <div className='modal_box_body'>
            <ModalSelectWrapperInfo>
              <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="HeaderWrapperH4"
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#000",
                  mb: "10px"
                }}
              >
                Viloyat*
              </Typography>
              <AllSelectFullWidth
                chageValueFunction={val => setChangedRegionId(val)}
                selectOptions={RegionList}
              />
            </ModalSelectWrapperInfo>

            <ModalSelectWrapperInfo>
              <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="HeaderWrapperH4"
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#000",
                  mb: "10px"
                }}
              >
                Shahar*

              </Typography>
              <AllSelectFullWidth
                chageValueFunction={val => setChangeDistrictList(val)}
                selectOptions={districtList}
              />
            </ModalSelectWrapperInfo>
            <ModalSelectWrapperInfo>
              <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="HeaderWrapperH4"
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#000",
                  mb: "10px"
                }}
              >
                Manzil (Lotin xarflarda)*

              </Typography>
              <CustomizedInputSimple callback_func={(val) => { setTextInfo(val) }} placeholder="  " />
            </ModalSelectWrapperInfo>


          </div>
          <div className='modal_box_body'>
            <ModalSelectWrapperInfo>
              <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="HeaderWrapperH4"
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#000",
                  mb: "10px"
                }}
              >
                Viloyat (vaqtingcha)*
              </Typography>
              <AllSelectFullWidth
                chageValueFunction={val => setChangedRegionId1(val)}
                selectOptions={RegionList}
              />
            </ModalSelectWrapperInfo>

            <ModalSelectWrapperInfo>
              <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="HeaderWrapperH4"
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#000",
                  mb: "10px"
                }}
              >
                Shahar (vaqtingcha)*

              </Typography>
              <AllSelectFullWidth
                chageValueFunction={val => setChangeDistrictList1(val)}
                selectOptions={districtList1}
              />
            </ModalSelectWrapperInfo>
            <ModalSelectWrapperInfo>
              <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="HeaderWrapperH4"
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#000",
                  mb: "10px"
                }}
              >
                Manzil (vaqtincha) (lotin xarflarda)*

              </Typography>
              <CustomizedInputSimple callback_func={(val) => { setTextInfo1(val) }} placeholder="  " />

            </ModalSelectWrapperInfo>
          </div>

          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <ModalButtonsInfo>
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
                onClick={hangleClick}
              >
                Saqlash

              </Button>
            </ModalButtonsInfo>
          </div>
        </ModalBoxInfo>
      </Modal>
      <Snackbar open={openAlert} anchorOrigin={changed ? anchorOrigin1 : anchorOrigin2} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert onClose={handleCloseAlert} severity={changed ? "success" : "error"} sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </ContentWrapper>

  )
}
