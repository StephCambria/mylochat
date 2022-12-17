import React from "react";
import { ScrollElement } from "react-scroll";
import { ChatState } from "../Context/chatProvider";
import { currentUser } from "../config/UserFunctions";

const ScrollableChat = ({ messages }) => {
  const { user } = ChatState();
  
  return (
    <ScrollElement
      {...[...messages].map((m, i) => (
          <div style={{ display: "flex" }} key={m._id}>
            {(currentUser(
              messages,
              m,
              i,
              user._id )
            )}
              {m.content}
          </div>
        ))}
    />
  );
};

export default ScrollableChat;
