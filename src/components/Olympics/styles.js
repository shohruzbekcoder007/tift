import styled from "styled-components";
import { Paper } from '@mui/material'

export const OlympicsWrapper = styled.div`
    display: flex;
    gap: 18px;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    @media (max-width: 660px){
        justify-content: space-between;
    }
`

export const OlympicsPaper = styled(Paper)`
    width: calc(33.3% - 18px);
    padding: 20px;
    border-radius: 10px;
    @media (max-width: 660px){ 
        width: calc(50% - 18px);
    }
    @media (max-width: 440px){ 
        width: 100%;
    }
`