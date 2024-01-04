import styled from 'styled-components';


export const StudentTasksBox = styled.div`
    width: 280px;
    display: grid;
    place-items: center;
    gap: 10px;
    border-radius: 10px;
    flex-wrap: wrap;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    padding: 1rem 0;
    margin: 1em 0;
    @media (max-width: 900px) {
      width: 150px;
    }
`

export const StudentAIButton = styled.button`
    border: 0px;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 170%;
    gap: 10px;
    display: flex;
    cursor: pointer;
    background-color: ${props => props.theme.color};
    @media (max-width: 768px) {
      margin: 0.5rem 0;
    }
`