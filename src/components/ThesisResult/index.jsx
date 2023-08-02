import React from 'react'
import { BoxBody, BoxFooter, BoxFooterText, BoxHeader, ClassScheduleTableWrapper, ContentWrapper } from '../../global_styles/styles'
import { TableTHHeader } from '../DiplomaTable'
import { Pagination, Paper } from '@mui/material'
import PageSelector from '../PageSelector'
import CustomizedInput from '../CustomizedInput'
import { useSelector } from 'react-redux'
import languageList from './language.json'

export default function ThesisResult() {

    const language = useSelector(state => state.language)

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
                                        text={languageList.Theme[language]}
                                        iconc={null}
                                    />
                                    <TableTHHeader
                                        text={languageList.Teacher[language]}
                                        iconc={null}
                                    />
                                    <TableTHHeader
                                        text={languageList.Presentation[language]}
                                        iconc={null}
                                    />
                                    <TableTHHeader
                                        text={languageList.DiplomaWork[language]}
                                        iconc={null}
                                    />
                                    <TableTHHeader
                                        text={languageList.Additional[language]}
                                        iconc={null}
                                    />
                                    <TableTHHeader
                                        text={[languageList.Score[language]]}
                                        iconc={null}
                                    />
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th colSpan={8} align='center'>{languageList.NoInfo[language]}</th>
                                </tr>
                            </tbody>
                        </table>
                    </ClassScheduleTableWrapper>
                </BoxBody>
                <BoxFooter>
                    <BoxFooterText>{`${languageList.Total[language]} 3 ${languageList.Ta[language]}, ${languageList.From[language]} 1 ${languageList.To[language]} 3 ${languageList.AreShown[language]}`}</BoxFooterText>
                    <Pagination count={10} shape="rounded" color="primary" onChange={(_, value) => { console.log(value) }} />
                </BoxFooter>
            </Paper>
        </ContentWrapper>
    )
}
