import React, { Component } from "react";
import OneWalkPage from "../_pages/OneWalkPage";
import NavBar from "../NavBar"
import Footer from "../Footer"
import OneWalk from "../OneWalk"

import games from "../games.json"
import walkthroughs from "../walkthroughs.json"

class OneWalkContainer extends Component {
  state = {
    games,
    walkthroughs
  };

  render() {
    return (
      <div>
        <NavBar />
        {/* <OneWalkPage /> */}

        <OneWalk walkthrough={walkthroughs[0]} />
        <Footer />
      </div>
    );
  }
}

export default OneWalkContainer;