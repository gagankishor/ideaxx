import { FaBusinessTime, FaPhone, FaRobot } from 'react-icons/fa';

export default function Features() {
  return (
    <>
      <div className="cards" id="about">
        <h1 className="heading">We help you achieve your dreams</h1>
        <div className="container">
          <div className="card">
            <div className="image">
              <img src="/1.webp" alt="" />
              <h2>Test your Idea</h2>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src="/3.webp" alt="" />
              <h2>Build Your Product</h2>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src="/2.webp" alt="" />
              <h2>Grow Your Business</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="ideax-features" id="features">
        <h1 className="heading">Ideax Features</h1>
        <div className="container">
          <p>
            <FaRobot />
            <span>
              <span>AI Plans</span>
              AI Based Systems
            </span>
          </p>
          <p>
            <FaPhone />
            <span>
              <span>Business As sistance</span>
              Complete Brand Building Tools
            </span>
          </p>
          <p>
            <FaBusinessTime />
            <span>
              <span>Business Mentor</span>
              AI Based Mentors Available 24/7
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
