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
      >a{
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
  }
  box-shadow:0 0 3px rgba(0,0,0,0.25);
`
export default function Nav(){
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/tags"><Icon name='rtag'/>标签</Link>
        </li>
        <li>
          <Link to="/money"><Icon name='rmoney'/>记账</Link>
        </li>
        <li>
          <Link to="/statistics"><Icon name='chart' />统计</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}