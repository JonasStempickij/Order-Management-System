import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';
import { Logo } from '../components/';

export const Landing = () => {
  return (
    <Wrapper>
      <Logo />
      <div className='container page'>
        <div className='info'>
          <h1>Order Management System</h1>
          <Link to='/register' className='btn btn-hero'>
            Login/Register{' '}
          </Link>
        </div>
        <img src={main} alt='job hunt' className='main-img img' />
      </div>
    </Wrapper>
  );
};
