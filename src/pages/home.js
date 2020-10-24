import React from "react";

import Hero from "../components/hero";
import Rotator from "../components/rotator";

function home(props) {
  return (
    <div>
      <Hero title={props.title} subtitle={props.subtitle} text={props.text} />
      <Rotator />
    </div>
  );
}

export default home;
