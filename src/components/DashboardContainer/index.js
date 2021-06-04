import React, { useEffect, useState } from 'react'
import {useLocation, useHistory } from "react-router-dom";
import API from "../utils/API";
import Walk from "../Walk"
import Dashboard from "../_pages/Dashboard";
import Footer from "../Footer"

function DashboardContainer({ userState }) {
  const history = useHistory();
  const [favList, setFavList] = useState();
  const [walkthroughState, setWalkthroughState] = useState([]);
  const [delWalk, setDelWalk] = useState();

  // used for generating user's walkthroughs
  useEffect(() => {
    if (userState.user.id) {
      API.getUserWalkthrough(userState.user.id).then(res => {
        // console.log(res.data)
        setWalkthroughState(res.data);
      })
    }
  }, [userState.user.id, delWalk])

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

  const handleDelete = (id) => {
    console.log("Delete: " + id);
    //are you sure?
    API.deleteWalkthrough(id, userState.token)
    window.location.reload(false);
  }

  const handleEdit = (id) => {
    console.log("Edit: " + id);
    return history.push(`/UpdateWalkthrough/${id}`);
  }

  return (
    <div>
      <Dashboard />

      <div className="grid grid-cols-2 w-full">
        <div className="content-left mx-8 p-2 flex space-x-4 bg-gray-200 bg-opacity-75 rounded border-2">
          {/* <Card heading="Favorites">
            <FavGroup />
          </Card> */}
          <h1 className="text-lg mb-2">Your Favorites:</h1>
          {favList && favList.map((walkthrough) => (
            <Walk key={walkthrough._id} walkthrough={walkthrough} userState={userState} />
          ))}
        </div>
        <div className="content-right space-x-8 w-11/12 p-2 bg-gray-200 bg-opacity-75 rounded border-2">
          <div className="text-lg mb-2"><h1>Your Walkthroughs:</h1></div>
          {walkthroughState && walkthroughState.map((walkthrough) => (
            <span className="grid grid-cols-6 gap-0 " key={walkthrough._id}>
              <div className="col-span-5"><Walk key={walkthrough._id} walkthrough={walkthrough} userState={userState} /></div>
              {/* <div className="w-auto text-left m-0 p-0 bg-gray-500 auto-cols-max ">
              </div> */}
              <div className="w-20 text-left">
                <button className="outline-false focus:outline-none" onClick={() => { handleDelete(walkthrough._id) }}>❌Delete</button>
                <button className="outline-false focus:outline-none" onClick={() => { handleEdit(walkthrough._id) }}>📝Edit</button>
              </div>
            </span>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default DashboardContainer;