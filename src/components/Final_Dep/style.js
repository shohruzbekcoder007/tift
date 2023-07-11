import styled from "styled-components";

export const IconButton = styled.button`
    border-radius: 10px;
    padding: 8px 12px;
    border: none;
    margin: 10px 10px 10px 0;
    color: ${props => props.theme.color.text_color};
    cursor: pointer;
`