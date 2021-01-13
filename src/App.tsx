import React from 'react';
import Money from 'views/Money'
import {HashRouter as Router,Switch,Route,Link,Redirect} from 'react-router-dom'
import Statistics from './views/Statistics';
import Tags from './views/Tags';
import NoMatch from './views/NoMatch';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/tags">标签</Link>
              </li>
              <li>
                <Link to="/money">记账</Link>
              </li>
              <li>
                <Link to="/statistics">统计</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/money">
              <Money />
            </Route>
            <Route exact path="/tags">
              <Tags />
            </Route>
            <Route exact path="/statistics">
              <Statistics />
            </Route>
            <Redirect exact from="/" to="/money">
              <Money />
            </Redirect>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
