import Title from "./Title";
import Content from "./Content";

const Access = () => {
  return (
    <div className="access-container">
      <div className="div">
        <Title text={"Get early access today"} itemClass={"access-title"} />
        <Content
          text={
            "It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you."
          }
          itemClass={"access-content"}
        />
      </div>
      <div className="access-email-container">
        <input
          type="email"
          name="email"
          id=""
          placeholder="email@example.com"
        />
        <button type="button" className="btn btn-get">
          Get Started For Free
        </button>
      </div>
    </div>
  );
};

export default Access;
