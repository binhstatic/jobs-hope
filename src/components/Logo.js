import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/jobshope.svg';

const Logo = () => {
  return (
    <Link to='/'>
      <Wrapper src={logo} alt='jobshope logo' className='logo' />
    </Link>
  );
};

const Wrapper = styled.img`
  width: 200px;
`;

export default Logo;
