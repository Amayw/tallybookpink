import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper=styled.nav`
  >ul{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    >li{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 6px;
      >.icon{
        width: 26px;
        height: 26px;
      }
    }
  }
  box-shadow:0 0 3px rgba(0,0,0,0.25);
`
export default function Nav(){
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name='rtag'/>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <Icon name='rmoney'/>
          <Link to="/money">记账</Link>
        </li>
        <li>
          <Icon name='chart' />
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}