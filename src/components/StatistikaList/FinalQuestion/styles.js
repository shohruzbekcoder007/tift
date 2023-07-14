import styled from 'styled-components'

export const CardWrapper = styled.div`
    display: flex;
    padding: 12px 20px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    background-color:${props => props.theme.color.secondary_color};
    border-radius: 10px;
    cursor: pointer;
`