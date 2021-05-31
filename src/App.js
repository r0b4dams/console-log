import React, {useEffect,useState, useReducer } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import API from "./components/utils/API";
import HomeContainer from "./components/HomeContainer";
import OneWalkContainer from "./components/OneWalkContainer";
import DashboardContainer from "./components/DashboardContainer";
import GameWalks from "./components/GameWalks";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import HomePage from "./components/_pages/HomePage"
import GamePage from "./components/_pages/GamePage"
import Walkthrough from "./components/_pages/OneWalkPage"
import Login from "./components/_pages/Login"
import Dashboard from "./components/_pages/HomePage"  //will need to update once Dashboard is created
import SearchPage from "./components/_pages/SearchPage"
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
  const [formState,setFormState] = useState({
    email:"",
    password:""
  })
  const [signupFormState,setSignupFormState] = useState({
    email:"",
    password:"",
    name:""
  })

  const [userState,setUserState] = useState({
    token:"",
    user:{
    }
  })

  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token){
      API.getProfile(token).then(res=>{
        console.log(res.data);
        setUserState({
          token:token,
          user:{
            email:res.data.email,
            id:res.data.id,
            name:res.data.name
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

  const handleFormSubmit = e =>{
    e.preventDefault();
    API.login(formState).then(res=>{
      console.log(res.data);
      localStorage.setItem("token",res.data.token)
      setUserState({
        ...userState,
        token:res.data.token,
        user:{
          email:res.data.user.email,
          name:res.data.user.name,
          id:res.data.user.id
        }
      })
    }).catch(err=>{
      console.log("error occured")
      console.log(err);
      localStorage.removeItem("token");
      setUserState({
        token:"",
        user:{}
      })
    })
    setFormState({
      email:"",
      password:""
    })
  }

  const handleSignupFormSubmit = e=>{
    e.preventDefault();
    console.log(signupFormState);
    API.signup(signupFormState).then(res=>{
      localStorage.setItem("token",res.data.token)
      setUserState({
        ...userState,
        token:res.data.token,
        user:{
          email:res.data.user.email,
          name:res.data.user.name,
          id:res.data.user.id
        }
      })
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
      name:"",
      email:"",
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
        <Route exact path="/Login" component={Login} />
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