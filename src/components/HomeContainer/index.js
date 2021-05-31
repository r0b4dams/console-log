import React, { Component, useContext  } from "react";
import API from "../utils/API";
import GameGroup from "../GameGroup"
import WalkGroup from "../WalkGroup"
import NextButton from "../NextButton"
import walkthroughs from "../walkthroughs.json"
import { AppContext } from '../../App'

class HomeContainer extends Component {

  _isMounted = false;

  state = {
    currentPage: "HomePage",
    games: [],
    gamesFilter: [],
    walkthroughs: [],
    next: "",
    prev: "",
    open: false,
    search: this.props.search
  };

  componentDidMount() {
    this._isMounted = true;
    this.reloadGames(global.searchable, global.filter);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  reloadGames(query, filter) {
    API.search(query, filter)
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
  
  render() {
    return (
      <div>
        <div className="grid grid-flow-col">
          <div className="col">
            <GameGroup games={this.state.games}/>
            {this.state.games && <NextButton 
                handleNextSubmit={this.handleNextSubmit}
                next={this.state.next}
                prev={this.state.prev}
            />}
          </div>
          <div className="col">
            <WalkGroup walkthroughs={walkthroughs}/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeContainer;
