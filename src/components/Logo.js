import logo from "../images/logo.svg";

const Logo = ({ itemClass }) => {
  return (
    <div className="logo-container">
      <img src={logo} alt="logo" className={itemClass} />
    </div>
  );
};

export default Logo;
