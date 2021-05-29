import React, { Component } from "react";
import Home from "../_pages/Home";
import NavBar from "../NavBar"
import Footer from "../Footer"
import GameGroup from "../GameGroup"
import WalkGroup from "../WalkGroup"

import games from "../games.json"
import walkthroughs from "../walkthroughs.json"

class DashboardContainer extends Component {
  state = {
    games,
    walkthroughs
  };

  render() {
    return (
      <div>
        <NavBar />
        {/* <Dashboard /> */}

        <div className="grid grid-flow-col">
          <div className="col">
            <GameGroup games={games}/>
          </div>
          <div className="col">
            <WalkGroup walkthroughs={walkthroughs}/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DashboardContainer;