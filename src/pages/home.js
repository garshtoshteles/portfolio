import React from "react";

import Hero from "../components/hero";

function home(props) {
  return (
    <Hero title={props.title} subtitle={props.subtitle} text={props.text} />
  );
}

export default home;
