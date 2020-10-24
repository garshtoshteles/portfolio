import React from "react";
import Content from "../components/content";
import Hero from "../components/hero";

function about(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>
          Greetings. My name is Tj Scott and I'm a full-stack web developer with
          a Philosophy, B.A. and a Psychology B.S.. I specialize in UI/UX
          development and am adept in Node JS, React, Oracle SQL, and Express
          JS.
        </p>
        <p>
          I'm driven by any position that enables me to help people. Ethics and
          morality are always on my mind and I pride myself on my analytic
          thinking.
        </p>
        <p>
          I graduated VCU in December of 2019 and graduated from Univeristy of
          Richmond's Web Development Bootcamp in November 2020. Working on my
          skills and testing my capabilities never tire me.
        </p>
        <p>
          I'm currently developing a web app that enables renters to rate and
          discuss their property owners and managers. You can find it
          <a href="https://github.com/garshtoshteles/Project-3"> here</a>, as
          well as the rest of my projects
          <a href="https://github.com/garshtoshteles"> here</a> or on this
          website's homepage.
        </p>
        <p>Take it easy and love yourself. No one can do it for you.</p>
        <p></p>
      </Content>
    </div>
  );
}

export default about;
