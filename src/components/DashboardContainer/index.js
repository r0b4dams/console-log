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

function DashboardContainer({ match }) {
  const location = useLocation();

  const [user, setUser] = useState([]);
  useEffect(() => {
    API.search(`${parseInt(match.params.userID)}`, global.filter)
      .then(res => {
        setUser(res.data);
      })
  }, [match.params.userID])

  const [walkthroughState, setWalkthroughState] = useState([]);
  useEffect(() => {
    API.getAllWalkthroughs().then(res => {
      setWalkthroughState(res.data);
    })
  }, [])

  let thisWalk = walkthroughState.filter(function (e) {
    return e.user_id === parseInt(match.params.userID);
  })

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
          {thisWalk.map((walkthrough) => (
            <Walk key={walkthrough._id} walkthrough={walkthrough} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default DashboardContainer;