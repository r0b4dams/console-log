import React, { useEffect, useState } from 'react'
import API from "../utils/API";
import '../assets/OneWalkPage.css';
import Rating from "../Rating"
import { useRouteMatch, useHistory } from "react-router-dom";
import moment from 'moment';
import ModalConfirmDelete from "../ModalConfirmDelete"

function OneWalk({ userState }) {
  const history = useHistory();
  let match = useRouteMatch("/Walkthrough/:_id");
  const [fav, setFav] = useState(false);
  const [walkthrough, setWalkthrough] = useState({});
  const [owner, setOwner] = useState(false);

  useEffect(() => {
    API.getOneWalkthrough(match.params._id).then(res => {
      setWalkthrough(res.data);
    })
  }, [match.params._id])

  // don't break this again!
  useEffect(() => {
    if (userState.user.id) {
      API.getUserFav(userState.user.id).then(res => {
        const favArray = [];
        res.data.favs.forEach(element => {
          favArray.push(element._id)
        });
        setFav(favArray.includes(walkthrough._id))
        setOwner(walkthrough.user_id === userState.user.id)
      })
    }
  }, [userState.user.id, walkthrough._id, walkthrough.user_id])

  const handleFav = () => {
    if (fav) {
      setFav(false)
      API.removeFavorite(userState.user.id, match.params._id, userState.token);
    } else {
      setFav(true);
      API.addFavorite(userState.user.id, match.params._id, userState.token);
    }
  }

  const handleEdit = (id) => {
    console.log("Edit: " + id);
    return history.push(`/UpdateWalkthrough/${id}`);
  }

  if (walkthrough) {
    return (
      <div className="mx-48">
        {userState.user.name &&
          <div className="min-w-0 relative flex-auto">
            <Rating userState={userState} walkthrough={walkthrough} />
          </div>
        }
        <article className="p-2 flex space-x-4 bg-gray-200 bg-opacity-75 mx-8 rounded border-2">
          <div className="min-w-0 relative flex-auto px-1">

            {/* {userState.user.name &&
              <div className="min-w-0 relative flex-auto">
             Rate: <Rating userState={userState} walkthrough={walkthrough}/>
              </div>
            } */}
            <h2 className="text-3xl font-semibold text-black mb-0.5 text-left">
              {walkthrough.title}
            </h2>
            <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
              <div className="absolute top-0 right-0 rounded-full bg-amber-50 text-amber-900 px-2 py-0.5 sm:flex xl:flex items-center space-x-1">
                <dt className="text-amber-500">
                  <span className="sr-only">Rating</span>
                  <svg width="16" height="20" fill="gold">
                    <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                  </svg>
                  {userState.user.name && <span>
                    {fav && <button className='text-red-500 outline-false focus:outline-none' onClick={handleFav}>❤</button>}
                    {!fav && <button className='text-white outline-false focus:outline-none' onClick={handleFav}>❤</button>}
                  </span>}
                </dt>
                <dd>{walkthrough.rating}</dd>
              </div>
            </dl>
          </div>
        </article>

        <div className="artOp bg-cover p-1 flex space-x-4 mt-4 mx-8 rounded-lg hover:bg-red-700" style={{
          backgroundImage: `url(${walkthrough.gameImgLink})`
        }}>
          <div className="min-w-0 relative flex-auto bg-gray-200 bg-opacity-80 rounded px-1">
            <dl className="flex flex-wrap font-medium">
              <dt className="sr-only">Game Title</dt>
              <dd className="text-xl underline">{walkthrough.gameName}</dd>
            </dl>
            <dl className="flex flex-wrap font-medium m-2">
              <dd className="text-lg">{walkthrough.content}</dd>
            </dl>
          </div>
        </div>

        <div className="relative mx-8 my-2">
          <dl className="flex flex-wrap font-medium">
            <dt className="sr-only">Date</dt>
            <dd className="text-md">Last Updated: {moment(`${walkthrough.updated}`).format("MM/DD/YYYY")}</dd>
            <div className="absolute bottom-0 right-0">
              <dt className="sr-only">Link</dt>
              <dd className="text-md"><a href={walkthrough.link} target="_blank" rel="noreferrer">{walkthrough.link}</a></dd>
            </div>
          </dl>
        </div>
        {owner &&
          <div>
            <button className="bg-green-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={() => { handleEdit(walkthrough._id) }}>📝Edit</button>
            <ModalConfirmDelete walkthroughID={walkthrough._id} userState={userState} />
            {/* <button className="outline-false focus:outline-none p-3 mx-3 rounded bg-gray-200" onClick={() => { handleDelete(walkthrough._id) }}>❌Delete</button> */}
          </div>
        }
      </div>
    )
  } else {
    return;
  }
}

export default OneWalk;
