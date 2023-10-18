import styled from 'styled-components'

export const WrapperBox = styled.div`
    border-radius: 10px;
    width: 1000px;
    background-color: #fff;
    padding: 32px 20px;
    max-height: 100%;
    overflow-y: auto;
`


export const WrapperHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
        cursor: pointer;
    }
`

export const WrapperSelect = styled.div`
    margin-bottom: 20px;
`

export const WrapperInputsCard = styled.div`
  width: 31%;
`
export const StudentInfoCard = styled.div`
  width: 31%;
  div {
    display: flex;
    margin: 1rem 0;
    align-items: center;
  }
  h3 {
    font-size: 15px;
  }
  b {
    font-weight: 700;
    font-size: 13px;
    margin: 0 0.5rem;
    color: ${props => props.theme.color.main_color};  
  }
`

export const WrapperImgCard = styled.div`
  width: 31%;
  img {
    width: 230px;
    height: 243px;
    border-radius: 10px;
    object-fit: contain;
    /* border: 1px solid gray; */
  }
`

export const WrapperInputsCardTwo = styled.div`
  width: 48%;
`

export const WrapperButtons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
`