import logo from './logo.svg';
import './App.css';

import Employeelist from "./Components/Employeelist";
import Editemployee from "./Components/Editemployee";
import Addemployee from "./Components/Addemployee";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="container body-content">
          <Router>
            <Switch>
              <Route path="/" exact component={Employeelist} />
              <Route path="/editemployee/:id" exact component={Editemployee} />
              <Route path="/addemployee" exact component={Addemployee} />
            </Switch>
          </Router>
    </div>
  );
}

export default App;
