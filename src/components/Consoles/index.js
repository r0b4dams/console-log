export default function Consoles( {platforms} ) {
    return (
      <>
        {platforms.map(plat => (
          <span key={plat}>
            {plat === "PC" && <span>{plat} | </span>} 
            {plat === "Linux" && <span>{plat} | </span>} 
            {plat === "macOS" && <span>{plat} | </span>} 
            {plat === "Android" && <span>{plat} | </span>} 
            {plat === "iOS" && <span>{plat} | </span>} 
            {plat === "Nintendo Switch" && <span><img className="consoleIcon" src="https://raw.githubusercontent.com/comatosino/console-log-frontend/develop/public/assets/images/nintendo%20Switch.png" alt="nSwitch"/></span>} 
            {plat === "Nintendo 64" && <span><img className="consoleIcon" src="./assets/images/nintendo N64.png" alt="n64"/></span>} 
            {plat === "Xbox One" && <span>{plat} | </span>} 
            {plat === "Xbox 360" && <span><img className="consoleIcon rounded" src="https://raw.githubusercontent.com/comatosino/console-log-frontend/develop/public/assets/images/xbox360.png" alt="xbox360"/></span>} 
            {plat === "PlayStation 3" && <span>{plat} | </span>} 
            {plat === "PlayStation 4" && <span><img className="consoleIcon rounded" src="/assets/images/ps4.png" alt="ps4"/></span>} 
            {plat === "PS Vita" && <span>{plat} | </span>} 
          </span>
        ))}
      </>
    )
}