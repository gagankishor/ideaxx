import { Link } from "react-router-dom";
import {
  BiAppIndicator,
  BiLightbulbFill,
  BiPersonVcardFill,
  BiCompass,
  BiConeStriped,
  BiPeopleFill,
  BiTools,
  BiCashCoin,
  BiPersonCheckFill,
  BiLayoutTextWindowReverse,
  BiPersonLinesFill,
  BiCartFill,
  BiFolderFill,
  BiGearFill,
  BiEscape,
} from "react-icons/bi";

export const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="part-one">
        <ul>
          <li>
            <Link to="/">
              <BiAppIndicator />
              Overview
            </Link>
          </li>
          <li>
            <Link to="/idea/new">
              <BiLightbulbFill />
              Idea
            </Link>
          </li>
          <li>
            <Link to="/business-identity/brand">
              <BiPersonVcardFill />
              Business identity
            </Link>
          </li>
          <li>
            <Link to="#">
              <BiCompass />
              Marketing
            </Link>
          </li>
          <li>
            <Link to="#">
              <BiConeStriped />
              Legal
            </Link>
          </li>
          <li>
            <Link to="#">
              <BiPeopleFill />
              Team
            </Link>
          </li>
          <li>
            <Link to="#">
              <BiTools />
              Business Tools
            </Link>
          </li>
          <li>
            <Link to="#">
              <BiCashCoin />
              Cash Flow
            </Link>
          </li>
          <li>
            <Link to="#">
              <BiPersonCheckFill />
              Consulting
            </Link>
          </li>
          <li>
            <Link to="#">
              <BiLayoutTextWindowReverse />
              Entrepreneur
            </Link>
          </li>
          <li>
            <Link to="#">
              <BiAppIndicator />
              Strategies
            </Link>
          </li>
          <li>
            <Link to="#">
              <BiPersonLinesFill />
              Community
            </Link>
          </li>
          <li>
            <Link to="#">
              <BiCartFill />
              Buy-Sell
            </Link>
          </li>
          <li>
            <Link to="#">
              <BiFolderFill />
              My Files
            </Link>
          </li>
          <li>
            <Link to="#">
              <BiGearFill />
              Settings
            </Link>
          </li>
          <li>
            <Link to="/logout">
              <BiEscape />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
