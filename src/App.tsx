import React from 'react';
import Money from 'views/Money'
import {HashRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Statistics from './views/Statistics';
import Tags from './views/Tags';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/money">money</Link>
              </li>
              <li>
                <Link to="/tags">tags</Link>
              </li>
              <li>
                <Link to="/statistics">statictis</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/money">
              <Money />
            </Route>
            <Route path="/tags">
              <Tags />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Route path="/">
              <Money />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
