import styled from 'styled-components'

export const InputsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    @media (max-width: 575px){
        flex-wrap: wrap;
        div {
            width: 100%;
        }
    }
`