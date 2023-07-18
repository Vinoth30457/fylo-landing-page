import Title from "./Title";
import Content from "./Content";

import upArrow from "../images/icon-quotes.svg";
import profile from "../images/avatar-testimonial.jpg";

const Twit = () => {
  return (
    <div className="twit-container">
      <div className="up-arrow-img">
        <img src={upArrow} alt="qoutes" className="up-arrow" />
      </div>
      <Content
        text={
          " Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        }
        itemClass={"twit-content"}
      />
      <div className="profile-container">
        <div className="profile-img-container">
          <img src={profile} alt="profile image" className="profile" />
        </div>
        <div className="position-container">
          <Title text={"Kyle Burton"} itemClass={"name"} />
          <Content text={"Founder & CEO, Huddle"} itemClass={"position"} />
        </div>
      </div>
    </div>
  );
};

export default Twit;
