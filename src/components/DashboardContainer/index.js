import React, { useEffect, useState } from 'react'
import API from "../utils/API";
import Walk from "../Walk"
import Dashboard from "../_pages/Dashboard";
import Footer from "../Footer"

function DashboardContainer({ userState }) {
  const [favList, setFavList] = useState();
  const [walkthroughState, setWalkthroughState] = useState([]);

  // used for generating user's walkthroughs
  useEffect(() => {
    if (userState.user.id) {
      API.getUserWalkthrough(userState.user.id).then(res => {
        // console.log(res.data)
        setWalkthroughState(res.data);
      })
    }
  }, [userState.user.id])

  useEffect(() => {
    if (userState.user.id) {
      API.getUserFav(userState.user.id).then(res => {
        const favArray = [];
        res.data.favs.forEach(element => {
          favArray.push(element)
        });
        setFavList(favArray);
      })
    }
  }, [userState.user.id])

  return (
    <div className="mx-48">
      <Dashboard />

      <div className="grid grid-cols-2 w-full">
        <div className="content-left mx-8 space-x-8 w-11/12 p-2 bg-gray-200 bg-opacity-75 rounded border-2">
          <h1 className="text-lg mb-2">Your Favorites:</h1>
          {favList && favList.map((walkthrough) => (
            <span className="grid grid-cols-6 gap-0 " key={walkthrough._id}>
              <div className="col-span-5"><Walk key={walkthrough._id} walkthrough={walkthrough} userState={userState} /></div>
            </span>
          ))}
        </div>
        <div className="content-right space-x-8 w-11/12 p-2 bg-gray-200 bg-opacity-75 rounded border-2">
          <div className="text-lg mb-2"><h1>Your Walkthroughs:</h1></div>
          {walkthroughState && walkthroughState.map((walkthrough) => (
            <span className="grid grid-cols-6 gap-0 " key={walkthrough._id}>
              <div className="col-span-5"><Walk key={walkthrough._id} walkthrough={walkthrough} userState={userState} /></div>
            </span>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default DashboardContainer;