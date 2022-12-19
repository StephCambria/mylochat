import React from "react";
import { ChatState } from "../Context/chatProvider";
import { Box } from "@chakra-ui/react";
import SingleChat from "./SingleChat";

const ChatWindow = ({ fetchAgain, setFetchAgain, socket }) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={5}
      bg="white"
      w={{ base: "100vh", md: "68%" }}
      h="100%"
      borderRadius="lg"
      borderWidth="1px"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} socket={socket}/>
    </Box>
  );
};

export default ChatWindow;
