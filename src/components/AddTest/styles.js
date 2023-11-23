import styled from "styled-components";

export const ThesisHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    @media (max-width: 576px) {
        display: block;
    }
`

export const ThesisBody = styled.div`
    width: 100%;
    margin-bottom: 20px;
`

export const ThesisFooter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ThesisFooterText = styled.p`
    color: #151515;
    font-weight: ${props => props.theme.text.subtitle1.font_weight};
    font-size: ${props => props.theme.text.subtitle1.font_size};
`


export const ModalBoxTest = styled.div`
    border-radius: 10px;
    width: 85%;
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