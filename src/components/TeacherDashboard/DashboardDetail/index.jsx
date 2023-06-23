import React from 'react'
import { ContentWrapper } from '../../../global_styles/styles'
import { DashboardDetailWrapper, DetailWrapperBody, DetailWrapperDate, DetailWrapperTitle } from './styles'
import { useParams } from 'react-router-dom'

export default function Index() {
  const {id} = useParams()
  return (
    <ContentWrapper>
      <DashboardDetailWrapper>
        <DetailWrapperTitle>
          Dars mashg'ulotlarini ko'chirish!
        </DetailWrapperTitle>
        <DetailWrapperBody>
        Hurmatli professor-o‘qituvchilar! O‘quv yilini iyul oyidan kechiktirmasdan tugatish uchun 02.07.2022 sanadan keyin o‘tkazilishi kerak bo‘lgan barcha dars mashg‘ulotlarini undan oldingi kunlarga ko‘chirishingizni so'raymiz. Talabalar bir nechta fanlardan darslarga qatnashishlarini hamda u fanlarni ham ko‘chirilishi sababli, talabalar bilan oldindan kelishib, birinchi smenadagi darslarni 4-juftlikka, ikkinchi smenadagi darslarni esa 3-juftlikka ko‘chirishingizni so‘raymiz. (Dars Jadvalida ko'chirilgan o'zgarishlar ko'rsatilmaydi, lekin talaba tegishli fanning "taqvim rejasi" sahifasi orqali bir nechta o'zgartirilgan sanalardagi kun va juftlik bilan tanishishi mumkin).Shuni ham ta'kidlash kerakki, auditoriya mashg'ulotlari 02.07.2022 sanada tugashi sababli, barcha topshiriqlarni topshirishning muddatlari 25.06.2022 dan kechiktirmay belgilanishi kerak. Tizimda muddati 25.06.2022 sanadan keyinga qo'yilgan barcha vazifalar 25.06.2022 ga ko'chiriladi.
        </DetailWrapperBody>
        <hr />
        <DetailWrapperDate>
        — Nashr qilingan sana 04.06.2022
        </DetailWrapperDate>
      </DashboardDetailWrapper>
    </ContentWrapper>
  )
}
