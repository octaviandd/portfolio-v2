/** @format */

import React from "react";
import styled from "styled-components";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Othertools from "./Othertools";

export default function Skills() {
  return (
    <Hero>
      <HeroTitle>
        <p>skills</p>
      </HeroTitle>
      <HeroFlex>
        <Frontend />
        <Backend />
        <Othertools />
      </HeroFlex>
    </Hero>
  );
}

const Hero = styled.div`
  background: #37505c;
  min-height: 130vh;
  padding-bottom: 3rem;
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
  }
`;

const HeroFlex = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 769px) {
    flex-direction: column;
  }
`;
