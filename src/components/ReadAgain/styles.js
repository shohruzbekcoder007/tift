import styled from 'styled-components';

export const ReadAgainWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 18px;
    align-items: start;
    justify-content: space-between;

    @media (max-width: 576px) {
        display: grid;
    }
`

export const ReadAgainLeft = styled.div`
    width: 730px;
`

export const ReadAgainReight = styled.div`
    width: 356px;
`

export const ReadAgainReightSumma = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 32px;
`