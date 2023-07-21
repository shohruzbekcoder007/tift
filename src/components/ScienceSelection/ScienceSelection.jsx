import React from 'react'
import { ContentWrapper } from '../../global_styles/styles'
import { CardWrapper, CardWrapperTitle } from './style'
import languagelist from './language.json'
import { useSelector } from 'react-redux'
export default function ScienceSelection() {
  const language = useSelector(state => state.language)

  return (
    <ContentWrapper>
      <CardWrapper>
        <CardWrapperTitle>
          {languagelist.Title[language]}
        </CardWrapperTitle>
      </CardWrapper>
    </ContentWrapper>
  )
}
