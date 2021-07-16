import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export default function NoEventToday() {
  let history = useHistory()
    return(
        <Wrapper>
      <p>You have nothing planned for the day!</p>
      <p className="TapMsg">Tap " + " to add a task.</p>
      </Wrapper>
    )
}
const Wrapper = styled.div`
  text-align: center;
  margin: auto;
  padding-top: 30px;
  font-size: 1.2rem;
  .TapMsg {
    padding-top: 15px;
    font-size: 1.3rem;
  }
`;