import React, { useEffect, useState } from 'react'
import API from "../utils/API";

function OneWalk({ match }) {
  const [walkthrough, setWalkthrough] = useState([]);
  useEffect(() => {
    API.getOneWalkthrough(match.params._id).then(res => {
      setWalkthrough(res.data);
    })
  }, [match.params._id])

  if (walkthrough) {
    return (
      <div>
        <article className="artOp bg-cover p-1 flex space-x-4 mr-8 rounded-lg hover:bg-red-700" style={{
          backgroundImage: `url(${walkthrough.gameImgLink})`
        }}>
          <div className="min-w-0 relative flex-auto bg-gray-200 bg-opacity-80 rounded px-1">
            <h2 className="text-sm font-semibold text-black mb-0.5 text-left">
              {walkthrough.title}
            </h2>
            <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
              <div>
                <dt className="sr-only">Game</dt>
                <dd>{walkthrough.gameName}</dd>
              </div>
              <div className="absolute top-0 right-0 rounded-full bg-amber-50 text-amber-900 px-2 py-0.5 sm:flex xl:flex items-center space-x-1">
                <dt className="text-amber-500">
                  <span className="sr-only">Rating</span>
                  <svg width="16" height="20" fill="gold">
                    <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                  </svg>
                </dt>
                <dd>{walkthrough.rating}</dd>
              </div>
            </dl>
          </div>
        </article>

        <div className="mt-4 mx-8">
          <dl className="flex flex-wrap font-medium">
            <dt className="sr-only">Game Title</dt>
            <dd className="text-xl underline">Game: {walkthrough.gameName}</dd>
          </dl>
          <dl className="flex flex-wrap font-medium">
            <dd className="text-lg">{walkthrough.content}</dd>
          </dl>
        </div>

        <div className="relative mx-8 fixed">
          <dl className="flex flex-wrap font-medium min-h-screen items-end">
            <dt className="sr-only">Date</dt>
            <dd className="text-md">Last Updated: {walkthrough.updated}</dd>
            <div className="absolute bottom-0 right-0">
              <dt className="sr-only">Link</dt>
              <dd className="text-md"><a href={walkthrough.link}>{walkthrough.link}</a></dd>
            </div>
          </dl>
        </div>
      </div>
    )
  } else {
    return;
  }
}

export default OneWalk;
