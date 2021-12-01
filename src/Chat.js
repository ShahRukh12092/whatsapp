import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, InsertEmoticon } from "@material-ui/icons";
import MoreVert from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import MicIcon from "@material-ui/icons/Mic";
import React from "react";
import "./chat.css";

let date = new Date().toLocaleString();
console.log(date);
const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at....</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Shahrukh</span>
          This is a messge
          <span className="chat__timestamp">{date}</span>
        </p>
        <p className="chat__message chat__reciever">
          <span className="chat__name">Noman</span>
          This is a messge
          <span className="chat__timestamp">{date}</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form action="">
          <input placeholder="Type a message" type="text" />
          <button type="submit">send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
