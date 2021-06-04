import { Link, useLocation } from "react-router-dom";
import Consoles from "../Consoles"

export default function Game({ game }) {
  const location = useLocation();
  const platforms = [];

  if (game.platforms) {
    game.platforms.map(platform => (
      platforms.push(platform.platform.name)
    ))

    return (
      <>
        <Link to={`/GamePage/${game.id}`} className={location.pathname === "/GamePage" ? "nav-link active" : "nav-link"}>
          <article className="grid grid-flow-col bg-cover gameCard p-2 flex space-x-4 mb-2 mx-8 rounded hover:bg-gray-300 border-2" style={{
            backgroundImage: `url(${game.background_image})`
          }}>
            <div className="min-w-0 relative flex-auto bg-gray-200 bg-opacity-80 rounded px-1 grid grid-rows-1 grid-flow-col">
              <div className="flex w-32 row-span-1 p-2">
                <img src={game.background_image} alt="" className="flex-none w-18 h-18 rounded-lg object-cover" width="100" height="100" />
              </div>
              <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20 ">
                <h2 className="text-lg font-semibold text-black mb-0.5 text-left px-0">
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
                        <Consoles platforms={platforms} />
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
          </article>
        </Link>
      </>
    )
  } else {
    return (
      <div className="p-2 flex space-x-4 bg-red-200 bg-opacity-75 mb-2 mx-8 rounded border-2">
        No Results found!
      </div>
    )
  }
}