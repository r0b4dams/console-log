import React from "react";
// import { useHistory } from "react-router-dom";
// import API from "../utils/API";

export default function Modal(props) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button className="mx-5 bg-red-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowModal(true)}>Delete</button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none bg-cover" style={{ backgroundImage: `url('/assets/images/world-explodes.jpg')` }}>
                {/*header*/}
                <div className="bg-red-300 opacity-80 flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">WARNING: DELETING PERMANENTLY</h3>
                  <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-90 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)}>
                    <span className="bg-transparent text-black opacity-90 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ❌
                       </span>
                  </button>
                </div>
                {/*body*/}
                <div className="bg-white opacity-90 relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Are you sure you want to Delete this walkthrough? Once deleted, it cannot be recovered
                   </p>
                </div>
                {/*footer*/}
                <div className="bg-white opacity-80 flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowModal(false)}>
                    Close
                   </button>
                  {/* <button className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => props.handleDelete()}> */}
                  <form id="search-form" onSubmit={props.handleDelete}>
                    <button className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="submit">
                      Delete Walkthrough
                   </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}