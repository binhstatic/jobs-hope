import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import NavLinks from './NavLinks';

const Sidebar = () => {
  return (
    <Wrapper>
      <header>
        <Logo />
      </header>
      <NavLinks />
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  display: none;

  @media (min-width: 992px) {
    display: block;
    background: var(--white);
    min-height: 100vh;

    header {
      padding: 0.5rem 2rem;
      height: var(--nav-height);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary-500);
    }
  }
`;

export default Sidebar;
