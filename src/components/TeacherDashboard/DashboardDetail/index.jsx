import React from 'react'
import { ContentWrapper } from '../../../global_styles/styles'
import { DashboardDetailWrapper, DetailWrapperBody, DetailWrapperDate, DetailWrapperTitle } from './styles'
// import { useParams } from 'react-router-dom'
import listLanguage from '../language.json'
import { useLocation } from "react-router-dom";

export default function Index() {
  // const {id} = useParams()
  let { state } = useLocation();
  
  return (
    <ContentWrapper>
      <DashboardDetailWrapper>
        <DetailWrapperTitle>
          {state.element.title}
        </DetailWrapperTitle>
        <DetailWrapperBody>
          {state.element.description}
        </DetailWrapperBody>
        <hr />
        <DetailWrapperDate>
        — {listLanguage.DetailDate["ru"]} {`${new Date(state.element.created_at).getDate()}.${new Date(state.element.created_at).getMonth() + 1}.${new Date(state.element.created_at).getFullYear()}`}
        </DetailWrapperDate>
      </DashboardDetailWrapper>
    </ContentWrapper>
  )
}
