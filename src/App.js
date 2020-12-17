import './App.css';
import { Listings } from './pages/listings';
import { Listing } from './pages/listing';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from "./components/nav";

function App() {
  return (
    <Router basename="/">
      <div>
        <Nav />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/listings">
            <Listings />
          </Route>
          <Route path="/listing">
            <Listing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
