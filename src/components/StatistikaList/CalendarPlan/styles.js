import styled from "styled-components";

export const CalendarBox = styled.div`
  width: 540px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  /* background-color: red; */
  padding: 0 1rem 0rem 1rem;
  button {
    display: flex;
    justify-content: space-around;
    border: none;
    padding: 0.5rem;
    border-radius: 20px;
    margin: 2px;
    gap: 10px;
    cursor: pointer;
  }
`