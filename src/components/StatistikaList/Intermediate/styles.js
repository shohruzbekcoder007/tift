import styled from "styled-components";

export const IntermediateBoxHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 15px;
    margin-bottom: 20px;
    .qoidalar {
        width: 150px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.theme.color.secondary_color};
        border-radius: 10px;
        cursor:pointer;
        @media (max-width: 576px){
            margin: 0.3rem 0;
        }
    }
    @media (max-width: 575px){
        display: block;
         div {
          margin: 3px 0;
        }
}
`