import ReactDOM from 'react-dom';
import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./App.css";
import Chat from "./Chat";
import reportWebVitals from "./reportWebVitals";

//const socket = io.connect("http://localhost:3001");

/*const socket = io("", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
});*/

const socket = io("http://localhost:7000", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
});

function Example() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    console.log('girdi');
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };


  return (
    <div className="far">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example/>, document.getElementById("example"));
}
reportWebVitals();