import styled from "styled-components";
import { Paper } from '@mui/material'

export const PersonalPlanWrapper = styled.div`
    display: flex;
    gap: 18px;
    flex-wrap: wrap;
    width: 100%;
`
export const PersonalPlanPaper = styled(Paper)`
    width: calc(50% - 18px);
    padding: 20px;
    border-radius: 10px;
    height: 400px;
    @media (max-width: 740px){
        width: 100%;
    }
`