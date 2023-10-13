import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 450px;
  height: auto;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px 20px;
  margin: ${props => props.margin ? "0 1rem " : "0"};

  @media (max-width: 570px) {
    margin: 1rem 0;
    width: 100%;
  }
  `
export const HeaderWrapperTop = styled.div`
  width: 100%;
  height: 20%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 20px;

  img {
    width: 70px;
    height:70px;
    border-radius: 50%;
    background-color: ${props => props.theme.color.secondary_color};
    object-fit: contain;
    display: flex;
    align-items: center;
    @media (max-width: 456px) {
     width: 110px;
    }
  }
  `

export const HeaderWrapperTopDiv = styled.div`
    display: block;
  `
export const HeaderWrapperH4 = styled.h4``
export const HeaderWrapperP = styled.p``

export const EditIcon = styled.div`
    width: 35px;
    height: 35px;
    background-color: ${props => props.theme.color.main_color};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
    @media (max-width: 456px) {
      width: 55px;
    }
`

export const WrapperBody = styled.div`
  margin: 1.8rem 0;
  display: flex;
  justify-content: space-between;
  gap: 30px;
`

export const WrapperBodyContract = styled.div`
  margin: 1.8rem 0;
  display: grid;
  gap: 10px;
`

export const Hr = styled.hr`
    width:100%;
    height: 2px;
    background-color: ${props => props.theme.color.secondary_color};
`


export const HeaderWrapperBottom = styled.div`
  height: 80%;
  width: 100%;
  padding: 1rem 0;
  `

export const InfoBody = styled.div`
    display: flex;
    @media (max-width: 570px) {
      width: 100%;
      display: block;
    }
  `


export const ModalBoxInfo = styled.div`
    border-radius: 10px;
    width: 1060px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 32px 20px;
    max-height: 100%;
    overflow-y: auto;
    
    .modal_box_body {
      display:flex;
      justify-content: space-between;
    }

    @media (max-width: 576px) {
      .modal_box_body {
        display: grid;
        place-items: center;
      }
      width: 350px;
    }
`

export const ModalSelectWrapperInfo = styled.div`
    width: 32%;
    margin-bottom: 20px;
    @media (max-width: 576px) {
      width: 100%;
    }
`
export const ModalButtonsInfo = styled.div`
    width: 50%;
    float: end;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    @media (max-width: 576px) {
      width: 100%;
    }
`