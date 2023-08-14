import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 37%;
  height: auto;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 1rem 0;

  @media (max-width: 570px) {
    margin: 1rem 0;
    width: 100%;
  }
  `

export const HeaderWrapperH4 = styled.h4``
export const HeaderWrapperP = styled.p``

export const WrapperBody = styled.div`
  margin: 1.8rem 0;
  display: flex;
  justify-content: space-between;
`

export const WrapperBottom = styled.div`
  margin: 1.8rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`

export const BoxTableCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const BoxBody = styled.div`
    width: 100%;
    margin-bottom: 20px;
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