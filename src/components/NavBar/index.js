import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import SpeechRecognition, { useSpeechRecognition, } from "react-speech-recognition";
import './style.css';

export default function NavBar(props) {
  // user this to store user's voice search
  const [voiceSearchTerm, setVoiceSearchTerm] = useState("");

  const [searchPlaceholder, setSearchPlaceholder] = useState("Find a Game...");
  // let searchPlaceholder = "Find a Game..."

  const location = useLocation();
  const history = useHistory();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    global.searchable = event.target.search.value;
    localStorage.setItem('searchable', event.target.search.value);

    if (location.pathname === "/") {
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
    setSearchPlaceholder(`say "Search for"`)
    setVoiceSearchTerm(searchTerm);                       // update form value
    document.getElementById("search-form").requestSubmit()  // submit form
  }

  const manualSearch = () => {
    document.getElementById("search-form").requestSubmit()
  }

  return (
    <div className="sm:pl-52 py-1 sm:pr-52 mb-0 Barset align-middle grid sm:grid-cols-3 grid-rows-3 sm:grid-rows-1 grid-flow-col">
      <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
      {/* <img id="box" src="https://raw.githubusercontent.com/comatosino/console-log-frontend/develop/public/assets/images/Title.png" className="object-contain h-8 gradient-border" alt="" /> */}
      {/* <img id="box" src="./assets/images/console_log_transparent.png" className="object-contain h-14 gradient-border" alt="" /> */}
      <img id="box" src="/assets/images/console_log.png" className="object-contain h-8 sm:h-12 gradient-border" alt="" />
      </Link>

      {/* start search bar*/}
      <div className="text-right">
        <div className="grid grid grid-rows-1 grid-flow-col">
          <span className="flex items-center pl-0 pt-2">
            <div className="flex-none pt-1">
              {/* Click here to start speech-to-text */}
              {/* Button will not render if browser does not support web speech api */}
              {SpeechRecognition.browserSupportsSpeechRecognition() &&
                <button onClick={SpeechRecognition.startListening} className="button p1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </button>}
            </div>
            <div className="flex-grow">
              <form id="search-form" onSubmit={handleFormSubmit}>
                <input id="search-input" className="w-full focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-1 pl-2"
                  defaultValue={voiceSearchTerm}
                  type="text"
                  placeholder={searchPlaceholder}
                  name="search"
                />
              </form>
            </div>
            <div className="flex-none">
              <button onClick={manualSearch} className="p-1 focus:outline-none focus:shadow-outline">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>

            </div>
          </span>
        </div>
      </div>
      {/* end search bar*/}

      {!props.userState.user.name && <div className="sm:pl-52 py-2"><Link to="/Login" className={location.pathname === "/Login" ? "nav-link active" : "nav-link"}>LOG IN</Link></div>}

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