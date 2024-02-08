import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <span className="copyright">
        © 2030 <Link to="/">Redux Cart</Link>. All Rights Reserved.
      </span>
      <ul className="links">
        <li>
          <a
            href="https://www.linkedin.com/in/stevemercer9913/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/smerk3599"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
};
