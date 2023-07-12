import styled from 'styled-components'

export const DekanStatisticRow = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`
export const DekanStatisticCol = styled.div`
   flex-basis: 25%;
   padding: 0 10px;
   margin: ${props => props.size ? "1rem 0 0 0" : 0};
`
export const DekanStatisticCard = styled.div`
   width: 100%;
   background-color: white;
   display: flex;
   gap: 10px;
   align-items: center;
   padding: 1.3rem 1rem;
   border-radius: 10px;
   cursor: pointer;
   transition: 0.3s ease-in-out;
   :hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
   }
`
export const DekanStatisticCardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
`