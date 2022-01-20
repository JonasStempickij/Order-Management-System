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
          <h1>
            job <span>trackking</span> app
          </h1>
          <p>
            I'm baby man bun prism jianbing hell of truffaut. Adipisicing austin
            franzen sed do etsy aesthetic, art party brooklyn in dreamcatcher
            tumeric aute.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register{' '}
          </Link>
        </div>
        <img src={main} alt='job hunt' className='main-img img' />
      </div>
    </Wrapper>
  );
};
