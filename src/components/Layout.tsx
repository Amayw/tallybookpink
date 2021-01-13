import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Money from '../views/Money';
import Tags from '../views/Tags';
import Statistics from '../views/Statistics';
import NoMatch from '../views/NoMatch';
import Nav from './Nav';
import React from 'react';
import styled from 'styled-components';

const LayoutWrapper=styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  max-width: 520px;
  margin: 0 auto;
`
const Main=styled.main`
  flex-grow: 1;
  overflow: auto;
`
export default function Layout(){
  return (
    <LayoutWrapper>
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

      <Nav></Nav>
    </Router>
    </LayoutWrapper>
  )
}