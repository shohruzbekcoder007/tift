import styled from 'styled-components'

export const InputsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    @media (max-width: 575px){
        flex-wrap: wrap;
        div {
            width: 100%;
        }
    }
`