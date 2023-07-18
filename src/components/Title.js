const Title = ({ text, itemClass, key }) => {
  return (
    <h1 className={itemClass} key={key}>
      {text}
    </h1>
  );
};

export default Title;
