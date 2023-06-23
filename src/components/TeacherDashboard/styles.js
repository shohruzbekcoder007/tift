import styled from 'styled-components';

export const TeacherDashboardWrapper = styled.div`
  width: 356px;
  height: auto;
  border-radius: 10px;
  padding: 0.8rem 1rem;
  margin: 1rem 0;
  background-color: #FFF;
`

export const TeacherDashboardDate = styled.p`
  color: ${props => props.theme.color.secondary_text_color};
`

export const TeacherDashboardTitle = styled.h5`
  color: ${props => props.theme.color.black};
  font-size: 18px;
  margin: 7px 0 10px 0;
  font-weight: 500
`

export const TeacherDashboardSubTItle = styled.p`
  color: ${props => props.theme.color.secondary_text_color};
`
export const TeacherDashboardButton = styled.button`
  width: 100%;
  height: 50px;
  margin: 2rem 0 1rem 0 ;
  border: none;
  border-radius: 10px;
  font-size: ${props => props.theme.text.subtitle1.font_size};
  font-weight: ${props => props.theme.text.H1.font_weight};
  cursor: pointer;
  color: ${props => props.theme.color.black};
`