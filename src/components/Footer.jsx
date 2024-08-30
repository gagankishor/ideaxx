import { userToken } from "../config/Auth";

export const Footer = () => {
  return (
    <footer>
      <div>
        <p>All rights reserved &copy; 2024 - ideax</p>
        {/* <p>{userToken()} - v0.1-beta</p> */}
      </div>
    </footer>
  );
};
