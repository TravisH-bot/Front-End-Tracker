import { Link } from "react-router-dom";
import "./Footer.styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer-list">
        <Link>GitHub</Link>
        <Link>LinkedIn</Link>
        <Link>Spotify</Link>
      </ul>
    </div>
  );
};

export default Footer;
