import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Switch,Link} from "react-router-dom";
import Forms from './Components/Forms';
import Navibar from './Components/Navibar';
import Login from './Components/Login';
import Button from 'react-bootstrap/Button';

class App extends Component {

  render() {

    return(
      <Router>
      <div className="App">
        <Navibar /><br></br>
        <Link className="link" to="/search"><Button variant="info">Go to Client search</Button></Link>{' '}
        <Link to="/login"><Button variant="info">Go to Login page</Button></Link>
        <div className="row">
          <Switch>
            <Route path="/login"><Login /></Route>
            <Route  path="/search"><Forms /></Route>
          </Switch>
        </div>
      </div>
    </Router>
    );

    
  }
}

export default App;
