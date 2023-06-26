import styled from "styled-components";

export const EmptyPanelWrapper = styled.div`
    padding: 20px 90px;
    background-color: #fff;
    width: 522px;
    margin: 0 auto;
    border-radius: 10px;
    display: flex;
    span.iconc {
        margin-right: 8px;
    }
    span.text {
        color: #CA0000;
        text-align: center;
        font-weight: ${props => props.theme.text.subtitle1.font_weight};
        font-size: ${props => props.theme.text.subtitle1.font_size};
    }
`