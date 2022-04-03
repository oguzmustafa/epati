import React from "react";
import { Router, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import TopBar from "./TopBar";
import { createBrowserHistory as createHistory } from "history";
import "./App.css";
import ChatRoomPage from "./ChatRoomPage";
const history = createHistory();

function Example() {
    console.log('App içi 11');
    return (
        <div className="Example">
            <h>merhaba</h>
            <Router history={history}>
                <TopBar />
                <Route path="/" exact component={HomePage} />
                <Route path="/chatroom" exact component={ChatRoomPage} />
            </Router>
        </div>
    );
}
export default Example;
