import SearchBar from "../SearchBar"
import { Link, useLocation } from "react-router-dom";

export default function NavBar(props) {
  const location = useLocation();
  
  return (
    <div className="py-1 pr-3 mb-0 Barset align-middle grid grid-cols-3 grid-rows-1 grid-flow-col">
      <div className="text-Left">
        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg> */}
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          <img src="assets/images/Title.png" className="object-contain h-8" alt=""/>
        </Link>
      </div>
      <div className="text-right"><SearchBar /></div>
      <div className="p-2 text-right"><Link to="/Signup" className={location.pathname === "/Signup" ? "nav-link active" : "nav-link"}>SIGN UP</Link>/<Link to="/Login" className={location.pathname === "/Login" ? "nav-link active" : "nav-link"}>LOG IN</Link></div>
      <div className="p-2 text-right"><Link to="/Dashboard" className={location.pathname === "/Dashboard" ? "nav-link active" : "nav-link"}>Dashboard</Link>/<Link to="/Walkthrough" className={location.pathname === "/Walkthrough" ? "nav-link active" : "nav-link"}>Walkthrough</Link></div>
      <div className="p-2 text-right"></div>
    </div>
  )
}