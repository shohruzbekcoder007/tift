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
  width: 50%;
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