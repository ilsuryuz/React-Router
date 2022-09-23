import React from "react";
import { Route } from "react-router-dom"
import stocks from "./stock-data";
import Nav from "./Nav";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Stock from "./Stock";
import About from "./About";

function Main(props) {
    return (
        <div className="main">
            <Nav />
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/stocks">
                <Dashboard stockData={stocks} {...props} />
            </Route>
            <Route path="/stocks/:symbol"
            render={(routerProps) => <Stock stockData={stocks} {...routerProps}/>}/>
            <Route path="/about">
                <About />
            </Route>
        </div>
    )
}

export default Main;