import styled from 'styled-components';

export const TeacherSciencesButtonBox = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    
    @media screen and (max-width: 768px) {
        justify-content: center;
        flex-wrap: wrap;
        a {
            width: 45%;

            button {
                width: 90%;
                font-size: 12px;
            }
        }
    }
`