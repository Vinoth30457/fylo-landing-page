import Logo from "./Logo";
import NavLink from "./NavLink";

import { navLink } from "../constants";

const Header = () => {
  return (
    <header>
      <Logo itemClass={"logo"} />
      <ul className="nav-links">
        {navLink.map((item) => {
          return <NavLink {...item} itemClass="link" />;
        })}
      </ul>
    </header>
  );
};

export default Header;
