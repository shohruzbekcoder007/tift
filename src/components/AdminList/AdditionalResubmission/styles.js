import styled from 'styled-components'

export const AttendSearchButton = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const SemesterModalBoxInfo = styled.div`
    border-radius: 10px;
    width: 801px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 32px 20px;
    max-height: 100%;
    overflow-y: auto;
    
    .modal_box_body {
      display:flex;
      justify-content: space-between;
    }
`

export const SemesterModalSelectWrapperInfo = styled.div`
    width: 48%;
    margin-bottom: 20px;
`
export const SemesterModalButtonsInfo = styled.div`
    width: 50%;
    float: end;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
`