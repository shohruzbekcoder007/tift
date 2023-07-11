import styled from 'styled-components';

export const MainWrapper = styled.div`
    padding-top: 96px;
    padding-left: 272px;
    @media (max-width: 890px) {
        padding-left: 0;
    }
`

export const ContentWrapper = styled.div`
    padding: 32px;
    display: flex;
    gap: 18px;
    flex-wrap: wrap;
    @media (max-width: 600px) {
        padding: 15px;
    }
`

export const BoxHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    .qoidalar {
        width: 150px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.theme.color.secondary_color};
        border-radius: 10px;
        cursor:pointer;
        @media (max-width: 576px){
            margin: 0.3rem 0;
        }
    }
    @media (max-width: 575px){
        display: block;
    }
`

export const BoxFooter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const BoxFooterText = styled.p`
    color: #151515;
    font-weight: ${props => props.theme.text.subtitle1.font_weight};
    font-size: ${props => props.theme.text.subtitle1.font_size};
`

export const ClassScheduleTableWrapper = styled.div`
    width: 100%;
    overflow-y: auto;
    table {
        width: 100%;
        color: ${props => props.theme.color.text_color};
        font-size: 12px;
        font-weight: 500;
        line-height: 170%;
        border-collapse: collapse;
        text-align: left;
        thead {
            border-radius: 10px;
            tr {
                background-color: #F6F5F1;
            }
        }
        tr {
            th {
                padding: 12px 12px;
                border: 1px solid #EEE;
                line-height: 170%;
                color: #6A6A6A;
                font-weight: 500;
                min-width: 80px;
            }
        }
        tr {
            td {
                padding: 12px 12px;
                border: 1px solid #EEE;
                line-height: 170%;
                color: #6A6A6A;
                font-weight: 500;
                min-width: 80px;
            }
        }
        tr.hr-tr {
            background-color: ${props => props.theme.color.main_color};
            td {
                margin: 0;
                padding: 0;
                height: 5px;
            }
        }
    }
`

export const TrHeaderBox = styled.div`
    width: 100%;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span.text {
        color: #151515;
        display: inline-block;
        font-size: 12px;
        font-weight: 500;
        line-height: 170%;
        padding-bottom: 2px;
    }
    span.iconc {
        cursor: pointer;
        display: inline-block;
        :hover svg path {
            fill: #039E51;
        }
    }
`

export const BoxBody = styled.div`
    width: 100%;
    margin-bottom: 20px;
`

export const ModalBox = styled.div`
    border-radius: 10px;
    width: 560px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 32px 20px;
    max-height: 100%;
    overflow-y: auto;
`

export const ModalSelectWrapper = styled.div`
    margin-bottom: 20px;
`

export const ModalButtons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
`

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
        cursor: pointer;
    }
`
