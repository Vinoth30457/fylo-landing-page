const NavLink = ({ id, text, href, itemClass }) => {
  return (
    <li key={id} className={itemClass}>
      <a href={href}>{text}</a>
    </li>
  );
};

export default NavLink;
