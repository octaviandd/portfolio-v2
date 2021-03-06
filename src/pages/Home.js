/** @format */

import React, { useState } from "react";
import styled from "styled-components";
import Header from "../layout/Header/Header";
import Skills from "../layout/Skills/Skills";
import Projects from "../layout/Projects/Projects";
import Contact from "../layout/Contact/Contact";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </React.Fragment>
  );
}
