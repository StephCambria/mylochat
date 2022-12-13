import "./App.css";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import ChatPage from "./pages/ChatPage";
import About from "./pages/About";
import Header from "./components/Header";

function App() {
  return (
    <div className="">
      <Nav />
      {/* <Header /> */}
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/about" components={About} exact />
        <Route path="/chats" components={ChatPage} />
      </Switch>
    </div>
  );
}

export default App;
