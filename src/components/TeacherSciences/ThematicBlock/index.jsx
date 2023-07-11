import React from 'react'
import { ThematicBlockBox, ThematicBlockBoxBody, ThematicBlockBoxHeader, ThematicBlockBoxs, ThematicBlockText, ThematicBlockWrapper } from './styled'

export default function ThematicBlock() {
  return (
    <ThematicBlockWrapper>
        <ThematicBlockText>Тематики блока</ThematicBlockText>
        <ThematicBlockBoxs>
            <ThematicBlockBox>
                <ThematicBlockBoxHeader>#     SPM201-1-29-05-2023</ThematicBlockBoxHeader>
                <ThematicBlockBoxBody>1      Ahmedov Ulug‘bek Zarifboy o‘g‘li (Программный инжиниринг - 321-19 DIr)</ThematicBlockBoxBody>
            </ThematicBlockBox>
        </ThematicBlockBoxs>
    </ThematicBlockWrapper>
  )
}
