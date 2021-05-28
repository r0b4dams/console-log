import React, { Component } from "react";
import API from "../utils/API";
import Home from "../_pages/Home";
import Login from "../_pages/Login"
import NavBar from "../NavBar"
import OneWalkContainer from "../OneWalkContainer"
import DashboardContainer from "../OneWalkContainer"
import Footer from "../Footer"
import GameGroup from "../GameGroup"
import WalkGroup from "../WalkGroup"
import NextButton from "../NextButton"
import walkthroughs from "../walkthroughs.json"

class HomeContainer extends Component {
  state = {
    currentPage: "Home",
    games: [],
    gamesFilter: [],
    walkthroughs: [],
    next: "",
    open: false
  };

  componentDidMount() {
    this.reloadGames("https://api.rawg.io/api/games?key=2e1926e930f2426e857f633a7a3c2286");
  }

  reloadGames(query) {
    API.search(query)
    .then((res) => {
      this.setState({
        games: res.data.results,
        gamesFilter: res.data.results,
        next: res.data.next
      });
    })
    .catch((err) => console.log(err));
  }

  handleNextSubmit = (event) => {
    this.reloadGames(this.state.next);
    // console.log(this.state.next)
    return;
  }
  
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "Login") {
      return <Login />;
    } else if (this.state.currentPage === "Walkthrough") {
      return <OneWalkContainer />;
    } else if (this.state.currentPage === "Dashboard") {
      return <DashboardContainer />;
    } 
  };

  render() {
    return (
      <div>
        <NavBar 
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
        <div className="grid grid-flow-col">
          <div className="col">
            <GameGroup games={this.state.games}/>
            <NextButton 
                handleNextSubmit={this.handleNextSubmit}
            />
          </div>
          <div className="col">
            <WalkGroup walkthroughs={walkthroughs}/>
          </div>
        </div>
        <p className="my-8"></p>
        <Footer />
      </div>
    );
  }
}

export default HomeContainer;
