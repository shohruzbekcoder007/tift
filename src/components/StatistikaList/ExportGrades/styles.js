import styled from "styled-components";

export const GradeBoxHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 15px;
    margin-bottom: 20px;
    .qoidalar {
        width: 150px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.theme.color.secondary_color};
        border-radius: 10px;
        cursor:pointer;
        @media (max-width: 576px){
            margin: 0.3rem 0;
        }
    }
    @media (max-width: 575px){
        display: block;
         div {
          margin: 3px 0;
        }
}
`

export const GradeBoxDowload = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  /* background-color: red; */
  padding: 0 1rem 0rem 1rem;
  button {
    width: 65px;
    display: flex;
    justify-content: space-around;
    border: none;
    padding: 0.5rem;
    border-radius: 20px;
    margin: 2px;
    cursor: pointer;
  }
`
