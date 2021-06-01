import userEvent from '@testing-library/user-event';
import React,{useEffect,useState} from 'react'

import API from "../utils/API";

function AddWalkPage({match}) {
  const [plats,setPlats] = useState([]);
  const [game,setGame] = useState([]);
  const platforms=[];
  useEffect(() => {
    API.search(`${parseInt(match.params.gameID)}`, global.filter)
    .then(res=>{
      setGame(res.data);
      setPlats(res.data.platforms);
    })     
  }, [match.params.gameID])

  const [walkthroughState,setWalkthroughState] = useState([]);
  useEffect(() => {
    API.getAllWalkthroughs().then(res=>{
        setWalkthroughState(res.data);
    })
  }, [])

  let thisWalk = walkthroughState.filter(function (e) {
    return e.game_id === parseInt(match.params.gameID);
  })

  plats.map(platform => (
    platforms.push(platform.platform.name)
  ))
  return (
    <>
    <div className="p-2 flex space-x-4 bg-gray-200 bg-opacity-75 mb-2 mx-8 rounded border-2">
      <img src={game.background_image} alt="" className="flex-none w-18 h-18 rounded-lg object-cover" width="100" height="100" />
      <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
        <h2 className="text-lg font-semibold text-black mb-0.5 text-left">
          {game.name} <span className="text-sm">({game.released})</span>
        </h2>
        <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
          <div>
            <dt className="sr-only">Play Time</dt>
            <dd> Playtime: {game.playtime}hr</dd>
          </div>
          <div>
            <dt className="sr-only">Genre</dt>
            <dd> · {game.genre} </dd>
          </div>
          <div className="flex-none w-full mt-0.5 font-normal text-left">
            <dd className="text-black">
              <div className="justify-start py-2 px-1 rounded-full text-sm mr-2 grid grid-rows-1 grid-flow-col">
              {platforms.map(plat => (
                    <span key={plat}>
                      {plat === "PC" && <span>{plat} | </span>} 
                      {plat === "Linux" && <span>{plat} | </span>} 
                      {plat === "macOS" && <span>{plat} | </span>} 
                      {plat === "Android" && <span>{plat} | </span>} 
                      {plat === "iOS" && <span>{plat} | </span>} 
                      {plat === "Nintendo Switch" && <span><img className="consoleIcon" src="./assets/images/nintendo Switch.png" alt="nSwitch"/></span>} 
                      {plat === "Nintendo 64" && <span><img className="consoleIcon" src="./assets/images/nintendo N64.png" alt="n64"/></span>} 
                      {plat === "Xbox One" && <span>{plat} | </span>} 
                      {plat === "Xbox 360" && <span><img className="consoleIcon rounded" src="./assets/images/xbox360.png" alt="xbox360"/></span>} 
                      {plat === "PlayStation 3" && <span>{plat} | </span>} 
                      {plat === "PlayStation 4" && <span><img className="consoleIcon rounded" src="/assets/images/ps4.png" alt="ps4"/></span>} 
                      {plat === "PS Vita" && <span>{plat} | </span>} 
                    </span>
                  ))}
              </div>
            </dd>
          </div>
          <div className="absolute top-0 right-0 rounded-full bg-amber-50 text-amber-900 px-2 py-0.5 sm:flex xl:flex items-center space-x-1">
            <dt className="text-amber-500">
              <span className="sr-only">Rating</span>
            </dt>
            <dd>{game.metacritic && <span>{game.metacritic}%</span>}</dd>
          </div>
        </dl>
      </div>

    </div>
    <div>
      <h1>
          Walkthrough by [user.name]
      </h1>
    </div>
    <div className="artOp bg-cover p-1 flex space-x-4 rounded-lg content-center m-8" style={{ backgroundImage: `url(${game.background_image_additional})`}}>
      <form>
        <input 
          name="Title" 
          className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
          // value = "walkthrough.name"
          placeholder="Walkthrough Title"
        />
        <textarea
          name="Content"
          type="textbox"
          className="resize appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Walkthrough Content"
          >
        </textarea>
        <input 
          name="Link" 
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
          // value = "walkthrough.name"
          placeholder="Link"
        />
      </form>
    </div>
    </>
  );
}

export default AddWalkPage;