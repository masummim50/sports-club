
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
import Nomatch from './Components/Nomatch/Nomatch';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path ="/home">
          <Home></Home>
        </Route>
        <Route path="/league/:idLeague">
          <Details></Details>
        </Route>
        <Route path="*">
          <Nomatch></Nomatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
