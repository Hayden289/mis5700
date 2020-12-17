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
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/mis5700/listings">
            <Listings />
          </Route>
          <Route path="/mis5700/listing">
            <Listing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
