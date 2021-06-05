export default function Consoles( {platforms} ) {
    return (
      <>
        {platforms.map(plat => (
          <span key={plat}>
            {plat === "PC" &&               <span className="space-x-0"><img className="consoleIcon rounded bg-black"  src="/assets/images/PC.jpg" alt="PC"/></span>} 
            {plat === "Linux" &&            <span className="space-x-1"><img className="consoleIcon rounded bg-black"  src="/assets/images/linux.png" alt="linux"/></span>} 
            {plat === "macOS" &&            <span className="space-x-1"><img className="consoleIcon"                   src="/assets/images/macOS.png" alt="macOS"/></span>} 
            {plat === "Android" &&          <span className="space-x-1"><img className="consoleIcon rounded"           src="/assets/images/android.jpg" alt="android"/></span>} 
            {plat === "iOS" &&              <span className="space-x-1"><img className="consoleIcon rounded"           src="/assets/images/ios.jpg" alt="ios"/></span>} 
            {plat === "Nintendo Switch" &&  <span className="space-x-1"><img className="consoleIcon"                   src="/assets/images/nintendo%20Switch.png" alt="nSwitch"/></span>} 
            {plat === "Nintendo 64" &&      <span className="space-x-1"><img className="consoleIcon"                   src="/assets/images/nintendo N64.png" alt="n64"/></span>} 
            {plat === "Xbox Series S/X" &&  <span className="space-x-1"><img className="consoleIcon rounded bg-black"  src="/assets/images/xboxSX.JPG" alt="xBoxS/X"/></span>} 
            {plat === "Xbox One" &&         <span className="space-x-1"><img className="consoleIcon rounded bg-black"  src="/assets/images/Xbox_One_Logo.jpg" alt="xBoxOne"/></span>} 
            {plat === "Xbox 360" &&         <span className="space-x-1"><img className="consoleIcon rounded"           src="/assets/images/xbox360.png" alt="xbox360"/></span>} 
            {plat === "PlayStation 3" &&    <span className="space-x-1"><img className="consoleIcon rounded bg-black"  src="/assets/images/playstation3.png" alt="ps3"/></span>} 
            {plat === "PlayStation 4" &&    <span className="space-x-1"><img className="consoleIcon rounded"           src="/assets/images/ps4.png" alt="ps4"/></span>} 
            {plat === "PlayStation 5" &&    <span className="space-x-1"><img className="consoleIcon rounded"           src="/assets/images/ps5.JPG" alt="ps5"/></span>} 
            {plat === "PS Vita" &&          <span className="space-x-1"><img className="consoleIcon rounded"           src="/assets/images/PSvita.png" alt="psVita"/></span>} 
          </span>
        ))}
      </>
    )
}