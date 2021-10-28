import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";
import CoolStuff from "./pages/CoolStuff";
import Home from "./pages/Home";

function App() {
 return (
  <Router>
   <div className="App">
    <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/about" component={About} />
     <Route exact path="/Projects" component={Projects} />
     <Route exact path="/cool-stuff" component={CoolStuff} />
    </Switch>
   </div>
  </Router>
 );
}

export default App;
