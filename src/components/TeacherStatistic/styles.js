import styled from 'styled-components';

export const TeacherDashboardInformations = styled.div`
  padding-bottom: 52px;
  width: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
`

export const TeacherStatisticWrapper = styled.div`
  width: 380px;
  height: 190px;
  border-radius: 8px;
  background-color: #FFF;
  border: 3px solid #039E5170;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

export const TeacherStatisticWrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75%;
  padding: 0.8rem 1rem;

`
export const WrapperHeaderLeft = styled.div`
    color: ${props => props.theme.color.main_color};
    display: grid;
    gap: 20px;
  h2 {
    font-size: 45px;
  }
  p {
    font-weight: 500;
  }
`
export const WrapperHeaderRight = styled.div`
  svg {
    width: 155px;
    height: 85px;
    color: ${props => props.theme.color.frame_color};
  }
`
export const TeacherStatisticWrapperBottom = styled.div`
  width: 100%;
  height: 25%;
  border-radius: 0 0 8px 8px;
  background-color: ${props => props.theme.color.frame_color};
  color: ${props => props.theme.color.secondary_text_color};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    margin: 0 0.5rem;
    color: ${props => props.theme.color.main_color};
  }
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

export const TeacherDashboardPagination = styled.div`
  height: 52px;
  width: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 32px;
`