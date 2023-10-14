import React from 'react'
import { BoxFooter, BoxFooterText, ContentWrapper } from '../../global_styles/styles'
import { Button, Pagination, Paper, Typography } from '@mui/material'
import { ThesisBody, ThesisHeader } from './styles'
import CustomizedInput from '../CustomizedInput'
import PageSelector from '../PageSelector'
import DiplomaTable from '../DiplomaTable'
import Modal from '@mui/material/Modal'
import AllSelectFullWidth from '../AllSelectFullWidth'
import { ModalBox, ModalButtons, ModalHeader, ModalSelectWrapper } from '../../global_styles/styles'
import CustomizedInputSimple from '../CustomizedInputSimple'
import listLanguage from '../DiplomaTable/language.json'
import { useSelector } from 'react-redux'

export default function Thesis() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const chageRowHadler = (val) => {
        console.log(val)
    }

    const chageSearch = (val) => {
        console.log(val)
    }

    const chagePageHandle = (_, value) => {
        console.log(value)
    }

    // lang
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
                <ThesisHeader>
                    <PageSelector chageValueFunction={chageRowHadler} />
                    <div style={{ display: 'flex', gap: "10px" }}>
                        <CustomizedInput callback_func={chageSearch} />
                        <Button
                            variant="contained"
                            sx={{
                                textTransform: "capitalize",
                                boxShadow: "none",
                                padding: "12px 70px",
                                borderRadius: "10px",
                                fontWeight: "600",
                                fontSize: "14px",
                                lineHeight: "17px"
                            }}
                            onClick={handleOpen}
                            startIcon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_160_5797)">
                                    <path d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433286 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9971 7.34872 18.9426 4.80684 17.0679 2.9321C15.1932 1.05736 12.6513 0.00286757 10 0ZM10 18.3333C8.35183 18.3333 6.74066 17.8446 5.37025 16.9289C3.99984 16.0132 2.93174 14.7117 2.30101 13.189C1.67028 11.6663 1.50525 9.99076 1.82679 8.37425C2.14834 6.75774 2.94201 5.27288 4.10745 4.10744C5.27289 2.94201 6.75774 2.14833 8.37425 1.82679C9.99076 1.50525 11.6663 1.67027 13.189 2.301C14.7118 2.93173 16.0132 3.99984 16.9289 5.37025C17.8446 6.74066 18.3333 8.35182 18.3333 10C18.3309 12.2094 17.4522 14.3276 15.8899 15.8899C14.3276 17.4522 12.2094 18.3309 10 18.3333ZM14.1667 10C14.1667 10.221 14.0789 10.433 13.9226 10.5893C13.7663 10.7455 13.5544 10.8333 13.3333 10.8333H10.8333V13.3333C10.8333 13.5543 10.7455 13.7663 10.5893 13.9226C10.433 14.0789 10.221 14.1667 10 14.1667C9.77899 14.1667 9.56703 14.0789 9.41075 13.9226C9.25447 13.7663 9.16667 13.5543 9.16667 13.3333V10.8333H6.66667C6.44566 10.8333 6.2337 10.7455 6.07742 10.5893C5.92113 10.433 5.83334 10.221 5.83334 10C5.83334 9.77899 5.92113 9.56703 6.07742 9.41074C6.2337 9.25447 6.44566 9.16667 6.66667 9.16667H9.16667V6.66667C9.16667 6.44565 9.25447 6.23369 9.41075 6.07741C9.56703 5.92113 9.77899 5.83333 10 5.83333C10.221 5.83333 10.433 5.92113 10.5893 6.07741C10.7455 6.23369 10.8333 6.44565 10.8333 6.66667V9.16667H13.3333C13.5544 9.16667 13.7663 9.25447 13.9226 9.41074C14.0789 9.56703 14.1667 9.77899 14.1667 10Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_160_5797">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            }
                        >
                            {listLanguage.Add[language]}
                        </Button>
                    </div>
                </ThesisHeader>
                <ThesisBody>
                    <DiplomaTable />
                </ThesisBody>
                {/* <BoxFooter>
                    <BoxFooterText>{`Jami 3 ta, 1 dan 3 gachasi ko'rsatilmoqda`}</BoxFooterText>
                    <Pagination count={10} shape="rounded" color="primary" onChange={chagePageHandle} />
                </BoxFooter> */}
            </Paper>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <ModalBox>
                    <div style={{ marginBottom: '20px' }}>
                        <ModalHeader>
                            <Typography
                                id="keep-mounted-modal-title"
                                variant="h6"
                                component="h4"
                                sx={{
                                    fontSize: "20px",
                                    fontWeight: 600,
                                    color: "#000",
                                }}
                            >
                                {listLanguage.Add[language]}
                            </Typography>
                            <span
                                onClick={handleClose}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.0037 6.00006C17.8162 5.81259 17.5619 5.70728 17.2967 5.70728C17.0316 5.70728 16.7773 5.81259 16.5897 6.00006L12.0037 10.5861L7.41772 6.00006C7.2302 5.81259 6.97589 5.70728 6.71072 5.70728C6.44556 5.70728 6.19125 5.81259 6.00372 6.00006C5.81625 6.18759 5.71094 6.4419 5.71094 6.70706C5.71094 6.97223 5.81625 7.22653 6.00372 7.41406L10.5897 12.0001L6.00372 16.5861C5.81625 16.7736 5.71094 17.0279 5.71094 17.2931C5.71094 17.5582 5.81625 17.8125 6.00372 18.0001C6.19125 18.1875 6.44556 18.2928 6.71072 18.2928C6.97589 18.2928 7.2302 18.1875 7.41772 18.0001L12.0037 13.4141L16.5897 18.0001C16.7773 18.1875 17.0316 18.2928 17.2967 18.2928C17.5619 18.2928 17.8162 18.1875 18.0037 18.0001C18.1912 17.8125 18.2965 17.5582 18.2965 17.2931C18.2965 17.0279 18.1912 16.7736 18.0037 16.5861L13.4177 12.0001L18.0037 7.41406C18.1912 7.22653 18.2965 6.97223 18.2965 6.70706C18.2965 6.4419 18.1912 6.18759 18.0037 6.00006Z" fill="black" />
                                </svg>
                            </span>
                        </ModalHeader>
                    </div>
                    <ModalSelectWrapper>
                        <Typography
                            id="keep-mounted-modal-title"
                            variant="h6"
                            component="h4"
                            sx={{
                                fontSize: "16px",
                                fontWeight: 600,
                                color: "#000",
                                mb: "10px"
                            }}
                        >
                            {listLanguage.Curriculum[language]}
                        </Typography>
                        <AllSelectFullWidth
                            chageValueFunction={val => console.log(val)}
                            selectOptions={[{
                                name: "2021",
                                value: 2021,
                            }]}
                        />
                    </ModalSelectWrapper>
                    <ModalSelectWrapper>
                        <Typography
                            id="keep-mounted-modal-title"
                            variant="h6"
                            component="h4"
                            sx={{
                                fontSize: "16px",
                                fontWeight: 600,
                                color: "#000",
                                mb: "10px"
                            }}
                        >
                            {listLanguage.Degree[language]}

                        </Typography>
                        <AllSelectFullWidth
                            chageValueFunction={val => console.log(val)}
                            selectOptions={[{
                                name: "Bakalavr",
                                value: 12,
                            }]}
                        />
                    </ModalSelectWrapper>
                    <ModalSelectWrapper>
                        <Typography
                            id="keep-mounted-modal-title"
                            variant="h6"
                            component="h4"
                            sx={{
                                fontSize: "16px",
                                fontWeight: 600,
                                color: "#000",
                                mb: "10px"
                            }}
                        >
                            {listLanguage.NumberStudents[language]}

                        </Typography>
                        <CustomizedInputSimple callback_func={val => console.log(val)} />
                    </ModalSelectWrapper>
                    <ModalButtons>
                        <Button
                            sx={{ width: "50%", textTransform: "none", borderRadius: "10px" }}
                            variant="outlined"
                            onClick={handleClose}
                        >
                            {listLanguage.Cancel[language]}

                        </Button>
                        <Button
                            sx={{ width: "50%", textTransform: "none", borderRadius: "10px", boxShadow: "none" }}
                            variant="contained"
                        >
                            {listLanguage.Save[language]}

                        </Button>
                    </ModalButtons>
                </ModalBox>
            </Modal>
        </ContentWrapper>
    )
}
