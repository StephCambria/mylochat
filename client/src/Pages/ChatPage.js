import { Box, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
//import { ChatState } from "../Context/chatProvider";
import Nav from "../components/Nav";
import Header from "../components/Header";
import MyChats from "../components/MyChats";
import ChatWindow from "../components/ChatWindow";
import Footer from "../components/Footer";

const ChatPage = () => {
  //const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      <Nav />
      <Header />
      <Box
        d="flex"
        justifyContent="space-between"
        width="100%"
        height="91.5vh"
        padding="10px"
      >
        <Stack spacing="1.5%" direction="row" ml="10px" mr="10px">
          {<MyChats fetchAgain={fetchAgain} />}
          {<ChatWindow fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />}
        </Stack>
      </Box>
      <Footer />
    </div>
  );
};

export default ChatPage;
