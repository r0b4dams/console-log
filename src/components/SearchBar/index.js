import SpeechRecognition, { useSpeechRecognition, } from "react-speech-recognition";


export default function SearchBar(props) {
  return (
    <div className="grid grid grid-rows-1 grid-flow-col pl-5 flex items-center justify-center">

      {/* Click here to start speech-to-text */}
      <button onClick={SpeechRecognition.startListening}>Voice Search</button>

      <form onSubmit={props.handleFormSubmit}>
        <span className="inset-y-0 left-0 flex items-center pl-2 center">
          <input
            className="w-full focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-1 pl-2 "
            type="text"
            defaultValue=""
            placeholder="Find a Game..."
            name="search" />
          <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </span>
      </form>
    </div>
  )
}
