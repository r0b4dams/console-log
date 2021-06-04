import React from "react";
import { Redirect } from 'react-router-dom'
import '../assets/Login.css';

export default function Login(props) {
  return (
    <>
      <div className="fixed inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-gray-300 bg-opacity-75 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full">
          <div id="heading" className="flex items-center justify-center text-white">Login</div>
          {!props.user.name ? (<>
            <form onSubmit={props.handleLoginFormSubmit}>
              <input
                name="username"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={props.loginFormState.username}
                onChange={(e) => props.setLoginFormState({ ...props.loginFormState, username: e.target.value })}
              />
              <input
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={props.loginFormState.password}
                onChange={(e) => props.setLoginFormState({ ...props.loginFormState, password: e.target.value })}
              />
              <input
                className="p-1 rounded justify-center text-white"
                id="button"
                type="submit"
                value="Login"
              />
            </form>
            <div id="heading" className="flex items-center justify-center text-white">Sign Up</div>

            <form onSubmit={props.handleSignupFormSubmit}>
              <input
                name="name"
                placeholder="Username"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={props.signupFormState.username}
                onChange={(e) => props.setSignupFormState({ ...props.signupFormState, username: e.target.value })} />
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={props.signupFormState.password}
                onChange={(e) => props.setSignupFormState({ ...props.signupFormState, password: e.target.value })} />
              <input className="p-1 rounded justify-center text-white" id="button" type="submit" value="Sign Up" />
            </form>
          </>) : (
            <>
              <h1>Welcome back, {props.user.name}</h1>
              <button onClick={props.handleLogout}>Logout</button>
              <Redirect to='Dashboard' />
            </>
          )}
        </div>
      </div>


      {/* FUTURE DEVELOPMENT */}
      {/* <div className="flex items-center">
                  <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w- text-indigo-600   focus:ring-indigo-500 border-gray-300 rounded" />
                  <label for="remember_me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                </div> */}
      {/* <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div> */}


    </>
  )
}