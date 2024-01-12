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
        padding: 30px 10px;
    }
`

export const BoxHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    flex-wrap: wrap;
`

export const BoxFooter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 780){
        flex-wrap: wrap;
        gap: 20px;
        justify-content: flex-end;
    }
`

export const BoxFooterText = styled.p`
    color: #151515;
    font-weight: ${props => props.theme.text.subtitle1.font_weight};
    font-size: ${props => props.theme.text.subtitle1.font_size};
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

    @media (max-width: 576px) {
        width: 350px;
    }
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

export const ClassScheduleTableWrapper = styled.div`
    width: 100%;
    overflow-x: auto;
    
    table {
        /* sizning joriy stil bilan bog'liq qismingiz */
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
                background-color: ${props => props.color === "transparent" ? "transparent" : "#F6F5F1"};
            }
        }

        tr {
            th,
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

`;

export const ClassScheduleTableWrapper2 = styled.div`
    width: 100%;
    overflow-x: auto;
    
    table {
        /* sizning joriy stil bilan bog'liq qismingiz */
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
                background-color: ${props => props.color === "transparent" ? "transparent" : "#F6F5F1"};
            }
        }

        tr {
            th,
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
    /* Ekran o'lchami kichik bo'lganda */
    @media screen and (max-width:678px) 
    {
      tbody, td, th, thead,table tr{
        display:block;
        }
        table thead tr{
            position:absolute;
            top:-9999px;
            left:-9999px;
            /* border-bottom:2px solid #333; */
            }
            
            table tbody tr{
                display: flex;
                border:1px solid rgb(238, 238, 238);
                padding:.25em;
              }
              tr {
                display: flex;
                flex-direction: column !important;
            }
            thead > tr > th {
              display: none;
            }

            th {
              border: none !important;
            }

            tbody > tr > th::before {
              content: attr(data-cell) ": ";
              font-size: 14px;
              margin: 5px 0;
            }

            tbody > tr > th {
              display: flex;
              justify-content: space-between;
              align-items: center;
              flex-wrap: wrap;
              text-align: end;

            }

                table td{
                    border:none!important;
                    position:relative;
                    padding-left:calc(50% + 10px)!important
                }
                
                table td td,table td{
                    text-align:left!important;white-space:pre-wrap;overflow-wrap:break-word
                    
                    }
                    table td td{
                        position:absolute;display:block;left:1rem;width:calc(50% - 20px);font-weight:600
                        }
                      }

`;


export const ClassScheduleTableWrapperAdmin = styled.div`
    width: 100%;
    overflow-x: auto;
    
    table {
        /* sizning joriy stil bilan bog'liq qismingiz */
        width: 100%;
        /* color: ${props => props.theme.color.text_color}; */
        font-size: 12px;
        font-weight: 500;
        line-height: 170%;
        border-collapse: collapse;
        text-align: left;
        .alltr > td {
            font-weight: bold;
        }
        thead {
            border-radius: 10px;
            tr {
                background-color: ${props => props.color === "transparent" ? "transparent" : "#FFFFFF"};
                td {
                    padding: 8px;
                    margin: 0 !important;
                }
            }
        }

        tr {
            th,
            td {
                padding: 5px 12px;
                border: 1px solid #EEE;
                line-height: 170%;
                color: #6A6A6A;
                font-weight: 500;
                /* min-width: -20px; */
                margin: 0px;
            }
        }

        .kurslar {
            color: ${props => props.theme.color.main_color};
            font-size: 16px;
        }

        
        /* .study_type {
            color: ${props => props.theme.color.main_color};
            font-size: 14px;
        } */
        .study_type_tr > td {
            font-size: 14px;
        }

        .study_type_tr > td:nth-child(2n){
            color: ${props => props.theme.color.Orange_color};
        }
        .study_type_tr > td:nth-child(2n-1){
            color: ${props => props.theme.color.Blue_color};
        }

        .count_and_sum > td {
            font-size: 12px;
            /* font-style: italic; */
        }

        .count_and_sum > td:nth-child(2n){
            color: ${props => props.theme.color.main_color};
        }
        .count_and_sum > td:nth-child(2n-1){
            color: ${props => props.theme.color.main_color};
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

`;






















