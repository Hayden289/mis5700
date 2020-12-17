import './App.css';
import { Listings } from './pages/listings';
import { Listing } from './pages/listing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from "./components/nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <nav>
          <ul>
            <li>
              <Link to="/listings">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/listings">
            <Listings />
          </Route>
          <Route path="/about">
            <Listing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
