import styled from 'styled-components'

export const WrapperBox = styled.div`
    border-radius: 10px;
    width: 620px;
    background-color: #fff;
    padding: 32px 20px;
    max-height: 100%;
    overflow-y: auto;
    display: flex;
    justify-content: space-around;
`

export const BandCard = styled.div`
   width: 90%;
   display: flex;
   justify-content: space-between;
   border-bottom: 2px solid ${props => props.theme.color.secondary_color};
   padding: 1rem 0;
`

export const BandCardIcon = styled.div`
   width: 20%;
   display: flex;
   justify-content: space-between;
  align-items: center;
`

export const BandDiagramm = styled.div`
   display: flex;
   justify-content: space-between;
  align-items: center;
`

export const BandCardText = styled.p`
`