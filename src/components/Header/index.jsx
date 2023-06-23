import React from 'react'
import { HeaderAccount, HeaderAccountItem, HeaderAccountTime, HeaderTitle, HeaderWrapper } from './styles'
import align_center from "./../../imgs/01_align_center.png"
import video_iconc from "./../../imgs/video-iconc.png"
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <HeaderWrapper big='true'>
        <HeaderTitle>Dashboard</HeaderTitle>
        <HeaderAccount>
          <HeaderAccountTime>
            Server vaqti: 06.06.23
          </HeaderAccountTime>
          <HeaderAccountItem>
            <img src={align_center} alt="notes" />
          </HeaderAccountItem>
          <NavLink to="videoguide">
            <HeaderAccountItem>
              <img src={video_iconc} alt="notes" />
            </HeaderAccountItem>
          </NavLink>
          <HeaderAccountItem>
            <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12C10.1867 12 11.3467 11.6481 12.3334 10.9888C13.3201 10.3295 14.0892 9.39246 14.5433 8.2961C14.9974 7.19975 15.1162 5.99335 14.8847 4.82946C14.6532 3.66558 14.0818 2.59648 13.2426 1.75736C12.4035 0.918247 11.3344 0.346802 10.1705 0.115291C9.00666 -0.11622 7.80026 0.00259972 6.7039 0.456726C5.60754 0.910851 4.67047 1.67989 4.01118 2.66658C3.35189 3.65328 3 4.81331 3 6C3.00159 7.59081 3.63424 9.11602 4.75911 10.2409C5.88399 11.3658 7.40919 11.9984 9 12ZM9 2C9.79113 2 10.5645 2.2346 11.2223 2.67412C11.8801 3.11365 12.3928 3.73836 12.6955 4.46927C12.9983 5.20017 13.0775 6.00444 12.9231 6.78036C12.7688 7.55629 12.3878 8.26902 11.8284 8.82843C11.269 9.38784 10.5563 9.7688 9.78036 9.92314C9.00444 10.0775 8.20017 9.99827 7.46927 9.69552C6.73836 9.39277 6.11365 8.88008 5.67412 8.22228C5.2346 7.56449 5 6.79113 5 6C5 4.93914 5.42143 3.92172 6.17157 3.17158C6.92172 2.42143 7.93913 2 9 2Z" fill="#1A1818"/>
              <path d="M9 14C6.61386 14.0026 4.32622 14.9517 2.63896 16.639C0.951708 18.3262 0.00264685 20.6139 0 23C0 23.2652 0.105357 23.5196 0.292893 23.7071C0.48043 23.8946 0.734784 24 1 24C1.26522 24 1.51957 23.8946 1.70711 23.7071C1.89464 23.5196 2 23.2652 2 23C2 21.1435 2.7375 19.363 4.05025 18.0503C5.36301 16.7375 7.14348 16 9 16C10.8565 16 12.637 16.7375 13.9497 18.0503C15.2625 19.363 16 21.1435 16 23C16 23.2652 16.1054 23.5196 16.2929 23.7071C16.4804 23.8946 16.7348 24 17 24C17.2652 24 17.5196 23.8946 17.7071 23.7071C17.8946 23.5196 18 23.2652 18 23C17.9974 20.6139 17.0483 18.3262 15.361 16.639C13.6738 14.9517 11.3861 14.0026 9 14Z" fill="#1A1818"/>
            </svg>
          </HeaderAccountItem>
        </HeaderAccount>
      </HeaderWrapper>
    </div>
  )
}
