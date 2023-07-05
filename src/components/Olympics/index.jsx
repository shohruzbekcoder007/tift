import React from 'react'
import { ContentWrapper } from '../../global_styles/styles'
import { OlympicsPaper, OlympicsWrapper } from './styles'
import { Typography } from '@mui/material'

export default function Olympics() {
  return (
    <ContentWrapper>
        <OlympicsWrapper>
            <OlympicsPaper elevation={0} sx={{borderRadius: "10px", padding: "24px 20px"}}>
              <Typography
                sx={{
                    color: "#000000",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "normal",
                    mb: "12px"
                }}
            >
               Hisob (Calculus)
            </Typography>
            <Typography
                sx={{
                    color: "#6A6A6A",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "150%"
                }}
            >
               15.01.2022 10:00 - 15.01.2022 16:00
            </Typography>
            </OlympicsPaper>
            <OlympicsPaper elevation={0} sx={{borderRadius: "10px", padding: "24px 20px"}}>
            <Typography
                sx={{
                    color: "#000000",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "normal",
                    mb: "12px"
                }}
            >
               Fizika I
            </Typography>
            <Typography
                sx={{
                    color: "#6A6A6A",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "150%"
                }}
            >
               15.01.2022 10:00 - 15.01.2022 16:00
            </Typography>
            </OlympicsPaper>
            <OlympicsPaper elevation={0} sx={{borderRadius: "10px", padding: "24px 20px"}}>
            <Typography
                sx={{
                    color: "#000000",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "normal",
                    mb: "12px"
                }}
            >
              Antennalar va to‘lqinlarning tarqalishi
            </Typography>
            <Typography
                sx={{
                    color: "#6A6A6A",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "150%"
                }}
            >
               15.01.2022 10:00 - 15.01.2022 16:00
            </Typography>
            </OlympicsPaper>
        </OlympicsWrapper>
    </ContentWrapper>
  )
}
