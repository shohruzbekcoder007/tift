import React, { useEffect, useMemo, useState } from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { ScheduleTable } from './styles'
import AllSelectFullWidth from '../../AllSelectFullWidth';
import { ModalSelectWrapper } from '../../../global_styles/styles';
import week_day from '../../../dictionary/week_day'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function DayTable({ oneday, groups, roomList }) {

    const [open, setOpen] = useState(false);

    const weekDays = useMemo(() => {
        return week_day.map(elem => {
            return {
                value: elem.value,
                name: elem.uz
            }
        })
    },[])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (<>
        {
            oneday.map((elem, index) => {
                return (
                    <>
                        <ScheduleTable
                            key={index}
                            onClick={() => {
                                handleClickOpen()
                            }}
                        >
                            {
                                elem.group.map((element, indx) => {
                                    return <span key={indx} style={{ padding: "10px", backgroundColor: "#eee", borderRadius: "10px", margin: "5px", display: "inline-block", color: "#000" }}>{element}</span>
                                })
                            }
                        </ScheduleTable>
                        {/* <Button variant="outlined" onClick={handleClickOpen}>
                            Open dialog
                        </Button> */}
                        <BootstrapDialog
                            onClose={handleClose}
                            aria-labelledby="customized-dialog-title"
                            open={open}
                        >
                            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                                Dars jadvaliga qo'shish
                            </DialogTitle>
                            <IconButton
                                aria-label="close"
                                onClick={handleClose}
                                sx={{
                                    position: 'absolute',
                                    right: 8,
                                    top: 8,
                                    color: (theme) => theme.palette.grey[500],
                                }}
                            >
                                <CloseIcon />
                            </IconButton>
                            <DialogContent dividers style={{width: "450px"}}>
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
                                        Group
                                    </Typography>
                                    <AllSelectFullWidth
                                        chageValueFunction={val => console.log(val)}
                                        selectOptions={groups}
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
                                        Weekday
                                    </Typography>
                                    <AllSelectFullWidth
                                        chageValueFunction={val => console.log(val)}
                                        selectOptions={weekDays}
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
                                        Para
                                    </Typography>
                                    <AllSelectFullWidth
                                        chageValueFunction={val => console.log(val)}
                                        selectOptions={[
                                            {
                                                name: 1,
                                                value: 1
                                            },
                                            {
                                                name: 2,
                                                value: 2
                                            },
                                            {
                                                name: 3,
                                                value: 3
                                            },
                                            {
                                                name: 4,
                                                value: 4
                                            },
                                            {
                                                name: 5,
                                                value: 5
                                            },
                                            {
                                                name: 6,
                                                value: 6
                                            }
                                        ]}
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
                                        Room
                                    </Typography>
                                    <AllSelectFullWidth
                                        chageValueFunction={val => console.log(val)}
                                        selectOptions={roomList}
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
                                        Types
                                    </Typography>
                                    <AllSelectFullWidth
                                        chageValueFunction={val => console.log(val)}
                                        selectOptions={[]}
                                    />
                                </ModalSelectWrapper>
                            </DialogContent>
                            <DialogActions>
                                <Button autoFocus onClick={handleClose}>
                                    Save changes
                                </Button>
                            </DialogActions>
                        </BootstrapDialog>
                    </>
                )
            })
        }
    </>)
}
