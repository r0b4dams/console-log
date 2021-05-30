import React, { Component } from "react";
import API from "../utils/API";
import Footer from "../Footer"
import GameGroup from "../GameGroup"
import WalkGroup from "../WalkGroup"
import NextButton from "../NextButton"
import walkthroughs from "../walkthroughs.json"

class HomeContainer extends Component {
  _isMounted = false;

  state = {
    currentPage: "HomePage",
    games: [],
    gamesFilter: [],
    walkthroughs: [],
    next: "",
    prev: "",
    open: false
  };

  componentDidMount() {
    this._isMounted = true;
    this.reloadGames("");
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  reloadGames(query) {
    API.search(query)
    .then((res) => {
      this.setState({
        games: res.data.results,
        gamesFilter: res.data.results,
        next: res.data.next,
        prev: res.data.previous
      });
    })
    .catch((err) => console.log(err));
  }

  handleNextSubmit = (event) => {
    event.preventDefault();
    this.reloadGames(this.state.next);
    alert(this.state.next)
    return;
  }
  
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div>
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
