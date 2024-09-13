import { FaBusinessTime, FaPhone, FaRobot } from 'react-icons/fa';

export default function Validation() {
  return (
    <>
      <div className="cards-business" id="about">
        <h2 className="heading">Business Idea Validation for</h2>
        <div className="container">
          <div className="card">
            <div className="image">
              <img src="/business1.webp" alt="" />
            </div>
            <h3>Startups / Entrepreneurs</h3>
          </div>
          <div className="card">
            <div className="image">
              <img src="/business3.webp" alt="" />
            </div>
            <h3>Investors</h3>
          </div>
          <div className="card">
            <div className="image">
              <img src="/business2.webp" alt="" />
            </div>
            <h3>Businesses</h3>
          </div>
        </div>
      </div>
    </>
  );
}
