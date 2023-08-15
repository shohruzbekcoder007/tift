import React from 'react'
import { SidebarHeader, SidebarLinkList, SidebarLinkListItem, SidebarLinkListItemImg, SidebarLinkListItemText, SidebarLinksHead, SidebarWrapper } from './styles'
import logo from './../../imgs/Logo.png'
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'
import { setSidebar } from '../../redux/action/sidebarActions'
import { setTitle } from '../../redux/action/titleActions'
import { student_Links, teacher_Links, headofthedepartment_Links, tutor_Links, dekan_Links, admin_links } from './sidebarlinks'


export default function Sidebar({ role }) {

  const sidebar = useSelector((state) => state.sidebar);
  const language = useSelector(state => state.language)
  const dispatch = useDispatch()

  return (
    <SidebarWrapper type={sidebar}>
      <SidebarHeader>
        <img src={logo} alt="logo" />
        <span onClick={() => { dispatch(setSidebar('small')) }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.9998 6.00006C17.8123 5.81259 17.558 5.70728 17.2928 5.70728C17.0277 5.70728 16.7733 5.81259 16.5858 6.00006L11.9998 10.5861L7.41382 6.00006C7.22629 5.81259 6.97198 5.70728 6.70682 5.70728C6.44165 5.70728 6.18735 5.81259 5.99982 6.00006C5.81235 6.18759 5.70703 6.4419 5.70703 6.70706C5.70703 6.97223 5.81235 7.22653 5.99982 7.41406L10.5858 12.0001L5.99982 16.5861C5.81235 16.7736 5.70703 17.0279 5.70703 17.2931C5.70703 17.5582 5.81235 17.8125 5.99982 18.0001C6.18735 18.1875 6.44165 18.2928 6.70682 18.2928C6.97198 18.2928 7.22629 18.1875 7.41382 18.0001L11.9998 13.4141L16.5858 18.0001C16.7733 18.1875 17.0277 18.2928 17.2928 18.2928C17.558 18.2928 17.8123 18.1875 17.9998 18.0001C18.1873 17.8125 18.2926 17.5582 18.2926 17.2931C18.2926 17.0279 18.1873 16.7736 17.9998 16.5861L13.4138 12.0001L17.9998 7.41406C18.1873 7.22653 18.2926 6.97223 18.2926 6.70706C18.2926 6.4419 18.1873 6.18759 17.9998 6.00006Z" fill="currentcolor" />
          </svg>
        </span>
      </SidebarHeader>
      <SidebarLinkList>
        {
          chageLinks(role).map((elem, index) => {
            if(elem.type && elem.type === "link_header"){
              return <SidebarLinksHead key={index}>{elem.text[language]}</SidebarLinksHead>
            }else{
              return (
                <ListItem
                  key={index}
                  img={elem.img}
                  text={elem.text[language]}
                  to={elem.to}
                />
              )
            }
          })
        }
      </SidebarLinkList>
    </SidebarWrapper>
  )
}

const chageLinks = (role) => {
  if(role==="teacher") return teacher_Links
  if(role==="student") return student_Links
  if(role==="department") return headofthedepartment_Links
  if(role==="tutor") return tutor_Links
  if(role==="dekan") return dekan_Links
  if(role==="admin") return admin_links
  return []
}


const ListItem = ({ img, text, to }) => {

  const dispatch = useDispatch()

  return (
    <SidebarLinkListItem>
      <NavLink
        to={to}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        onClick={() => { dispatch(setSidebar('small')); dispatch(setTitle(text)); }}
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