import React, { Component } from "react";
import OneWalkPage from "../_pages/OneWalkPage";
import Footer from "../Footer"
import OneWalk from "../OneWalk"

import walkthroughs from "../walkthroughs.json"

class OneWalkContainer extends Component {
  state = {
    walkthroughs
  };

  render() {
    return (
      <div>
        {/* <OneWalkPage /> */}

        <OneWalk walkthrough={walkthroughs[0]} />
        <Footer />
      </div>
    );
  }
}

export default OneWalkContainer;