import React,{useEffect,useState} from 'react'
import { Link, useLocation } from "react-router-dom";
import API from "../utils/API";
import Walk from "../Walk"
import Consoles from "../Consoles"

function GamePage({match}) {
  const location = useLocation();
  
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
                <Consoles platforms={platforms}/>
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
      {game.website && 
        <div>
          Official Website: <a href={game.website} target="_blank" rel="noreferrer">{game.website}</a>
        </div>
      }
    </div>
    <div className="artOp bg-cover p-1 flex space-x-4 rounded-lg content-center m-8" style={{ backgroundImage: `url(${game.background_image_additional})`}}>
      <div className="min-w-0 bg-gray-200 bg-opacity-80 rounded px-1" dangerouslySetInnerHTML={{__html: game.description}}></div>
    </div>
    Walkthroughs:
    <div className="w-1/2 content-center m-8">
      {thisWalk.map((walkthrough) => (
          <Walk key={walkthrough._id} walkthrough={walkthrough} />
      ))}
    </div>
    <Link to={`/AddWalkthrough/${game.id}`} className={location.pathname === "/AddWalkthrough" ? "nav-link active" : "nav-link"}>
      <button className="rounded-full py-1 px-6 bg-red-700 border-2 border-red-600 hover:bg-red-500 text-white">+ Add a Walkthrough</button>
    </Link>
    </>
  );
}

export default GamePage;
