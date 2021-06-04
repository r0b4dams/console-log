import React,{useEffect,useState} from 'react'
import { Link, useLocation, useHistory } from "react-router-dom";
import Consoles from "../Consoles"
import API from "../utils/API";

function AddWalkPage({userState}) {
  console.log(userState)
  const history = useHistory();
  const location = useLocation();
  const gameID=location.pathname.replace( /^\D+/g, ''); 
  const [plats,setPlats] = useState([]);
  const [game,setGame] = useState([]);
  const platforms=[];
  useEffect(() => {
    API.search(`${parseInt(gameID)}`, global.filter)
    .then(res=>{
      setGame(res.data);
      setPlats(res.data.platforms);
    })     
  }, [gameID])

  const handleAddSubmit = (event)=> {
    let data = 
      {
        "title" : event.target.WalkthroughTitle.value,
        "content" : event.target.WalkthroughContent.value,
        "link" : event.target.WalkthroughLink.value,
        "user_id" : userState.user.id,
        "game_id" : game.id,
        "gameName" : game.name,
        "gameImgLink" : game.background_image
      }
    console.log(data)
    alert ("Walkthrough Saved!")
    API.createWalkthrough(data, userState.token)
    return history.push('/Dashboard');
  }
  plats.map(platform => (
    platforms.push(platform.platform.name)
  ))
  if(userState.token) {
  return (
    <>
    <div className="bg-red-900 text-4xl">ADD</div>
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
      <h1 className="text-4xl text-white">
          Walkthrough by {userState.user.name}
      </h1>
    </div>

    <div className="artOp bg-cover p-1 flex space-x-4 rounded-lg content-center m-8" style={{ backgroundImage: `url(${game.background_image_additional})`}}>

      <form onSubmit={handleAddSubmit} className="w-full">
        <input 
          name="WalkthroughTitle"
          type="text"
          className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm opacity-90" 
          // value = "walkthrough.name"
          placeholder="Walkthrough Title"
          required
        />
        <textarea
          name="WalkthroughContent"
          type="textbox"
          className="appearance-none overflow-y-auto h-52 w-full rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm opacity-90"
          placeholder="Walkthrough Content"
          required
          >
        </textarea>
        <input 
          name="WalkthroughLink"
          type="text"
          className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm opacity-90" 
          // value = "walkthrough.name"
          placeholder="Link (optional)"
        />
          <button type="submit" className="m-2 p-2 w-1/2 text-white border rounded bg-blue-500 bg-opacity-75 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">Submit</button>
      </form>
    </div>
    </>
  )} else {
    return (
      <div>
        Sorry, you must log in or sign up first.
        <Link to={`/Login`} className={location.pathname === "/Login" ? "nav-link active" : "nav-link"}>
          <button>[ Return Home ]</button>
        </Link>
      </div>
    )
  }

}

export default AddWalkPage;
