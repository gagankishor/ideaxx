import { FaArrowAltCircleRight, FaBusinessTime, FaHeadphones, FaPhone, FaRobot } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-block">
          <h1>No matter what you do, you can always make time for your idea <span>All success stories started with an idea</span></h1>
          <div className="btns-container">
            <Link className="btn" to="/mainWizard">
              Get Started For Free <FaArrowAltCircleRight />
            </Link>
            <span>No credit card nedded</span>
          </div>
        </div>
      </div>
    </div>
  );
};
