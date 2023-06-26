import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 96px;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #F4F4F4;
  padding: 22px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
  // padding-left: ${props =>  props.big?"304px":"32px"};
  padding-left: 304px;
  @media (max-width: 890px) {
    padding-left: 32px;
  }
`

export const HeaderTitleHamburger = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  span {
    padding-top: 4px;
    display: none;
    @media (max-width: 890px) {
      display: inline-block;
    }
  }
`

export const HeaderTitle = styled.h1`
  font-style: normal;
  line-height: 29px;
  font-weight: ${props => props.theme.text.H1.font_weight};
  font-size: ${props => props.theme.text.H1.font_size};
  color: ${props => props.theme.color.text_color};
`

export const HeaderAccount = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const HeaderAccountTime = styled.p`
  font-style: normal;
  font-weight: ${props => props.theme.text.subtitle1.font_weight};
  font-size: ${props => props.theme.text.subtitle1.font_size};
  line-height: 19px;
  color: ${props => props.theme.color.black};
  padding: 16px;
  background: ${props => props.theme.color.secondary_color};
  border-radius: 10px;
`

export const HeaderAccountItem = styled.div`
  width: 52px;
  height: 52px;
  background: ${props => props.theme.color.secondary_color};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`