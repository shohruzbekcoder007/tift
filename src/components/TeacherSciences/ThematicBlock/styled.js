import styled from "styled-components";

export const ThematicBlockWrapper = styled.div`
    width: 100%;
`

export const ThematicBlockText = styled.h2`
    color: #000;
    font-weight: ${props => props.theme.text.H2.font_weight};
    font-size: ${props => props.theme.text.H2.font_size};
    line-height: normal;
    font-style: normal;
`