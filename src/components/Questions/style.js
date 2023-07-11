import styled from "styled-components";

export const ImportButton = styled.button`
    width: 130px;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items:center;
    border-radius: 10px;
    padding: 0 2rem;
    border: none;
    margin: 0 1rem;
    color: ${props => props.theme.color.text_color};
    cursor: pointer;
    @media (max-width: 576px) {
      margin: 1rem 1rem 0 0;
    }
    `

export const ImportButton2= styled.button`
    width: 200px;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items:center;
    border-radius: 10px;
    padding: 0 2rem;
    border: none;
    margin: 0 1rem;
    color: ${props => props.theme.color.text_color};
    cursor: pointer;
    @media (max-width: 576px) {
      margin: 1rem 1rem 0 0;
    }
    `