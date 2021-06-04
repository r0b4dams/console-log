import React, {useState} from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import SpeechRecognition, {useSpeechRecognition,} from "react-speech-recognition";

export default function NavBar( props ) {
  // user this to store user's voice search
  const [voiceSearchTerm, setVoiceSearchTerm] = useState("");
  const [searchPlaceholder, setSearchPlaceholder] = useState("Find a Game...");

  const location = useLocation();
  const history = useHistory();

  const handleFormSubmit = (event)=>{
    event.preventDefault();
    global.searchable=event.target.search.value;
    localStorage.setItem('searchable', event.target.search.value);

    if(location.pathname === "/") {
    window.location.reload(false);
    }
    return history.push('/');
  }

  const commands = [
    {
      command: ["Search *",
                "Search for *", 
                "Find *", 
                "Get *"
               ],
      callback: (game) => voiceSearch(game)
    },
  ];

  // tell react-speech-recognition to use commands
  useSpeechRecognition({ commands });

  // callback function that populates form input with user's voice search
  // then submits form (as if it were typed and submit button clicked)
  const voiceSearch = (searchTerm) => {
      setVoiceSearchTerm(searchTerm);                         // update form value
      document.getElementById("search-form").requestSubmit()  // submit form
  }

  return (
    <div className="py-1 pr-3 mb-0 Barset align-middle grid grid-cols-3 grid-rows-1 grid-flow-col">
      <div className="text-Left">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          <img src="assets/images/Title.png" className="object-contain h-8" alt=""/>
        </Link>
      </div>

      {/* start search bar*/}
      <div className="text-right">
        <div className="grid grid grid-rows-1 grid-flow-col pl-5 flex items-center justify-center">

          {/* Click here to start speech-to-text */}
          {/* Button will not render if browser does not support web speech api */}
          {SpeechRecognition.browserSupportsSpeechRecognition() && 
          <button onClick={SpeechRecognition.startListening}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </button>}

          <form id="search-form" onSubmit={handleFormSubmit}>
            <span className="inset-y-0 left-0 flex items-center pl-2 center">

              <input className="w-full focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-1 pl-2 "
                  defaultValue={voiceSearchTerm} 
                          type="text" 
                   placeholder={searchPlaceholder}
                          name="search"
              />

              <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>

            </span>
          </form>
        </div>
      </div>
      {/* end search bar*/}

      {!props.userState.user.name && <div className="p-2 text-right"><Link to="/Signup" className={location.pathname === "/Signup" ? "nav-link active" : "nav-link"}>SIGN UP</Link>/<Link to="/Login" className={location.pathname === "/Login" ? "nav-link active" : "nav-link"}>LOG IN</Link></div>}
      
      {props.userState.user.name && 
        <span>
        <div className="p-2 text-right">
          <Link to="/Dashboard" className={location.pathname === "/Dashboard" ? "nav-link active" : "nav-link"}>Dashboard</Link>
          <a href="/" className="p-2 text-right" onClick={props.handleLogout}>Logout</a>
        </div>
        </span>
      }
    </div>
  )
}