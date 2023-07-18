import Logo from "./Logo";
import Contact from "./Contact";
import { footer_link_1, footer_link_2, social_link } from "../constants";
import NavLink from "./NavLink";
import Social_link from "./Social_link";

const Footer = () => {
  return (
    <footer>
      <div className="divide">
        <Logo itemClass={"footer-logo"} />
        <Contact />
      </div>
      <ul className="footer-link-container">
        {footer_link_1.map((item) => {
          return <NavLink {...item} itemClass={"footer-link"} />;
        })}
      </ul>
      <ul className="footer-link-container">
        {footer_link_2.map((item) => {
          return <NavLink {...item} itemClass={"footer-link"} />;
        })}
      </ul>
      <ul className="social-links">
        {social_link.map((item) => {
          return <Social_link {...item} />;
        })}
      </ul>
    </footer>
  );
};

export default Footer;
