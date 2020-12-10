import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Header = styled.h1`
  font-size: 2rem;
`;

const Photo = (props) => (
  <Wrapper>
    <Header>{props.photo.title}</Header>
    <img src={props.photo.url} alt={props.photo.title} />
    <p>{props.photo.explanation}</p>
  </Wrapper>
);
export default Photo;
