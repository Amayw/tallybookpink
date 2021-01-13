import React from 'react';
import Money from 'views/Money'
import {HashRouter as Router,Switch,Route,Link,Redirect} from 'react-router-dom'
import Statistics from './views/Statistics';
import Tags from './views/Tags';
import NoMatch from './views/NoMatch';
import styled from 'styled-components';
const AppWrapper=styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;

`
const Main=styled.main`
  flex-grow: 1;
  overflow: auto;
`
const NavUl=styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 16px;
`
function App() {
  return (
    <AppWrapper className="App">
      <Router>
        <Main>
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
        </Main>

        <div>
          <NavUl>
              <li>
                <Link to="/tags">标签</Link>
              </li>
              <li>
                <Link to="/money">记账</Link>
              </li>
              <li>
                <Link to="/statistics">统计</Link>
              </li>
          </NavUl>
        </div>
      </Router>
    </AppWrapper>
  );
}

export default App;
