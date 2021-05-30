import React, {useEffect,useState} from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import API from "./components/utils/API";
import NavBar from "./components/NavBar"
import HomePage from "./components/_pages/HomePage"
import GamePage from "./components/_pages/GamePage"
import Login from "./components/_pages/Login"
import Dashboard from "./components/_pages/HomePage"  //will need to update once Dashboard is created

function App() {

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

  return (
    <Router>
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/GamePage/:gameID" component={GamePage} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
    </Router>
  
  );
}

export default App;