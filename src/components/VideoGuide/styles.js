import styled from "styled-components";

export const VideoResponsiveBox = styled.div`
    background-color: #fff;
    padding: 16px 16px 20px 16px;
    display: inline-block;
    border-radius: 10px;
    min-height: 293px;
    width: 113%;
    max-width: 511px;
`

export const VideoResponsive = styled.div`
    min-height: 293px;
    width: 100%;
    max-width: 511px;

`

export const VideoResponsiveFooter = styled.div`
    width: 100%;
    padding-top: 16px;
`

export const VideoTitle = styled.p`
  font-style: normal;
  line-height: 19.36px;
  font-weight: ${props => props.theme.text.subtitle1.font_weight};
  font-size: ${props => props.theme.text.subtitle1.font_size};
  color: #000000;
`