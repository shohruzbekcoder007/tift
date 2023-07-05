import React from 'react'
import { BoxBody, BoxFooter, BoxFooterText, BoxHeader, ClassScheduleTableWrapper, ContentWrapper } from '../../global_styles/styles'
import { TableTHHeader } from '../DiplomaTable'
import { Pagination, Paper } from '@mui/material'
import PageSelector from '../PageSelector'
import CustomizedInput from '../CustomizedInput'

export default function ThesisResult() {
    return (
        <ContentWrapper>
            <Paper
                elevation={0}
                sx={{
                    width: '100%',
                    padding: "20px",
                    borderRadius: "10px"
                }}
            >
                <BoxHeader>
                    <PageSelector chageValueFunction={(val) => {
                        console.log(val)
                    }} />
                    <CustomizedInput callback_func={(val) => { console.log(val) }} />
                </BoxHeader>
                <BoxBody>
                <ClassScheduleTableWrapper>
                    <table>
                        <thead>
                            <tr>
                                <TableTHHeader
                                    text={"Mavzu"}
                                    iconc={null}
                                />
                                <TableTHHeader
                                    text={"Rahbat"}
                                    iconc={null}
                                />
                                <TableTHHeader
                                    text={"Taqdimot"}
                                    iconc={null}
                                />
                                <TableTHHeader
                                    text={"Diplom ishi"}
                                    iconc={null}
                                />
                                <TableTHHeader
                                    text={"Qo’shimcha"}
                                    iconc={null}
                                />
                                <TableTHHeader
                                    text={"Olingan baho"}
                                    iconc={null}
                                />
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th colSpan={8} align='center'>Ma’lumot yo’q</th>
                            </tr>
                        </tbody>
                    </table>
                </ClassScheduleTableWrapper>
                </BoxBody>
                <BoxFooter>
                    <BoxFooterText>{`Jami 3 ta, 1 dan 3 gachasi ko'rsatilmoqda`}</BoxFooterText>
                    <Pagination count={10} shape="rounded" color="primary" onChange={(_, value) => { console.log(value) }} />
                </BoxFooter>
            </Paper>
        </ContentWrapper>
    )
}
