import styled from 'styled-components';
import logo from '../assets/images/logo.png';

const Logo = () => {
  return <Wrapper src={logo} alt='jobshope logo' className='logo' />;
};

const Wrapper = styled.img`
  width: 200px;
`;

export default Logo;
