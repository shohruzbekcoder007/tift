import React from 'react'
import { SidebarHeader, SidebarLinkList, SidebarLinkListItem, SidebarLinkListItemImg, SidebarLinkListItemText, SidebarWrapper } from './styles'
import logo from './../../imgs/Logo.png'
import { NavLink } from "react-router-dom"

const teacher_Links = [
  {
    img: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_107_13306)">
        <path d="M7 0H4C2.93913 0 1.92172 0.421427 1.17157 1.17157C0.421427 1.92172 0 2.93913 0 4L0 7C0 8.06087 0.421427 9.07828 1.17157 9.82843C1.92172 10.5786 2.93913 11 4 11H7C8.06087 11 9.07828 10.5786 9.82843 9.82843C10.5786 9.07828 11 8.06087 11 7V4C11 2.93913 10.5786 1.92172 9.82843 1.17157C9.07828 0.421427 8.06087 0 7 0ZM9 7C9 7.53043 8.78929 8.03914 8.41421 8.41421C8.03914 8.78929 7.53043 9 7 9H4C3.46957 9 2.96086 8.78929 2.58579 8.41421C2.21071 8.03914 2 7.53043 2 7V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H7C7.53043 2 8.03914 2.21071 8.41421 2.58579C8.78929 2.96086 9 3.46957 9 4V7Z" fill="currentcolor" />
        <path d="M20 0H17C15.9391 0 14.9217 0.421427 14.1716 1.17157C13.4214 1.92172 13 2.93913 13 4V7C13 8.06087 13.4214 9.07828 14.1716 9.82843C14.9217 10.5786 15.9391 11 17 11H20C21.0609 11 22.0783 10.5786 22.8284 9.82843C23.5786 9.07828 24 8.06087 24 7V4C24 2.93913 23.5786 1.92172 22.8284 1.17157C22.0783 0.421427 21.0609 0 20 0ZM22 7C22 7.53043 21.7893 8.03914 21.4142 8.41421C21.0391 8.78929 20.5304 9 20 9H17C16.4696 9 15.9609 8.78929 15.5858 8.41421C15.2107 8.03914 15 7.53043 15 7V4C15 3.46957 15.2107 2.96086 15.5858 2.58579C15.9609 2.21071 16.4696 2 17 2H20C20.5304 2 21.0391 2.21071 21.4142 2.58579C21.7893 2.96086 22 3.46957 22 4V7Z" fill="currentcolor" />
        <path d="M7 13H4C2.93913 13 1.92172 13.4214 1.17157 14.1716C0.421427 14.9217 0 15.9391 0 17L0 20C0 21.0609 0.421427 22.0783 1.17157 22.8284C1.92172 23.5786 2.93913 24 4 24H7C8.06087 24 9.07828 23.5786 9.82843 22.8284C10.5786 22.0783 11 21.0609 11 20V17C11 15.9391 10.5786 14.9217 9.82843 14.1716C9.07828 13.4214 8.06087 13 7 13ZM9 20C9 20.5304 8.78929 21.0391 8.41421 21.4142C8.03914 21.7893 7.53043 22 7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V17C2 16.4696 2.21071 15.9609 2.58579 15.5858C2.96086 15.2107 3.46957 15 4 15H7C7.53043 15 8.03914 15.2107 8.41421 15.5858C8.78929 15.9609 9 16.4696 9 17V20Z" fill="currentcolor" />
        <path d="M20 13H17C15.9391 13 14.9217 13.4214 14.1716 14.1716C13.4214 14.9217 13 15.9391 13 17V20C13 21.0609 13.4214 22.0783 14.1716 22.8284C14.9217 23.5786 15.9391 24 17 24H20C21.0609 24 22.0783 23.5786 22.8284 22.8284C23.5786 22.0783 24 21.0609 24 20V17C24 15.9391 23.5786 14.9217 22.8284 14.1716C22.0783 13.4214 21.0609 13 20 13ZM22 20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H17C16.4696 22 15.9609 21.7893 15.5858 21.4142C15.2107 21.0391 15 20.5304 15 20V17C15 16.4696 15.2107 15.9609 15.5858 15.5858C15.9609 15.2107 16.4696 15 17 15H20C20.5304 15 21.0391 15.2107 21.4142 15.5858C21.7893 15.9609 22 16.4696 22 17V20Z" fill="currentcolor" />
      </g>
      <defs>
        <clipPath id="clip0_107_13306">
          <rect width="24" height="24" fill="currentcolor" />
        </clipPath>
      </defs>
    </svg>,
    text: "Dashboard",
    to: "/"
  },
  {
    img: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_107_5507)">
        <path d="M17 14C17 14.2652 16.8946 14.5196 16.7071 14.7071C16.5196 14.8947 16.2652 15 16 15H8C7.73478 15 7.48043 14.8947 7.29289 14.7071C7.10536 14.5196 7 14.2652 7 14C7 13.7348 7.10536 13.4805 7.29289 13.2929C7.48043 13.1054 7.73478 13 8 13H16C16.2652 13 16.5196 13.1054 16.7071 13.2929C16.8946 13.4805 17 13.7348 17 14ZM13 17H8C7.73478 17 7.48043 17.1054 7.29289 17.2929C7.10536 17.4805 7 17.7348 7 18C7 18.2652 7.10536 18.5196 7.29289 18.7071C7.48043 18.8947 7.73478 19 8 19H13C13.2652 19 13.5196 18.8947 13.7071 18.7071C13.8946 18.5196 14 18.2652 14 18C14 17.7348 13.8946 17.4805 13.7071 17.2929C13.5196 17.1054 13.2652 17 13 17ZM22 10.485V19C21.9984 20.3256 21.4711 21.5965 20.5338 22.5338C19.5964 23.4711 18.3256 23.9984 17 24H7C5.6744 23.9984 4.40356 23.4711 3.46622 22.5338C2.52888 21.5965 2.00159 20.3256 2 19V5.00002C2.00159 3.67443 2.52888 2.40358 3.46622 1.46624C4.40356 0.528905 5.6744 0.00161091 7 2.30487e-05H11.515C12.4346 -0.00234388 13.3456 0.177611 14.1952 0.529482C15.0449 0.881354 15.8163 1.39816 16.465 2.05002L19.949 5.53602C20.6012 6.18426 21.1184 6.95548 21.4704 7.805C21.8225 8.65451 22.0025 9.56545 22 10.485ZM15.051 3.46402C14.7363 3.15918 14.3829 2.89695 14 2.68402V7.00002C14 7.26524 14.1054 7.51959 14.2929 7.70713C14.4804 7.89467 14.7348 8.00002 15 8.00002H19.316C19.103 7.61721 18.8404 7.26417 18.535 6.95002L15.051 3.46402ZM20 10.485C20 10.32 19.968 10.162 19.953 10H15C14.2044 10 13.4413 9.68395 12.8787 9.12134C12.3161 8.55873 12 7.79567 12 7.00002V2.04702C11.838 2.03202 11.679 2.00002 11.515 2.00002H7C6.20435 2.00002 5.44129 2.31609 4.87868 2.8787C4.31607 3.44131 4 4.20437 4 5.00002V19C4 19.7957 4.31607 20.5587 4.87868 21.1213C5.44129 21.684 6.20435 22 7 22H17C17.7956 22 18.5587 21.684 19.1213 21.1213C19.6839 20.5587 20 19.7957 20 19V10.485Z" fill="currentcolor" />
      </g>
      <defs>
        <clipPath id="clip0_107_5507">
          <rect width="24" height="24" fill="currentcolor" />
        </clipPath>
      </defs>
    </svg>,
    text: "NB to’g’irlash",
    to: "nb"
  },
  {
    img: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_107_13317)">
        <path d="M19 1H5C3.67441 1.00159 2.40356 1.52888 1.46622 2.46622C0.528882 3.40356 0.00158786 4.67441 0 6L0 18C0.00158786 19.3256 0.528882 20.5964 1.46622 21.5338C2.40356 22.4711 3.67441 22.9984 5 23H19C20.3256 22.9984 21.5964 22.4711 22.5338 21.5338C23.4711 20.5964 23.9984 19.3256 24 18V6C23.9984 4.67441 23.4711 3.40356 22.5338 2.46622C21.5964 1.52888 20.3256 1.00159 19 1ZM5 3H19C19.5988 3.00118 20.1835 3.18151 20.679 3.5178C21.1744 3.85409 21.5579 4.33095 21.78 4.887L14.122 12.546C13.5584 13.1073 12.7954 13.4225 12 13.4225C11.2046 13.4225 10.4416 13.1073 9.878 12.546L2.22 4.887C2.44215 4.33095 2.82561 3.85409 3.32105 3.5178C3.81648 3.18151 4.40121 3.00118 5 3ZM19 21H5C4.20435 21 3.44129 20.6839 2.87868 20.1213C2.31607 19.5587 2 18.7956 2 18V7.5L8.464 13.96C9.40263 14.8963 10.6743 15.422 12 15.422C13.3257 15.422 14.5974 14.8963 15.536 13.96L22 7.5V18C22 18.7956 21.6839 19.5587 21.1213 20.1213C20.5587 20.6839 19.7956 21 19 21Z" fill="currentcolor" />
      </g>
      <defs>
        <clipPath id="clip0_107_13317">
          <rect width="24" height="24" fill="currentcolor" />
        </clipPath>
      </defs>
    </svg>,
    text: "Ariza berish",
    to: "filingapplication"
  },
  {
    img: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_107_13321)">
        <path d="M22.2 2.16316C21.6378 1.69308 20.9791 1.35255 20.2705 1.16572C19.5619 0.978895 18.8209 0.950365 18.1 1.08216L14.278 1.77616C13.3956 1.9382 12.5933 2.39218 12 3.06516C11.4052 2.39102 10.6006 1.93693 9.716 1.77616L5.9 1.08216C5.17916 0.950249 4.43813 0.978405 3.72938 1.16463C3.02062 1.35086 2.36147 1.6906 1.79857 2.15981C1.23567 2.62902 0.782786 3.21623 0.471982 3.87986C0.161178 4.5435 4.88125e-05 5.26734 0 6.00016L0 16.7932C5.74559e-05 17.964 0.410977 19.0976 1.16113 19.9965C1.91129 20.8954 2.95311 21.5026 4.105 21.7122L10.391 22.8552C11.455 23.0485 12.545 23.0485 13.609 22.8552L19.9 21.7122C21.051 21.5015 22.0916 20.8939 22.8408 19.9951C23.5899 19.0963 24.0002 17.9632 24 16.7932V6.00016C24.0005 5.2676 23.8394 4.54395 23.5283 3.88075C23.2171 3.21754 22.7636 2.63109 22.2 2.16316ZM11 20.9282C10.916 20.9162 10.832 20.9022 10.748 20.8872L4.463 19.7452C3.77176 19.6194 3.14659 19.255 2.69649 18.7155C2.24638 18.1761 1.99989 17.4957 2 16.7932V6.00016C2 5.20451 2.31607 4.44144 2.87868 3.87883C3.44129 3.31623 4.20435 3.00016 5 3.00016C5.18109 3.00059 5.36179 3.01698 5.54 3.04916L9.36 3.74916C9.81961 3.83326 10.2353 4.07563 10.5348 4.4342C10.8344 4.79277 10.999 5.24491 11 5.71216V20.9282ZM22 16.7932C22.0001 17.4957 21.7536 18.1761 21.3035 18.7155C20.8534 19.255 20.2282 19.6194 19.537 19.7452L13.252 20.8872C13.168 20.9022 13.084 20.9162 13 20.9282V5.71216C12.9999 5.24377 13.1643 4.79021 13.4643 4.43056C13.7644 4.07092 14.1812 3.828 14.642 3.74416L18.463 3.04416C18.8957 2.96543 19.3405 2.98281 19.7657 3.09507C20.191 3.20732 20.5863 3.41171 20.9238 3.69376C21.2613 3.97581 21.5326 4.32861 21.7186 4.72718C21.9046 5.12575 22.0007 5.56033 22 6.00016V16.7932Z" fill="currentcolor" />
      </g>
      <defs>
        <clipPath id="clip0_107_13321">
          <rect width="24" height="24" fill="currentcolor" />
        </clipPath>
      </defs>
    </svg>,
    text: "Mening fanlarim",
    to: "sciences"
  },
  {
    img: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_107_13325)">
        <path d="M19 2H5C2.243 2 0 4.243 0 7V17C0 19.757 2.243 22 5 22H19C21.757 22 24 19.757 24 17V7C24 4.243 21.757 2 19 2ZM2 8H11V13H2V8ZM13 8H22V13H13V8ZM5 4H19C20.304 4 21.415 4.836 21.828 6H2.172C2.585 4.836 3.696 4 5 4ZM2 17V15H11V20H5C3.346 20 2 18.654 2 17ZM19 20H13V15H22V17C22 18.654 20.654 20 19 20Z" fill="currentcolor" />
      </g>
      <defs>
        <clipPath id="clip0_107_13325">
          <rect width="24" height="24" fill="currentcolor" />
        </clipPath>
      </defs>
    </svg>,
    text: "Dars jadvali",
    to: "classschedule"
  },
  {
    img: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_107_13329)">
        <path d="M11 12C11.2652 12 11.5196 12.1054 11.7071 12.2929C11.8946 12.4804 12 12.7348 12 13C12 13.2652 11.8946 13.5196 11.7071 13.7071C11.5196 13.8946 11.2652 14 11 14H8C7.73478 14 7.48043 13.8946 7.29289 13.7071C7.10536 13.5196 7 13.2652 7 13C7 12.7348 7.10536 12.4804 7.29289 12.2929C7.48043 12.1054 7.73478 12 8 12H11ZM17 9C17 8.73478 16.8946 8.48043 16.7071 8.29289C16.5196 8.10536 16.2652 8 16 8H8C7.73478 8 7.48043 8.10536 7.29289 8.29289C7.10536 8.48043 7 8.73478 7 9C7 9.26522 7.10536 9.51957 7.29289 9.70711C7.48043 9.89464 7.73478 10 8 10H16C16.2652 10 16.5196 9.89464 16.7071 9.70711C16.8946 9.51957 17 9.26522 17 9ZM8 6H16C16.2652 6 16.5196 5.89464 16.7071 5.70711C16.8946 5.51957 17 5.26522 17 5C17 4.73478 16.8946 4.48043 16.7071 4.29289C16.5196 4.10536 16.2652 4 16 4H8C7.73478 4 7.48043 4.10536 7.29289 4.29289C7.10536 4.48043 7 4.73478 7 5C7 5.26522 7.10536 5.51957 7.29289 5.70711C7.48043 5.89464 7.73478 6 8 6ZM20 19.444V23.277C20.0001 23.4197 19.9578 23.5591 19.8786 23.6777C19.7994 23.7964 19.6868 23.8888 19.555 23.9434C19.4232 23.998 19.2781 24.0123 19.1382 23.9845C18.9983 23.9566 18.8698 23.8879 18.769 23.787L18 23.019L17.231 23.787C17.1302 23.8879 17.0017 23.9566 16.8618 23.9845C16.7219 24.0123 16.5768 23.998 16.445 23.9434C16.3132 23.8888 16.2006 23.7964 16.1214 23.6777C16.0422 23.5591 15.9999 23.4197 16 23.277V19.444C15.2373 19.0058 14.641 18.3277 14.3038 17.5154C13.9666 16.703 13.9076 15.8019 14.1358 14.9525C14.364 14.103 14.8667 13.3529 15.5656 12.8189C16.2646 12.2849 17.1204 11.997 18 12C18.338 12.0042 18.6741 12.0519 19 12.142V5C19 4.20435 18.6839 3.44129 18.1213 2.87868C17.5587 2.31607 16.7956 2 16 2H8C7.20435 2 6.44129 2.31607 5.87868 2.87868C5.31607 3.44129 5 4.20435 5 5V17C5 17.7956 5.31607 18.5587 5.87868 19.1213C6.44129 19.6839 7.20435 20 8 20H13C13.2652 20 13.5196 20.1054 13.7071 20.2929C13.8946 20.4804 14 20.7348 14 21C14 21.2652 13.8946 21.5196 13.7071 21.7071C13.5196 21.8946 13.2652 22 13 22H8C6.6744 21.9984 5.40356 21.4711 4.46622 20.5338C3.52888 19.5964 3.00159 18.3256 3 17V5C3.00159 3.6744 3.52888 2.40356 4.46622 1.46622C5.40356 0.528882 6.6744 0.00158786 8 0L16 0C17.3256 0.00158786 18.5964 0.528882 19.5338 1.46622C20.4711 2.40356 20.9984 3.6744 21 5V13.382C21.3917 13.8219 21.6801 14.3438 21.844 14.9096C22.0079 15.4753 22.0433 16.0706 21.9474 16.6518C21.8515 17.2329 21.6269 17.7853 21.2899 18.2684C20.953 18.7516 20.5122 19.1532 20 19.444ZM20 16C20 15.6044 19.8827 15.2178 19.6629 14.8889C19.4432 14.56 19.1308 14.3036 18.7654 14.1522C18.3999 14.0009 17.9978 13.9613 17.6098 14.0384C17.2219 14.1156 16.8655 14.3061 16.5858 14.5858C16.3061 14.8655 16.1156 15.2219 16.0384 15.6098C15.9613 15.9978 16.0009 16.3999 16.1522 16.7654C16.3036 17.1308 16.56 17.4432 16.8889 17.6629C17.2178 17.8827 17.6044 18 18 18C18.5304 18 19.0391 17.7893 19.4142 17.4142C19.7893 17.0391 20 16.5304 20 16Z" fill="currentcolor" />
      </g>
      <defs>
        <clipPath id="clip0_107_13329">
          <rect width="24" height="24" fill="currentcolor" />
        </clipPath>
      </defs>
    </svg>,
    text: "Diplom ishi",
    to: "diploma"
  },
  {
    img: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_148_6503)">
        <path d="M23 22H3C2.73478 22 2.48043 21.8946 2.29289 21.7071C2.10536 21.5196 2 21.2652 2 21V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1L0 21C0 21.7956 0.31607 22.5587 0.87868 23.1213C1.44129 23.6839 2.20435 24 3 24H23C23.2652 24 23.5196 23.8946 23.7071 23.7071C23.8946 23.5196 24 23.2652 24 23C24 22.7348 23.8946 22.4804 23.7071 22.2929C23.5196 22.1054 23.2652 22 23 22Z" fill="currentcolor" />
        <path d="M15 20C15.2652 20 15.5196 19.8946 15.7071 19.7071C15.8946 19.5196 16 19.2652 16 19V12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11C14.7348 11 14.4804 11.1054 14.2929 11.2929C14.1054 11.4804 14 11.7348 14 12V19C14 19.2652 14.1054 19.5196 14.2929 19.7071C14.4804 19.8946 14.7348 20 15 20Z" fill="currentcolor" />
        <path d="M7 20C7.26522 20 7.51957 19.8946 7.70711 19.7071C7.89464 19.5196 8 19.2652 8 19V12C8 11.7348 7.89464 11.4804 7.70711 11.2929C7.51957 11.1054 7.26522 11 7 11C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12V19C6 19.2652 6.10536 19.5196 6.29289 19.7071C6.48043 19.8946 6.73478 20 7 20Z" fill="currentcolor" />
        <path d="M19 20C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V7C20 6.73478 19.8946 6.48043 19.7071 6.29289C19.5196 6.10536 19.2652 6 19 6C18.7348 6 18.4804 6.10536 18.2929 6.29289C18.1054 6.48043 18 6.73478 18 7V19C18 19.2652 18.1054 19.5196 18.2929 19.7071C18.4804 19.8946 18.7348 20 19 20Z" fill="currentcolor" />
        <path d="M11 20C11.2652 20 11.5196 19.8946 11.7071 19.7071C11.8946 19.5196 12 19.2652 12 19V7C12 6.73478 11.8946 6.48043 11.7071 6.29289C11.5196 6.10536 11.2652 6 11 6C10.7348 6 10.4804 6.10536 10.2929 6.29289C10.1054 6.48043 10 6.73478 10 7V19C10 19.2652 10.1054 19.5196 10.2929 19.7071C10.4804 19.8946 10.7348 20 11 20Z" fill="currentcolor" />
      </g>
      <defs>
        <clipPath id="clip0_148_6503">
          <rect width="24" height="24" fill="currentcolor" />
        </clipPath>
      </defs>
    </svg>,
    text: "So’rovnoma",
    to: "request"
  },
  {
    img: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_148_4912)">
        <path d="M21.155 3.272L18.871 0.913C18.5905 0.624966 18.2553 0.39584 17.8851 0.239061C17.5149 0.0822824 17.1171 0.00100643 16.715 0L12 0C10.8478 0.00145452 9.73132 0.40009 8.83875 1.12872C7.94618 1.85735 7.3321 2.87141 7.1 4H7C5.67441 4.00159 4.40356 4.52888 3.46622 5.46622C2.52888 6.40356 2.00159 7.67441 2 9V19C2.00159 20.3256 2.52888 21.5964 3.46622 22.5338C4.40356 23.4711 5.67441 23.9984 7 24H13C14.3256 23.9984 15.5964 23.4711 16.5338 22.5338C17.4711 21.5964 17.9984 20.3256 18 19V18.9C19.1286 18.6679 20.1427 18.0538 20.8713 17.1613C21.5999 16.2687 21.9985 15.1522 22 14V5.36C22.0015 4.58042 21.6983 3.83112 21.155 3.272ZM13 22H7C6.20435 22 5.44129 21.6839 4.87868 21.1213C4.31607 20.5587 4 19.7956 4 19V9C4 8.20435 4.31607 7.44129 4.87868 6.87868C5.44129 6.31607 6.20435 6 7 6V14C7.00159 15.3256 7.52888 16.5964 8.46622 17.5338C9.40356 18.4711 10.6744 18.9984 12 19H16C16 19.7956 15.6839 20.5587 15.1213 21.1213C14.5587 21.6839 13.7957 22 13 22ZM17 17H12C11.2044 17 10.4413 16.6839 9.87868 16.1213C9.31607 15.5587 9 14.7956 9 14V5C9 4.20435 9.31607 3.44129 9.87868 2.87868C10.4413 2.31607 11.2044 2 12 2H16V4C16 4.53043 16.2107 5.03914 16.5858 5.41421C16.9609 5.78929 17.4696 6 18 6H20V14C20 14.7956 19.6839 15.5587 19.1213 16.1213C18.5587 16.6839 17.7957 17 17 17Z" fill="currentcolor" />
      </g>
      <defs>
        <clipPath id="clip0_148_4912">
          <rect width="24" height="24" fill="currentcolor" />
        </clipPath>
      </defs>
    </svg>,
    text: "Kurslarni boshqarish",
    to: "coursemanagement"
  }
]

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <SidebarHeader>
        <img src={logo} alt="logo" />
      </SidebarHeader>
      <SidebarLinkList>
        {
          teacher_Links.map((elem, index) => {
            return (
              <ListItem
                key={index}
                img={elem.img}
                text={elem.text}
                to={elem.to}
              />
            )
          })
        }
      </SidebarLinkList>
    </SidebarWrapper>
  )
}


const ListItem = ({ img, text, to }) => {
  return (
    <SidebarLinkListItem>
      <NavLink
        to={to}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        <SidebarLinkListItemImg>
          {img}
        </SidebarLinkListItemImg>
        <SidebarLinkListItemText>
          {text}
        </SidebarLinkListItemText>
      </NavLink>
    </SidebarLinkListItem>
  )
}