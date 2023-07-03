import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  width: 454px;
  height: auto;
  border-radius: 10px;
  background-color: #FFF;
  padding: 32px 20px;
`

export const ProfileWrapperTitle = styled.h4`
  color: #000;
  font-size: 20px;
  font-family: Inter;
  font-weight: 600;
`

export const SelectCard = styled.div`
 width: 100%;

 .select {
  width: 100%;
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: none;
  background-color: ${props => props.theme.color.stroke_color} !important;
  margin: 1rem 0;

  .option {
    border: none;
  }
 }
`

export const ProfileWrapperSubtitle = styled.p`
  font-size: ${props => props.theme.text.subtitle1.font_size};
  font-weight: ${props => props.theme.text.subtitle1.font_weight};
  margin: 1rem 0 0.5rem 0;
`

export const PasswordInput = styled.input`
  width: 100%;
  padding: 18px;
  background-color: ${props => props.theme.color.stroke_color} !important;
  border-radius: 10px;
  border: none;
  outline: none;
`

export const ProfileButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0 0 0;
 `
 
export const ProfileButton = styled.button`
  width: 45%;
  height: 45px;
  text-aligin: center; 
  background-color: white;
  border-radius: 10px;
  border: 3px solid ${props => props.theme.color.main_color} !important;
  cursor: pointer;

  @media (max-width: 576px){ 
    // width
  }
`


export const ProfileLogOut = styled.div`
  display: flex;
  place-items:center;
  max-width: 454px;
  height: auto;
  border-radius: 10px;
  background-color: #FFF;
  padding: 20px;
  margin: 1rem 0;
  cursor: pointer;
`