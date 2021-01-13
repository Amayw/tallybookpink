import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';

const NavWrapper=styled.nav`
  >ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 16px;
  }
  box-shadow:0 0 3px rgba(0,0,0,0.25);
`
export default function Nav(){
  return (
    <NavWrapper>
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
    </NavWrapper>
  )
}