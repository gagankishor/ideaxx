import { FaArrowAltCircleRight, FaBusinessTime, FaHeadphones, FaPhone, FaRobot } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Hero = () => {
return (
  <div className="hero">
    <img src="/heros.jpg" alt="Background" />
    <div className="container">
      <div className="hero-block">
        <h1 style={{backgroundColor:'#111111'}}> Startup/ Business Idea Checker 
        <span style={{margin:'20px 0px 30px 0px' ,fontSize:'30px'}}> <p style={{fontSize:'20px'}}>No Matter What you do, there's always time to chase your dreams. 
        Every success story begins with an idea </p></span>
        </h1>
        <div className="btns-container">
          <Link className="btn" to="/mainWizard">
            Get Started For Free <FaArrowAltCircleRight />
          </Link>
          <span>No Credit Card Needed.</span>
        </div>
      </div>
    </div>
  </div>
);
};
