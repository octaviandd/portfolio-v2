/** @format */

import React from "react";
import styled from "styled-components";
import SubHeader from "./Subheader";
import ScrollAnimation from "react-animate-on-scroll";

export default function Header() {
  return (
    <Hero>
      <HeroTitle>
        <div>
          <div>
            <div>
              <ScrollAnimation animateIn="fadeInLeft">
                <React.Fragment>Hi</React.Fragment>
              </ScrollAnimation>
              {/* <ScrollAnimation animateIn="fadeIn">
                <span>,</span>
              </ScrollAnimation> */}
              <ScrollAnimation animateIn="fadeIn" delay="1000">
                <span>I'm Octavian</span>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <HeroSubtitle>Software developer</HeroSubtitle>
      </HeroTitle>
      <SubHeader />
      <ScrollAnimation animateIn="bounceInDown" delay="2500">
        <HeroArrow>
          <i className="far fa-arrow-alt-circle-down"></i>
        </HeroArrow>
      </ScrollAnimation>
    </Hero>
  );
}

const Hero = styled.div`
  background: #89023e;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroTitle = styled.div`
  color: #35b8b7;
  line-height: 1.68;
  text-align: center;
  font-size: 2.875rem;
  margin-top: 15rem;
`;

const HeroSubtitle = styled.div`
  font-size: 1.625rem;
  color: white;
`;

const HeroArrow = styled.div`
  margin-top: 5rem;
  cursor: pointer;

  & i {
    font-size: 2.6rem;
    color: #38b7b6;
  }
`;
