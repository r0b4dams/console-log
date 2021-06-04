import userEvent from '@testing-library/user-event';
import React,{useEffect,useState} from 'react'
import { useLocation, useHistory, useRouteMatch } from "react-router-dom";
import Consoles from "../Consoles"
import API from "../utils/API";

function UpdateWalkPage({userState}) {
  const history = useHistory();
  const location = useLocation();
  let match = useRouteMatch("/UpdateWalkthrough/:_id");
  const [walkthrough,setWalkthrough] = useState([]);

  useEffect(() => {
    API.getOneWalkthrough(match.params._id).then(res => {
      setWalkthrough(res.data);
    })
  }, [match.params._id])

  const [plats,setPlats] = useState([]);
  const [game,setGame] = useState([]);
  const platforms=[];
 console.log(walkthrough)
  useEffect(() => {
    API.search(`${parseInt(walkthrough.game_id)}`, global.filter)
    .then(res=>{
      setGame(res.data);
      setPlats(res.data.platforms);
    })     
  }, [walkthrough.game_id])

  useEffect(() => {
    if(plats) {
    plats.map(platform => (
      platforms.push(platform.platform.name)
    ))
    }
  }, [plats])

  const handleUpdateSubmit = (event)=> {
    let data = 
      {
        title : event.target.WalkthroughTitle.value,
        content : event.target.WalkthroughContent.value,
        link : event.target.WalkthroughLink.value
      }
    // console.log(JSON.stringify(data))
    alert ("Walkthrough Updated!")
    API.updateWalkthrough(data, walkthrough._id, userState.token)
    return history.push('/Dashboard');
  }
  if(platforms && game) {
  return (
    <>
    <div className="bg-green-600 text-4xl p-2">Update Walkthrough</div>
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

      <form onSubmit={handleUpdateSubmit} className="w-full">
        <input 
          name="WalkthroughTitle"
          type="text"
          className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm opacity-90" 
          defaultValue = {walkthrough.title}
          placeholder="Walkthrough Title"
          required
        />
        <textarea
          name="WalkthroughContent"
          type="textbox"
          className="appearance-none overflow-y-auto h-52 w-full rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm opacity-90"
          defaultValue = {walkthrough.content}
          placeholder="Walkthrough Content"
          required
          >
        </textarea>
        <input 
          name="WalkthroughLink"
          type="text"
          className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm opacity-90" 
          defaultValue = {walkthrough.link}
          placeholder="Link (optional)"
        />
          <button className="m-2 p-2 w-1/2 text-white border rounded bg-green-500 bg-opacity-75 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">Update</button>
      </form>
    </div>
    </>
  );}
}

export default UpdateWalkPage;
