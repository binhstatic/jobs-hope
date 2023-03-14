import React, { useState } from 'react';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/Navbar';
import { clearStore, toggleSidebar } from '../features/user/userSlice';

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className='nav-center'>
        <button
          className='toggle-btn'
          onClick={() => dispatch(toggleSidebar())}
        >
          <FaAlignLeft />
        </button>
        <h3 className='logo-text'>Dashboard</h3>
        <div className='btn-container'>
          <button className='btn' onClick={() => setShowLogout(!showLogout)}>
            <FaUserCircle />
            {user?.name} <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button
              className='dropdown-btn'
              onClick={() => dispatch(clearStore('Logging out ...'))}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
