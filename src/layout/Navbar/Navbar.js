/** @format */

import React from "react";
import { animated, useSpring, config } from "react-spring";
import styled from "styled-components";
import Menu from "./Menu";
import CollapseMenu from "./CollapseMenu";

export default function Navbar(props) {
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0,0,0)",
    config: config.slow
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.slow
  });

  return (
    <React.Fragment>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <NavLinks style={linkAnimation}>
            <a href="">skills</a>
            <a href="">projects</a>
            <a href="">contact</a>
            <a href="">random</a>
          </NavLinks>
          <BurgerWrapper>
            <Menu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </React.Fragment>
  );
}

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: transparent;
  z-index: 100;
  font-size: 1.1rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    border: 1.5px solid transparent;
    padding: 5px 10px;
    border-radius: 5px;

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

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;
