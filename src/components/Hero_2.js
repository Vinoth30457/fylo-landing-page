import Title from "./Title";
import Content from "./Content";
import Twit from "./Twit";

import hero_2_img from "../images/illustration-2.svg";
import arrow from "../images/icon-arrow.svg";

const Hero_2 = () => {
  return (
    <section className="hero-2">
      <div className="img-container bg">
        <img src={hero_2_img} alt="illustration-1" className="illustration" />
      </div>
      <div className="content-container">
        <Title
          text={" Stay productive, wherever you are"}
          itemClass={"heading head-2"}
          key={1}
        />
        <Content
          text={
            "Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs."
          }
          itemClass={"content align"}
        />
        <Content
          text={
            "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!"
          }
          itemClass={"content align"}
        />
        <a href="#" className="hero-2-link">
          See how Fylo works <img src={arrow} alt="arrow" className="arrow" />
        </a>
        <Twit />
      </div>
    </section>
  );
};

export default Hero_2;
