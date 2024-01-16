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
`


export const TeacherSciencesButtonBox2 = styled.div`
     width: 100%;
     cursor: pointer; 
     display: flex;
     justify-content: center;

      @media (max-width: 768px) {
        width: 30%;
        justify-content: space-between !important;
      }
`

export const TableStyle = styled.th`
    justify-content: center;

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-between !important;
    }
`



export const ModalSubtitle = styled.p`
  margin: 10px 0;
`