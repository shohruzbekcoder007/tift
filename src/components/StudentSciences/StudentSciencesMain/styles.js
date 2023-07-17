import styled from 'styled-components';


export const StudentSciencesMainHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    flex-wrap: wrap;
    @media (max-width: 420px){
        flex-direction: column-reverse;
        align-items: flex-end;
        gap: 20px;
    }
`