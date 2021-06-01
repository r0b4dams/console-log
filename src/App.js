import React, {useEffect,useState, useReducer } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import API from "./components/utils/API";
import Dashboard from "./components/DashboardContainer";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import HomePage from "./components/_pages/HomePage"
import GamePage from "./components/_pages/GamePage"
import Walkthrough from "./components/_pages/OneWalkPage"
import Login from "./components/_pages/Login"
// import Dashboard from "./components/DashboardContainer"  //will need to update once Dashboard is created
import SearchPage from "./components/_pages/SearchPage"
import {useHistory} from "react-router-dom";
export const AppContext = React.createContext();

const initialState = {
  searchText: '',
};

function reducer(state, action) {
  switch (action.type) {
      case 'UPDATE_INPUT':
          return {
            searchText: action.data
          };
      default:
          return initialState;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const [loginFormState, setLoginFormState] = useState({
    username:"",
    password:""
  });

  const [signupFormState, setSignupFormState] = useState({
    username:"",
    password:""
  });

  const [userState, setUserState] = useState({
    token:"",
    user:{}
  });

  const history = useHistory();


  // complete
  useEffect(()=>{
    const token = localStorage.getItem("token");
    // console.log(token);
    
    if(token){
      API.getProfile(token).then(res=>{

        // console.log(res.data);

        setUserState({
          token:token,
          user:{
            id:res.data._id,
            name:res.data.username
          }
        })
      }).catch(err=>{
        console.log("no logged in user")
        setUserState({
          token:"",
          user:{}
        })
      })
    } else {
      console.log("no token provided")
    }
    
  },[])

  // complete
  const handleLoginFormSubmit = (e) =>{

    // prevent page refresh
    e.preventDefault();

    // send post request to /auth/login
    API.login(loginFormState).then(res=>{

      console.log(res.data);
      localStorage.setItem("token", res.data.token);

      // set user state to match what was returned by token
      setUserState({
        ...userState,
        token: res.data.token,
        user:{
          name:res.data.user.username,
          id:res.data.user._id
        }
      });

      // reset login form state
      setLoginFormState({
        username:"",
        password:""
      });

    }).catch(err=>{
      console.log("error occured")
      console.log(err);
      localStorage.removeItem("token");
      setUserState({
        token:"",
        user:{}
      })
    })
  }


  const handleSignupFormSubmit = e=>{

    e.preventDefault();
    // console.log(signupFormState);

    API.signup(signupFormState).then(res=>{

      localStorage.setItem("token", res.data.token)

      console.log(res.data); 
      
      setUserState({
        ...userState,
        token: res.data.token,
        user:{
          name:res.data.user.username,
          id:res.data.user._id
        }
      });
      // if (!res.err) {
      //   history.push("/Dashboard");
      // }

    }).catch(err=>{
      console.log("error occured")
      console.log(err);
      localStorage.removeItem("token");
      setUserState({
        token:"",
        user:{}
      })
    })
    setSignupFormState({
      username:"",
      password:""
    })
  }

  const handleLogout = ()=>{
    setUserState({
      token:"",
      user:{}
    })
    localStorage.removeItem("token")
  }

  const handleSearchSubmit = (event)=>{
    alert("yay, form submitted")
    return <HomePage />
  }
  
  return (
    <Router>
    <div className="App">
      <AppContext.Provider value={{ state, dispatch }}>
      <NavBar handleSearchSubmit={handleSearchSubmit}/>
      <Switch>
        <Route exact path="/Login" render={() => (
          <Login 

            user={userState.user} 

            loginFormState={loginFormState} 
            setLoginFormState={setLoginFormState} 
            signupFormState={signupFormState}
            setSignupFormState={setSignupFormState}
            handleSignupFormSubmit={handleSignupFormSubmit}
            handleLogout={handleLogout}
            handleLoginFormSubmit={handleLoginFormSubmit}

          />
        )} />
        <Route exact path="/GamePage/:gameID" component={GamePage} />
        <Route exact path="/Walkthrough/:_id" component={Walkthrough} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/Search" component={SearchPage} />
        <Route path="/" component={HomePage} />
      </Switch>
      <Footer />
      </AppContext.Provider>
    </div>
    </Router>
  );
}

export default App;