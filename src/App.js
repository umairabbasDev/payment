import "./App.css";
import { BrowserRouter as Router, Route,  Switch } from "react-router-dom";
import MbileAccount from "./components/MbileAccount";
import Card from "./components/Card";
import Voucher from "./components/Voucher";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route path="/mAccount">
            <MbileAccount />
          </Route>
          <Route path="/voucher">
            <Voucher />
          </Route>
          <Route path="/">
            <Card />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
