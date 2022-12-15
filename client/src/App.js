import "./App.css";
import { Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
<ApolloProvider client={client}>
  <div className="App">
    <Route path="/" component={Homepage} exact/>
    <Route path="/chats" component={ChatPage} />
  </div>
</ApolloProvider>
  );
}

export default App;
