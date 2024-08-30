import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function TestCard({ text }) {
  return (
    <div className="cards cards-wide">
      <div className="container">
        <div className="card card-info">
          <div className="right">
            <h2>{text}</h2>
          </div>
          <div className="left">
            <Link className="btn" to="/mainWizard">
              Test Your Idea
              <FaArrowRight />
            </Link>
            <p>Free AI Test Based On Our Own Algorithm</p>
          </div>
        </div>
      </div>
    </div>
  );
}
