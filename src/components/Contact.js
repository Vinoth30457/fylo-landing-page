import phone from "../images/icon-phone.svg";
import email from "../images/icon-email.svg";

const Contact = () => {
  return (
    <div className="contact-container">
      <p className="phone">
        <img src={phone} alt="phone" className="phone-img" />
        Phone: +1-543-123-4567
      </p>
      <p className="gmail">
        <img src={email} alt="mail" className="mail-img" />
        example@fylo.com
      </p>
    </div>
  );
};

export default Contact;
