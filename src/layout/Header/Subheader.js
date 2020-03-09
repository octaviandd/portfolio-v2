/** @format */

import React from "react";
import styled from "styled-components";

export default function Subheader() {
  return (
    <SubHeader>
      <p>
        I'm currently living in Birmingham, United Kindgom. I'm a passionate
        software developer working on the front-end and developing web
        applications and web sites but also on the back-end, interacting with
        databases and graphic user interface applications.
      </p>
    </SubHeader>
  );
}

const SubHeader = styled.div`
  color: white;
  width: 350px;
  margin-top: 10rem;
  text-align: center;

  @media (max-width: 769px) {
    margin-top: 5rem;
  }
`;
