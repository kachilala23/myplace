import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './booking/Home';
import Register from './auth/Register'
import Login from './auth/Login'
import TopNav from "./components/TopNav";



function App() {
  return (
    <Router>
      <TopNav />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
