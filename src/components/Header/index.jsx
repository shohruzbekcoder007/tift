import React, { useEffect, useState } from 'react'
import { HeaderAccount, HeaderAccountItem, HeaderTitle, HeaderTitleHamburger, HeaderWrapper, Indebtedness, NavbarWrapper, NavbarWrapperRight, TreeDots } from './styles'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSidebar } from '../../redux/action/sidebarActions'
import { useSelector } from "react-redux"
import { Badge, Button } from '@mui/material'
import Notification from '../Notification'
import { getRole } from '../../utils/getRole'
import { setTitle } from '../../redux/action/titleActions'
import { getStudentInformation } from '../Information/requests'
import { student_detail } from '../../utils/API_urls'
import Conguratilations from '../../imgs/Conguratilations.json'
import Conguratilations2 from '../../imgs/Conguratilations2.json'
import Lottie from 'lottie-react'

export default function Header() {

  const navigate = useNavigate();
  const title = useSelector((state) => state.title);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const [headerAccount, setHeaderAccount] = useState(false)
  const [openNotes, setOpenNotes] = useState(false)
  const [InfoList, setInfoList] = useState(false)
  const [HappyBirthday, setHappyBirthday] = useState(false)

  const [countNote, setCountNote] = useState(0)
  const handleHeaderAccount = () => {
    setHeaderAccount(prev => {
      return !prev
    })
  }



  useEffect(() => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    
    const fullDate = `${month}-${day}`;
    getRole(user) === "student" && getStudentInformation(student_detail, (response) => {
      setInfoList(response.data.result)
      if (response.data.result.birthday.slice(5) == fullDate) {
        setHappyBirthday(true)
        setTimeout(() => {
          setHappyBirthday(false)
        }, 1700);
      }
    }, (error) => {
      console.log(error)
    })
  }, []);




  return (
    <>
      {
        HappyBirthday && <><div className='animation_gif' style={{ position: "absolute", top: "-10%", left: "0%", zIndex: 999999 }} >
          <Lottie width={"400px"} size={'20px'} animationData={Conguratilations2} />
        </div>
          <div className='animation_gif2' style={{ position: "absolute", top: "-10%", right: "0%", zIndex: 999999 }} >
            <Lottie width={"400px"} size={'20px'} animationData={Conguratilations2}  />
          </div></>
      }
      <HeaderWrapper
      // big='true'
      >

        {/* <div style={{position: "absolute", top: "0", left:"0"}} >
        <Lottie size={'20px'} animationData={Conguratilations} />
      </div> */}
        <HeaderTitleHamburger>
          <span
            onClick={() => { dispatch(setSidebar("big")) }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentcolor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-align-left"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>
          </span>
          <NavbarWrapper>
            {
              title.type === "text" ?
                <HeaderTitle>
                  {title.text.uz}
                </HeaderTitle> : <></>
            }
            {
              getRole(user) === "student" && <div style={{ display: 'block' }}>
                <p style={{ margin: "0" }}>{user?.first_name + "  " + user?.last_name + "  " + user?.middle_name}</p>
                <div>
                  {InfoList.direction} ({InfoList.academic_group})
                </div>
              </div>
            }
            {
              getRole(user) !== "student" && <div style={{ color: "#039E51", fontSize: "13px" }}> {user.first_name + "  " + user.last_name + "  " + user.middle_name} </div>
            }
          </NavbarWrapper>
          {
            title.type === "back_link" ?
              <Button
                variant="contained"
                color='secondary'
                onClick={() => navigate(-1)}
                sx={{
                  borderRadius: "10px",
                  textTransform: "capitalize",
                  boxShadow: "none",
                  padding: "14px",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19 10.9998H9L12.29 7.70982C12.3837 7.61685 12.4581 7.50625 12.5089 7.38439C12.5597 7.26253 12.5858 7.13183 12.5858 6.99982C12.5858 6.8678 12.5597 6.7371 12.5089 6.61524C12.4581 6.49338 12.3837 6.38278 12.29 6.28982C12.1026 6.10356 11.8492 5.99902 11.585 5.99902C11.3208 5.99902 11.0674 6.10356 10.88 6.28982L6.59 10.5898C6.21441 10.9632 6.00223 11.4702 6 11.9998C6.00487 12.5259 6.21684 13.0289 6.59 13.3998L10.88 17.6998C10.9732 17.7924 11.0838 17.8657 11.2054 17.9156C11.3269 17.9654 11.4571 17.9908 11.5885 17.9904C11.7199 17.9899 11.8499 17.9636 11.9712 17.9129C12.0924 17.8621 12.2024 17.7881 12.295 17.6948C12.3876 17.6016 12.4609 17.491 12.5107 17.3694C12.5606 17.2479 12.586 17.1177 12.5856 16.9863C12.5851 16.8549 12.5588 16.7249 12.508 16.6037C12.4573 16.4824 12.3832 16.3724 12.29 16.2798L9 12.9998H19C19.2652 12.9998 19.5196 12.8945 19.7071 12.7069C19.8946 12.5194 20 12.265 20 11.9998C20 11.7346 19.8946 11.4802 19.7071 11.2927C19.5196 11.1052 19.2652 10.9998 19 10.9998Z" fill="black" />
                </svg>
              </Button> : <></>
          }

        </HeaderTitleHamburger>

        <TreeDots
          onClick={handleHeaderAccount}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 16 16" fill="#000000" className="bi bi-three-dots-vertical">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </TreeDots>
        <HeaderAccount open={headerAccount}>
          {
            getRole(user) === 'student' && <>
              {
                InfoList?.form_of_payment == 'contract' ?
                  <NavbarWrapperRight>
                    {/*(contractValue - paid).toLocaleString().replace(/,/g, ' ');  */}
                    <h4>Kontrakt: {Number(InfoList.direction_contract)?.toLocaleString().replace(/,/g, ' ')} so'm    </h4>
                    <Indebtedness>Qarzdorlik: {InfoList.debt > 0 ? InfoList.debt?.toLocaleString().replace(/,/g, ' ') + " so'm" : 'Qarzdorlik yo\'q'}  </Indebtedness>
                  </NavbarWrapperRight>
                  : InfoList?.form_of_payment == 'grand' &&
                  <NavbarWrapperRight>
                    <h4 style={{ color: "rgb(3, 158, 81)" }}>DAVLAT GRANTI</h4>
                  </NavbarWrapperRight>
              }
            </>
          }
          {/* <HeaderAccountTime>
          {listLanguage.ServerTime['ru']} 06.06.23
        </HeaderAccountTime> */}
          {
            (getRole(user) == "student" || getRole(user) == "teacher") ? <>
              <HeaderAccountItem
                onClick={(_) => { setOpenNotes(prev => !prev) }}
              >
                <Badge badgeContent={countNote} color="primary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_302_332)">
                      <path d="M23.2575 16.1999L20.6575 6.82893C20.1023 4.82435 18.8925 3.06307 17.2207 1.82542C15.549 0.587761 13.5113 -0.055148 11.4319 -0.000988358C9.35258 0.0531713 7.3511 0.801287 5.74603 2.12429C4.14096 3.4473 3.02454 5.26916 2.57445 7.29993L0.563451 16.3499C0.466143 16.7884 0.468517 17.2431 0.570396 17.6805C0.672275 18.1179 0.87106 18.5268 1.15209 18.8771C1.43311 19.2275 1.7892 19.5102 2.19409 19.7045C2.59898 19.8989 3.04234 19.9998 3.49145 19.9999H7.09845C7.32797 21.1302 7.94118 22.1464 8.83419 22.8763C9.7272 23.6062 10.8451 24.0049 11.9985 24.0049C13.1518 24.0049 14.2697 23.6062 15.1627 22.8763C16.0557 22.1464 16.6689 21.1302 16.8985 19.9999H20.3685C20.8306 19.9997 21.2864 19.8928 21.7003 19.6874C22.1143 19.482 22.4752 19.1838 22.755 18.816C23.0347 18.4482 23.2257 18.0207 23.313 17.5669C23.4004 17.1131 23.3807 16.6453 23.2575 16.1999ZM11.9985 21.9999C11.3802 21.9974 10.7778 21.8038 10.2738 21.4458C9.76968 21.0878 9.38853 20.5828 9.18245 19.9999H14.8145C14.6084 20.5828 14.2272 21.0878 13.7231 21.4458C13.2191 21.8038 12.6167 21.9974 11.9985 21.9999ZM21.1635 17.6049C21.0702 17.7286 20.9492 17.8288 20.8103 17.8973C20.6714 17.9659 20.5184 18.0011 20.3635 17.9999H3.49145C3.34171 17.9999 3.19389 17.9663 3.0589 17.9015C2.9239 17.8367 2.80519 17.7424 2.7115 17.6256C2.61782 17.5087 2.55157 17.3724 2.51764 17.2265C2.4837 17.0807 2.48296 16.9291 2.51545 16.7829L4.52645 7.73293C4.8808 6.13914 5.75776 4.70953 7.01791 3.67138C8.27806 2.63322 9.84907 2.0461 11.4812 2.00334C13.1134 1.96058 14.713 2.46465 16.0258 3.4354C17.3385 4.40615 18.2891 5.78787 18.7265 7.36093L21.3265 16.7319C21.3689 16.8801 21.3763 17.0361 21.348 17.1877C21.3197 17.3392 21.2565 17.482 21.1635 17.6049Z" fill="currentcolor" />
                    </g>
                    <defs>
                      <clipPath id="clip0_302_332">
                        <rect width="24" height="24" fill="currentcolor" />
                      </clipPath>
                    </defs>
                  </svg>
                </Badge>
                <Notification open={openNotes} setCountNote={setCountNote} />
              </HeaderAccountItem>
              <NavLink to="videoguide"
                onClick={() => {
                  dispatch(setTitle({
                    text: {
                      uz: "Videolar",
                      ru: "Видео",
                      eng: "Videos"
                    },
                    type: "text"
                  }));
                }}
              >
                <HeaderAccountItem>
                  <svg width="24" height="16" viewBox="0 0 24 16" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.903 2.53749C22.227 2.19949 21.43 2.27049 20.826 2.72549C20.787 2.75449 20.75 2.78749 20.716 2.82149L18.959 4.59449C18.748 2.02949 16.618 0.000488615 14 0.000488615H5C2.243 -0.000511385 0 2.24249 0 4.99949V10.9995C0 13.7565 2.243 15.9995 5 15.9995H14C16.629 15.9995 18.768 13.9525 18.962 11.3725L20.718 13.1265C20.752 13.1595 20.787 13.1895 20.825 13.2185C21.177 13.4825 21.593 13.6165 22.013 13.6165C22.316 13.6165 22.619 13.5475 22.903 13.4055C23.58 13.0675 24 12.3865 24 11.6315V4.31349C24 3.55649 23.58 2.87549 22.903 2.53749ZM14 13.9995H5C3.346 13.9995 2 12.6535 2 10.9995V4.99949C2 3.34549 3.346 1.99949 5 1.99949H14C15.654 1.99949 17 3.34549 17 4.99949V10.9995C17 12.6535 15.654 13.9995 14 13.9995ZM19 8.58249V7.39349L22 4.36549L22.025 11.6035L19 8.58149V8.58249Z" fill="currentcolor" />
                  </svg>
                </HeaderAccountItem>
              </NavLink>
            </> : <></>
          }
          <NavLink to={'profile'}
            onClick={() => {
              dispatch(setTitle({
                text: {
                  uz: "Profil",
                  ru: "Профиль",
                  eng: "Profile"
                },
                type: "text"
              }));
            }}
          >
            <HeaderAccountItem>
              <svg width="18" height="24" viewBox="0 0 18 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12C10.1867 12 11.3467 11.6481 12.3334 10.9888C13.3201 10.3295 14.0892 9.39246 14.5433 8.2961C14.9974 7.19975 15.1162 5.99335 14.8847 4.82946C14.6532 3.66558 14.0818 2.59648 13.2426 1.75736C12.4035 0.918247 11.3344 0.346802 10.1705 0.115291C9.00666 -0.11622 7.80026 0.00259972 6.7039 0.456726C5.60754 0.910851 4.67047 1.67989 4.01118 2.66658C3.35189 3.65328 3 4.81331 3 6C3.00159 7.59081 3.63424 9.11602 4.75911 10.2409C5.88399 11.3658 7.40919 11.9984 9 12ZM9 2C9.79113 2 10.5645 2.2346 11.2223 2.67412C11.8801 3.11365 12.3928 3.73836 12.6955 4.46927C12.9983 5.20017 13.0775 6.00444 12.9231 6.78036C12.7688 7.55629 12.3878 8.26902 11.8284 8.82843C11.269 9.38784 10.5563 9.7688 9.78036 9.92314C9.00444 10.0775 8.20017 9.99827 7.46927 9.69552C6.73836 9.39277 6.11365 8.88008 5.67412 8.22228C5.2346 7.56449 5 6.79113 5 6C5 4.93914 5.42143 3.92172 6.17157 3.17158C6.92172 2.42143 7.93913 2 9 2Z" fill="currentcolor" />
                <path d="M9 14C6.61386 14.0026 4.32622 14.9517 2.63896 16.639C0.951708 18.3262 0.00264685 20.6139 0 23C0 23.2652 0.105357 23.5196 0.292893 23.7071C0.48043 23.8946 0.734784 24 1 24C1.26522 24 1.51957 23.8946 1.70711 23.7071C1.89464 23.5196 2 23.2652 2 23C2 21.1435 2.7375 19.363 4.05025 18.0503C5.36301 16.7375 7.14348 16 9 16C10.8565 16 12.637 16.7375 13.9497 18.0503C15.2625 19.363 16 21.1435 16 23C16 23.2652 16.1054 23.5196 16.2929 23.7071C16.4804 23.8946 16.7348 24 17 24C17.2652 24 17.5196 23.8946 17.7071 23.7071C17.8946 23.5196 18 23.2652 18 23C17.9974 20.6139 17.0483 18.3262 15.361 16.639C13.6738 14.9517 11.3861 14.0026 9 14Z" fill="currentcolor" />
              </svg>
            </HeaderAccountItem>
          </NavLink>
        </HeaderAccount>
      </HeaderWrapper>
    </>
  )
}
