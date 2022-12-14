import "./App.css";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import ChatPage from "./pages/ChatPage";
import About from "./pages/About";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Nav />
      {/* <Header /> */}
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/about" component={About} exact />
        <Route path="/chats" component={ChatPage} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
