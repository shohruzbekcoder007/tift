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
  // padding-left: ${props => props.big ? "304px" : "32px"};
  padding-left: 304px;
  @media (max-width: 890px) {
    padding-left: 32px;
  }
  z-index: 99;

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
  transition: all 0.2s ease 0s;

  svg {
    color: #1A1818;
  }

  .active div {
    background-color: ${props => props.theme.color.main_color} !important;
  }
  .active svg {
    color: white;
  }

  @media (max-width: 685px) {
      position: absolute;
      top: 95px;
      background: #fff;
      width: 100%;
      left: 0;
      box-shadow: 1px 26px 28px -21px #ccc;
      border-top: 1px solid #ccc;
      height: ${props => props.open ? 'auto' : '0'};
      padding: ${props => props.open ? '15px' : '0'};
      transition: all 0.2s ease 0s;
      overflow: hidden;
    }
    @media (max-width: 350px) {
      flex-wrap: wrap;
      justify-content: center;
    }
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
  @media (max-width: 350px) {
      width: 100%;
      text-align: center;
    }
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

export const TreeDots = styled.span`
  display: none;
  cursor: pointer;
  @media (max-width: 685px) {
    display: block;
  }
`