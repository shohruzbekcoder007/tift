import styled from 'styled-components';

export const UnableToSpecify = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 200px;
    gap: 4px;
    p {
        color: ${props => props.theme.color.black};
        font-weight: ${props => props.theme.text.subtitle4.font_weight};
        font-size: ${props => props.theme.text.subtitle4.font_size};
    }
`

export const TeacherSciencesButtonBox = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    min-width: 200px;
`



export const ModalBoxInfo = styled.div`
    border-radius: 10px;
    width: 100%;
    max-width: 1200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 32px 20px;
    max-height: 100%;
    overflow-y: auto;
`

export const ModalSubtitle = styled.p`
  margin: 10px 0;
`