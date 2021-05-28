import React from "react";

export default function Login({ children }) {
    return (
      <>
      <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-gray-300 bg-opacity-75 rounded-lg text-left overflow-hidden shadow-xl   transform transition-all sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-blue-500 flex items-center justify-center text-white">
            Authentication
          </div>
          <div class="flex items-center justify-center">
            <form className="space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm">
                <div>
                  <label for="email-address" className="sr-only">Email address</label>
                  <input id="email-address" name="email" type="email" autocomplete="email" required   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300   placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500   focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                </div>
                <div>
                  <label for="password" className="sr-only">Password</label>
                  <input id="password" name="password" type="password" autocomplete="current-password" required   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300   placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500   focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w- text-indigo-600   focus:ring-indigo-500 border-gray-300 rounded" />
                  <label for="remember_me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                </div>
                {/* <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div> */}
              </div>
              <div>
                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border   border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 onClick={() => setShowModal(false)}">
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0   012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  Log in
                </button>
              </div>
            </form>
          </div>
  
        {/* <div className="bg-gray-400 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm   px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2   focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">
            Login
          </button>
          <button type="submit" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300   shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2   focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
            Cancel
          </button>
        </div> */}
        </div>
      </div>
      </>
      )
  }