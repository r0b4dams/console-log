import React, {useEffect,useState, useReducer } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import './App.css';
import API from "./components/utils/API";
import Dashboard from "./components/DashboardContainer";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import HomePage from "./components/_pages/HomePage"
import GamePage from "./components/_pages/GamePage"
import Walkthrough from "./components/_pages/OneWalkPage"
import AddWalkPage from "./components/_pages/WalkPageAdd"
import UpdateWalkPage from "./components/_pages/WalkPageUpdate"
import Login from "./components/_pages/Login"
import SearchPage from "./components/_pages/SearchPage"
export const AppContext = React.createContext();

function App() {

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
    user:{},
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
            name:res.data.username,
            favs:res.data.favs
          }
        })
      }).catch(err=>{
        console.log("no logged in user")
        setUserState({
          token:"",
          user:{},
          favs:[]
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
        },
        favs: res.data.favs
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
        user:{},
        favs:[]
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
        },
        fav: res.data.users.favs 
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
        user:{},
        favs:[]
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
      user:{},
      favs:[]
    })
    localStorage.removeItem("token")
  }
 
  return (
    <Router>
    <div className="App">
      <NavBar 
        userState={userState}
        handleLogout={handleLogout}
      />
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
        <Route exact path="/Walkthrough/:_id">
          <Walkthrough userState={userState}/>
        </Route>
        <Route exact path="/UpdateWalkthrough/:_id" >
          <UpdateWalkPage 
            userState={userState}
          />
        </Route>
        <Route exact path="/Dashboard/" render={() => (
          <Dashboard
            userState={userState}
          />
        )} />
        <Route exact path="/Search" component={SearchPage} />
        <Route exact path="/AddWalkthrough/:gameID" render={() => (
          <AddWalkPage
            userState={userState}
          />
        )} />
        <Route path="/" component={HomePage} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;