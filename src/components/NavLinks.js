import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import links from '../utils/links';

const NavLinks = () => {
  return (
    <Wrapper>
      {links.map((link) => {
        const { text, path, id, icon } = link;
        return (
          <NavLink className='nav-link' to={path} key={id} end>
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;

  .nav-link {
    display: flex;
    align-items: center;
    color: var(--grey-500);
    padding: 1rem 0 1rem 2.5rem;
    text-transform: capitalize;
    transition: var(--transition);
  }

  .nav-link:hover {
    background: var(--grey-50);
    padding-left: 3rem;
    color: var(--grey-900);
  }

  .nav-link:hover .icon {
    color: var(--primary-500);
  }

  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    transition: var(--transition);
  }

  .active {
    color: var(--grey-900);
  }

  .active .icon {
    color: var(--primary-500);
  }
`;

export default NavLinks;
