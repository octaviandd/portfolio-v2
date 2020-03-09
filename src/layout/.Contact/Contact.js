/** @format */

import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <Hero>
      <HeroTitle>
        <p id="contact">Contact</p>
      </HeroTitle>
      <HeroLinks>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a href="#">
            <i className="far fa-envelope"> octaviandd@yahoo.com</i>
          </a>
        </div>
        <HeroCenter>
          <a href="https://www.linkedin.com/in/octavian-david-41b610180/">
            <i className="fab fa-linkedin"> LinkedIn</i>
          </a>
          <a href="https://github.com/octaviandd">
            <i className="fab fa-github"> GitHub</i>
          </a>
          <a href="https://stackoverflow.com/users/12143300/octaviandd">
            <i className="fab fa-stack-overflow"> StackOverFlow</i>
          </a>
        </HeroCenter>
      </HeroLinks>
    </Hero>
  );
}

const Hero = styled.div`
  background: #37505c;
  height: 100%;
  padding-bottom: 5rem;
`;

const HeroTitle = styled.div`
  color: #35b8b7;
  line-height: 1.68;
  text-align: center;
  font-size: 2.875rem;
  text-transform: uppercase;
  font-weight: 600;

  & p {
    padding-top: 5rem;
    margin-bottom: 3rem;
  }
`;

const HeroLinks = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;

  & div a {
    color: #dfe6e9;
    font-size: 20px;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    border: 1.5px solid transparent;
    padding: 5px 10px;
    border-radius: 5px;
    margin-bottom: 2rem;

    &:hover {
      color: #6fa2a2;
      border: 1.5px solid #6fa2a2;
    }

    &:active: {
      color: #6fa2a2;
      border: 1.5px solid #6fa2a2;
    }

    &:focus {
      color: #6fa2a2;
      border: 1.5px solid #6fa2a2;
    }
  }
`;

const HeroCenter = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 769px) {
    flex-direction: column;
    align-items: center;
  }
`;
