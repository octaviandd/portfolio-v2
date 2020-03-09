/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import { useSpring, animated } from "react-spring";

export default function Backend() {
  const [content, showContent] = useState(false);
  const contentProps = useSpring({
    opacity: content ? 1 : 0,
    marginTop: content ? 50 : -100
  });
  return (
    <ScrollAnimation animateIn="fadeInDown">
      <Hero>
        <HeroDescription>
          <h1>Backend</h1>
          <p>
            Using Express framework to interact with a database and create
            servers which will be linked to the front-end applications for a
            better experience.
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
                <li>NodeJS / ExpressJS / MongoDB / JWT</li>
                <li>FireStore</li>
                <li>Socket.io</li>
                <li>bcrypt</li>
                <li>Electron</li>
              </ul>
            </Content>
          </animated.div>
        )}
      </Hero>
    </ScrollAnimation>
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

const HeroArrow = styled.div`
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
