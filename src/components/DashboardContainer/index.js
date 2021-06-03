import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import API from "../utils/API";
import Game from "../Game"
import Walk from "../Walk"
import Dashboard from "../_pages/Dashboard";
import Footer from "../Footer"
import FavGroup from "../FavGroup"
import Card from "../Card"

function DashboardContainer({ userState }) {
  console.log("Dashboard: "+userState.token)
  const [walkthroughState, setWalkthroughState] = useState([]);
  useEffect(() => {
    API.getUserWalkthrough(userState.user.id).then(res => {
      // console.log(res.data)
      setWalkthroughState(res.data);
    })
  }, [userState.user.id])

  const [favWalkthrough,setfavWalkthrough] = useState([]);
  useEffect(() => {
    API.getAllWalkthroughs().then(res=>{
      setfavWalkthrough(res.data);
    })     
  }, [])

  useEffect(() => {
    API.getProfile(userState.token).then(res => {
      console.log("user data:" + res.data.user)
    })
  }, [userState.user.id])

  console.log("userState: "+ userState.favs)
  console.log(favWalkthrough)
  let favWalk = favWalkthrough.filter(function (e) {
    // return userState.favs.includes(e._id);  //filter for favorites
  })

  console.log(favWalk)

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
          <h1>Your Walkthroughs:</h1>
          {walkthroughState.map((walkthrough) => (
            <Walk key={walkthrough._id} walkthrough={walkthrough} userState={userState}/>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DashboardContainer;