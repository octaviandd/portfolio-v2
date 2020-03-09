/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import { useSpring, animated } from "react-spring";

export default function Frontend() {
  const [content, showContent] = useState(false);

  const contentProps = useSpring({
    opacity: content ? 1 : 0,
    marginTop: content ? 50 : -100
  });

  return (
    <React.Fragment>
      <ScrollAnimation animateIn="fadeInDown">
        <Hero>
          <HeroDescription>
            <h1>Frontend</h1>
            <p>
              Experience with Vanilla JavaScript and React from building
              responsive web applications, knowledge in creating animations and
              color theory.
            </p>
          </HeroDescription>
          <HeroArrow>
            <i
              className="fas fa-angle-double-down"
              onClick={() => showContent(!content)}
            ></i>
          </HeroArrow>
          {!content ? null : (
            <animated.div clasName="box" style={contentProps}>
              <Content>
                <ul>
                  <li>HTML / CSS / JAVASCRIPT</li>
                  <li>REACT / REDUX</li>
                  <li>OOP / FUNCTIONAL PROGRAMMING</li>
                  <li>AJAX / API INTEGRATION</li>
                  <li>RESPONSIVE WEB DESIGN</li>
                </ul>
              </Content>
            </animated.div>
          )}
        </Hero>
      </ScrollAnimation>
    </React.Fragment>
  );
}

const HeroDescription = styled.div`
  color: white;
  background-image: linear-gradient(#fb364e, #1bbdbb);
  padding: 3rem 3rem;
  margin: 3rem 3rem;
  border-radius: 3px;
  line-height: 1.68;

  & h1 {
    margin-bottom: 2rem;
  }
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroArrow = styled.div`
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

const Content = styled.div`
  color: white;
  background-image: linear-gradient(#1bbdbb, #fb364e);
  font-size: 1.3rem;
  padding: 1.3rem 1.3rem;
  line-height: 1.68;
  width: 400px;

  & li {
    list-style: none;
  }
`;
