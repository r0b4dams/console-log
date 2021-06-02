import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import API from "../utils/API";
import Walk from "../Walk"
import Dashboard from "../_pages/Dashboard";
import Footer from "../Footer"
import GameGroup from "../GameGroup"
import WalkGroup from "../WalkGroup"
import FavGroup from "../FavGroup"
import Card from "../Card"

import games from "../testData/games.json"
import walkthroughs from "../testData/walkthroughs.json"

function DashboardContainer({ match, userState }) {
  const location = useLocation();

  const [gameState, setGameState] = useState([]);

  const [walkthroughState, setWalkthroughState] = useState([]);
  useEffect(() => {
    API.getUserWalkthrough(userState.user.id).then(res => {
      console.log(res.data)
      setWalkthroughState(res.data);
    })
  }, [userState.user.id])

  console.log(walkthroughState.game_id)

  return (
    <div>
      <Dashboard />

      <div className="grid grid-flow-col">
        <div className="col">
          <Card heading="Favorites">
            <FavGroup />
          </Card>
        </div>
        <div className="col">
          <GameGroup games={games} />
          <h1>Your Walkthroughs:</h1>
          {walkthroughState.map((walkthrough) => (
            <Walk key={walkthrough._id} walkthrough={walkthrough} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default DashboardContainer;