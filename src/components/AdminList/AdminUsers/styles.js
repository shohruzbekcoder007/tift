import styled from "styled-components";

export const BoxHeaderApp = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    justify-content: flex-start;
    gap: 32px;
    margin-bottom: 20px;
    .qoidalar {
        width: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.theme.color.secondary_color};
        border-radius: 10px;
        cursor:pointer;
    }
    @media (max-width: 575px){
        display: block;
    }
`