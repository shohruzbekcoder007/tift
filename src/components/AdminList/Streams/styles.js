import styled from 'styled-components'

export const AttendSearchButton = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
` 

export const WrapperInputsCardTwo = styled.div`
  width: 48%;
  float: right;
  margin-top: 2rem;
`

export const WrapperButtons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 12px;
`

export const ModalBoxTeacher = styled.div`
    border-radius: 10px;
    width: 560px;
    position: absolute;
    height: 600px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 32px 20px;
    max-height: 100%;
    overflow-y: auto;
`

export const ModalBody = styled.div`
    flex-direction: column;
    height: 90%;
    display: flex;
    justify-content: space-between;
`