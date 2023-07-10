import styled from 'styled-components';

export const CardWrapper = styled.div`
   width: 100%;
   height: 50px;
   border-radius: 10px;
   padding: 0 1rem ;
   display: flex;
   justify-content: start;
   align-items: center;
   background-color: white;
`

export const CardWrapperTitle = styled.p`
   font-size: 15px;
   color: ${props => props.theme.color.main_color};
`
