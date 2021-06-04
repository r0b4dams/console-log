import { Link, useLocation, useHistory } from "react-router-dom";
import SpeechRecognition, {useSpeechRecognition,} from "react-speech-recognition";

export default function NavBar( props ) {

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
      command: "search *",
      callback: () => document.getElementById("search-form").requestSubmit(),
    },
  ];

  const { transcript } = useSpeechRecognition({ commands });

  return (
    <div className="pl-52 py-1 pr-52 py-5 mb-0 Barset align-middle grid grid-cols-3 grid-rows-1 grid-flow-col">
      <div className="">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          <img src="assets/images/Title.png" className="object-contain h-8" alt=""/>
        </Link>
      </div>

      {/* start search bar*/}
      <div className="text-right">
        <div className="grid grid grid-rows-1 grid-flow-col flex">

          {/* Click here to start speech-to-text */}
          {/* Button will not render if browser does not support web speech api */}
          {/* TODO: Need to style this button */}
          {SpeechRecognition.browserSupportsSpeechRecognition() && <button onClick={SpeechRecognition.startListening}>🎤</button>}

          <form id="search-form" onSubmit={handleFormSubmit}>
            <span className="inset-y-0 left-0 flex items-center pl-2 center">

              <input className="w-full focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-1 pl-2 "
                  // transcript contains what the user said
                  // TODO: remove command word from defaultValue field
                  defaultValue={transcript} 
                          type="text" 
                   placeholder="Find a Game..." 
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

      {!props.userState.user.name && <div className="pl-52 py-2"><Link to="/Login" className={location.pathname === "/Login" ? "nav-link active" : "nav-link"}>LOG IN</Link></div>}
      
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