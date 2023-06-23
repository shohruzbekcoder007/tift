import styled from 'styled-components';

export const DashboardDetailWrapper = styled.div`
  width: 100%;
  height: auto;
  border-radius: 10px;
  padding: 0.8rem 1rem;
  background-color: #FFF;
`

export const DetailWrapperTitle = styled.h3`
  margin: 0.5rem 0 1rem 0;
  font-size: ${props => props.theme.text.H1.font_size};
  font-weight: ${props => props.theme.text.H1.font_weight};;
`

export const DetailWrapperBody = styled.p`
  font-size: ${props => props.theme.text.subtitle1.font_size};
  color: ${props => props.theme.color.secondary_text_color};
  margin: 1rem 0;
`

export const DetailWrapperDate = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  color: ${props => props.theme.color.black};
  font-size: ${props => props.theme.text.subtitle1.font_size};
  margin: 1rem 0;
  `
