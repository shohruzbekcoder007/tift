import { Paper } from '@mui/material'
import styled from 'styled-components'

export const NotificationWrapper = styled(Paper)`
    width: 300px;
    max-height: 400px;
    overflow: auto;
    position: absolute;
    top: 100%;
    right: 20px;
    @media (max-width: 685px) {
        left: 0;
        width: 90%;
        margin: 0 auto;
    }
    `

export const NotificationWrapperTop = styled.div`
    width: 100%;
    height: auto;
    background-color: ${props => props.theme.color.main_color};
    color: white;
    padding: 15px 10px;
`


export const NotificationWrapperBody = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    :hover {
        background-color:  ${props => props.theme.color.secondary_color};
    }
    border-bottom: 1px dashed ${props => props.theme.color.secondary_color};
    @media (max-width: 568px) {
        justify-content: start;
    }
`

export const NotificationWrapperBody2 = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    background-color: rgba(250, 102, 102, 0.371);
    :hover {
        background-color: rgba(250, 102, 102, 0.371);
    }
    border-bottom: 1px dashed rgba(250, 102, 102, 0.371);
    @media (max-width: 568px) {
        justify-content: start;
    }
`

export const DeadlineTitle = styled.p`
    font-size: 14px;
    color: ${props => props.theme.color.secondary_text_color};

`

export const DeadlineSubtitle = styled.p`
    font-size: 14px;
    color: ${props => props.theme.color.main_color};
    margin: 0.5rem 0;

`

export const DeadlineDate = styled.p`
margin: 5px 0;
`