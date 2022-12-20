import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";
import About from "./Pages/About";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Header /> */}
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/about" component={About} exact />
        <Route path="/chats" component={ChatPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
