import styled from "styled-components";

export const SelectorText = styled.span`
    display: inline-block;
    color: #151515;
    font-weight: ${props => props.theme.text.subtitle1.font_weight};
    font-size: ${props => props.theme.text.subtitle1.font_size};
`