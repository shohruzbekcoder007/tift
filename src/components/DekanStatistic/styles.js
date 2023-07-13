import styled from 'styled-components'

export const DekanStatisticRow = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
`
export const DekanStatisticCol = styled.div`
   width: 263px;
`
export const DekanStatisticCard = styled.div`
   width: 100%;
   background-color: white;
   display: flex;
   gap: 10px;
   align-items: center;
   padding: 20px;
   border-radius: 10px;
   cursor: pointer;
   transition: 0.3s ease-in-out;
   :hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
   }
`
export const DekanStatisticCardIcon = styled.span`
  width: 50px;
  height: 50px;
`

export const DekanStatisticCardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  color: black;
`