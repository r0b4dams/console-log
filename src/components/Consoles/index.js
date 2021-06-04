export default function Consoles( {platforms} ) {
    return (
      <>
        {platforms.map(plat => (
          <span key={plat}>
            {plat === "PC" &&               <span className="px-2"><img className="consoleIcon rounded bg-black" src="/assets/images/PC.jpg" alt="PC"/></span>} 
            {plat === "Linux" &&            <span className="px-1"><img className="consoleIcon rounded bg-black" src="/assets/images/linux.png" alt="linux"/></span>} 
            {plat === "macOS" &&            <span className="px-1"><img className="consoleIcon" src="./assets/images/macOS.png" alt="macOS"/></span>} 
            {plat === "Android" &&          <span className="px-1"><img className="consoleIcon rounded" src="/assets/images/android.jpg" alt="android"/></span>} 
            {plat === "iOS" &&              <span className="px-1"><img className="consoleIcon rounded" src="/assets/images/ios.jpg" alt="ios"/></span>} 
            {plat === "Nintendo Switch" &&  <span className="px-1"><img className="consoleIcon" src="https://raw.githubusercontent.com/comatosino/console-log-frontend/develop/public/assets/images/nintendo%20Switch.png" alt="nSwitch"/></span>} 
            {plat === "Nintendo 64" &&      <span className="px-1"><img className="consoleIcon" src="./assets/images/nintendo N64.png" alt="n64"/></span>} 
            {plat === "Xbox One" &&         <span className="px-1"><img className="consoleIcon rounded bg-black" src="/assets/images/Xbox_One_Logo.jpg" alt="ps3"/></span>} 
            {plat === "Xbox 360" &&         <span className="px-1"><img className="consoleIcon rounded" src="https://raw.githubusercontent.com/comatosino/console-log-frontend/develop/public/assets/images/xbox360.png" alt="xbox360"/></span>} 
            {plat === "PlayStation 3" &&    <span className="px-1"><img className="consoleIcon rounded bg-black" src="/assets/images/playstation3.png" alt="ps3"/></span>} 
            {plat === "PlayStation 4" &&    <span className="px-1"><img className="consoleIcon rounded" src="/assets/images/ps4.png" alt="ps4"/></span>} 
            {plat === "PS Vita" &&          <span className="px-1"><img className="consoleIcon rounded" src="/assets/images/PSvita.png" alt="psVita"/></span>} 
          </span>
        ))}
      </>
    )
}