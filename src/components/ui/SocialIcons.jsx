import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./SocialIcons.css"; // import the CSS file

function SocialIcons() {
  return (
    <div className="socials">
      <a
        href="https://facebook.com/jbuitofficial/"
        target="_blank"
        rel="noopener noreferrer"
        className="icon facebook"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.instagram.com/official_jbuit/"
        target="_blank"
        rel="noopener noreferrer"
        className="icon instagram"
      >
        <FaInstagram />
      </a>
    </div>
  );
}

export default SocialIcons;
