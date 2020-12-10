import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 1.25rem;
  padding: 0.25rem;
`;
const DateInput = (props) => (
  <Wrapper>
    <form
      onSubmit={props.changeDate}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <H1>Enter a date (YYYY-MM-DD):</H1>
      <input />
      <input
        type="submit"
        style={{
          background: "black",
          color: "white",
          marginLeft: "2rem",
        }}
      />
    </form>
  </Wrapper>
);

export default DateInput;
