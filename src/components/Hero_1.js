import Title from "./Title";
import Content from "./Content";
import Email from "./Email";

import hero_1_img from "../images/illustration-1.svg";

const Hero_1 = () => {
  return (
    <section className="hero-1">
      <div className="img-container">
        <img src={hero_1_img} alt="illustration-1" className="illustration" />
      </div>
      <div className="content-container">
        <Title
          text={" All your files in one secure location, accessible anywhere."}
          itemClass={"heading"}
          key={1}
        />
        <Content
          text={
            "Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers."
          }
          itemClass={"content"}
        />
        <Email />
      </div>
    </section>
  );
};

export default Hero_1;
