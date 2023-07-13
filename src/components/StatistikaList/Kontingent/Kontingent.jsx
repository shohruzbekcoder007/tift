import React from 'react'
import { BoxBody, BoxFooter, BoxFooterText, BoxHeader, ClassScheduleTableWrapper, ContentWrapper } from '../../../global_styles/styles'
import { Pagination, Paper } from '@mui/material'
import { TableTHHeader } from '../../DiplomaTable'
import Button from '@mui/material/Button'
import AllSelect from '../../AllSelect'
export default function Kontingent() {
    return (
        <>
            <Paper
                elevation={0}
                sx={{
                    width: '100%',
                    padding: "20px",
                    borderRadius: "10px"
                }}
            >
                <BoxHeader>
                    <AllSelect
                        chageValueFunction={val => { console.log(val) }}
                        selectOptions={[
                            {
                                value: "1",
                                name: "Barchasi"
                            },
                            {
                                value: "2",
                                name: "2021-2022 Ikkinchi semestr uchun qayta o’qish"
                            },
                            {
                                value: "3",
                                name: "2020-2021 Ikkinchi semestr uchun qayta o’qish"
                            }
                        ]}
                    />
                    <AllSelect
                        chageValueFunction={val => { console.log(val) }}
                        selectOptions={[
                            {
                                value: "1",
                                name: "Barchasi"
                            },
                            {
                                value: "2",
                                name: "2021-2022 Ikkinchi semestr uchun qayta o’qish"
                            },
                            {
                                value: "3",
                                name: "2020-2021 Ikkinchi semestr uchun qayta o’qish"
                            }
                        ]}
                    />
                    <AllSelect
                        chageValueFunction={val => { console.log(val) }}
                        selectOptions={[
                            {
                                value: "1",
                                name: "Barchasi"
                            },
                            {
                                value: "2",
                                name: "2021-2022 Ikkinchi semestr uchun qayta o’qish"
                            },
                            {
                                value: "3",
                                name: "2020-2021 Ikkinchi semestr uchun qayta o’qish"
                            }
                        ]}
                    />
                </BoxHeader>
                <BoxBody>
                    Goo Brat
                </BoxBody>
                <BoxFooter>
                    <BoxFooterText>{`Jami 3 ta, 1 dan 3 gachasi ko'rsatilmoqda`}</BoxFooterText>
                    <Pagination count={10} shape="rounded" color="primary" onChange={(_, value) => { console.log(value) }} />
                </BoxFooter>
            </Paper>
        </>
    )
}
