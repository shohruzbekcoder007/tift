import styled from "styled-components";

export const ThesisHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
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