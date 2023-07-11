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
    margin-bottom: 16px;
`

export const ThematicBlockBoxs = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 18px
`

export const ThematicBlockBox = styled.div`
    background-color: #fff;
    padding: 12px 10px;
    border-radius: 10px;
    display: inline-block;
    max-width: 356px;
`

export const ThematicBlockBoxHeader = styled.div`
    padding: 16px;
    border-bottom: 1px solid #EEE;
    h5 {
        font-weight: ${props => props.theme.text.subtitle1.font_weight};
        font-size: ${props => props.theme.text.subtitle1.font_size};
        color: #000;
    }
`

export const ThematicBlockBoxBody = styled.div`
    padding: 16px;
    p {
        font-weight: ${props => props.theme.text.subtitle2.font_weight};
        font-size: ${props => props.theme.text.subtitle2.font_size};
        color: ${props => props.theme.color.secondary_text_color};
        line-height: 150%;
    }
`