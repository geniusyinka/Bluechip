import React from 'react';
import styled from 'styled-components';
import Links from '../Links';
import { faChartBar, faComment, faHighlighter, faHome } from '@fortawesome/free-solid-svg-icons'


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 945px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 1;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Links icon={faHome} link="google.com" linkName="Home"/>
      </li>
      <li>
          <Links icon={faComment} link="google.com" linkName="Message"/>
      </li>
        <h2 className="mt-3 text-left font-bold text-white ">SHARE</h2>
      <li>
        <Links icon={faChartBar} link="google.com" linkName="Ranking"/>
      </li>
      <li>
        <Links icon={faChartBar} link="google.com" linkName="Challange"/>
      </li>
      <li>
        <Links icon={faChartBar} link="google.com" linkName="Party"/>
      </li>
      <li>
        <Links icon={faChartBar} link="google.com" linkName="Connect"/>
      </li>
      <li>
        <Links icon={faChartBar} link="google.com" linkName="Parade"/>
      </li>
    </Ul>
  )
}

export default RightNav
