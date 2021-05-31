import React, { Component } from "react";
import NavBar from "../NavBar"
import Footer from "../Footer"
import Card from "../Card"
import Games from "../_pages/Games"
import WalkGroup from "../WalkGroup"
import walkthroughs from "../walkthroughs.json"

import games from "../old/games.json"

class GameWalks extends Component {
    state = {
        games,
        walkthroughs: []
    };

    render() {
        return (
            <div>
                <NavBar />
                <Games name={games[0].name} />

                <div className="grid grid-flow-col mt-5">
                    <div className="col">
                        <Card heading="Game Info">
                            <h1>Released: {games[0].released}</h1>
                            <h1>Playtime: {games[0].playtime} hrs.</h1>
                        </Card>
                    </div>
                    <div className="col">
                        <Card heading="Make your own Walkthrough!">
                            <button className="m-5 p-3 bg-blue-400 text-xl border-2 border-black"><a href="#">Click here!</a></button>
                        </Card>
                    </div>
                </div>
                <div className="grid grid-flow-col mt-5">
                    <WalkGroup walkthroughs={walkthroughs} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default GameWalks;