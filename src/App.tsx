import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import DisplayStock from './components/DisplayStock';
import AddStock from './components/AddStock';
import RemoveStock from './components/RemoveStock'

export default function App() {
    return (
        <Router>
            <h1>Stock System</h1>
            <div className="main-container">
                  <DisplayStock />
                  <div className="right-container">
                      <nav>
                          <Link to="/add">Add Stock</Link>
                          <Link to="/remove">Remove Stock</Link>
                      </nav>
                      
                      <Switch>
                          <Route path="/add">
                              <AddStock />
                          </Route>
                          <Route path="/remove">
                              <RemoveStock />
                          </Route>
                      </Switch>
                  </div>
            </div>
        </Router>
    );
}
