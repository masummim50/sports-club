import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './Components/Details/Details';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path ="/home">
          <Home></Home>
        </Route>
        <Route path="/league/:idLeague">
          <Details></Details>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
