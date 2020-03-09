/** @format */

import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import { useSpring, animated } from "react-spring";

export default function Projects() {
  return (
    <React.Fragment>
      <Hero>
        <HeroTitle>
          <p>Projects</p>
        </HeroTitle>
        <ProjectList>
          <Project>
            <ScrollAnimation animateIn="fadeInLeft">
              <ProjectImage>
                <ProjectTopBar>
                  <span></span>
                  <span></span>
                  <span></span>
                </ProjectTopBar>
                <ProjectImageContainer1></ProjectImageContainer1>
              </ProjectImage>
            </ScrollAnimation>
            <ProjectDescription>
              <ScrollAnimation animateIn="color-border">
                <h1>invite Me</h1>
                <BorderAnimate
                  animateIn="fadeInRight"
                  delay="1"
                ></BorderAnimate>
              </ScrollAnimation>
              <h4>
                Full stack application in which the back-end was made with
                NodeJS/Express stack while the front-end was completed with
                React/Context API. Data is pulled from and inserted in a MongoDB
                and users can make accounts and manage it with the help of web
                tokens.
              </h4>
              <div>
                <ul>
                  <li>HTML / CSS / JavaScript ES6/ES7</li>
                  <li>ReactJS / Context API</li>
                  <li>Material UI</li>
                  <li>NodeJS / ExpressJS </li>
                  <li>JSON Web Tokens</li>
                </ul>
              </div>
              <div>
                <ScrollAnimation animateIn="flipInX" delay="400">
                  <LinkButton href="#">Live</LinkButton>
                </ScrollAnimation>
                <ScrollAnimation animateIn="flipInX" delay="400">
                  <LinkButton>Source</LinkButton>
                </ScrollAnimation>
              </div>
            </ProjectDescription>
          </Project>
          <Project>
            <ProjectDescription>
              <ScrollAnimation animateIn="color-border">
                <h1>DREAMMARKET</h1>
                <BorderAnimate
                  animateIn="fadeInRight"
                  delay="1"
                ></BorderAnimate>
              </ScrollAnimation>
              <h4>
                Full stack application made for my interest in Psychology, it is
                an application that allows users to write stories about their
                dreams and stories. The front end was build with styling from
                Shards UI while the backend is connected to the Redux Store.
              </h4>
              <div>
                <ul>
                  <li>HTML / CSS / JavaScript ES6/ES7</li>
                  <li>ReactJS / ReduxJS</li>
                  <li>Shards UI</li>
                  <li>NodeJS / ExpressJS </li>
                  <li>ReactJS Particles</li>
                </ul>
              </div>
              <div>
                <ScrollAnimation animateIn="flipInX" delay="400">
                  <LinkButton href="#">Live</LinkButton>
                </ScrollAnimation>
                <ScrollAnimation animateIn="flipInX" delay="400">
                  <LinkButton>Source</LinkButton>
                </ScrollAnimation>
              </div>
            </ProjectDescription>
            <ScrollAnimation animateIn="fadeInRight">
              <ProjectImage>
                <ProjectTopBar>
                  <span></span>
                  <span></span>
                  <span></span>
                </ProjectTopBar>
                <ProjectImageContainer2></ProjectImageContainer2>
              </ProjectImage>
            </ScrollAnimation>
          </Project>
        </ProjectList>
      </Hero>
    </React.Fragment>
  );
}

const Hero = styled.div`
  background: #89023e;
  height: 400vh;
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

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Project = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 5rem;
  margin-bottom: 12.5rem;
  margin-right: 3rem;
  margin-left: 3rem;
  @media (max-width: 769px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

const ProjectImage = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectDescription = styled.div`
  color: white;
  padding: 4rem 4rem;

  & h1 {
    margin-bottom: 2rem;
    font-size: 2.2rem;
  }

  & h4 {
    font-size: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
  }
`;

const ProjectTopBar = styled.div`
  width: 600px;
  background-color: #36505c;
  height: 2rem;
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
  display: flex;
  align-items: center;

  & span {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    margin-left: 10px;
  }

  @media (max-width: 769px) {
    width: 300px;
  }
`;

const ProjectImageContainer1 = styled.div`
  height: 500px;
  width: 600px;
  padding-left: 10px;
  background-image: url("https://github.com/octaviandd/invite-Me/raw/master/pjimage.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 769px) {
    width: 300px;
    height: 250px;
  }
`;

const ProjectImageContainer2 = styled.div`
  height: 500px;
  width: 600px;
  padding-left: 10px;
  background-image: url("https://imgur.com/a/7y2nIHV");
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 769px) {
    width: 300px;
    height: 250px;
  }
`;

const ButtonList = styled.div`
  display: flex;
`;

const LinkButton = styled.a`
  text-decoration: none;
  padding: 1rem 2rem;
  margin-right: 2rem;
  background: #36505c;
  cursor: pointer;
  color: white;
  border: 1px solid #36505c;
  line-height: 1.68;
  border-radius: 5px;
  font-size: 18px;
`;

const BorderAnimate = styled.div``;
